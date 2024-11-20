import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./loader";

const AppLayout = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Loader />;
  }
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50">
        <NavBar />
      </header>
      <main className="flex-grow bg-gray-100 text-black">
        <div className="container mx-auto px-4 py-8">
          <Outlet />
        </div>
      </main>
      <footer className="bg-black text-white">
        <Footer />
      </footer>
    </div>
  );
};

export default AppLayout;
