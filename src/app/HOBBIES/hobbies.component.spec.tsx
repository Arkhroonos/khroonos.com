import { render } from '@testing-library/react';

import HobbiesComponent from './hobbies.component';

describe('HobbiesComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HobbiesComponent />);
    expect(baseElement).toBeTruthy();
  });
});
