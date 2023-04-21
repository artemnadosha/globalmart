import { FC, PropsWithChildren } from "react";
import { Button as ButtonAnt } from "antd";

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
  type: "primary" | "default" | "dashed" | "link";
  ghost?: boolean;
  danger?: boolean;
  htmlType?: "button" | "submit" | "reset";
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  type,
  danger,
  ghost,
  htmlType,
  isLoading,
}) => {
  return (
    <ButtonAnt
      style={{ width: "100%" }}
      onClick={onClick}
      type={type}
      danger={danger}
      size={"large"}
      ghost={ghost}
      htmlType={htmlType}
      loading={isLoading}
    >
      {children}
    </ButtonAnt>
  );
};

export default Button;
