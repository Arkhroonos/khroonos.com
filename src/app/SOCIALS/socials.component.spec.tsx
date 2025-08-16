import { render } from '@testing-library/react';

import SocialsComponent from './socials.component';

describe('SocialsComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SocialsComponent />);
    expect(baseElement).toBeTruthy();
  });
});
