// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainBoost title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainBoost/i);
    expect(titleElement).toBeInTheDocument();
});
