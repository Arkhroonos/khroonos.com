import { render } from '@testing-library/react';

import MarqueeComponent from './marquee.component';

describe('MarqueeComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MarqueeComponent />);
    expect(baseElement).toBeTruthy();
  });
});
