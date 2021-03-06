import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './Main';

test('renders main app text', () => {
  render(<Main />);
  const TextElement = screen.getByText('Main app container');
  expect(TextElement).toBeInTheDocument();
});
