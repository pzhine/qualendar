import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { pathToMoment } from '../../lib/dates'
import actions from '../../redux/app/actions'
import Loader from '../Loader'
import styles from './styles.scss'

class ViewMonth extends Component {
  monthFromState(monthMoment) {
    return this.props.months[`${monthMoment.year()}.${monthMoment.month()}`]
  }
  constructor(props) {
    super(props)
    this.currentMoment = pathToMoment(this.props.location.pathname)
    if (!this.monthFromState(this.currentMoment)) {
      this.props.fetchEvents({ range: 'm', date: this.currentMoment.valueOf() })
    }
  }
  componentWillReceiveProps(nextProps) {
    this.nextMoment = pathToMoment(nextProps.location.pathname)
    if (this.currentMoment.isSame(this.nextMoment, 'month')) {
      return
    }
    if (this.monthFromState(this.nextMoment)) {
      this.currentMoment = this.nextMoment
      this.nextMoment = null
      return
    }
    this.props.fetchEvents({ range: 'm', date: this.nextMoment.valueOf() })
  }
  render() {
    return (
      <div className={styles.viewMonth}>
        {!this.monthFromState(this.currentMoment)
          ? <Loader />
          : React.Children.map(this.props.children, child =>
              React.cloneElement(child, {
                date: this.currentMoment.valueOf(),
                events: this.monthFromState(this.currentMoment).events,
              })
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
  )(ViewMonth)
)
