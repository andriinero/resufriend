export { FormField };

function FormField({
    id,
    labelText,
    inputValue,
    placeholder,
    changeHandler,
}) {
    return (
        <div className="input-panel__item">
            <label className="input-panel__label" htmlFor={id}><span>{labelText}</span></label>
            <div className="input-panel__field">
                <input value={inputValue} onChange={changeHandler} id={id} type="text" placeholder={placeholder} />
            </div>
        </div>
    );
}