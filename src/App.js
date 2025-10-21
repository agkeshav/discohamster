import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
