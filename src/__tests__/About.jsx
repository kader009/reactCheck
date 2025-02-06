import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import About from '../pages/About';

it('renders About text', () => {
  render(<About />);

  const element = screen.getByText('About');
  expect(element).toBeInTheDocument();
});
