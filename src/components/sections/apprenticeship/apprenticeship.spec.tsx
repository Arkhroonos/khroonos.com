import { render } from '@testing-library/react';

import ApprenticeshipComponent from './apprenticeship.component';

describe('ApprenticeshipComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApprenticeshipComponent />);
    expect(baseElement).toBeTruthy();
  });
});
