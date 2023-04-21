import { FC, PropsWithChildren } from "react";
import { Radio } from "antd";
import cn from "classnames";
import s from "./RadioPayoutMethod.module.scss";

interface RadioPayoutMethodProps extends PropsWithChildren {
  value: string;
  isActive?: string;
  name?: string;
}

const RadioPayoutMethod: FC<RadioPayoutMethodProps> = ({
  children,
  value,
  name,
  isActive,
}) => {
  return (
    <Radio
      className={cn(s.wrapper, isActive === value && s.active)}
      value={value}
      name={name}
    >
      {children}
    </Radio>
  );
};

export default RadioPayoutMethod;
