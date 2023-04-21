import React, { FC } from "react";
import { Space } from "antd";
import {
  FormInputCreditCard,
  FormInputDate,
  FormInputNumber,
  FormInputString,
} from "../../../../../component/form-actions";

const FormGroupInputCreditCard: FC = () => {
  return (
    <>
      <Space.Compact
        style={{
          width: "100%",
          gap: "10%",
        }}
      >
        <FormInputString
          name={["payout", "data", "nameOnCard"]}
          required={true}
          label="Name on card"
          placeholder="Enter the cardholder's name"
          width="100%"
        />
        <FormInputDate
          width="40%"
          name={["payout", "data", "expiry"]}
          label="Expiry"
          picker="month"
          format={"monthFormat"}
        />
      </Space.Compact>
      <Space.Compact style={{ width: "100%", gap: "10%" }}>
        <FormInputCreditCard
          name={["payout", "data", "cardNumber"]}
          label="Card number"
          required={true}
          width="100%"
        />
        <FormInputNumber
          name={["payout", "data", "cvv"]}
          width="40%"
          label="CVV"
          required={true}
          max={3}
          min={3}
          type="password"
        />
      </Space.Compact>
    </>
  );
};

export default FormGroupInputCreditCard;
