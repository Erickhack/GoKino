import { FC, ReactNode } from "react";
import { removeToken } from "components/shared/utils/axios/localStorage";
import { b64toutf8, KJUR } from "jsrsasign";
import { getUnixTime } from "date-fns";
import { Navigate } from "react-router";
import { AuthGuardUrls } from "components/interface";
import { getSessitonToken } from "components/shared/utils/axios/sessionStorage";

export const Auth: FC<{ children: ReactNode }> = ({ children }) => {
  const { jws } = KJUR;

  const token = getSessitonToken().token;
  const expToken: any = jws.JWS.readSafeJSONString(
    b64toutf8(token?.split(".")[1] || "")
  );

  const currentTime = getUnixTime(new Date());

  if (expToken?.exp || 0 > currentTime) {
    return <>{children}</>;
  }

  removeToken();
  return <Navigate to={`${AuthGuardUrls.index}/${AuthGuardUrls.logIn}`} />;
};
