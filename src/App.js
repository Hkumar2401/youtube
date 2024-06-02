import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { useSelector } from "react-redux";

function App() {
  const isDarkMode = useSelector((store) => store.config.isDarkMode);

  return (
    <div className={`App ${isDarkMode && "dark"}`}>
      <Header />
      <Body />
    </div>
  );
}

export default App;
