import Myrequest from "..";

export default function getAllTeacher() {
  return Myrequest({
    url: "/user/getAllTeacher",
  });
}
