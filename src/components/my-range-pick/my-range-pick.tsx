import { Component, Host, h, Prop } from '@stencil/core';
// @ts-ignore
import { CalendarRange, CalendarHead } from '../../FComponents/calendar.tsx'

@Component({
  tag: 'my-range-pick',
  styleUrl: 'my-range-pick.less',
  shadow: true,
})
export class MyRangePick {
  @Prop() value: string[] = []
  @Prop() onChange: (value: Date[]) => void

  render() {
    return (
      <Host>
        <div class='calendar'>
          <my-input value={this.value[0]} />
          <my-input value={this.value[1]} />
        </div>
      </Host>
    );
  }

}
