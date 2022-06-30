import { useField } from "formik";

export const MyCheckbox = ({ children, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label
        htmlFor={props.id || props.name}
        className="checkbox-input form-label"
      >
        <input type="checkbox" {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
