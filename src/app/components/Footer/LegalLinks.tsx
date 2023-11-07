import Link from "next/link";

const LegalLinks = () => {
  return (
    <div>
      <span>Legal</span>
      <ul className="mt-[26px]">
        <li>
          <Link href={""}>Política de privacitat</Link>
        </li>
        <li>
          <Link href={""}>Política de cookies</Link>
        </li>
      </ul>
    </div>
  );
};

export default LegalLinks;
