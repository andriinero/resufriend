import { FormInput } from "./FormInput";

export { FormGeneral };

function FormGeneral({
    isExpanded,
    generalInfo,
    generalHandlerContainer,
}) {
    const expandedClass = isExpanded ? 'input-panel' : 'input-panel--hidden';

    return (
        <div className={expandedClass}>
            <div className="input-panel__item">
                <label className="input-panel__label" htmlFor="name">Full Name</label>
                <div className="input-panel__field">
                    <input value={generalInfo.firstName} onChange={generalHandlerContainer.firstNameHandler} id="name" type="text" placeholder="First Name" />
                    <input value={generalInfo.lastName} onChange={generalHandlerContainer.lastNameHandler} id="name" type="text" placeholder="Last Name" />
                </div>
            </div>
            <FormInput
                id="email"
                placeholder="email@example.com"
                value={generalInfo.email}
                changeHandler={generalHandlerContainer.emailHandler}
            >
                <span>Email</span>
            </FormInput>
            <FormInput
                id="phone-number"
                placeholder="555 - 5555 - 5555"
                value={generalInfo.phoneNumber}
                changeHandler={generalHandlerContainer.phoneNumberHandler}
            >
                <span>Phone Number</span>
            </FormInput>
            <FormInput
                id="location"
                placeholder="Berlin, DE"
                value={generalInfo.location}
                changeHandler={generalHandlerContainer.locationHandler}
            >
                <span>Location</span>
            </FormInput>
        </div>
    );
}