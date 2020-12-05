import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import App from './App';

test('renders without error', async () => {
  render(<App />);
  // Wait for the 'loading' screen to finish.
  await waitFor(() => expect(screen.getByText('Log in with Google')).toBeInTheDocument());
});
