import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Display } from './Display';
import * as Yup from 'yup';

const INITIAL_DATA = {
    name: '',
    email: '',
    number: '',
}

export default function Form() {
    const [formData, setFormData] = useState(INITIAL_DATA);
    const isNumber = /^\d+$/;

    const formik = useFormik({
        initialValues: formData,
        validationSchema: Yup.object({
            name: Yup.string().required('Required name'),
            email: Yup.string().email('Invalid email address').required('Required e-mail'),
            number: Yup.string()
                .max(12, 'Phone number must be 12 characters or less')
                .matches(isNumber, 'Field must contain only numbers')
                .required('Required phone number'),
        }),
        onSubmit: values => {
            const newData = {
                ...values
            };
            setFormData(newData);
        },
    });

  return (
    <>   
        <div>
            {formik.isValid
                ? 
                    <Display
                        name={formData.name}
                        email={formData.email}
                        number={formData.number}
                    /> 
                : 
                    <span>
                        <p>{formik.errors.name}</p>
                        <p>{formik.errors.email}</p>
                        <p>{formik.errors.number}</p>
                    </span>
            }
        </div>
        
        <form onSubmit={formik.handleSubmit}>
            <input
                id="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                type="text"
                placeholder="Enter Name"
            />
            <input
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                type="text"
                placeholder="Enter E-mail"
            />
            <input
                id="number"
                onChange={formik.handleChange}
                value={formik.values.number}
                type="text"
                placeholder="Enter Phone number"
            />
            <button disabled={!formik.isValid} type="submit">??????????????????</button>
        </form>
    </>
  );
}