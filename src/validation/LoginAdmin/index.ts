import { boolean, object, string } from "yup";
export const validateLoginAdmin = object({
  email: string().required("Заполните пол"),
  password: string().required("Подтвердите пароль"),
  checkinguser: boolean(),
});
