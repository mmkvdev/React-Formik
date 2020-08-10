import * as Yup from 'yup'; // Object Schema Validation

export const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
        .email('Invalid Email Format')
        .required('Required'),
    channel: Yup.string().required('Required'),
    address: Yup.string().required('Address is Required Properly')
})