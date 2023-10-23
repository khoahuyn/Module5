import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import {NavLink} from "react-router-dom";
import {useNavigate, useParams} from "react-router";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as bookService from "../Service/bookService";


export const Update = () => {
    const navigate = useNavigate();
    const {id} = useParams();


    const [values, setValues] = useState({
        id: '',
        title: '',
        quantity: ''
    });

    useEffect(() => {
        const find = async () => {
            const result = await bookService.findById(id)
            setValues(result)

        }
        find();
    }, []);






    return values.title !== "" ? (
        <>
            <Formik  initialValues=
                        {{
                            id: values.id,
                            title: values.title,
                            quantity: values.quantity
                        }}
                    validationSchema={Yup.object({
                        title: Yup.string().required("Title is not empty"),
                        quantity: Yup.number().required("Quantity is not empty")
                    })}
                    onSubmit={values => {

                        const update = async () => {
                            try {
                                const result = await bookService.update(values.id, values);
                                setValues(result)

                            } catch (e) {
                                console.log(e)
                            }
                        }

                        update(values)

                        toast('🦄 Edit book successfully!!!!');
                        navigate('/');
                    }}>

                <Form>
                    <h1>Edit Book</h1>

                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <div className="form-input">
                            <Field type="text" className="form-control" id="title" name="title"/>
                            <ErrorMessage name="title" className="text-danger" component="p"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="quantity">Quantity</label>
                        <div className="form-input">
                            <Field type="text" className="form-control" id="quantity" name="quantity"/>
                            <ErrorMessage name="quantity" className="text-danger" component="p"/>
                        </div>
                    </div>


                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Add</button>
                        <NavLink to="/" className="btn btn-primary">Back</NavLink>
                    </div>

                </Form>

            </Formik>
        </>
    ) : "";
}