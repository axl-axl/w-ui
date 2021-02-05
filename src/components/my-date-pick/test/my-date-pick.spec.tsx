import { newSpecPage } from '@stencil/core/testing';
import { MyDatePick } from '../my-date-pick';

describe('my-date-pick', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyDatePick],
      html: `<my-date-pick></my-date-pick>`,
    });
    expect(page.root).toEqualHtml(`
      <my-date-pick>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-date-pick>
    `);
  });
});
