import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  test('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });

  test('displays the page title "CI/CD Pipeline Demo"', () => {
    render(<App />);
    expect(screen.getByText('CI/CD Pipeline Demo')).toBeInTheDocument();
  });

  test('renders exactly 7 pipeline stage nodes', () => {
    render(<App />);
    const nodes = screen.getAllByTestId('pipeline-node');
    expect(nodes).toHaveLength(7);
  });
});
