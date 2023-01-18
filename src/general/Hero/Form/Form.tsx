import { Formik, Form } from "formik";
import { useState } from "react";
import { MyTextInput } from "../..";
import { schemaStepOne, schemaSecondStep } from "../../../helpers/validation";
import man from "../../../images/svg/manForm.svg";
import mail from "../../../images/svg/mailForm.svg";
import phone from "../../../images/svg/phone.svg";
import marker from "../../../images/svg/marker.svg";
import driveExp from "../../../images/svg/drivingForm.svg";

import * as S from "./Form.styled";
import { Loader } from "../../../components/Loader";

interface IStateForm {
  firstName?: string;
  lastName?: string;
  email?: string;
  tel?: string;
  country?: string;
  experience?: string;
}

export const FormTest = () => {
  const [turn, setTurn] = useState<string>("false");
  const [stateMachine, setStateMachine] = useState<string>("idle");
  const [steps, setSteps] = useState<number>(1);
  const [initialState, setInitialState] = useState<IStateForm>({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    country: "",
    experience: "",
  });
  const [validationSchema, setValidationSchema] = useState<
    typeof schemaStepOne | typeof schemaSecondStep
  >(schemaStepOne);

  const checkButton = () => {
    if (turn === "false") {
      setTurn("true");
      return;
    }
    setTurn("false");
  };

  const handleSubmit = () => {
    if (steps === 1) {
      setSteps(2);
      setTurn("false");
      setValidationSchema(schemaSecondStep);
      return;
    }
    setStateMachine("loading");
    const submitForm = setTimeout(() => {
      setSteps(1);
      setStateMachine("idle");
      setTurn("false");
      setValidationSchema(schemaStepOne);
      clearTimeout(submitForm);
    }, 1000);
  };

  return (
    <>
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <S.Title>
            <S.TitleBorderTop />
            <S.TitleBorderRight />
            Welcome to D&D United Corp, to drive
            <S.TitleBorderBottom />
            <S.TitleBorderLeft />
          </S.Title>

          <S.FormSubscribe>
            <S.BorderTop />
            <S.BorderLeft />
            <S.TitleForm>with us, please fill out the form below:</S.TitleForm>
            {steps === 1 && (
              <>
                <MyTextInput
                  name="firstName"
                  type="text"
                  id="name"
                  placeholder="First Name"
                  src={man}
                  alt="Your first name"
                />

                <MyTextInput
                  name="lastName"
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  src={man}
                  alt="Yout last name"
                />

                <MyTextInput
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Email"
                  src={mail}
                  alt="Your email"
                />

                <MyTextInput
                  name="tel"
                  type="number"
                  id="Phone"
                  src={phone}
                  alt="Your phone number"
                  placeholder="0123456789"
                />
              </>
            )}
            {steps === 2 && stateMachine !== "loading" && (
              <>
                <MyTextInput
                  name="country"
                  type="text"
                  id="country"
                  placeholder="State"
                  src={marker}
                  alt="write country"
                />

                <MyTextInput
                  name="experience"
                  type="number"
                  id="experience"
                  placeholder="Driving Experience (years)"
                  src={driveExp}
                  alt="write your experience (years)"
                />
              </>
            )}
            {steps === 2 && (
              <>
                <S.CheckboxTitle>We work only 1099:</S.CheckboxTitle>
                <S.CheckboxContainer>
                  <S.Checkbox id="checkbox" />
                  <S.CheckboxLabel htmlFor="checkbox">
                    Mark the checkbox if you agree.
                  </S.CheckboxLabel>
                </S.CheckboxContainer>
              </>
            )}
            <S.ButtonForm disabled={turn === "false" ? true : false}>
              next step
            </S.ButtonForm>
            <S.FormPolicyContainer>
              <S.TurnButton onClick={checkButton}>
                <S.RoundButton turn={turn} />
              </S.TurnButton>
              <S.AcceptPolicyText>
                I accept the terms and conditions of the
                <S.AcceptPolicyLink to="/transport-company/policy">
                  Privacy Policy
                </S.AcceptPolicyLink>
              </S.AcceptPolicyText>
            </S.FormPolicyContainer>
            {stateMachine === "loading" && <Loader />}
          </S.FormSubscribe>
        </Form>
      </Formik>
    </>
  );
};
