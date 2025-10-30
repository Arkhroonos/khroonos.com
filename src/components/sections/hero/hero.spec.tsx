import { render } from '@testing-library/react';

import InfosComponent from './infos.component';

describe('InfosComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InfosComponent />);
    expect(baseElement).toBeTruthy();
  });
});
