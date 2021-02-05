import { h } from "@stencil/core"
import { weeks, months } from '../utils/utils'

export const getCalendarItem = function (date) {
  const arrs = new Array(42).fill(null)
  const currentMonth = `${new Date(date).getFullYear()}-${new Date(date).getMonth() + 1}-1`
  const w = new Date(currentMonth).getDay() || 7
  arrs[w - 1] = new Date(currentMonth)
  for (let i = 1; w - i > 0 || w + i <= 42; i++) {
    if (w - i > 0) {
      arrs[w - i - 1] = new Date(new Date(currentMonth).getTime() - (24 * 60 * 60 * 1000 * i))
    }
    if (w + 1 <= 42) {
      arrs[w + i - 1] = new Date(new Date(currentMonth).getTime() + (24 * 60 * 60 * 1000 * i))
    }
  }
  return arrs;
}

export const CalendarDay = function (props) {
  return (
    <div class='calendarBody calendarDay'>
      { weeks.map(item => <span class='item'>{item}</span>)}
      {
        props.calendars.map(item => (
          <span class={
            `item ${new Date(props.currentMonth).getMonth() !== new Date(item).getMonth() && 'otherMonth'} ${new Date(props.currentValue).getMonth() === new Date(item).getMonth() && new Date(props.currentValue).getDate() === new Date(item).getDate() && 'currentDay'}`
          } onClick={() => props.onChange(new Date(item))}>
            {new Date(item).getDate()}
          </span>
        ))
      }
    </div>
  )
}
export const CalendarRange = function (props) {
  const { value = [] } = props
  const [startDate, endDate] = value
  const currentStart = (startDate && new Date(startDate)) || new Date()
  let currentEnd = new Date(`${currentStart.getFullYear()}-${currentStart.getMonth() + 2}`)
  if (startDate && endDate) {
    currentEnd = new Date(endDate).getMonth() === new Date(startDate).getMonth() ? new Date(`${endDate.getFullYear()}-${endDate.getMonth() + 2}`) : new Date(endDate)
  }
  const currentCalendarStartArr = getCalendarItem(currentStart);
  const currentCalendarEndArr = currentStart.getMonth() === currentEnd.getMonth() ? getCalendarItem(`${currentEnd.getFullYear()}-${currentEnd.getMonth() + 2}`) : getCalendarItem(currentEnd)
  return (
    <div class='calendarRange'>
      <CalendarDay calendars={currentCalendarStartArr} currentMonth={currentStart} currentValue={startDate} />
      <CalendarDay calendars={currentCalendarEndArr} currentMonth={currentEnd} currentValue={endDate} />
    </div>
  )
}
export const CalendarMonth = function (props) {
  const currentYear = new Date(props.value).getFullYear()
  return (
    <div class='calendarBody calendarMonth'>
      {
        months.map(item => (
          <span class='item' onClick={() => props.onChange(new Date(`${currentYear}-${item.value}`))}>
            {item.label}
          </span>))
      }
    </div>
  )
}
export const CalendarHead = function (props) {
  const { pickType = 'day' } = props
  const changeYearMonth = (obj) => {
    return (e) => {
      e.stopPropagation()
      props.onChange(obj)
    }
  }
  const changeMonth = (month) => {
    return (e) => {
      e.stopPropagation()
      props.onChangeMonth(month)
    }
  }
  return (
    <div class="calendarHead">
      <div class='controlBtn'>
        {pickType === 'day' && <svg class="iconPath" viewBox="0 0 1005 1005" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1408" onClick={changeYearMonth({ status: 'minus', year: 1 })}>
          <path d='M502 100 L100 502 L502 904 M904 100 L502 502 L904 904' />
        </svg>
        }
        {pickType === 'day' && <svg class="iconPath" viewBox="0 0 1005 1005" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1408" onClick={changeYearMonth({ status: 'minus', month: 1 })}>
          <path d='M804 100 L305 502.5 L804 904' />
        </svg>
        }
      </div>
      <div class='yearMonth'>
        <span class='year'>{new Date(props.currentValue).getFullYear()}年</span>
        <span class='month' onClick={changeMonth(new Date(props.currentValue))}>{new Date(props.currentValue).getMonth() + 1}月</span>
      </div>
      <div class='controlBtn'>
        {pickType === 'day' && <svg class="iconPath" viewBox="0 0 1005 1005" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1408" onClick={changeYearMonth({ status: 'add', month: 1 })}>
          <path d='M100 100 L502.5 502.5 L100 904' />
        </svg>}
        {pickType === 'day' && <svg class="iconPath" viewBox="0 0 1005 1005" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1408" onClick={changeYearMonth({ status: 'add', year: 1 })}>
          <path d='M100 100 L502 502 L100 904 M502 100 L904 502 L502 904' />
        </svg>}
      </div>
    </div>
  )
}