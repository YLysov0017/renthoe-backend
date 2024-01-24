import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopBar from "./components/topbar.jsx";
import Main from "./components/main.jsx";
import Reviews from "./components/reviews.jsx";
import Search from "./components/search.jsx";
import Results from "./components/results.jsx";
import Rent from "./components/rent.jsx";
import About from "./components/about.jsx";
import Contacts from "./components/contacts.jsx";
import FAQ from "./components/faq.jsx";
import Acsept from "./components/rent-acsept.jsx";

const ReactDOM = require("react-dom/client");
const React = require("react");

const Bottom = require("./components/bottom.jsx");
const Services = require("./components/services.jsx")
const Service = require("./components/service.jsx")  


ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <BrowserRouter>
        <TopBar/>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="reviews" element={<Reviews/>}/>
            <Route path="services" element={<Services/>}/>
            <Route path="service" element={<Service/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="results" element={<Results/>}/>
            <Route path="rent" element={<Rent/>}/>
            <Route path="rent-acsept" element={<Acsept/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contacts" element={<Contacts/>}/>
            <Route path="faq" element={<FAQ/>}/>
            <Route path="*" element={<p>Что ты тут делаешь?</p>}/>
        </Routes>
        <Bottom/>
    </BrowserRouter>
);