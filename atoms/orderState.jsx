import { atom } from "recoil";

export const orderState = atom({
  key: "order",
  default: {
    from_name: "",
    from_email: "",
    message_html: "",
    address: "",
    to_email: "",
    to_name: "",
    reply_to: "",
  },
});
