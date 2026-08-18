import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './App';

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );

test('renders the landing page', () => {
  renderAt('/');
  expect(
    screen.getByText(/The Industry Leader in Home Extraction Technology/i)
  ).toBeInTheDocument();
  expect(screen.getByText(/Frequently Asked Questions/i)).toBeInTheDocument();
});

test('renders the checkout page with an empty cart', () => {
  renderAt('/checkout');
  expect(screen.getByText(/Your Shopping Cart/i)).toBeInTheDocument();
  expect(screen.getByText(/Total: \$0/)).toBeInTheDocument();
});
