import React, { FC, PropsWithChildren, useState } from "react";
import { Form, FormItem } from "../../../../UI";
import { Radio, RadioChangeEvent } from "antd";
import RadioShippingMethod from "./RadioShippingMethod/RadioShippingMethod";
import { shippingMethodData } from "./SecondStepForm.utils";
import { FormTitle } from "../../../../component/form-actions";
import { useCheckoutReducer } from "../../../../hooks";

interface SubmitForm {
  shippingName: string;
}

interface SecondStepFormProps extends PropsWithChildren {
  nextStep: () => void;
}

const SecondStepForm: FC<SecondStepFormProps> = ({ nextStep, children }) => {
  const { stateCheckout, setCheckoutShippingMethod } = useCheckoutReducer();
  const [isActiveRadio, setIsActiveRadio] = useState(
    stateCheckout?.shippingMethod?.shippingName
  );

  const handleChangeRadio = (e: RadioChangeEvent) => {
    setIsActiveRadio(e.target.value);
  };

  const handleOnFinish = (values: SubmitForm) => {
    const shippingMethod = shippingMethodData.find(
      (item) => item.shippingName === values.shippingName
    );
    if (shippingMethod) {
      setCheckoutShippingMethod(shippingMethod);
    }
    nextStep();
  };
  return (
    <Form
      onFinish={handleOnFinish}
      name="checkout-second-step"
      initialValue={stateCheckout.shippingMethod}
    >
      <FormTitle title="How should we sent the order?" />
      <FormItem
        name="shippingName"
        label="Shipping method"
        rules={[{ required: true }]}
      >
        <Radio.Group style={{ width: "100%" }} onChange={handleChangeRadio}>
          {shippingMethodData.map((method) => (
            <RadioShippingMethod
              key={method.shippingName}
              shippingItem={method}
              name={method.shippingName}
              value={method.shippingName}
              isActive={isActiveRadio}
            />
          ))}
        </Radio.Group>
      </FormItem>
      <FormItem>{children}</FormItem>
    </Form>
  );
};

export default SecondStepForm;
