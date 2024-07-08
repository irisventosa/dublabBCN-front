import BsideInfo from "@/app/components/BsideDetailedContent";
import extractUrlForEmbedPlayer from "@/app/lib/extractUrlForEmbedPlayer";
import useDublabApi from "@/app/lib/hooks/useDublabApi";
import { Metadata } from "next";
import Image from "next/image";

interface BSideDetailsProps {
  params: {
    slug: string;
  };
}

export const generateMetadata = ({ params }: BSideDetailsProps): Metadata => {
  const transformFirstLetter = (firstLetter: string) => {
    return firstLetter.toUpperCase();
  };

  const capitalizeWords = (showName: string) => {
    const formatedShowName = showName
      .replace(/\b\w/g, transformFirstLetter)
      .replace("-", " ");

    return formatedShowName;
  };

  const slug = capitalizeWords(params.slug.replace("-", " "));

  return {
    title: `${slug} | dublab`,
    description: `Escolta l'arxiu del en directe del programa ${slug}`,
  };
};

const BsideDetails = async ({ params }: BSideDetailsProps) => {
  const { getBsideData } = useDublabApi();
  const bside = await getBsideData(params.slug);

  if (!bside) return <div>Loading...</div>;

  const showUrl = extractUrlForEmbedPlayer(bside.mixcloud_url);
  const description = {
    __html: bside.description,
  };

  return (
    <main className="mt-[219px]  gap-[50px] flex sm:flex-row flex-col  bg-black text-white">
      <Image
        src={bside.picture}
        alt={""}
        width={660}
        height={327}
        className="h-[727px] object-cover"
      />
      <BsideInfo
        showUrl={showUrl}
        description={description}
        name={bside.name}
        tags={bside.tags}
        tracklist={bside.tracklist}
      />
    </main>
  );
};

export default BsideDetails;
