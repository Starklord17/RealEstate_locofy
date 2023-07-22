import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import AreaContainer from "../components/area-container";
import FeatureContainer from "../components/feature-container";
import RentPropertiesContainer from "../components/rent-properties-container";
import Contact from "../components/contact";
import RentPropertiesForm from "../components/rent-properties-form";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Discover your perfect home" />
      </Head>
      <div className="relative bg-gray-white w-full flex flex-col items-center justify-start">
        <Header hamburger={false} />
        <Hero />
        <AreaContainer />
        <FeatureContainer />
        <RentPropertiesContainer />
        <div className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px]">
          <Contact />
          <RentPropertiesForm />
          <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start">
            <div className="relative text-base leading-[24px] font-medium font-body-regular-500 text-gray-white text-center">
              Load more listing
            </div>
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
