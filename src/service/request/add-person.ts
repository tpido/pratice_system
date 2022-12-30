import Myrequest from "..";

export default function addPerson(data: any) {
  return Myrequest({
    url: "/user/addPerson",
    method: "post",
    params: {
      account: data.account,
      password: data.password,
      nickname: data.nuckname,
      kind: data.kind,
      classId: data.classId,
    },
  });
}
