import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import axios from "axios";

export function Todo() {

    const [ips, setIps] = useState([])

    useEffect(() => {
        const findAll = async () => {
            try {
                const result = await axios.get('http://localhost:8080/ips')
                setIps(result.data)
            } catch (e) {
                console.log(e)
            }
        }
        findAll();
    });

    return (
        <div>
            <Formik initialValues=
                        {{
                            id: '',
                            name: ''
                        }}
                    onSubmit={(values => {

                        const save = async (std) => {
                            try {
                                const result = await axios.post('http://localhost:8080/ips', std)
                                return result.data
                            } catch (e) {
                                console.log(e)
                            }
                        }
                        save(values);

                    })}>

                <Form>
                    <h2>Todo List</h2>
                    <Field type="text" name="name"/>
                    <button type="submit">Add</button>

                    <ul>
                        {ips.map(iphone => (
                            <li>{iphone.name}</li>
                        ))}
                    </ul>
                </Form>


            </Formik>

        </div>
    );
}