import Link from "next/link";

interface ProfileLinksProps {
  links: string[];
}

const ProfileLinks = ({ links }: ProfileLinksProps) => {
  if (links === null) {
    return <div className="h-[68px] w-[133px]"></div>;
  }

  const formatLinkText = (link: string): string => {
    if (link.includes("instagram.com")) {
      return "Instagram";
    }
    if (link.includes("mixcloud.com")) {
      return "mixcloud";
    }
    if (link.includes("twitter")) {
      return "Twitter";
    }
    if (link.includes("soundcloud.com")) {
      return "soundcloud";
    } else return "website";
  };

  return (
    <>
      {links.length > 0 && (
        <ul className="mt-[50px]">
          {links.map((link, index) => {
            const formattedUrl = formatLinkText(link);
            return (
              <li key={link}>
                <Link href={link}>{`${String(index + 1).padStart(
                  3,
                  "0"
                )} ${formattedUrl}`}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ProfileLinks;
