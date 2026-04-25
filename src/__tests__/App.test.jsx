import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  test('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });

  test('displays the Hello World heading', () => {
    render(<App />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  test('displays the subtitle text', () => {
    render(<App />);
    expect(screen.getByText('My first CI/CD pipeline')).toBeInTheDocument();
  });
});
