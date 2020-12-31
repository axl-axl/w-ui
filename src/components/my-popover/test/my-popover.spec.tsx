import { newSpecPage } from '@stencil/core/testing';
import { MyPopover } from '../my-popover';

describe('my-popover', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyPopover],
      html: `<my-popover></my-popover>`,
    });
    expect(page.root).toEqualHtml(`
      <my-popover>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-popover>
    `);
  });
});
