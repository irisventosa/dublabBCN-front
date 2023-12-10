interface ShowRelatedToProfileProps {
  params: {
    date: string;
  };
}

const ShowRelatedToProfile = ({ params }: ShowRelatedToProfileProps) => {
  return <p>{params.date}</p>;
};

export default ShowRelatedToProfile;
