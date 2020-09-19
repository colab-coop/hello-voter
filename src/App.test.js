import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getAllByText } = render(<App />);
  const text = getAllByText(/Loading/i)[0];
  expect(text).toBeInTheDocument();
});
