import { render, screen } from '@testing-library/react';
import About from './About';
import { expect, it } from 'vitest';

it('renders About text', () => {
  render(<About />);

  const element = screen.getByText('About');
  expect(element).toBeInTheDocument();
});
