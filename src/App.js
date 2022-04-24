import { Routes, Route } from "react-router-dom";

// Import components
import Layout from "./pages/Layout"
import Photo from "./pages/Photo";
import Film from "./pages/Film";
import Contact from "./pages/Contact";

import './App.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Photo />} />
                    <Route path="film" element={<Film />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </div>
    );
}
export default App;