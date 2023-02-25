import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App component tests', () => {
  it('renders goodbye text on the screen', () => {
    render(<App />);
    expect(screen.getByText(/goodbye/i)).toBeInTheDocument();
  });
});
