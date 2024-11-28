import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import EngineerRecommendation from "./components/recommendedEngineer";
import { Helmet } from "react-helmet";
import BookRecommendationCompenent from "./components/bookRecommendationComponent";
import FilmRecommendationCompenent from "./components/filmRecommendationComponent";

export default function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Shadeys Recommendations</title>
      </Helmet>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/bookRecommendation" element={<BookRecommendationCompenent/>}/>
          <Route path="/filmRecommendation" element={<FilmRecommendationCompenent/>}/>
          <Route path="/engineerRecommendation" element={<EngineerRecommendation/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

