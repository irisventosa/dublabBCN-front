import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <span>Contacte</span>
      <address className=" flex flex-col gap-[0.65rem] mt-[26px] not-italic">
        <Link className="" href={"es@dublab.com"}>
          Envia un mail
        </Link>
        <Link href={"https://maps.app.goo.gl/po31DRus98exm34MA"}>
          visita'ns
        </Link>
      </address>
    </div>
  );
};

export default Contact;
