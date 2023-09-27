import {Field, Formik, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import React from "react";
import './index.css';


export function ContactForm() {
    return (
        <>
            <Formik initialValues={
                {
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                }
            } onSubmit={() => {

            }}
            validationSchema={Yup.object({
                name: Yup.string().required('Bắt buộc nhập'),
                email: Yup.string().required('Bắt buộc nhập').matches('/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/'),
                phone: Yup.number().required('Bắt buộc nhập'),
                message: Yup.string().required('Bắt buộc nhập'),
            })}

            >
                <Form>

                    <h1>Contact form</h1>

                    <div className="form-group">
                        <label htmlFor="formName">Name</label>
                        <Field type="text" className="form-control" id="formName" placeholder="Anh"
                               name="name"/>
                        <ErrorMessage name="name"  className="text-danger" component="p"/>

                    </div>

                    <div className="form-group">
                        <label htmlFor="formEmail">Email</label>
                        <Field type="text" className="form-control" id="formEmail" placeholder="phan0102@"
                               name="email"/>
                        <ErrorMessage name="email" className="text-danger" component="p"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="formPhone">Phone</label>
                        <Field type="text" className="form-control" id="formPhone" placeholder="0905__"
                               name="phone"/>
                        <ErrorMessage name="phone" className="text-danger" component="p"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="formMessage">Message</label>
                        <Field type="text" className="form-control" id="formMessage" placeholder="Hello"
                               name="message"/>
                        <ErrorMessage name="message" className="text-danger" component="p"/>

                    </div>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </Form>
            </Formik>
        </>
    );
}

