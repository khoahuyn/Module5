import React from "react";
import {Form, Formik, ErrorMessage, Field} from "formik";
import * as Yup from "yup"
import './yte.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function FormYte() {
    return (
        <>
            <Formik initialValues=
                        {{
                            name: '',
                            idCard: '',
                            birthYear: '',
                            gender: '0',
                            nationality: '',
                            company: '',
                            department: '',
                            heathInsurance: '',
                            province: '',
                            district: '',
                            wards: '',
                            address: '',
                            phone: '',
                            email: ''
                        }}

                    validationSchema={Yup.object({
                        name: Yup.string().required("Name is not empty"),
                        idCard: Yup.number().required("IdCard is not empty"),
                        birthYear: Yup.number().required("BirthYear is not empty").min(1900, "Invalid birthYear "),
                        nationality: Yup.string().required("Nationality is not empty"),
                        province: Yup.string().required("Province is not empty"),
                        district: Yup.string().required("District is not empty"),
                        wards: Yup.string().required("Wards is not empty"),
                        address: Yup.string().required("Address is not empty"),
                        phone: Yup.number().required("Phone is not empty"),
                        email: Yup.string().required("Email is not empty").matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                            "Invalid email address”")
                    })}
                    onSubmit={(values => {
                        console.log(values)
                        toast("🦄 Add form successfully!!!!")
                    })}>

                <Form>
                    <h1>To khai y te</h1>

                    <div className="form-group">
                        <label htmlFor="name">Họ tên</label>
                        <div className="form-input">
                            <Field type="text" className="form-control" id="name" placeholder="Name"
                                   name="name"/>
                            <ErrorMessage name="name" className="text-danger" component="p"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="idCard">Số hộ chiếu/CMND</label>
                        <div className="form-input">
                            <Field type="text" className="form-control" id="idCard" placeholder="CMND"
                                   name="idCard"/>
                            <ErrorMessage name="idCard" className="text-danger" component="p"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="birthYear">Năm sinh</label>
                        <div className="form-input">
                            <Field type="text" className="form-control" id="birthYear" placeholder="2003"
                                   name="birthYear"/>
                            <ErrorMessage name="birthYear" className="text-danger" component="p"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="gender">Giới tính</label>

                        <Field type="radio" className="form-control" id="gender" name="gender" value="0"/>
                        <label htmlFor="gender" className="form-check-label">Male</label>

                        <Field type="radio" className="form-control" id="gender" name="gender" value="1"/>
                        <label htmlFor="gender" className="form-check-label">FeMale</label>

                    </div>

                    <div className="form-group">
                        <label htmlFor="nationality">Quốc tịch</label>
                        <div className="form-input">
                            <Field type="text" className="form-control" id="nationality" placeholder="Việt Nam"
                                   name="nationality"/>
                            <ErrorMessage name="nationality" className="text-danger" component="p"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="company">Công ty làm việc</label>
                        <div className="form-input">
                            <Field type="text" className="form-control" id="company" placeholder="FPT"
                                   name="company"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="department">Bộ phân làm việc</label>
                        <div className="form-input">
                            <Field type="text" className="form-control" id="department" placeholder="Paris"
                                   name="department"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="heathInsurance">Có bảo hiểm y tế</label>
                        <Field type="checkbox" className="form-control" id="heathInsurance" name="heathInsurance"/>
                    </div>

                    <h3>Thông tin liên hệ tại Việt Nam</h3>

                    <div className="form-group">
                        <label htmlFor="province">Tỉnh thành</label>
                        <div className="form-input">
                            <Field type="text" className="form-control" id="province" placeholder="Đà Nẵng"
                                   name="province"/>
                            <ErrorMessage name="province" className="text-danger" component="p"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="district">Quận/huyện</label>
                        <div className="form-input">
                            <Field type="text" className="form-control" id="district" placeholder="Liên chiểu"
                                   name="district"/>
                            <ErrorMessage name="district" className="text-danger" component="p"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="wards">Phường/xã</label>
                        <div className="form-input">
                            <Field type="text" className="form-control" id="wards" placeholder="Hòa Khánh Bắc"
                                   name="wards"/>
                            <ErrorMessage name="wards" className="text-danger" component="p"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Số nhà, phố, tổ dân phố/thôn /đội</label>
                        <div className="form-input">
                            <Field type="text" className="form-control" id="address" placeholder="120/24 NLB"
                                   name="address"/>
                            <ErrorMessage name="address" className="text-danger" component="p"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Điện thoại</label>
                        <div className="form-input">
                            <Field type="text" className="form-control" id="phone" placeholder="*84[9,10]"
                                   name="phone"/>
                            <ErrorMessage name="phone" className="text-danger" component="p"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <div className="form-input">
                            <Field type="text" className="form-control" id="email" placeholder="abc@gmail.com"
                                   name="email"/>
                            <ErrorMessage name="email" className="text-danger" component="p"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="button">Submit</button>
                    </div>

                </Form>
            </Formik>
        </>
    );
}