import React from 'react';
import { useFormik } from 'formik';
import { initialValues } from '../utils/initialValues';
import { onSubmit } from '../utils/onSubmit';
import { validate } from '../utils/validate';

/*

    Managing form state ✔️
    Handling form submission ✔️
    Validation and error messages ✔️

*/



function YoutubeForm() {

    // takes object as it's parameter and returns an object that contains a variety of useful properties and methods that we can use with our forms(state, submissions, validation and error messages).

    // onSubmit property automatically gets form state as it's argument

    // ES6 shorthand syntax for object literals.
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

    // console.log('Form Values: formik.values gives access to the form data anytime ', formik.values);

    //logging the error messages
    // console.log('Form Errors', formik.errors);

    // logging the onBlur property - visited fields in the form
    console.log('Fields Touched', formik.touched);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor='channel'>Channel</label>
                    <input
                        type='text'
                        id='channel'
                        name='channel'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.channel}
                    />
                    {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm;