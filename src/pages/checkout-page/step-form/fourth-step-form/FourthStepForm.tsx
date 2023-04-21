import { FC, PropsWithChildren } from "react";
import { Collapse, Table } from "antd";
import { Button, Form, FormItem } from "../../../../UI";
import { useCartReducer } from "../../../../hooks";
import {
  sumCalculateDiscountAmount,
  sumCalculatePriceWithoutDiscount,
} from "../../../../utils";
import {
  FormInputCheckedPrivacyPolicy,
  FormTitle,
} from "../../../../component/form-actions";
import { columns } from "./FourthStepForm.utils";
import ContentCheckoutSummary from "./content-checkout-summary/ContentCheckoutSummary";
import HeaderCheckoutSummary from "./header-checkout-summary/HeaderCheckoutSummary";
import HeaderOrderReview from "./header-order-review/HeaderOrderReview";
import { FourthStepFormTypes } from "../../../../types/StepFormTypes";

const { Panel } = Collapse;

interface FourthStepFormProps extends PropsWithChildren {
  defaultValue: any;
  onSubmit: (values: { orderInfo: FourthStepFormTypes }) => void;
}

const FourthStepForm: FC<FourthStepFormProps> = ({
  defaultValue,
  children,
  onSubmit,
}) => {
  const { cartItems } = useCartReducer();
  const discount = sumCalculateDiscountAmount(cartItems);
  const subtotal = sumCalculatePriceWithoutDiscount(cartItems);

  const shippingPrice = !!defaultValue.shippingMethod.price
    ? defaultValue.shippingMethod.price
    : 0;

  const onFinish = (values: { checkPrivacyPolicy: boolean }) => {
    onSubmit({
      orderInfo: {
        checkPrivacyPolicy: values.checkPrivacyPolicy,
        orderNumber: new Date().getTime(),
      },
    });
  };

  return (
    <Form
      onFinish={onFinish}
      name="checkout-fourth-step"
      initialValue={defaultValue}
    >
      <FormTitle title="Confirm and enjoy your order" />
      <Collapse accordion>
        <Panel
          header={<HeaderOrderReview lengthCartItem={cartItems.length} />}
          key="1"
        >
          <Table
            columns={columns}
            rowKey="id"
            dataSource={cartItems}
            size="middle"
            pagination={{ pageSize: 5 }}
          />
        </Panel>
        <Panel header={<HeaderCheckoutSummary />} key="2">
          <ContentCheckoutSummary
            discount={discount}
            subtotal={subtotal}
            shippingPrice={shippingPrice}
          />
        </Panel>
      </Collapse>
      <FormInputCheckedPrivacyPolicy />
      <FormItem>
        <Button type="primary" htmlType={"submit"}>
          Buy ${subtotal - discount + shippingPrice}
        </Button>
        {children}
      </FormItem>
    </Form>
  );
};

export default FourthStepForm;
