import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-modal',
  styleUrl: 'my-modal.less',
  scoped: true,
})
export class MyModal {
  @Prop() headerTitle?: string;
  @Prop() close?: boolean = true;
  @Prop() headerclass?: string;
  @Prop() footerclass?: string;
  @Prop() onCancel?: Function;
  @Prop() onOk?: (v: Object) => void;
  @Prop() visible: boolean = false;

  render() {
    return (
      <div class={`modal ${!this.visible && 'hide'}`}>
        <div class={`header ${this.headerclass}`}>
          <div class='title'>
            <slot name='header'>
              {this.headerTitle}
            </slot>
          </div>
          <my-icon name='icon-close' class='close'></my-icon>
        </div>
        <div class='body'>
          <slot />
        </div>
        <slot name='footer'>
          <div class={`footer ${this.footerclass}`}>
            <my-button type='dashed'>取消</my-button>
            <my-button type='primary' onClick={this.onOk} class='marginLeft'>确认</my-button>
          </div>
        </slot>
      </div>
    )
  }
}