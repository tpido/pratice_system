import Myrequest from "..";

export default function getAllStudents(id: number) {
  return Myrequest({
    url: "/user/getAllStudents",
    method: "get",
    params: {
      id,
    },
  });
}
