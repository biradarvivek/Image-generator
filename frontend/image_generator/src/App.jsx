import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import logo from "./assets/logo.jpg";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <header className="w-full flex justify-between items-center sm:px-8 px-4 py-4 border-b bg-orange-200 border-b-[#e6ebf4]">
          <Link to="/">
            <img
              className="w-20 object-contain"
              src="https://static-00.iconduck.com/assets.00/openai-icon-2021x2048-4rpe5x7n.png"
              alt="logo"
            />
          </Link>
          <Link
            to="/create-post"
            className=" font-sans font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
          >
            + Create new Post
          </Link>
        </header>
        <main className="flex sm:p-8 px-4 py-8 w-full bg-slate-400 min-h-[calc(100vh-73px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
