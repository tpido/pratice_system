import Myrequest from "@/service";

export default function joinClasses(classId: number, id: number) {
  return Myrequest({
    url: "/joinClass",
    method: "post",
    params: {
      classId,
      id,
    },
  });
}
