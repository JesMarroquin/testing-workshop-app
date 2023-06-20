import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button.js';
import '@testing-library/jest-dom';

describe('Button component renders correctly and responds to click event', () => {
  const mockClickHandler = jest.fn();

  it('Using get for a static button', () => {
    render(<Button onClick={mockClickHandler}>Click Me</Button>);
    const buttonElement = screen.getByText(/Click Me/);
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
  });
});
