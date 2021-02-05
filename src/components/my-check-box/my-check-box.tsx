import { Component, h, State, Prop, Host } from '@stencil/core';

@Component({
  tag: 'my-check-box',
  styleUrl: 'my-check-box.less',
  shadow: true,
})
export class CheckBox {
  @Prop() value: boolean
  @Prop() text: string
  @Prop() onChange: (v) => void
  @State() currentValue: boolean = false
  clickCheckbox = () => {
    this.onChange && this.onChange(!this.currentValue)
    this.currentValue = !this.currentValue
  }

  componentWillLoad() {
    this.currentValue = this.value || false
  }
  render() {
    return (
      <Host>
      <div class='host'>
        <input type='checkbox' checked={this.currentValue} onClick={this.clickCheckbox} />
        {this.text && <span class='text'>{this.text}</span>}
        <span class='inputCheckbox'>
          { this.currentValue && <svg class="iconPath" viewBox="0 0 1005 1005" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1408">
            <path>
            <animate attributeName='d' attributeType='XML' begin='0s' dur='0.2s' fill='freeze' values='M251 435; M251 435 L401 670;M251 435 L401 670 L804 335' />
            </path>
          </svg> }
        </span>
      </div>
      </Host>
    )
  }
}
