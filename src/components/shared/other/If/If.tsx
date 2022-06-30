import React, { FC, ReactNode } from "react";

interface IconfigProps {
  condition: boolean;
  anotherChildren?: ReactNode | null;
}

export const If: FC<IconfigProps> = ({
  anotherChildren = null,
  condition,
  children,
}) => {
  return <>{condition ? children : anotherChildren}</>;
};
