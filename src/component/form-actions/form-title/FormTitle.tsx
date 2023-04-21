import React, { FC } from "react";
import s from "./FormTitle.module.scss";

interface FormTitleProps {
  title: string;
}

const FormTitle: FC<FormTitleProps> = ({ title }) => {
  return <h3 className={s.title}>{title}</h3>;
};

export default FormTitle;
