import Link from "next/link";
import Button from "../Button";

const Contact = () => {
  const handleSendEmail = () => {
    const email = "es@dublab.com"; // Replace with the recipient's email address
    const subject = "Your subject here";
    const body = "Your email body text here";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div>
      <span>Contacte</span>
      <address className="flex flex-col gap-[0.65rem] mt-[26px] not-italic items-start">
        <Button className="uppercase" actionOnClick={handleSendEmail}>
          Envia un mail
        </Button>
        <Link href={"https://maps.app.goo.gl/po31DRus98exm34MA"}>
          visita&apos;ns
        </Link>
      </address>
    </div>
  );
};

export default Contact;
