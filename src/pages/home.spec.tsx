import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Home } from './home';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
