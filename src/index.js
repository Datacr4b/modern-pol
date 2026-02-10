import { createRoot } from "react-dom/client";
import App from "./components/app";
import Question from "./components/question";
import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Results from "./components/results";

const domNode = document.querySelector("#root");
const root = createRoot(domNode);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/test" element={<Question />} />
            <Route path="/results" element={<Results />} />
        </Routes>
    </BrowserRouter>
);
