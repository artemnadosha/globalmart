import { FC, PropsWithChildren } from "react";
import { Button as ButtonAnt } from "antd";
import { Link } from "react-router-dom";

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
  type: "primary" | "default" | "dashed" | "link" | "text";
  ghost?: boolean;
  danger?: boolean;
  htmlType?: "button" | "submit" | "reset";
  textAlign?: "left" | "right" | "center";
  href?: string;
}

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  type,
  danger,
  ghost,
  htmlType,
  textAlign,
  href,
}) => {
  return (
    <ButtonAnt
      style={{ width: "100%", textAlign }}
      onClick={onClick}
      type={type}
      danger={danger}
      size={"large"}
      ghost={ghost}
      htmlType={htmlType}
    >
      {href ? <Link to={href}>{children}</Link> : <>{children}</>}
    </ButtonAnt>
  );
};

export default Button;
