import { render } from '@testing-library/react';
import { Logo } from 'src/components/atoms/common/Logo';

describe('Logo', () => {
  it('should render', () => {
    render(<Logo />);
  });
});
