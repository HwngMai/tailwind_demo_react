import "./App.css";
import Content from "./Components/Content/Content";
import NavBar from "./Components/NavBar/NavBar";
import Slogan from "./Components/Slogan/Slogan";

function App() {
  return (
    <div className='font-sora overflow-y-auto overflow-x-hidden h-screen px-4 py-8 bg-gradient-to-b from-purple-900 to-purple-700 text-white'>
      <NavBar />
      <Slogan />
      <Content />
    </div>
  );
}

export default App;
