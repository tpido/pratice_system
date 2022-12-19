import Myrequest from "@/service";

export default function getAllClasses() {
  return Myrequest({
    url: "/getAlLClass",
    method: "get",
  });
}
