import { FC } from "react";
import { Radio } from "antd";
import s from "./RadioShippingMethod.module.scss";
import cn from "classnames";
import { ShippingMethodTypes } from "../../../../../types/StepFormTypes";

interface InputRadioShippingMethodProps {
  shippingItem: ShippingMethodTypes;
  value: string;
  isActive?: string;
  name: string;
}

const RadioShippingMethod: FC<InputRadioShippingMethodProps> = ({
  shippingItem,
  value,
  isActive,
  name,
}) => {
  const { price, supportingText, shippingName, deliveryTime } = shippingItem;

  return (
    <Radio
      className={cn(s.wrapper, isActive === value && s.active)}
      value={value}
      name={name}
    >
      <div className={s.wrapperInfo}>
        <p>{`$${price} + ${shippingName}`}</p>
        <p className="verySmall">{supportingText}</p>
        <p className="small">{`(${deliveryTime})`}</p>
      </div>
    </Radio>
  );
};

export default RadioShippingMethod;
