import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';


describe('App Component', () => {
  test('renders the App component', () => {
    render(<App />);
    const titleElement = screen.getByText(/Ethereum Information/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('fetches the last block number on component mount', async () => {
    render(<App />);
    const lastBlockNumberElement = await screen.findByText(/Last Block Number:/i);
    expect(lastBlockNumberElement).toBeInTheDocument();
  });
});