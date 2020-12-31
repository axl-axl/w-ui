import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-icon',
  styleUrl: 'my-icon.less',
  shadow: false,
})
export class MyIcon {
  @Prop() name: string;
  @Prop() size: string;
  @Prop() color: string;
  @Prop() class: string;
  render() {
    return (
      <Host>
        <svg class={`icon ${this.class}`} aria-hidden="true" fill={this.color} font-size={this.size}>
          <use href={`#${this.name}`}></use>
        </svg>
      </Host>
    );
  }

}
