import React from 'react';
import { initialValues } from '../utils/initialValues';
import { onSubmit } from '../utils/onSubmit';
import { validationSchema } from '../utils/validationSchema';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function YoutubeForm() {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div className="form-control">
                    <label htmlFor='name'>Name</label>
                    <Field
                        type='text'
                        id='name'
                        name='name'
                    />
                    <ErrorMessage className='error' name='name' />
                </div>

                <div className="form-control">
                    <label htmlFor='email'>Email</label>
                    <Field
                        type='email'
                        id='email'
                        name='email'
                    />
                    <ErrorMessage className='error' name='email' />
                </div>

                <div className="form-control">
                    <label htmlFor='channel'>Channel</label>
                    <Field
                        type='text'
                        id='channel'
                        name='channel'
                    />
                    <ErrorMessage className='error' name='channel' />
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default YoutubeForm;