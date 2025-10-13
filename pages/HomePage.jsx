import HomeLayout from "../layout/HomeLayout";
import HeroSection from "../src/components/heroSection/HeroSection";
import InfoSection from "../src/components/infoSection/InfoSection";

const HomePage = () => {
  return (
    <>
      <HomeLayout>
        <HeroSection />
        <InfoSection />
      </HomeLayout>
    </>
  );
};

export default HomePage;
