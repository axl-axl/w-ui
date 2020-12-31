import { Component, Prop, Listen, Host, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: './my-button.less',
  scoped: true,
  shadow: false,
})
export class MyButton {
  @Prop() text: string;
  @Prop() type: 'default' | 'primary' | 'link' | 'text' | 'dashed';
  @Prop() loading: boolean;
  @Prop() disabled: boolean;
  @Prop() onClick: Function = () => {};
  @Prop() block: boolean;
  @Prop() linkUrl: string;
  @Prop() target: string = '_self';

  @Listen('click')
  handleListen() {
    if (this.loading) return;
    if (this.linkUrl) {
      window.open(this.linkUrl, this.target);
      return;
    }
    return this.onClick()
  }
  
  render() {
    return (
      <Host>
        <button class={`${this.type || 'default'} ${this.disabled && 'disabled'} ${this.block && 'block'} ${this.loading && 'loading'}`}>
          { this.loading && <my-icon name='icon-reload'></my-icon> }
          <slot>{this.text}</slot>
        </button>
      </Host>
    );
  }

}
