import React from 'react';
import { render } from '@testing-library/react';
import CustomProgress from './CustomProgress';

describe('CustomProgress Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<CustomProgress type="page" />);
    expect(container).toBeInTheDocument();
  });

  it('applies custom className to the container', () => {
    const { container } = render(
      <CustomProgress type="page" containerClassName="custom-class" />,
    );
    const customProgressContainer = container.querySelector('.custom-class');
    expect(customProgressContainer).toBeInTheDocument();
  });

  it('applies custom styles using sx prop', () => {
    const { container } = render(
      <CustomProgress type="page" containerSx={{ color: 'blue' }} />,
    );
    const customProgressElement = container.firstChild;
    expect(customProgressElement).toHaveStyle('color: blue');
  });
});
