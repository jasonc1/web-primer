import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Select from './Select.component';

const options = [
  {
    option: 'banana',
    value: 'banana',
  },
  {
    option: 'dragon',
    value: 'dragon',
  },
  {
    option: 'motorcycle',
    value: 'motorcycle',
  },
];

describe('select tests', () => {
  it('renders the button', () => {
    render(<Select options={options} />);
    const SelectText = screen.getByText('Choose option');
    expect(SelectText).toBeInTheDocument();
  });

  it('handleClick is fired', () => {
    const mockHandleClick = jest.fn();
    render(<Select options={options} onChange={mockHandleClick} />);
    fireEvent.click(screen.getByText('banana'));
    expect(mockHandleClick).toBeCalled;
  });
});
