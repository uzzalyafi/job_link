import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <div>
      {/* Light Mode Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>

      {/* Dark Mode Background */}
      <div className="absolute inset-0 hidden dark:block dark:bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      {/* Main content */}
      <main className="relative z-10">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default Root;
