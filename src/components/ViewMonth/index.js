import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import cx from 'classnames'
import { pathToMoment } from '../../lib/dates'
import actions from '../../redux/app/actions'
import Loader from '../Loader'
import styles from './styles.scss'

const monthFromState = (monthMoment, props) =>
  props.months[`${monthMoment.year()}.${monthMoment.month()}`]

class ViewMonth extends Component {
  constructor(props) {
    super(props)
    this.currentMoment = pathToMoment(this.props.location.pathname)
    if (!monthFromState(this.currentMoment, props)) {
      this.props.fetchEvents({ range: 'm', date: this.currentMoment.valueOf() })
    }
  }
  componentWillReceiveProps(nextProps) {
    this.nextMoment = pathToMoment(nextProps.location.pathname)
    if (this.currentMoment.isSame(this.nextMoment, 'month')) {
      return
    }
    const month = monthFromState(this.nextMoment, nextProps)
    if (month && month.events) {
      this.currentMoment = this.nextMoment
      this.nextMoment = null
      return
    }
    if (month && month.isLoading) {
      return
    }
    this.props.fetchEvents({ range: 'm', date: this.nextMoment.valueOf() })
  }
  render() {
    const month = monthFromState(this.currentMoment, this.props)
    const nextMonth =
      this.nextMoment && monthFromState(this.nextMoment, this.props)
    return (
      <div className={cx(styles.viewMonth, this.props.className)}>
        {(!month || (nextMonth && nextMonth.isLoading)) && <Loader />}
        {month &&
          month.events &&
          React.Children.map(this.props.children, child =>
            React.cloneElement(child, {
              date: this.currentMoment.valueOf(),
              events: month.events,
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
