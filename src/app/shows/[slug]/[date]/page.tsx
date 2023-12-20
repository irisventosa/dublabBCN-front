interface ShowByDateProps {
  params: {
    date: string;
  };
}

const ShowByDate = ({ params }: ShowByDateProps) => {
  return <p>{params.date}</p>;
};

export default ShowByDate;
