import { enumButton } from "../../enum/enumButton";

export interface ButtonProps {
  style?: enumButton;
  onClick?: () => void;
  children: JSX.Element;
}
