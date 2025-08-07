import { render } from '@testing-library/react';

import SoftwareComponent from './software.component';

describe('SoftwareComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SoftwareComponent />);
    expect(baseElement).toBeTruthy();
  });
});
