import { Component, Prop, State, Host, h } from '@stencil/core';

const CheckBox = function(props) {
  let value = props.value
  const onChange = () => {
    props.onChange && props.onChange(!value)
    value = !value
  }
  return (<div class='host'>
<input type='checkbox' checked={props.value} onClick={onChange} />
<span class='inputCheckbox'>
  { value && <svg class="iconPath" viewBox="0 0 1005 1005" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1408">
    <path>
    <animate attributeName='d' attributeType='XML' begin='0s' dur='0.2s' fill='freeze' values='M251 435; M251 435 L401 670;M251 435 L401 670 L804 335' />
    </path>
  </svg> }
</span>
</div>)
}
@Component({
  tag: 'my-input',
  styleUrl: './my-input.less',
  scoped: true,
})
export class MyInput {
  @Prop() defaultValue: string | number
  @Prop() value: string | number
  @Prop() placeholder: string
  @Prop() type: 'text' | 'textarea' | 'color' | 'checkbox' | 'date' | 'file'
  @Prop() hasBorder: boolean

  @State() checkedStatus: boolean = false

  clickCheckBox = () => {
    this.checkedStatus = !this.checkedStatus
  }
  render() {
    return (
      <Host font-size='24px'>
        {this.type === 'text' && <input type='text' class='inputText' />}
        {this.type === 'color' && <input type='color' class='inputColor' value='#ff00ff'></input>}
        {this.type === 'checkbox' && <CheckBox value={this.checkedStatus} />}
        {this.type === 'date' && <input type='date' class='inputText' />}
        {this.type === 'file' && <input type='file' class='inputText' />}
      </Host>
    );
  }
}
