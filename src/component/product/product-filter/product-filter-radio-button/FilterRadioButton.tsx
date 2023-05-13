import { Radio } from "antd";
import { FC } from "react";
import { correctionName } from "../../../../utils";

interface FilterRadioButtonProps {
  value: string;
  title: string;
  className: string;
}

const FilterRadioButton: FC<FilterRadioButtonProps> = ({
  value,
  title,
  className,
}) => {
  return (
    <Radio.Button value={value} className={className}>
      {correctionName(title)}
    </Radio.Button>
  );
};

export default FilterRadioButton;
