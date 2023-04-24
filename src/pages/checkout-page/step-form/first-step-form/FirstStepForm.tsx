import React, { FC, PropsWithChildren } from "react";
import { Space } from "antd";
import { Form, FormItem } from "../../../../UI";

import {
  FormInputEmail,
  FormInputNumber,
  FormInputPhone,
  FormInputString,
  FormTitle,
} from "../../../../component/form-actions";
import {
  UserInfoType,
  UserUnknownInCheckout,
} from "../../../../types/UserTypes";
import { useCheckoutReducer } from "../../../../hooks";

interface FirstStepFromProps extends PropsWithChildren {
  nextStep: () => void;
}

const FirstStepForm: FC<FirstStepFromProps> = ({ nextStep, children }) => {
  const { stateCheckout, setCheckoutUserInfo } = useCheckoutReducer();
  const onFinish = (values: { user: UserInfoType | UserUnknownInCheckout }) => {
    values.user.id = "unknown";
    setCheckoutUserInfo(values.user);
    nextStep();
  };

  return (
    <Form
      name="checkout-first-step"
      onFinish={onFinish}
      initialValue={stateCheckout}
    >
      <FormTitle title="Where should we sent the order?" />
      <FormInputString
        name={["user", "firstName"]}
        label="First Name"
        placeholder="First Name"
        required={true}
        max={25}
        showCount={true}
      />
      <FormInputString
        name={["user", "secondName"]}
        label="Second Name"
        placeholder="Second Name"
        required={true}
        max={25}
        showCount={true}
      />
      <FormInputNumber
        name={["user", "age"]}
        label="Age"
        placeholder="Age"
        required={true}
        min={14}
        max={100}
      />
      <FormInputPhone
        name={["user", "phone"]}
        label="Phone"
        required={true}
        min={10}
        max={14}
      />
      <FormInputEmail
        name={["user", "email"]}
        placeholder="E-mail"
        label="E-mail"
        required={true}
      />
      <FormItem label="Address" required rules={[{ required: true }]}>
        <Space.Compact style={{ width: "100%" }}>
          <FormInputString
            name={["user", "address", "city"]}
            required={true}
            placeholder="Enter your city"
            custom={{
              noStyle: true,
              message: "City is required",
              width: "50%",
            }}
          />{" "}
          <FormInputString
            name={["user", "address", "street"]}
            required={true}
            placeholder="Enter your street"
            custom={{
              noStyle: true,
              message: "Street is required",
              width: "50%",
            }}
          />
        </Space.Compact>
      </FormItem>
      <FormItem>{children}</FormItem>
    </Form>
  );
};

export default FirstStepForm;
