import emailjs from "@emailjs/browser";

const sendEmail = (to: string) => {
  emailjs.send(
    "service_qti9t0p",
    "template_xg0d0yk",
    {
      to: to,
      to_name: "User",
      message:
        "You are well on your way to completing your recertification. Log back in to see the next steps.",
    },
    "Y_rvcKf7bYge94qBn"
  );
};

export default sendEmail;
