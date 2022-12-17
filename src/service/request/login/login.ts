import Myrequest from "@/service";
import type { IAccount } from "./type";

export function loginAuthorization(account: IAccount) {
  return Myrequest.post("/login", account);
}
