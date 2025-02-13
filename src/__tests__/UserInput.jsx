import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import UserEvent from '../components/UserEvent';
import user from '@testing-library/user-event';

describe('userEvent', () => {
  it('Renders a counter with initial value of 0', () => {
    render(<UserEvent />);

    const heading = screen.getByRole('heading', {
      level: 3,
    });

    expect(heading).toBeInTheDocument();
  });

  it('should increase count upon on page load', async () => {
    user.setup();
    render(<UserEvent />);
    const increase = screen.getByText('Make her love you more!');
    await user.click(increase);
    const heading = screen.getByRole('heading', {
      level: 3,
    });
    expect(heading).toHaveTextContent('Your girlfriend loves you 1 times!')
  });
});
