import Footer from "../src/components/footer/Footer";
import Navigation from "../src/components/navbar/Navigation";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
