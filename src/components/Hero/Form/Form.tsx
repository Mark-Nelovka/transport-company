import { Formik, Form, useField } from "formik";
import { useState } from "react";
import * as yup from "yup";
import man from "../../../images/svg/manForm.svg";
import mail from "../../../images/svg/mailForm.svg";
import phone from "../../../images/svg/phone.svg";

import {
  FormSubscribe,
  InputContainer,
  InputLabel,
  InputIconContainer,
  BorderTop,
  BorderLeft,
  InputForm,
  TitleForm,
  Title,
  TitleBorderBottom,
  TitleBorderLeft,
  TitleBorderTop,
  TitleBorderRight,
  ButtonForm,
  FormPolicyContainer,
  TurnButton,
  RoundButton,
  AcceptPolicyText,
  AcceptPolicyLink,
  ErrorMessage,
} from "./Form.styled";

interface IText {
  name: string;
  type: string;
  placeholder: string;
  id: string;
  src: string;
  alt: string;
  turn?: boolean;
}

const MyTextInput = ({ name, type, placeholder, id, src, alt }: IText) => {
  const [field, meta] = useField({ name, type, placeholder });
  return (
    <InputContainer>
      <InputLabel htmlFor={id}>
        <InputIconContainer>
          <img src={src} alt={alt} />
        </InputIconContainer>

        <InputForm
          {...field}
          name={name}
          id={id}
          type={type}
          placeholder={placeholder}
        />
      </InputLabel>
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </InputContainer>
  );
};

export const FormTest = () => {
  const [turn, setTurn] = useState<string>("false");

  const checkButton = () => {
    if (turn === "false") {
      setTurn("true");
      return;
    }
    setTurn("false");
  };

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .min(1)
      .matches(/^[a-zA-z""]/, "available latin-based alphabet")
      .max(30, "must be less than 30 characters")
      .required(),
    lastName: yup
      .string()
      .min(1)
      .matches(/^[a-zA-z""]/, "available latin-based alphabet")
      .max(30, "must be less than 30 characters")
      .required(),
    email: yup
      .string()
      .email()
      .matches(
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.""]+$/,
        "available latin-based alphabet, numeric character and _ . + -"
      )
      .min(1, "must be at least 6 characters")
      .max(63, "email length must be less than 63 characters")
      .required(),
    tel: yup
      .string()
      .matches(/^[0-9""]/, "available number")
      .min(10)
      .max(16, "must be less than 16 characters")
      .required(),
  });

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          tel: "",
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <Title>
            <TitleBorderTop />
            <TitleBorderRight />
            Welcome to D&D United Corp, to drive
            <TitleBorderBottom />
            <TitleBorderLeft />
          </Title>
          <FormSubscribe>
            <BorderTop />
            <BorderLeft />
            <TitleForm>with us, please fill out the form below:</TitleForm>
            <MyTextInput
              name="firstName"
              type="text"
              id="name"
              placeholder="First Name"
              src={man}
              alt="Man"
            />

            <MyTextInput
              name="lastName"
              type="text"
              id="lastName"
              placeholder="Last Name"
              src={man}
              alt="Man"
            />

            <MyTextInput
              name="email"
              type="email"
              id="email"
              placeholder="Email"
              src={mail}
              alt="Man"
            />

            <MyTextInput
              name="tel"
              type="number"
              id="Phone"
              src={phone}
              alt="Man"
              placeholder="0123456789"
            />

            <ButtonForm disabled={turn === "false" ? true : false}>
              next step
            </ButtonForm>
            <FormPolicyContainer>
              <TurnButton onClick={checkButton}>
                <RoundButton turn={turn} />
              </TurnButton>
              <AcceptPolicyText>
                I accept the terms and conditions of the
                <AcceptPolicyLink to="/transport-company/policy">
                  Privacy Policy
                </AcceptPolicyLink>
              </AcceptPolicyText>
            </FormPolicyContainer>
          </FormSubscribe>
        </Form>
      </Formik>
    </>
  );
};
