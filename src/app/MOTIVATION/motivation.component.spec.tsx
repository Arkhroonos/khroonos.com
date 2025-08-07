import { render } from '@testing-library/react';

import MotivationComponent from './motivation.component';

describe('MotivationComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MotivationComponent />);
    expect(baseElement).toBeTruthy();
  });
});
