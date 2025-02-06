import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PrimaryButton from './PrimaryButton';

describe('primaryButton', () => {
  it('should be return props', () => {
    render(<PrimaryButton onClick={() =>{}}/>);

    const element = screen.getByText(/click me/i);
    expect(element).toBeInTheDocument()
  });

  it('should be trigger function when click', () => {
    render(<PrimaryButton text='submit' onClick={() =>{}}/>);

    const element = screen.getByText(/submit/i);
    expect(element).toBeInTheDocument()
  });
});
