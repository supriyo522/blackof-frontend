import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; //To apply toast CSS required for ToastContainer

const Navbar = React.lazy(() => import("./Components/Navbar"));
const MainContainer = React.lazy(() => import("./Components/MainContainer"));
const GetInTouch = React.lazy(() => import("./Components/GetInTouch"));
const Evolution = React.lazy(() => import("./Components/Evolution"));
const Footer = React.lazy(() => import("./Components/Footer"));

function App() {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      {/* All the main sections of website */}
      <Suspense fallback={<div className="w-full h-screen flex justify-center items-center">Loading...</div>}>
        <Navbar />
        <MainContainer />
        <Evolution />
        <GetInTouch />
        <Footer />
      </Suspense>
      {/* To get the toast notification */}
      <ToastContainer position="bottom-center" />
    </div>
  );
}

export default App;
