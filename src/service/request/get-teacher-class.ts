import Myrequest from "..";

export default function getTeacherClass(id: number) {
  return Myrequest({
    url: "/getTeacherClass",
    method: "get",
    params: {
      id,
    },
  });
}
