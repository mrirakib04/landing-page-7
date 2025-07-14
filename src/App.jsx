import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Trending from "./components/Trending";
import Price from "./components/Price";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-[1480px] mx-auto w-full flex flex-col items-center">
      <Header></Header>
      <Categories></Categories>
      <Trending></Trending>
      <Price></Price>
      <div className="w-full bg-[#FFDC26]/50 flex flex-col items-center pt-40 md:mt-40 mt-96 relative">
        <Newsletter></Newsletter>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
