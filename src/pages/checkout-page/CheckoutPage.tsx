import React, { FC, useCallback, useEffect, useState } from "react";
import { Col, Row, Space, Steps } from "antd";
import { Button, Content } from "../../UI";
import { steps } from "./CheckoutPage.utils";
import {
  CheckoutFormValues,
  FourthStepFormTypes,
} from "../../types/StepFormTypes";
import {
  FirstStepForm,
  FourthStepForm,
  SecondStepForm,
  ThirdStepForm,
} from "./step-form";
import ResultCheckout from "./result-checkout/ResultCheckout";
import { useCreateCheckoutMutation } from "../../store/api/checkout.api";
import { useCartReducer } from "../../hooks";
import { ProductInCheckout } from "../../types/TypeProduct";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/const";

const CheckoutPage: FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepsState, setStepsState] = useState<CheckoutFormValues>(
    {} as CheckoutFormValues
  );
  const [submit, setSubmit] = useState(false);
  const { cartItems, removeAllCart } = useCartReducer();
  const [createCheckout, { isLoading, isSuccess, isError }] =
    useCreateCheckoutMutation();

  const handleNextStep = (values: CheckoutFormValues) => {
    setCurrentStep(currentStep + 1);
    setStepsState((prevState: CheckoutFormValues) => ({
      ...prevState,
      ...values,
    }));
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleCreateCheckout = useCallback(
    async (stepsState: CheckoutFormValues) => {
      await createCheckout(stepsState);
    },
    [createCheckout]
  );

  useEffect(() => {
    if (currentStep === 4) {
      handleCreateCheckout(stepsState);
    }
  }, [handleCreateCheckout, currentStep, stepsState]);

  useEffect(() => {
    if (isSuccess) {
      removeAllCart();
    }
  }, [isSuccess, removeAllCart]);

  const handleSubmit = (values: { orderInfo: FourthStepFormTypes }) => {
    handleNextStep(values);
    const checkoutItems: ProductInCheckout[] = cartItems.map((item) => ({
      id: item.id,
      title: item.title,
      quantity: item.quantity,
    }));

    setStepsState((prevState) => ({
      ...prevState,
      product: checkoutItems,
    }));
    setSubmit(true);
  };

  const actionsButton = (
    <Space.Compact style={{ width: "100%", justifyContent: "center" }}>
      <Space.Compact style={{ width: "70%", gap: 20 }}>
        {currentStep < steps.length - 1 && (
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        )}
        {currentStep > 0 && (
          <Button type="default" onClick={() => handlePrevStep()}>
            Previous
          </Button>
        )}
      </Space.Compact>
    </Space.Compact>
  );

  const itemsStep = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <Row gutter={24} style={{ marginLeft: 0, marginRight: 0 }}>
      <Col span={20} offset={2}>
        <Content>
          {!submit && (
            <>
              <Col span={4}>
                {" "}
                <Button type="link">
                  <Link to={ROUTES.HOME}>GO TO HOME</Link>
                </Button>
              </Col>
              <Steps
                current={currentStep}
                items={itemsStep}
                style={{ marginTop: "20px" }}
              />
              {currentStep === 0 && (
                <FirstStepForm
                  onSubmit={handleNextStep}
                  defaultValue={stepsState}
                >
                  {actionsButton}
                </FirstStepForm>
              )}
              {currentStep === 1 && (
                <SecondStepForm
                  onSubmit={handleNextStep}
                  defaultValue={stepsState}
                >
                  {actionsButton}
                </SecondStepForm>
              )}
              {currentStep === 2 && (
                <ThirdStepForm
                  defaultValue={stepsState}
                  onSubmit={handleNextStep}
                >
                  {actionsButton}
                </ThirdStepForm>
              )}
              {currentStep === 3 && (
                <FourthStepForm
                  defaultValue={stepsState}
                  onSubmit={handleSubmit}
                >
                  {actionsButton}
                </FourthStepForm>
              )}
            </>
          )}
          {isLoading && <div>loading</div>}
          {!isLoading && (isSuccess || isError) && (
            <Col span={8} offset={8}>
              <ResultCheckout
                status={isSuccess || !!cartItems.length}
                orderNumber={stepsState?.orderInfo?.orderNumber}
              />
            </Col>
          )}
        </Content>
      </Col>
    </Row>
  );
};

export default CheckoutPage;
