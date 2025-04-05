import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import PageNotFound from "./pages/PageNotFound";
import Contact from "./pages/Contact";
import Service from "./pages/Service";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />}>
            <Route path=":id" element={<Home />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          {/* <Route path="/*" element={<PageNotFound />} /> */}
          {/* <Route path="/*" element={<Navigate to="/" />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
