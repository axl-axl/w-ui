import { Component, Host, h, Prop, State, Listen } from '@stencil/core';

@Component({
  tag: 'my-popover',
  styleUrl: 'my-popover.less',
  shadow: true,
})
export class MyPopover {
  @Prop() target?: 'hover' | 'click' = 'hover';
  @Prop() position?: 't' | 'b' | 'l' | 'r' | 'tl' | 'tr' | 'bl' | 'br' = 't';
  @Prop() visible?: boolean = false;
  @State() status: boolean = false;
  /**
   * 监听组件上click事件，来修改当前状态
  */
  @Listen('click')
  clickHandler(e) {
    if (this.target !== 'click') return
    this.status = !this.status;
    e.stopPropagation()
  }
  /**
   * 监听html上的click事件，来关闭popover
   */
  @Listen('click', {
    target: 'document'
  })
  clickBodyHandler() {
    this.status = false
  }
  /**
   * 监听鼠标进入和离开事件，同时根据target值，确认是否需要修改状态
   */
  @Listen('mouseover')
  hoverHandler() {
    if (this.target !== 'hover') return
    this.status = true;
  }
  @Listen('mouseleave')
  liveHandler() {
    if (this.target !== 'hover') return
    this.status = false;
  }

  componentDidLoad() {
    this.status = this.visible;
  }
  render() {
    return (
      <Host>
        <slot></slot>
        <div class='content'>
          123
          {this.status && <slot name='content'>暂无内容</slot>}
          123
        </div>
      </Host>
    );
  }

}
