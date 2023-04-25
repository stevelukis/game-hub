import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const platforms = usePlatforms();
  return platforms?.data.results.find((p) => p.id === id);
};

export default usePlatform;
