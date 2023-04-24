import { FC, PropsWithChildren } from "react";
import { Collapse, Table } from "antd";
import { Button, Form, FormItem } from "../../../../UI";
import { useCartReducer, useCheckoutReducer } from "../../../../hooks";
import {
  sumCalculateDiscountAmount,
  sumCalculatePriceWithoutDiscount,
} from "../../../../utils";
import {
  FormInputCheckedPrivacyPolicy,
  FormTitle,
} from "../../../../component/form-actions";
import { checkoutItem, columns } from "./FourthStepForm.utils";
import ContentCheckoutSummary from "./content-checkout-summary/ContentCheckoutSummary";
import HeaderCheckoutSummary from "./header-checkout-summary/HeaderCheckoutSummary";
import HeaderOrderReview from "./header-order-review/HeaderOrderReview";

const { Panel } = Collapse;

interface FourthStepFormProps extends PropsWithChildren {
  submitForm: () => void;
}

const FourthStepForm: FC<FourthStepFormProps> = ({ submitForm, children }) => {
  const { cartItems } = useCartReducer();
  const { stateCheckout, setCheckoutOrderInfo, setCheckoutProduct } =
    useCheckoutReducer();
  const discount = sumCalculateDiscountAmount(cartItems);
  const subtotal = sumCalculatePriceWithoutDiscount(cartItems);

  const shippingPrice = !!stateCheckout.shippingMethod.price
    ? stateCheckout.shippingMethod.price
    : 0;

  const onFinish = (values: { checkPrivacyPolicy: boolean }) => {
    setCheckoutOrderInfo({
      checkPrivacyPolicy: values.checkPrivacyPolicy,
      orderNumber: new Date().getTime(),
    });
    setCheckoutProduct(checkoutItem(cartItems));

    submitForm();
  };

  return (
    <Form
      onFinish={onFinish}
      name="checkout-fourth-step"
      initialValue={stateCheckout.orderInfo}
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
            pagination={{ pageSize: 4 }}
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
