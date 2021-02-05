import { newE2EPage } from '@stencil/core/testing';

describe('my-date-pick', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-date-pick></my-date-pick>');

    const element = await page.find('my-date-pick');
    expect(element).toHaveClass('hydrated');
  });
});
