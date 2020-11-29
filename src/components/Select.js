const Select = ({ id, data, value, onChange }) => {
    const options = data.map(x => (<option key={x.id} value={x.id}>{x.name}</option>));

    return (
        <select id={id} value={value} onChange={(e) => onChange(e.target.value)}>
            {options}
        </select>
    );
}

export default Select;