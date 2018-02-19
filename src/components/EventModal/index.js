import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, matchPath } from 'react-router'
import { pathToMoment } from '../../lib/dates'
import actions from '../../redux/forms/actions'
import styles from './styles.scss'

const matchForNew = location =>
  matchPath(location.pathname, {
    path: '/:v/:year/:month/:day/new',
    exact: true,
  })
const matchForEdit = location =>
  matchPath(location.pathname, {
    path: '/:v/:year/:month/:day/:id/edit',
    exact: true,
  })
const matchEventPath = loc => matchForNew(loc) || matchForEdit(loc)

class EventModal extends Component {
  constructor(props) {
    super(props)
    this.state = { event: this.updateEventAndFields(props) }
  }
  componentWillReceiveProps(nextProps) {
    if (
      !matchEventPath(this.props.location) &&
      matchEventPath(nextProps.location)
    ) {
      this.updateEventAndFields(nextProps)
    } else if (matchEventPath(nextProps.location)) {
      this.setState({
        event: {
          ...this.state.event,
          startsAt: pathToMoment(location.pathname).valueOf(),
        },
      })
    }
  }
  updateEventAndFields(props) {
    const { months, location, setFields } = props
    const dayMoment = pathToMoment(location.pathname)
    const month = months[`${dayMoment.year()}.${dayMoment.month()}`]
    if (!month || month.isLoading) {
      return {}
    }
    const match = matchForEdit(location)
    let evt
    if (match) {
      const events = month.events[match.params.day]
      evt = events.find(e => e.id.toString() === match.params.id.toString())
    } else {
      evt = { startsAt: dayMoment.valueOf() }
    }
    setFields(evt)
    this.setState({ event: evt })
    return evt
  }
  render() {
    const { months, location } = this.props
    if (!matchForEdit(location) && !matchForNew(location)) {
      return null
    }
    const dayMoment = pathToMoment(location.pathname)
    const month = months[`${dayMoment.year()}.${dayMoment.month()}`]
    if (!month || month.isLoading) {
      return null
    }
    return (
      <div className={styles.eventModal}>
        {React.Children.map(this.props.children, child =>
          React.cloneElement(child, { event: this.state.event })
        )}
      </div>
    )
  }
}

export default withRouter(
  connect(
    state => ({
      months: state.app.months,
    }),
    actions
  )(EventModal)
)
