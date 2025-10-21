import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Info from "./components/Info";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Info/>
      <Footer />
    </div>
  );
}

export default App;
