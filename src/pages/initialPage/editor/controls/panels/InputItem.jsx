export { InputItem };

function InputItem({
    children,
    id,
    value,
    placeholder,
    changeHandler,
}) {
    return (
        <div className="input-panel__item">
            <label className="input-panel__label" htmlFor={id}>{children}</label>
            <div className="input-panel__field">
                <input value={value} onChange={changeHandler} id={id} type="text" placeholder={placeholder} />
            </div>
        </div>
    );
}