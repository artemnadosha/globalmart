import { FC, PropsWithChildren } from "react";
import { Form as FormAnt } from "antd";
import s from "./Form.module.scss";
import { FirstStepFormTypes } from "../../types/StepFormTypes";

interface FormProps extends PropsWithChildren {
  onFinish: (values: any) => void;
  name: string;
  initialValue?: FirstStepFormTypes | object | undefined;
}

/* eslint-disable no-template-curly-in-string */
export const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  string: {
    max: "${label} must be up to ${max} characters",
    range: "${label} must be between ${min}-${max} characters",
  },
  number: {
    min: "${label} must be minimum ${min}",
  },
};

const Form: FC<FormProps> = ({ children, name, onFinish, initialValue }) => {
  return (
    <FormAnt
      initialValues={initialValue}
      wrapperCol={{ span: 24 }}
      className={s.form}
      name={name}
      layout="vertical"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      {children}
    </FormAnt>
  );
};

export const FormItem = FormAnt.Item;

export default Form;
