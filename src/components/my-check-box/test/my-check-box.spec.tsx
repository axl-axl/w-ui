import { newSpecPage } from '@stencil/core/testing';
import { MyCheckBox } from '../my-check-box';

describe('my-check-box', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyCheckBox],
      html: `<my-check-box></my-check-box>`,
    });
    expect(page.root).toEqualHtml(`
      <my-check-box>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-check-box>
    `);
  });
});
