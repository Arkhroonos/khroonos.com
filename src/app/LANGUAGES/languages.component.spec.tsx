import { render } from '@testing-library/react';

import LanguagesComponent from './languages.component';

describe('LanguagesComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LanguagesComponent />);
    expect(baseElement).toBeTruthy();
  });
});
