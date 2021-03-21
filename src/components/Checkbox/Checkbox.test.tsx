import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Checkbox from './Checkbox.component';

test('renders checkbox label', () => {
  render(<Checkbox label="test" checked />);
  const checkboxText = screen.getByText('test');
  expect(checkboxText).toBeInTheDocument();
});
