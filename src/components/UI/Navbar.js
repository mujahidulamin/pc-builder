import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useRef, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { FaUserAlt } from "react-icons/fa";
import { BiMenu } from "react-icons/fa";

//navbar
const Navbar = () => {
  const { data: session } = useSession();

  console.log(session);
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const profileRef = useRef(null);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profileRef]);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <Image
                src="/images/pc-logo.png"
                alt="logo"
                height={70}
                width={70}
              />
            </Link>
          </div>

          <div className="flex items-center -mr-2 -my-2 md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md text-blue-500 ${
                mobileMenuOpen ? "bg-gray-100" : "hover:bg-gray-100"
              } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500`}
            >
              <span className="sr-only">Open menu</span>

              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${mobileMenuOpen ? "hidden" : "block"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${mobileMenuOpen ? "block" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex space-x-10">
            <div className="relative group">
              <button
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
                type="button"
                className="py-4 px-4 text-sm font-medium"
              >
                Categories
              </button>

              {isMenuOpen && (
                <div
                  onMouseEnter={() => setIsMenuOpen(true)}
                  onMouseLeave={() => setIsMenuOpen(false)}
                  className="absolute top-6 z-10 mt-2 bg-white rounded-lg shadow-lg py-1"
                >
                  <Link
                    href="/categories/cpu"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                  >
                    CPU/Processor
                  </Link>
                  <Link
                    href="/categories/motherboard"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                  >
                    Motherboard
                  </Link>
                  <Link
                    href="/categories/ram"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                  >
                    RAM
                  </Link>
                  <Link
                    href="/categories/powersupply"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                  >
                    Power Supply Unit
                  </Link>
                  <Link
                    href="/categories/storagedevice"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                  >
                    Storage Device
                  </Link>
                  <Link
                    href="/categories/monitor"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                  >
                    Monitor
                  </Link>
                  <Link
                    href="/categories/others"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                  >
                    Others
                  </Link>
                </div>
              )}
            </div>

            <div className="relative group mt-2">
              <div
                className="tooltip tooltip-bottom"
                data-tip={session?.user?.name}
              >
                {session?.user?.image ? (
                  <img
                    className="rounded-full"
                    style={{ height: "40px" }}
                    src={session?.user?.image}
                    alt=""
                  />
                ) : (
                  <div
                    className="tooltip tooltip-bottom mt-2"
                    data-tip="Profile"
                  >
                    <FaUserAlt></FaUserAlt>
                  </div>
                )}
              </div>
            </div>

            {session?.user?.email ? (
              <button
                onClick={() => signOut()}
                aria-label="Logout"
                title="Logout"
                className="btn btn-sm mt-3"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                aria-label="Log In"
                title="Log In"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 mt-3"
              >
                LogIn
              </Link>
            )}

            <button
              onClick={() => router.push("/pc-builder")}
              className="py-2 px-4  font-medium rounded-md btn text-base bg-indigo-600 hover:bg-indigo-600 text-white"
            >
              PC Builder
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="mt-4 pt-2 pb-3 space-y-1">
              <div className="relative group">
                <button
                  onClick={() => router.push("/pc-builder")}
                  type="button"
                  className="py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mr-6"
                >
                  PC Builder
                </button>

            {session?.user?.email ? (
              <button
                onClick={() => signOut()}
                aria-label="Logout"
                title="Logout"
                className="btn btn-sm mt-3"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                aria-label="Log In"
                title="Log In"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 mt-3"
              >
                LogIn
              </Link>
            )}
              </div>
              
              <div className="relative group">
                <button
                  onMouseEnter={() => setIsMenuOpen(true)}
                  onMouseLeave={() => setIsMenuOpen(false)}
                  type="button"
                  className="mt-3 text-sm font-medium"
                >
                  Categories
                </button>
                {isMenuOpen && (
                  <div
                    onMouseEnter={() => setIsMenuOpen(true)}
                    onMouseLeave={() => setIsMenuOpen(false)}
                    className="absolute top-8 z-10 mt-2 bg-white rounded-lg shadow-lg py-1"
                  >
                    <Link
                      href="/categories/cpu"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                    >
                      CPU/Processor
                    </Link>
                    <Link
                      href="/categories/motherboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                    >
                      Motherboard
                    </Link>
                    <Link
                      href="/categories/ram"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                    >
                      RAM
                    </Link>
                    <Link
                      href="/categories/powersupply"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                    >
                      Power Supply Unit
                    </Link>
                    <Link
                      href="/categories/storagedevice"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                    >
                      Storage Device
                    </Link>
                    <Link
                      href="/categories/monitor"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                    >
                      Monitor
                    </Link>
                    <Link
                      href="/categories/others"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                    >
                      Others
                    </Link>
                  </div>
                )}
              </div>

              <div className="relative group mt-2">
              <div
                className="tooltip tooltip-bottom"
                data-tip={session?.user?.name}
              >
                {session?.user?.image ? (
                  <img
                    className="rounded-full"
                    style={{ height: "40px" }}
                    src={session?.user?.image}
                    alt=""
                  />
                ) : (
                  <div
                    className="tooltip tooltip-bottom mt-2"
                    data-tip="Profile"
                  >
                    <FaUserAlt></FaUserAlt>
                  </div>
                )}
              </div>
            </div>
              
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
