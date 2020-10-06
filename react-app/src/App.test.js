import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders LinkedIn link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Matthew's LinkedIn/i);
  expect(linkElement).toBeInTheDocument();
});

//This is an incomplete test suite, come back to this once app development is finished