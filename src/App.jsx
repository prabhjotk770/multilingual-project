import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="app-layout">
      <Header />
      <Search />
      <Footer />
    </div>
  );
}
