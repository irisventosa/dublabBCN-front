import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <span>Contacte</span>
      <address className="mt-[26px] text not-italic	 ">
        <Link href={"es@dublab.com"}>Envia un mail</Link>
        <br />
        <Link href={"https://maps.app.goo.gl/po31DRus98exm34MA"}>
          visita'ns
        </Link>
      </address>
    </div>
  );
};

export default Contact;
