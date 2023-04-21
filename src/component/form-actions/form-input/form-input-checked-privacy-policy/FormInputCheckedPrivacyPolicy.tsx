import { FC } from "react";
import { validatePrivacyPolicy } from "./FormInputCheckedPrivacyPolicy.utils";
import { FormItem } from "../../../../UI";
import { Checkbox } from "antd";

const FormInputCheckedPrivacyPolicy: FC = () => {
  return (
    <FormItem
      name="checkPrivacyPolicy"
      valuePropName="checked"
      validateTrigger="onSubmit"
      rules={[
        {
          required: true,
          message: "Please check the Privacy & Terms Policy",
          validator: validatePrivacyPolicy,
        },
      ]}
    >
      <Checkbox>
        Please check to acknowledge our Privacy & Terms Policy
      </Checkbox>
    </FormItem>
  );
};

export default FormInputCheckedPrivacyPolicy;
