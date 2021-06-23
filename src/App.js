import './App.css';
import Header from "./Items/header/Header";
import Home from "./Components/home/Home";
import Features from "./Components/features/Features";
import About_Us from "./Components/about_us/About_Us";
import Menu from "./Components/menu/Menu";
import Take from "./Components/take/Take";
import Testimonial from "./Components/testimonial/Testimonial";
import Contact from "./Components/contact/Contact";
import Footer from "./Items/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <Features/>
            <About_Us/>
            <Menu/>
            <Take/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
