import React, { FC, PropsWithChildren, useState } from "react";
import { Form, FormItem } from "../../../../UI";
import { Radio, RadioChangeEvent } from "antd";
import RadioShippingMethod from "./RadioShippingMethod/RadioShippingMethod";
import { shippingMethodData } from "./SecondStepForm.utils";
import { FormTitle } from "../../../../component/form-actions";
import { CheckoutFormValues } from "../../../../types/StepFormTypes";

interface SecondStepFormProps extends PropsWithChildren {
  onSubmit: (values: CheckoutFormValues) => void;
  defaultValue: CheckoutFormValues;
}

interface SubmitForm {
  shippingName: string;
}

const SecondStepForm: FC<SecondStepFormProps> = ({
  onSubmit,
  children,
  defaultValue,
}) => {
  const [isActiveRadio, setIsActiveRadio] = useState(
    defaultValue?.shippingMethod?.shippingName
  );

  const handleChangeRadio = (e: RadioChangeEvent) => {
    setIsActiveRadio(e.target.value);
  };

  const handleOnFinish = (values: SubmitForm) => {
    const shippingMethod = shippingMethodData.find(
      (item) => item.shippingName === values.shippingName
    );
    if (shippingMethod) {
      onSubmit({ shippingMethod });
    }
  };
  return (
    <Form
      onFinish={handleOnFinish}
      name="checkout-second-step"
      initialValue={defaultValue.shippingMethod}
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
