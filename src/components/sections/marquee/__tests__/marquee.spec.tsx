import { render } from '@testing-library/react';

import { Marquee } from './marquee';

describe('Marquee', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Marquee />);
    expect(baseElement).toBeTruthy();
  });
});
