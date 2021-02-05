import { newE2EPage } from '@stencil/core/testing';

describe('my-check-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-check-box></my-check-box>');

    const element = await page.find('my-check-box');
    expect(element).toHaveClass('hydrated');
  });
});
