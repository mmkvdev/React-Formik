export const validate = values => {
    let errors = {};

    if (!values.name) errors.name = 'Required';
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid Email Format';
    }
    if (!values.channel) errors.channel = 'Required';
    return errors;
};
