import { logRoles, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import InputField from '../components/InputField';

describe('getbyRole', () => {
  it('should be return getbyRole', async () => {
    const { container } = render(<InputField />);
    logRoles(container);

    const element = screen.getByRole('textbox');
    const element2 = screen.getByPlaceholderText('user login');
    const element3 = screen.getByPlaceholderText('password');
    const element4 = screen.getByTitle('mixer');

    const getTheMessage = await screen.findByTestId(
      'message',
      {},
      { timeout: 2000 }
    );
    screen.logTestingPlaygroundURL()

    expect(element).toBeInTheDocument();
    expect(element2).toBeInTheDocument();
    expect(element3).toBeInTheDocument();
    expect(element4).toBeInTheDocument();
    expect(getTheMessage).toBeInTheDocument();
  });
});
