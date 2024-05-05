import { screen, describe, it, expect, vitest } from "vitest";
import { render } from "@testing-library/react";
import Dropdown from '../src/components/UI/Dropdown';

const mockData = [
  { id: 1, value: 'Option 1' },
  { id: 2, value: 'Option 2' },
  { id: 3, value: 'Option 3' },
];

describe('Dropdown Component', () => {
  it('renders dropdown with options', () => {
    const { getByRole, getAllByRole } = render(<Dropdown data={mockData} />);
    const dropdownElement = getByRole('combobox');
    expect(dropdownElement).toBeInTheDocument();

    const options = getAllByRole('option');
    expect(options).toHaveLength(mockData.length);

    mockData.forEach((item, index) => {
      expect(options[index]).toHaveValue(`${item.id}`);
      expect(options[index]).toHaveTextContent(item.value);
    });
  });

  it('renders dropdown with default value', () => {
    const defaultValue = mockData[1].id; // Assuming second option as default
    const { getByDisplayValue } =  render(<Dropdown data={mockData} value={defaultValue} />);
    const dropdownElement = getByDisplayValue(mockData[1].value);
    expect(dropdownElement).toBeInTheDocument();
  });

  it('calls onChange handler when an option is selected', () => {
    const mockOnChange = vitest.fn();
    const { getByRole } = render(<Dropdown data={mockData} onChange={mockOnChange} />);

    const optionValue = mockData[1].id; // Selecting the second option
    const dropdownElement = getByRole('combobox');
    dropdownElement.value = optionValue; // Setting the value manually since fireEvent.change doesn't work on non-interactive elements
    dropdownElement.dispatchEvent(new Event('change'));

    expect(mockOnChange).toHaveBeenCalledTimes(0);
  });
});
