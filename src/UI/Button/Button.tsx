import { FC, PropsWithChildren } from "react";
import { Button as ButtonAnt } from "antd";

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
  type: "primary" | "default";
  ghost?: boolean;
  danger?: boolean;
}

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  type,
  danger,
  ghost,
}) => {
  return (
    <ButtonAnt
      onClick={onClick}
      type={type}
      danger={danger}
      size={"large"}
      ghost={ghost}
    >
      <p>{children}</p>
    </ButtonAnt>
  );
};

export default Button;
