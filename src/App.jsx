import react from "react";
import Home from "./components/Home/home";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import MovieDetail from "./components/MovieDetails/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import {BrowserRouter as Router, Route,  Routes} from "react-router-dom";
import "./App.scss";

function App () {
return (
<div className="app">
 <Router>
    <Header/>
    <div className="container">
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/movie/:imdbID" exact element={<MovieDetail/>}/>
    <Route element={<PageNotFound/>}/>
    </Routes>
    </div>
    <Footer/>
 </Router>
</div>)
}
export default App;