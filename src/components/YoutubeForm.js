import React from 'react';
import { initialValues } from '../utils/initialValues';
import { onSubmit } from '../utils/onSubmit';
import { validationSchema } from '../utils/validationSchema';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextError from './TextError';

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
                        placeholder='Enter Your Name'
                    />
                    <ErrorMessage name='name' component={TextError} />
                </div>

                <div className="form-control">
                    <label htmlFor='email'>Email</label>
                    <Field
                        type='email'
                        id='email'
                        name='email'
                    />
                    <ErrorMessage name='email'>
                        {
                            (errorMsg) => {
                                console.log(errorMsg)
                                return (
                                    <div className='error'>
                                        {errorMsg}
                                    </div>
                                );
                            }
                        }
                    </ErrorMessage>
                </div>

                <div className="form-control">
                    <label htmlFor='channel'>Channel</label>
                    <Field
                        type='text'
                        id='channel'
                        name='channel'
                    />
                    <ErrorMessage name='channel'>
                        {
                            (channelErrorMsg) => {
                                return (
                                    <div className='error'>
                                        {channelErrorMsg}
                                    </div>
                                )
                            }
                        }
                    </ErrorMessage>
                </div>

                <div className="form-control">
                    <label htmlFor='comments'>Comments</label>
                    <Field
                        as='textarea'
                        type='text'
                        id='comments'
                        name='comments'
                    />
                </div>

                <div className="form-control">
                    <label htmlFor='address'>Address</label>
                    <Field name='address'>
                        {
                            (props) => {
                                // console.log(props);
                                const { field, form, meta } = props;

                                console.log(form)
                                return (
                                    <div>
                                        <input type='text' id='address' {...field} />
                                        {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
                                    </div>
                                )
                            }
                        }
                    </Field>
                </div>

                <div className='form-control'>
                    <label htmlFor='facebook'>Facebook Profile</label>
                    <Field type='text' id='facebook' name='social.facebook' />
                </div>

                <div className='form-control'>
                    <label htmlFor='twitter'>Twitter Profile</label>
                    <Field type='text' id='twitter' name='social.twitter' />
                </div>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default YoutubeForm;