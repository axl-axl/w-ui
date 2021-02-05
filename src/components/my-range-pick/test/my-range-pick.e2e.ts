import { newE2EPage } from '@stencil/core/testing';

describe('my-range-pick', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-range-pick></my-range-pick>');

    const element = await page.find('my-range-pick');
    expect(element).toHaveClass('hydrated');
  });
});
