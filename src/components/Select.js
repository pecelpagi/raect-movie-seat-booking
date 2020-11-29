const Select = ({ id, data }) => {
    const options =  data.map(x => (<option key={x.id} value={x.id}>{x.name}</option>));

    return (
        <select id={id}>
            {options}
        </select>
    );
}

export default Select;