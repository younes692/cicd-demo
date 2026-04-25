import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  test('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });

  test('renders a main heading', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  test('renders a subtitle paragraph', () => {
    render(<App />);
    expect(document.querySelector('p')).toBeInTheDocument();
  });
});
