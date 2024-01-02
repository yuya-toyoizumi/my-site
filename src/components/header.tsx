'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MdMenu } from "react-icons/md";

export const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  return (
    <nav className="mb-12">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex sm:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <MdMenu />
            </button>
          </div>
          <div className="flex-1 flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold">
                Yuya Toyoizumi
              </Link>
            </div>
            <div className="hidden sm:ml-12 sm:flex sm:items-center">
              <div className="space-x-6">
                <Link href="/">Home</Link>
                <Link href="/works">works</Link>
                <Link href="/posts">posts</Link>
                <Link href="/uses">uses</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden ${isMobileOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="flex flex-col pt-2 pb-6 space-y-4 border-b border-gray-200 px-2">
          <Link href="/works">works</Link>
          <Link href="/posts">posts</Link>
          <Link href="/uses">uses</Link>
        </div>
      </div>
    </nav>
  );
}
