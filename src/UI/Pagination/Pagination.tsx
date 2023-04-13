import { FC } from "react";
import s from "./Pagination.module.scss";
import type { PaginationProps as PaginationPropsAnt } from "antd";
import { Pagination as PaginationAnt } from "antd";

interface PaginationProps {
  total: number;
  current: number;
  onClick: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ total, current = 1, onClick }) => {
  const handleChange: PaginationPropsAnt["onChange"] = (pageNumber) => {
    onClick(pageNumber);
  };

  return (
    <PaginationAnt
      className={s.wrapper}
      showQuickJumper
      current={current}
      total={total}
      showSizeChanger={false}
      onChange={handleChange}
    />
  );
};

export default Pagination;
