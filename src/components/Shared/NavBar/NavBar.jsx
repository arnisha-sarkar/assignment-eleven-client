// import { useContext } from "react";
// import Container from "../Container";
// import { Link } from "react-router";
// import { AuthContext } from "../../../providers/AuthContext";
// import toast from "react-hot-toast";
// import { ClockLoader } from "react-spinners";
// import MyLink from "../../LInks/MyLink";
// import logo from "../../../assets/logo.jpg";
// const NavBar = () => {
//   const { user, setUser, signOutFun, loading, setLoadin } =
//     useContext(AuthContext);
//   console.log(user);
//   const handleSignOut = () => {
//     signOutFun()
//       .then(() => {
//         toast.success("Signout successful");
//         setUser(null);
//       })
//       .catch((e) => {
//         toast.error(e.message);
//       });
//   };
//   console.log(loading);
//   return (
//     <>
//       <div className="bg-[#F5F2EE]">
//         <Container>
//           <div className="navbar">
//             <div className="navbar-start ">
//               <div className="dropdown">
//                 <div
//                   tabIndex={0}
//                   role="button"
//                   className="btn btn-ghost lg:hidden"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     {" "}
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4 6h16M4 12h8m-8 6h16"
//                     />{" "}
//                   </svg>
//                 </div>
//                 <ul
//                   tabIndex="-1"
//                   className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//                 >
//                   <li>
//                     <a>Item 1</a>
//                   </li>
//                   <li>
//                     <a>Parent</a>
//                     <ul className="p-2">
//                       <li>
//                         <a>Submenu 1</a>
//                       </li>
//                       <li>
//                         <a>Submenu 2</a>
//                       </li>
//                     </ul>
//                   </li>
//                   <li>
//                     <a>Item 3</a>
//                   </li>
//                 </ul>
//               </div>
//               {/* <a className="btn btn-ghost text-xl">Garments Order</a> */}
//               <img className="w-[100px] h-[100px]" src={logo} alt="" />
//             </div>
//             <div className="navbar-center hidden lg:flex">
//               <ul className="menu menu-horizontal px-1">
//                 <li>
//                   <MyLink to="/">Home</MyLink>
//                 </li>
//                 <li>
//                   <MyLink to="/all-product">All-Product</MyLink>
//                 </li>
//                 {!user && (
//                   <>
//                     <li>
//                       <MyLink to="/about-us">About Us</MyLink>
//                     </li>
//                     <li>
//                       <MyLink to="/contact">Contact</MyLink>
//                     </li>
//                   </>
//                 )}
//               </ul>
//             </div>
//             <div className="navbar-end">
//               {loading ? (
//                 <ClockLoader />
//               ) : user ? (
//                 <div className="text-center space-y-3">
//                   <button
//                     className="btn"
//                     popoverTarget="popover-1"
//                     style={{ anchorName: "--anchor-1" }}
//                   >
//                     <img
//                       src={user?.photoURL}
//                       className="h-[40px] w-[40px] rounded-full mx-auto"
//                       alt=""
//                     />
//                   </button>

//                   <div
//                     className="dropdown menu w-40 rounded-box bg-base-100 shadow-sm"
//                     popover="auto"
//                     id="popover-1"
//                     style={{
//                       positionAnchor: "--anchor-1",
//                     }}
//                   >
//                     <Link
//                       to="/dashboard"
//                       className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
//                     >
//                       Dashboard
//                     </Link>
//                     <button
//                       onClick={handleSignOut}
//                       className="my-btn mt-4 font-semibold"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <div>
//                   <MyLink
//                     to="/login"
//                     className="px-4 py-3 hover:bg-neutral-100 transition font-semibold text-gray-600"
//                   >
//                     Sign in
//                   </MyLink>

//                   {/* <MyLink
//                     to="/signup"
//                     className="px-4 py-3  transition font-semibold text-gray-600"
//                   >
//                     Register
//                   </MyLink> */}
//                 </div>
//               )}
//             </div>
//           </div>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default NavBar;

// ---------------------------------------

import Container from "../Container";
import { Link } from "react-router";
import { AuthContext } from "../../../providers/AuthContext";
import toast from "react-hot-toast";
import { ClockLoader } from "react-spinners";
import MyLink from "../../LInks/MyLink";
import logo from "../../../assets/logo.png";
import ThemeToggleBtn from "../../ThemeToggleBtn";
import { useContext } from "react";

const NavBar = ({ theme, setTheme }) => {
  const { user, setUser, signOutFun, loading } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutFun()
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="bg-[#F5F2EE] dark:bg-[#0A2540] sticky top-0 z-50 shadow-sm">
      <Container>
        <div className="navbar px-0 py-2">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden text-[#0A2540] dark:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-[#F5F2EE] dark:bg-[#0A2540]  text-[#0A2540] dark:text-white rounded-box z-1 mt-3 w-52 p-2 shadow border border-gray-100"
              >
                <li>
                  <MyLink to="/">Home</MyLink>
                </li>
                <li>
                  <MyLink to="/all-product">All-Product</MyLink>
                </li>
                {!user && (
                  <>
                    <li>
                      <MyLink to="/about-us">About Us</MyLink>
                    </li>
                    <li>
                      <MyLink to="/contact">Contact</MyLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <Link to="/">
              <img
                className="w-32 object-contain 
               brightness-0 opacity-90 
               dark:brightness-0 dark:invert"
                src={logo}
                alt="Logo"
              />
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-4 font-medium text-[#0A2540] uppercase text-[13px] tracking-wider">
              <li>
                <MyLink to="/">Home</MyLink>
              </li>
              <li>
                <MyLink to="/all-product">Collections</MyLink>
              </li>
              {user ? (
                <>
                  <li>
                    <MyLink to="/moments">Moments</MyLink>
                  </li>
                  <li>
                    <MyLink to="/brand">Brand</MyLink>
                  </li>
                  <li>
                    <MyLink to="/faq">FAQ</MyLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <MyLink to="/about-us">About</MyLink>
                  </li>
                  <li>
                    <MyLink to="/contact">Contact</MyLink>
                  </li>
                </>
              )}
              {/* {!user && (
                <>
                  <li>
                    <MyLink to="/about-us">About</MyLink>
                  </li>
                  <li>
                    <MyLink to="/contact">Contact</MyLink>
                  </li>
                </>
              )} */}
            </ul>
          </div>

          <div className="navbar-end gap-3">
            {/* Auth Section */}
            <div className="flex items-center mr-6">
              {loading ? (
                <ClockLoader size={20} color="#0A2540" />
              ) : user ? (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="avatar flex items-center justify-center gap-3.5 p-3 hover:bg-[#EDE9E3] dark:hover:bg-[#133150] cursor-pointer"
                  >
                    <div className="w-8 rounded-full ring \ ring-offset-2 ring-offset-[#F5F2EE]">
                      <img src={user?.photoURL} alt="User" />
                    </div>
                    <h2 className="dark:text-[#FFFFFF] text-[#1A1A1A] text-sm font-medium">
                      Account
                    </h2>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-[#F5F2EE] dark:bg-[#133150] text-[#0A2540] rounded-box z-[1] w-48 p-2 shadow-xl border border-gray-100 mt-4"
                  >
                    <li>
                      <Link
                        to="/dashboard"
                        className="hover:bg-[#C9A24D] dark:text-white hover:text-white py-2"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleSignOut}
                        className=" dark:text-white hover:bg-[#B38F40] py-2"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="text-[#1A1A1A] dark:text-[#FFFFFF] font-semibold hover:text-[#C9A24D] transition text-sm mr-2"
                >
                  Sign in
                </Link>
              )}
            </div>

            {/* Action Buttons (ইমেজের মত ডিজাইন) */}
            <div className="flex items-center gap-2">
              {/* Shopping Bag Button */}
              {/* <button className="w-10 h-10 flex items-center justify-center bg-[#28C7FA] hover:bg-[#1eb1e0] text-black rounded-lg transition-all shadow-sm">
                <HiOutlineShoppingBag size={22} />
              </button> */}

              {/* Dark/Light Mode Toggle Button */}
              {/* <button
                onClick={toggleDarkMode}
                className="w-10 h-10 flex items-center justify-center bg-[#C9A24D] hover:bg-[#B38F40] text-black rounded-lg transition-all shadow-sm"
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDark ? (
                  <HiOutlineSun size={22} className="animate-pulse" />
                ) : (
                  <HiOutlineMoon size={22} />
                )}
              </button> */}
              <ThemeToggleBtn theme={theme} setTheme={setTheme} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
