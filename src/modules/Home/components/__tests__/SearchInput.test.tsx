import { render, screen, fireEvent } from '@testing-library/react';
import { SearchInput } from '../SearchInput';
import { describe, expect, test, beforeEach, vi } from 'vitest';

describe('SearchInput Component', () => {
  const mockOnChange = vi.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  test('renders input field', () => {
    render(<SearchInput value="" onChange={mockOnChange} />);
    
    expect(screen.getByPlaceholderText('Ingrese el nombre de la ciudad...')).toBeInTheDocument();
  });

  test('allows valid input', () => {
    render(<SearchInput value="" onChange={mockOnChange} />);
    
    const input = screen.getByPlaceholderText('Ingrese el nombre de la ciudad...');
    fireEvent.change(input, { target: { value: 'Madrid' } });
    
    expect(mockOnChange).toHaveBeenCalledWith('Madrid');
  });

  test('blocks invalid input', () => {
    render(<SearchInput value="" onChange={mockOnChange} />);
    
    const input = screen.getByPlaceholderText('Ingrese el nombre de la ciudad...');
    fireEvent.change(input, { target: { value: 'Madrid123' } });
    
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  test('handles disabled state', () => {
    render(<SearchInput value="" onChange={mockOnChange} disabled />);
    
    const input = screen.getByPlaceholderText('Ingrese el nombre de la ciudad...');
    expect(input).toBeDisabled();
  });
}); 