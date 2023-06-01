import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from '@testing-library/user-event';

describe('Greeting component', () => {
  test('Greeting Title', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... noting for now

    // Assert
    const titleElement = screen.getByText(/Hello World/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('Greeting Subtitle if button NOT clicked', () => {
    render(<Greeting />);

    const subtitleElement = screen.getByText('good to see you', {
      exact: false,
    });
    expect(subtitleElement).toBeInTheDocument();
  });

  test('Greeting Subtitle if button clicked', () => {
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    // Assert
    const subtitleElement = screen.getByText('Text changed', {
      exact: false,
    });
    expect(subtitleElement).toBeInTheDocument();
  });

  test('Greeting Subtitle REMOVED if button clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const subtitleElement = screen.queryByText('good to see you', {
      exact: false,
    });
    // expect(subtitleElement).not.toBeInTheDocument();
    expect(subtitleElement).toBeNull();
  });
});
