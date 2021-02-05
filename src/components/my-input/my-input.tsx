import { Component, Prop, State, Host, h, Watch } from '@stencil/core';
@Component({
  tag: 'my-input',
  styleUrl: './my-input.less',
  scoped: true,
})
export class MyInput {
  @Prop() value: string | number
  @Prop() placeholder: string
  @Prop() type: 'text' | 'textarea' | 'color' | 'checkbox' | 'date' | 'file' // 类型
  @Prop() editAble: boolean // 是否可修改

  @State() currentValue: string | number // 当前显示值

  componentWillLoad() {
    this.currentValue = this.value
  }
  @Watch('value')
  updateValue(newValue) {
    this.currentValue = newValue
  }
  changeValue = (e) => {
    this.currentValue = e.value
    console.log(e.value)
  }
  render() {
    return (
      <Host font-size='24px'>
        {this.type === 'text' &&
          <input type='text' value={this.currentValue} onChange={(e) => this.changeValue(e.target)} class='inputText' />
        }
        {this.type === 'color' && <input type='color' class='inputColor' value={this.currentValue}></input>}
        {this.type === 'date' && <my-date-pick />}
        {this.type === 'file' && <input type='file' class='inputText' />}
      </Host>
    );
  }
}
