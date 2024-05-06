/**
 * Dropdown Component
 * 
 * Component for rendering a dropdown/select element with options provided in the data prop.
 * 
 * Array of objects containing options data.
 * Additional props to be passed to the select element.
 * Dropdown component with provided options.
 */

const Dropdown = ({data, ...props}) => {
    return (
        <select {...props}>
            {data.map((item)=> <option dropdown={`option-${item.id}`} key={`option-${item.id}`} value={item.id}>{item.value}</option>)}
        </select>
    )
}

export default Dropdown;