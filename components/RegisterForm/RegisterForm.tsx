"use client";
import React from "react";
import { REGISTER_FORM_DATA } from "./registerFormDetails";
import Form from "@components/Form/Form";
import { FieldValues } from "react-hook-form";

export type registerStateType = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm = () => {
  const defaultValues: registerStateType = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const handleSubmit = (formData: FieldValues) => {
    console.log(formData);
  };

  return (
    <Form
      formData={REGISTER_FORM_DATA}
      onSubmit={handleSubmit}
      buttonLabel="Załóż konto"
      defaultValues={defaultValues}
    />
  );
};

export default RegisterForm;