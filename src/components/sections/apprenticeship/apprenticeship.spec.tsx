import { render } from '@testing-library/react';

import { Apprenticeship } from './apprenticeship';

describe('Apprenticeship', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Apprenticeship />);
    expect(baseElement).toBeTruthy();
  });
});
