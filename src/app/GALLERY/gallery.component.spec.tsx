import { render } from '@testing-library/react';

import GalleryComponent from './gallery.component';

describe('GalleryComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GalleryComponent />);
    expect(baseElement).toBeTruthy();
  });
});
