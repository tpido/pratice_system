import Myrequest from "@/service";

export default function getAskForLeave(id: number) {
  return Myrequest({
    url: "/getaskforleave",
    method: "get",
    params: {
      id,
    },
  });
}
