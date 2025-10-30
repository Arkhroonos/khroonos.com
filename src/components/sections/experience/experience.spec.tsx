import { render } from '@testing-library/react';

import ExperienceComponent from './experience.component';

describe('ExperienceComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExperienceComponent />);
    expect(baseElement).toBeTruthy();
  });
});
