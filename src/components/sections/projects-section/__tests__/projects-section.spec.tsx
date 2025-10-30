import { render } from '@testing-library/react';

import { ProjectsSection } from './projects-section';

describe('ProjectsSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProjectsSection />);
    expect(baseElement).toBeTruthy();
  });
});
