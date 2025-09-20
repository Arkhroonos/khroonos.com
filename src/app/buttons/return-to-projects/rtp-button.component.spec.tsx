import { render } from '@testing-library/react';

import RtpButtonComponent from './rtp-button.component';

describe('RtpButtonComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RtpButtonComponent />);
    expect(baseElement).toBeTruthy();
  });
});
