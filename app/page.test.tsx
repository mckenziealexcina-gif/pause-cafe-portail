import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home Page', () => {
  it('renders the welcome message', () => {
    render(<Home />);
    const welcomeMessage = screen.getByText('Welcome to Pause Café Portail!');
    expect(welcomeMessage).toBeInTheDocument();
  });
});
