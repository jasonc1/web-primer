import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button.component';

describe('button tests', () => {
  it('renders the button', () => {
    render(<Button buttonText="test button" />);
    const buttonText = screen.getByText('test button');
    expect(buttonText).toBeInTheDocument();
  });

  it('handleClick is fired', () => {
    const mockHandleClick = jest.fn();
    render(<Button buttonText="test button" handleClick={mockHandleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockHandleClick).toBeCalled();
  });
});
