import Header from "./Components/Header";
import Banner from "./Components/Banner";
import DownContainer from "./Components/DownContainer";
// import Tabs from "./Components/Tabs";
import DownContainer2 from "./Components/DownContainer2";
import CardsTab from "./Components/CardsTab";
import Code from "./Components/Code";
import Questions from "./Components/Questions";
import TermsAndCondition from "./Components/TermsAndCondition";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <DownContainer />
      {/* <Tabs/> */}
      <DownContainer2 />
      <CardsTab />
      <Code />
      <Questions />
      <TermsAndCondition />
      <Footer />
    </>
  );
}

export default App;
