import React, { FC, useCallback, useEffect, useState } from "react";
import { Col, Space, Steps } from "antd";
import { Button, Content } from "../../UI";
import { steps } from "./CheckoutPage.utils";
import {
  FirstStepForm,
  FourthStepForm,
  SecondStepForm,
  ThirdStepForm,
} from "./step-form";
import ResultCheckout from "./result-checkout/ResultCheckout";
import { useCreateCheckoutMutation } from "../../store/api/checkout.api";
import { useCartReducer, useCheckoutReducer } from "../../hooks";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/const";

const CheckoutPage: FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [initialForm, setInitialForm] = useState(true);
  const [orderNumber, setOrderNumber] = useState(0);
  const { removeAllCart } = useCartReducer();
  const [createCheckout, { isLoading, isSuccess, isError }] =
    useCreateCheckoutMutation();
  const { stateCheckout, cleanCheckout } = useCheckoutReducer();

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleCreateCheckout = useCallback(() => {
    setInitialForm(false);
    setOrderNumber(stateCheckout?.orderInfo?.orderNumber);
    createCheckout(stateCheckout);
  }, [stateCheckout, createCheckout]);

  useEffect(() => {
    if (isSuccess) {
      removeAllCart();
      cleanCheckout();
    }
  }, [isSuccess, removeAllCart]);

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
    <>
      {initialForm && (
        <Content>
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
            <FirstStepForm nextStep={handleNextStep}>
              {actionsButton}
            </FirstStepForm>
          )}
          {currentStep === 1 && (
            <SecondStepForm nextStep={handleNextStep}>
              {actionsButton}
            </SecondStepForm>
          )}
          {currentStep === 2 && (
            <ThirdStepForm nextStep={handleNextStep}>
              {actionsButton}
            </ThirdStepForm>
          )}
          {currentStep === 3 && (
            <FourthStepForm submitForm={handleCreateCheckout}>
              {actionsButton}
            </FourthStepForm>
          )}
        </Content>
      )}
      {isLoading && <div>loading</div>}
      {!isLoading && (isSuccess || isError) && (
        <Col span={8} offset={8}>
          <ResultCheckout status={isSuccess} orderNumber={orderNumber} />
        </Col>
      )}
    </>
  );
};

export default CheckoutPage;
