import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { useState } from "react";

const Navbar = () => {
  const [showSignin, setShowSignin] = useState(false);

  const handaleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignin(false);
    }
  };

  return (
    <nav>
      <div className="flex items-center justify-between max-w-6xl mx-auto p-5">
        <div className="logo font-bold text-2xl">JOBLink</div>
        <div className="flex items-center justify-between space-x-5">
          {/* Dark/Light Mode toggle */}
          <div>
            <ModeToggle />
          </div>

          {/* Click Sign in */}
          <div>
            {/* Not Sign in */}
            <SignedOut>
              <Button onClick={() => setShowSignin(true)}>Login</Button>
            </SignedOut>
            {/* Sign in btn click */}
            {showSignin && (
              <div
                onClick={handaleOverlayClick}
                className="fixed flex items-center justify-center inset-0 z-50 bg-black/80 dark:bg-slate-500/80"
              >
                <SignIn />
              </div>
            )}
            {/* Sign in */}

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
