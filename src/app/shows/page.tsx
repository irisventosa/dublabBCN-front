import ProfilesList from "../components/ProfilesList";
import useDublabApi from "../lib/hooks/useDublabApi";

const ShowProfilesList = async () => {
  const { getProfiles } = useDublabApi();
  const apiProfilesList = await getProfiles();

  return (
    <main>
      <ProfilesList profiles={apiProfilesList} />
    </main>
  );
};

export default ShowProfilesList;
