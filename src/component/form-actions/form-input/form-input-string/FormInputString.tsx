import React, { FC } from "react";
import { FormItem } from "../../../../UI";
import { Input } from "antd";

interface FormInputStringProps {
  name: string | string[];
  label?: string;
  placeholder?: string;
  width?: string;
  required?: boolean;
  max?: number;
  min?: number;
  showCount?: boolean;
  custom?: CustomStyle;
}

type CustomStyle = {
  noStyle: boolean;
  message: string;
  width: string;
};

const FormInputString: FC<FormInputStringProps> = ({
  name,
  label,
  placeholder,
  width,
  required,
  max,
  min,
  showCount,
  custom,
}) => {
  return (
    <FormItem
      style={{ width }}
      name={name}
      label={label}
      noStyle={custom?.noStyle}
      rules={[{ required, type: "string", max, min, message: custom?.message }]}
    >
      <Input
        placeholder={placeholder}
        showCount={showCount}
        maxLength={max}
        style={{ width: custom?.width }}
      />
    </FormItem>
  );
};

export default FormInputString;
