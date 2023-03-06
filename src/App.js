import "./App.css";
import Navbar from "./components/Navbar";
import { MathJaxContext } from "better-react-mathjax";
import Questions from "./components/Questions";

function App() {
  return (
    <MathJaxContext>
      <Navbar />
      <Questions />
    </MathJaxContext>
  );
}

export default App;
