import "./css/main.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <>
      <ContextProvider>
        <Header />

        <Content />

        <Footer />
      </ContextProvider>
    </>
  );
}

export default App;
