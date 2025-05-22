import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-tan text-charcoal px-6 py-4 flex items-center justify-between">
    {/* Left spacer (optional) */}
    <div className="w-1/3" />

    {/* Centered brand */}
    <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold text-rose">
      <Link to="/">Kaia Beauty Studio</Link>
    </h1>

    {/* Right nav links */}
    <ul className="flex gap-6 text-sm uppercase w-1/3 justify-end">
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/portfolio">Portfolio</Link></li>
      <li><Link to="/book" className="text-rose font-semibold">Book</Link></li>
    </ul>
  </nav>
);

export default Navbar;
