import React from 'react';
import { render, fireEvent, jest } from '@testing-library/react';
import Header from '../src/components/Header';
import { describe, it, expect } from 'vitest';


describe('Header Component', () => {

  it('renders header with correct title', () => {
    const { getByText } = render(<Header />);
    expect(getByText('New York Times')).toBeInTheDocument();
  });
  
});
