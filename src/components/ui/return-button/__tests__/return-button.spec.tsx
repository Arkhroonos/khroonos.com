import { render } from '@testing-library/react';

import { ReturnButton } from './return-button';

describe('ReturnButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReturnButton />);
    expect(baseElement).toBeTruthy();
  });
});
