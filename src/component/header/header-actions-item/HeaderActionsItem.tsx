import { FC, ReactElement, useRef } from "react";
import { ProductDropDownList } from "../../product";
import { useHover } from "../../../hooks";
import { TypeProduct } from "../../../types/TypeProduct";
import { Badge } from "antd";

interface HeaderActionsItemProps {
  products: TypeProduct[];
  listId: string;
  textButton: string;
  colorBadge: "blue" | "red";
  icon: ReactElement;
}

const HeaderActionsItem: FC<HeaderActionsItemProps> = ({
  products,
  icon,
  listId,
  textButton,
  colorBadge,
}) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  return (
    <div ref={hoverRef}>
      <Badge count={products.length} color={colorBadge}>
        {icon}
      </Badge>
      {!!products.length && isHover && (
        <ProductDropDownList
          products={products}
          itemId={listId}
          textButton={textButton}
        />
      )}
    </div>
  );
};

export default HeaderActionsItem;
