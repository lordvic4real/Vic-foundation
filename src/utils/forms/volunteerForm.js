import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { SubmitBtn } from "../button";

const Container = styled.div`
  padding: 3rem 6%;
  .error {
    color: red;
  }
  .main-form {
    padding: 6% 4%;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px 30px;
    @media(max-width: 768px){
      grid-template-columns: 1fr;
    } 
  }
  .main-form > div {
    margin-bottom: 30px;
    /* display: flex; */
  }

  .main-form label {
    margin-right: 10px;
    color: #666;
    /* flex: 1; */
  }

  .main-form input {
    padding: 5px 10px;
    font-size: 1rem;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.6);
    outline: none;
    color: #555;
    width: 100%;
    /* flex: 3; */
  }
  .text-area {
    padding: 5px 10px;
    font-size: 1rem;
    border-radius: 8px;
    color: #555;
    outline: none;
    background-color: rgba(255, 255, 255, 0.2);
    border: 2px solid rgba(0, 0, 0, 0.08);
    width: 100%;
    min-height: 150px;
  }
`;

const VolunteerForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      age: "",
      address: "",
      // city: "",
      // state: "",
      // zip: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Enter your first Name is required"),
      lastName: Yup.string().required(" Enter your last Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
      phone: Yup.string().required("Phone number is required"),
      age: Yup.number().positive().integer().required("Age is required"),
      address: Yup.string().required("Please fill out this field"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      toast.success("thank you, form submitted successfully ");
      resetForm();
    },
  });
  return (
    <Container>
      <form onSubmit={formik.handleSubmit} className="main-form">
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="error">{formik.errors.firstName}</div>
          ) : null}
        </div>
        <div className="formgroup">
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="error">{formik.errors.lastName}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="confirmPassword"> Confirm Password:</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="error">{formik.errors.confirmPassword}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="phone"> Phone:</label>
          <input
            id="phone"
            name="phone"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="error">{formik.errors.phone}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="age"> Age:</label>
          <input
            id="age"
            name="age"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
          />
          {formik.touched.age && formik.errors.age ? (
            <div className="error">{formik.errors.age}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            className="text-area"
          ></textarea>
          {formik.touched.address && formik.errors.address ? (
            <div className="error">{formik.errors.address}</div>
          ) : null}
        </div>
        <div>
          <SubmitBtn type="submit">submit</SubmitBtn>
        </div>
      </form>
    </Container>
  );
};

export default VolunteerForm;
