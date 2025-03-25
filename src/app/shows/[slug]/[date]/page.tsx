import ShowByDataInfo from "@/app/components/Profiles/ShowByDataInfo";
import extractUrlForEmbedPlayer from "@/app/lib/extractUrlForEmbedPlayer";
import useDublabApi from "@/app/lib/hooks/useDublabApi";
import { Metadata } from "next";
import Image from "next/image";

interface ShowByDateProps {
  params: {
    date: string;
    slug: string;
  };
}

export const generateMetadata = ({ params }: ShowByDateProps): Metadata => {
  const transformFirstLetter = (firstLetter: string) => {
    return firstLetter.toUpperCase();
  };

  const capitalizeWords = (showName: string) => {
    const formatedShowName = showName.replace(/\b\w/g, transformFirstLetter);

    return formatedShowName;
  };

  const slug = capitalizeWords(params.slug.replace("-", " "));

  return {
    title: `${slug}`,
    description: `Escolta l'arxiu de les retransmisions en directe del programa ${slug}`,
  };
};

const ShowByDate = async ({ params }: ShowByDateProps) => {
  const { getProfileData, getSingleShowData } = useDublabApi();

  const showDataEndpoint = `${params.slug}-${params.date} `;

  const profileData = await getProfileData(params.slug);
  const showData = await getSingleShowData(showDataEndpoint);

  let profileShowName = params.slug.replace(/-/g, " ");

  if (profileShowName === "macguffin 20") {
    profileShowName = "macguffin 2.0";
  }

  if (profileShowName === "cero en conducta") {
    profileShowName = "@cero.en.conducta";
  }

  if (!profileData) return <div>Loading...</div>;
  if (!showData) return "tracklsit not provided";

  const showUrl = extractUrlForEmbedPlayer(showData.mixcloud_url);
  const description = {
    __html: profileData.description,
  };
  //console.log(profileData.picture);
  return (
    <main className="mt-[155px] md:mt-[255px] gap-[50px] flex sm:flex-row flex-col justify-between">
      <Image
        src={profileData.picture}
        alt={""}
        width={660}
        height={327}
        className="sm:h-[727px] h-[358px] max-w-[660px] w-auto object-cover sm:p-0 p-4 "
      />
      <ShowByDataInfo
        host={profileData.host}
        showUrl={showUrl}
        description={description}
        profileName={profileShowName}
        tags={showData.tags}
        tracklist={showData.tracklist!}
        links={profileData.links}
      />
    </main>
  );
};

export default ShowByDate;
