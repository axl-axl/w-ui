import { newE2EPage } from '@stencil/core/testing';

describe('my-popover', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-popover></my-popover>');

    const element = await page.find('my-popover');
    expect(element).toHaveClass('hydrated');
  });
});
