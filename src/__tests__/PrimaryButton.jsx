import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import PrimaryButton from '../components/PrimaryButton';

describe('primaryButton', () => {
  it('should be return props', () => {
    render(<PrimaryButton onClick={() => {}} />);

    const element = screen.getByText(/click me/i);
    expect(element).toBeInTheDocument();
  });

  it('should be trigger function when click', () => {
    const handleClick = vi.fn(); // Mock function
    render(<PrimaryButton text="submit" onClick={handleClick} />);

    const element = screen.getByText(/submit/i);
    expect(element).toBeInTheDocument();
  });
});
