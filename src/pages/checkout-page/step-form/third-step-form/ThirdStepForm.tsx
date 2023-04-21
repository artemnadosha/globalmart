import React, { FC, PropsWithChildren, useState } from "react";
import { Form, FormItem } from "../../../../UI";
import { Radio, RadioChangeEvent, Space } from "antd";
import RadioPayoutMethod from "./radio-payout-method/RadioPayoutMethodProps";
import { FormTitle } from "../../../../component/form-actions";
import FormGroupInputCreditCard from "./form-group-input-credit-card/FormGroupInputCreditCard";
import { CheckoutFormValues } from "../../../../types/StepFormTypes";

interface ThirdStepFormProps extends PropsWithChildren {
  onSubmit: (values: CheckoutFormValues) => void;
  defaultValue: CheckoutFormValues;
}

const ThirdStepForm: FC<ThirdStepFormProps> = ({
  defaultValue,
  children,
  onSubmit,
}) => {
  const [radioValue, setRadioValue] = useState(defaultValue?.payout?.method);

  const handleOnChange = (value: RadioChangeEvent) => {
    setRadioValue(value.target.value);
  };

  const handleOnSubmit = (values: CheckoutFormValues) => {
    onSubmit(values);
  };
  return (
    <Form
      name="checkout-third-step"
      onFinish={handleOnSubmit}
      initialValue={
        defaultValue.hasOwnProperty("payout")
          ? defaultValue
          : {
              payout: {
                data: {
                  nameOnCard: `${defaultValue?.user?.firstName} ${defaultValue?.user?.firstName}`,
                },
              },
            }
      }
    >
      <FormTitle title="How would you like to pay?" />
      <FormItem
        label="Payout Method"
        name={["payout", "method"]}
        required
        rules={[{ required: true }]}
      >
        <Radio.Group style={{ width: "100%" }} onChange={handleOnChange}>
          <Space.Compact
            direction="vertical"
            style={{ width: "100%", gap: 10 }}
          >
            <RadioPayoutMethod value="creditCard" isActive={radioValue}>
              {radioValue === "creditCard" ? (
                <FormGroupInputCreditCard />
              ) : (
                "Pay with Credit Card"
              )}
            </RadioPayoutMethod>
            <RadioPayoutMethod value="applePay" isActive={radioValue}>
              Apple Pay
            </RadioPayoutMethod>
            <RadioPayoutMethod value="paypal" isActive={radioValue}>
              Paypal
            </RadioPayoutMethod>
          </Space.Compact>
        </Radio.Group>
      </FormItem>
      <FormItem>{children}</FormItem>
    </Form>
  );
};

export default ThirdStepForm;
