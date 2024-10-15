"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, Bell, Search, Radar } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ModeToggle } from "./mode-toggle";
import { motion } from "framer-motion"; // Import framer-motion for animations
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavItems = () => (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="hover:text-primary"
      >
        <Link to="/jobs" className="text-base font-bold ml-4">
          All Jobs
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="hover:text-primary"
      >
        <Link to="/about" className="text-base font-bold ml-4">
          About
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="hover:text-primary"
      >
        <Link to="/contact" className="text-base font-bold ml-4">
          Contact
        </Link>
      </motion.div>
    </>
  );

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 flex items-center"
            >
              <Radar className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">JOBLink</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavItems />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* Dark/Light Mode */}
            <div>
              <ModeToggle />
            </div>

            {/* User Menu and Notifications */}
            <div className="hidden md:flex items-center space-x-4">
              {/* notifications */}
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>

              <div>
                {/* Clerk Signed Out */}
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button variant="ghost" size="icon">
                      <User className="h-5 w-5" />
                    </Button>
                  </SignInButton>
                </SignedOut>

                {/* Clerk Signed In */}
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              {/* Dark/Light Mode */}
              <div>
                <ModeToggle />
              </div>

              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent
                as={motion.div}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", bounce: 0.3, duration: 0.7 }}
                side="right"
              >
                <div className="flex flex-col space-y-4 mt-4">
                  <NavItems />
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search jobs..."
                      className="pl-8"
                    />
                  </div>
                  <Button variant="ghost" className="justify-start">
                    <Bell className="h-5 w-5 mr-2" />
                    Notifications
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <User className="h-5 w-5 mr-2" />
                    My Account
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
