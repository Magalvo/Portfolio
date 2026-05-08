import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import App from './App';

vi.mock('lottie-react', () => ({
  default: () => null
}));

vi.mock('./components/canvas/Stars', () => ({
  default: () => null
}));

test('renders the portfolio headline', () => {
  render(<App />);
  expect(screen.getByText(/Hi! I'm Diogo/i)).toBeInTheDocument();
});
