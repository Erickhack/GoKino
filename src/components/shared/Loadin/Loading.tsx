/* eslint-disable no-empty-pattern */
import { FC } from "react";
import ReactLoading from "react-loading";
import { configComponent } from "./interface";
import "./Loading.scss";

const Loading: FC<configComponent> = ({
  color,
  height,
  type,
  width,
  ClassName,
}) => (
  <ReactLoading
    className={ClassName}
    type={type}
    color={color}
    height={height}
    width={width}
  />
);

export default Loading;
