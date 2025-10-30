import { render } from '@testing-library/react';

import StackComponent from './stack.component';

describe('StackComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StackComponent />);
    expect(baseElement).toBeTruthy();
  });
});
