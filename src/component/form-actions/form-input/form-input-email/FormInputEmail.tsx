import React, { FC } from "react";
import { FormItem } from "../../../../UI";
import { Input } from "antd";

interface FormInputEmailProps {
  name: string | string[];
  label?: string;
  required?: boolean;
  placeholder?: string;
}

const FormInputEmail: FC<FormInputEmailProps> = ({
  name,
  label,
  required,
  placeholder,
}) => {
  return (
    <FormItem name={name} label={label} rules={[{ required, type: "email" }]}>
      <Input placeholder={placeholder} />
    </FormItem>
  );
};

export default FormInputEmail;
