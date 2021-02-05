import { Component, Prop, Listen, Host, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: './my-button.less',
  scoped: true,
  shadow: false,
})

/**
 * @text 按钮文案
 * @type 类型
 * @loading loading状态
 * @disabled 是否可点击状态
 * @onClick 点击触发方法
 * @block 是否以块元素的形式存在
 * @linkUrl 点击后跳转地址，与onClick冲突，通常在link类型中设置
 * @target 跳转方式
*/
export class MyButton {
  @Prop() text: string;
  @Prop() type?: 'default' | 'primary' | 'link' | 'text' | 'dashed' = 'default';
  @Prop() loading?: boolean = false;
  @Prop() disabled?: boolean = false;
  @Prop() onClick?: Function = () => { };
  @Prop() block?: boolean = false;
  @Prop() linkUrl?: string;
  @Prop() target?: string = '_self';

  @Listen('click')
  handleListen(e) {
    if (this.loading) return;
    if (this.linkUrl) {
      window.open(this.linkUrl, this.target);
      return;
    }
    return this.onClick(e)
  }

  render() {
    return (
      <Host>
        <button class={`${this.type || 'default'} ${this.disabled && 'disabled'} ${this.block && 'block'} ${this.loading && 'loading'}`}>
          {this.loading && <my-icon name='icon-reload'></my-icon>}
          <slot>{this.text}</slot>
        </button>
      </Host>
    );
  }

}
