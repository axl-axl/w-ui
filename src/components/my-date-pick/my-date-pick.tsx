import { Component, Host, h, Prop, State, Listen, Watch } from '@stencil/core';
// @ts-ignore
import { CalendarHead, CalendarDay, CalendarMonth, getCalendarItem } from '../../FComponents/calendar.tsx';

@Component({
  tag: 'my-date-pick',
  styleUrl: 'my-date-pick.less',
  shadow: true,
})
export class MyDatePick {
  @Prop() value?: string // default value
  @Prop() onChange?: (v: Date[] | Date) => void
  @Prop() picker: 'day' | 'month' = 'day'
  @Prop() format: string

  @State() status: boolean = false // status of time panel
  @State() currentValue: Date // selected day
  @State() showValue: Date // time of the time panel
  @State() calendars: Date[] // array of calendars
  @State() currentType: 'day' | 'month'

  componentWillLoad() {
    const Reg = /^((\d){4}-(\d){1,2}-(\d){1,2}|(\d){4}\.(\d){1,2}\.(\d){1,2}|(\d){4}\/(\d){1,2}\/(\d){1,2})\s?(\d){1,2}:(\d){1,2}(:(\d){0,2})?$/
    if (typeof this.value === 'string' && Reg.test(this.value)) {
      this.currentValue = new Date(this.value)
      this.showValue = new Date(this.value)
    } else {
      this.currentValue = new Date()
      this.showValue = new Date()
    }
    this.calendars = getCalendarItem(this.currentValue)
    this.currentType = this.picker
  }

  changeYearMonth(obj) { // update value of showValue
    const { status = 'add', year = 0, month = 0 } = obj
    const currentMonth = new Date(this.showValue).getMonth() + 1
    const currentYear = new Date(this.showValue).getFullYear()
    let changeYear, changeMonth
    if (status === 'add') {
      changeYear = year === 0 ? currentYear : currentYear + 1
      changeMonth = month === 0 ? currentMonth : currentMonth + 1
    }
    if (status === 'minus') {
      changeYear = year === 0 ? currentYear : currentYear - 1
      changeMonth = month === 0 ? currentMonth : currentMonth - 1
    }
    if (changeMonth > 12) {
      changeYear += 1
      changeMonth = 1
    }
    if (changeMonth < 1) {
      changeYear -= 1
      changeMonth = 12
    }
    this.showValue = new Date(`${changeYear}-${changeMonth}`)
  }
  changeMonth(date: Date) {
    this.showValue = date
    if (this.picker === 'day') {
      this.currentType = 'day'
    } else {
      this.status = false
      this.currentValue = date
    }
  }
  changeDay(date: Date) { // change current day
    this.currentValue = date
  }
  changeMonthStatus(date) {
    this.status = true;
    this.currentType = 'month'
    this.showValue = date
  }
  @Watch('currentValue')
  changeCurrentValue(newValue) {
    this.showValue = new Date(newValue)
    this.onChange && this.onChange(this.showValue)
    this.status = false
  }
  @Watch('showValue')
  changeShowValue(newValue) {
    this.calendars = getCalendarItem(newValue)
  }
  @Listen('click', { // close the time panel when click document
    target: 'document',
  })
  clickBody() {
    this.status = false
  }
  render() {
    return (
      <Host onClick={e => e.stopPropagation()}>
        <my-input type='text' value={this.currentValue.toLocaleDateString()} onClick={() => this.status = true} />
        {
          this.status && (<div class='calendar'>
            <CalendarHead pickType={this.currentType} onChangeMonth={this.changeMonthStatus.bind(this)} currentValue={this.showValue} onChange={this.changeYearMonth.bind(this)} />
            { this.currentType === 'day' &&
              <CalendarDay onChange={this.changeDay.bind(this)} currentMonth={this.showValue} currentValue={this.currentValue} calendars={this.calendars} />
            }
            { this.currentType === 'day' &&
              <div class="calendarFooter">
                <span class='today' onClick={() => this.changeDay(new Date())}>今天</span>
              </div>
            }
            {
              this.currentType === 'month' &&
              <CalendarMonth value={this.showValue} onChange={this.changeMonth.bind(this)} />
            }
          </div>)
        }
      </Host>
    );
  }

}
