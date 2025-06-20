import React from 'react';
import { render, screen } from '@testing-library/react';
import { TextArea } from '..';
import userEvent from '@testing-library/user-event';

describe('TextArea component', () => {
    it('renders correctly with default props', () => {
        render(<TextArea textSize="md" />);
        const textareaElement = screen.getByRole('textbox');
        expect(textareaElement).toBeInTheDocument();
        expect(document.querySelector(".deriv-textarea")).toBeInTheDocument();
    });

    it('renders label when provided', () => {
        render(<TextArea textSize="md" label="Test Label" />);
        const labelElement = screen.getByText('Test Label');
        expect(labelElement).toBeInTheDocument();
    });

    it('renders hint when provided', () => {
        render(<TextArea textSize="md" hint="Test Hint" />);
        const hintElement = screen.getByText('Test Hint');
        expect(hintElement).toBeInTheDocument();
        expect(hintElement.tagName.toLowerCase()).toBe('p');
    });

    it('displays error state when isInvalid is true', () => {
        render(<TextArea textSize="md" isInvalid />);
        expect(document.querySelector(".deriv-textarea--error")).toBeInTheDocument();
    });

    it('triggers onChange event handler', async() => {
        const handleChange = jest.fn();
        render(<TextArea textSize="md" onChange={handleChange} />);
        const textareaElement = screen.getByRole('textbox');
        await userEvent.type(textareaElement, 'Test input');
        expect(handleChange).toHaveBeenCalledTimes(10);
    });

    it('limits input length based on maxLength prop', async() => {
        render(<TextArea textSize="md" maxLength={5}/>);
        const textareaElement = screen.getByRole('textbox');
        await userEvent.type(textareaElement, 'Too much input');
        expect(textareaElement).toHaveProperty('value','Too m')
    });

    it('shows character counter when shouldShowCounter is true', () => {
        render(<TextArea textSize="md" shouldShowCounter maxLength={10} />);
        const counterElement = screen.getByText('0/10');
        expect(counterElement).toBeInTheDocument();
    });

    it('does not show character counter when shouldShowCounter is false', () => {
        render(<TextArea textSize="md" shouldShowCounter={false} />);
        const counterElement = screen.queryByText(/\d+\/\d+/);
        expect(counterElement).toBeNull();
    });
});
