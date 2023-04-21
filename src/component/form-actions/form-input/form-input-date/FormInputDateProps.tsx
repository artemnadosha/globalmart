import React, { FC } from "react";
import { FormItem } from "../../../../UI";
import { DatePicker } from "antd";

interface FormInputDateProps {
  name: string | string[];
  label?: string;
  width?: string;
  required?: boolean;
  picker: "date" | "week" | "month" | "quarter" | "year";
  format: "dateFormat" | "weekFormat" | "monthFormat";
}

const FormInputDate: FC<FormInputDateProps> = ({
  name,
  label,
  width,
  required,
  picker,
  format,
}) => {
  let formatNow;

  if (format === "monthFormat") {
    formatNow = "DD/MM";
  } else if (format === "weekFormat") {
    formatNow = "MM/YY";
  } else {
    formatNow = "DD/MM/YYYY";
  }

  return (
    <FormItem
      style={{ width }}
      label={label}
      name={name}
      rules={[{ required, type: "date" }]}
    >
      <DatePicker picker={picker} format={formatNow} />
    </FormItem>
  );
};

export default FormInputDate;
