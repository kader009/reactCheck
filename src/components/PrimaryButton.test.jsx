import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PrimaryButton from './PrimaryButton';

describe('primaryButton', () => {
  it('should be return props', () => {
    render(<PrimaryButton onClick={() =>{}}/>);

    const element = screen.getByText(/click me/i);
    expect(element).toBeInTheDocument()
  });
});
