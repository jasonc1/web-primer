import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Main from './Main';

test('renders main container text', () => {
  render(<Main />);
  const TextElement = screen.getByText('Main app container');
  expect(TextElement).toBeInTheDocument();
});

// test('renders initial number', () => {
//   const { getByText } = render(<Main />);
//   expect(getByText('0'));

//   fireEvent.click(getByText('click me'));
//   expect(getByText('1'));
// });

// test('renders button with text', () => {
//   render(<Main />);
//   const button = screen.getByRole('button', { name: 'click me' });
//   expect(button).toBeInTheDocument();
// });
