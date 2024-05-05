import React from 'react';
import { describe, it, expect } from "vitest";
import { render, fireEvent } from '@testing-library/react';
import Error from '../src/components/Error';

describe('Error Component', () => {
  it('Renders title and message correctly', () => {
    const title = 'Error Title';
    const message = 'Error Message';
    const { getByText } = render(<Error title={title} message={message} />);
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(message)).toBeInTheDocument();
  });

});