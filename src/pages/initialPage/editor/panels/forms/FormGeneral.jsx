import { FormField } from "../../../../../components/editor/FormField";

export { FormGeneral };

function FormGeneral({
    isExpanded,
    generalInfo,
    generalHandlerContainer,
}) {
    const expandedClass = isExpanded ? 'input-panel' : 'input-panel--hidden';

    return (
        <form className={expandedClass}>
            <div className="input-panel__item">
                <label className="input-panel__label text--unselectable" htmlFor="name">Full Name</label>
                <div className="input-panel__field">
                    <input value={generalInfo.firstName} onChange={generalHandlerContainer.firstNameHandler} id="name" type="text" placeholder="First Name" />
                    <input value={generalInfo.lastName} onChange={generalHandlerContainer.lastNameHandler} id="name" type="text" placeholder="Last Name" />
                </div>
            </div>
            <FormField
                id="email"
                labelText="Email"
                placeholder="email@example.com"
                inputValue={generalInfo.email}
                changeHandler={generalHandlerContainer.emailHandler}>
            </FormField>
            <FormField
                id="phone-number"
                labelText="Phone Number"
                placeholder="555 - 5555 - 5555"
                inputValue={generalInfo.phoneNumber}
                changeHandler={generalHandlerContainer.phoneNumberHandler}>
            </FormField>
            <FormField
                id="location"
                labelText="Location"
                placeholder="Berlin, DE"
                inputValue={generalInfo.location}
                changeHandler={generalHandlerContainer.locationHandler}>
            </FormField>
        </form>
    );
}