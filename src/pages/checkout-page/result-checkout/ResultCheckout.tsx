import React, { FC } from "react";
import { Result, Space } from "antd";
import { Button } from "../../../UI";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../utils/const";

interface ResultCheckoutProps {
  status: boolean;
  orderNumber?: number;
}

const ResultCheckout: FC<ResultCheckoutProps> = ({ status, orderNumber }) => {
  const navigate = useNavigate();
  const subTitle = status
    ? `Your order: ${orderNumber} has successfully been placed. We’ll send you a shipping confrimation email as soon as your order ships. `
    : "There was some kind of error, try again.";

  const title = status
    ? "Thanks a lot for putting up this order"
    : "Unable to place an order";

  const statusResult = status ? "success" : "error";
  return (
    <Result
      status={statusResult}
      title={title}
      subTitle={subTitle}
      extra={[
        <Space key="buttons" wrap style={{ justifyContent: "center" }}>
          <Button type="default" onClick={() => navigate(ROUTES.HOME)}>
            Go to Home
          </Button>
          <Button
            type="primary"
            onClick={() =>
              navigate(`/${ROUTES.PRODUCTS}/gadget-and-electronics?page=1`)
            }
          >
            Buy Again
          </Button>
        </Space>,
      ]}
    />
  );
};

export default ResultCheckout;
