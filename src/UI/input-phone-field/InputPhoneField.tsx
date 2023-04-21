import React, { FC, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import s from "./InputPhoneField.module.scss";
import { Space } from "antd";

interface PhoneInputFieldProps {
  value?: string;
  onChange?: (e: string) => void;
}

const InputPhoneField: FC<PhoneInputFieldProps> = ({ value, onChange }) => {
  const [phone, setPhone] = useState("");

  const handleOnChange = (value: string) => {
    setPhone(value);
    onChange && onChange(value);
  };

  return (
    <Space.Compact>
      <PhoneInput
        country={"ua"}
        value={value}
        onChange={handleOnChange}
        inputClass={s.input}
        inputStyle={{ width: "100%" }}
        enableSearch={true}
        disableSearchIcon={true}
        inputProps={{
          placeholder: "Phone Number",
        }}
      />
    </Space.Compact>
  );
};

export default InputPhoneField;
