import Image from "next/image";

interface ShowDetailsProps {
  params: {
    slug: string;
    picture: string;
  };
}

const ShowDetails = ({ params }: ShowDetailsProps) => {
  return (
    <main>
      <h1>{params.slug}</h1>
      <Image src={params.picture} alt={""} width={100} height={100}></Image>
    </main>
  );
};

export default ShowDetails;
