import React, { FC, PropsWithChildren, useState } from "react";
import { Form, FormItem } from "../../../../UI";
import { Radio, RadioChangeEvent, Space } from "antd";
import RadioPayoutMethod from "./radio-payout-method/RadioPayoutMethodProps";
import { FormTitle } from "../../../../component/form-actions";
import FormGroupInputCreditCard from "./form-group-input-credit-card/FormGroupInputCreditCard";
import { useCheckoutReducer } from "../../../../hooks";

import moment from "moment";
import { UserPayoutCheckout } from "../../../../types/UserCheckoutTypes";

interface ThirdStepFormProps extends PropsWithChildren {
  nextStep: () => void;
}

const ThirdStepForm: FC<ThirdStepFormProps> = ({ children, nextStep }) => {
  const { stateCheckout, setCheckoutPayout } = useCheckoutReducer();
  const [radioValue, setRadioValue] = useState(stateCheckout?.payout.method);

  const handleOnChange = (value: RadioChangeEvent) => {
    setRadioValue(value.target.value);
  };

  const handleOnSubmit = (values: UserPayoutCheckout) => {
    if (values.method === "creditCard") {
      values.data.expiry = moment(values?.data.expiry).format("MM/YY");
    }

    setCheckoutPayout(values);
    nextStep();
  };

  return (
    <Form
      name="checkout-third-step"
      onFinish={handleOnSubmit}
      initialValue={
        stateCheckout.payout.hasOwnProperty("method")
          ? stateCheckout.payout
          : {
              data: {
                nameOnCard: `${stateCheckout?.user?.firstName} ${stateCheckout?.user?.secondName}`,
              },
            }
      }
    >
      <FormTitle title="How would you like to pay?" />
      <FormItem
        label="Payout Method"
        name="method"
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
