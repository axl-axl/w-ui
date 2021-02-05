import { newSpecPage } from '@stencil/core/testing';
import { MyRangePick } from '../my-range-pick';

describe('my-range-pick', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyRangePick],
      html: `<my-range-pick></my-range-pick>`,
    });
    expect(page.root).toEqualHtml(`
      <my-range-pick>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-range-pick>
    `);
  });
});
