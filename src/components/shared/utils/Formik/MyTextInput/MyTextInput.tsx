import { useField } from "formik";
import React from "react";

export const MyTextInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name} className="form-label">
        {label}
      </label>
      <input className="form-control" type="text" {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};
