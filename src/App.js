import './App.css';
import Header from "./Items/header/Header";
import Home from "./Components/home/Home";
import Features from "./Components/features/Features";
import About_Us from "./Components/about_us/About_Us";

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <Features/>
            <About_Us/>
        </div>
    );
}

export default App;
