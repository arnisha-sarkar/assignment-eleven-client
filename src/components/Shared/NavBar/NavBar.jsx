import { useContext } from "react";
import Container from "../Container";
import { Link } from "react-router";
import { AuthContext } from "../../../providers/AuthContext";
import toast from "react-hot-toast";
import { ClockLoader } from "react-spinners";
import MyLink from "../../LInks/MyLink";
import logo from "../../../assets/logo.jpg";
const NavBar = () => {
  const { user, setUser, signOutFun, loading, setLoadin } =
    useContext(AuthContext);
  console.log(user);
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
  console.log(loading);
  return (
    <>
      <Container>
        <div className="navbar shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            {/* <a className="btn btn-ghost text-xl">Garments Order</a> */}
            <img className="w-[100px] h-[100px]" src={logo} alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
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
          <div className="navbar-end">
            {loading ? (
              <ClockLoader />
            ) : user ? (
              <div className="text-center space-y-3">
                {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
                {/* For TSX uncomment the commented types below */}
                <button
                  className="btn"
                  popoverTarget="popover-1"
                  style={
                    { anchorName: "--anchor-1" } /* as React.CSSProperties */
                  }
                >
                  <img
                    src={user?.photoURL}
                    className="h-[40px] w-[40px] rounded-full mx-auto"
                    alt=""
                  />
                </button>

                <div
                  className="dropdown menu w-40 rounded-box bg-base-100 shadow-sm"
                  popover="auto"
                  id="popover-1"
                  style={
                    {
                      positionAnchor: "--anchor-1",
                    } /* as React.CSSProperties */
                  }
                >
                  {/* <h2 className="text-xl font-semibold">{user?.displayName}</h2> */}
                  {/* <p className="text-white/80">{user?.email}</p> */}
                  <Link
                    to="/dashboard"
                    className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="my-btn mt-4 font-semibold"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <MyLink
                  to="/login"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold text-gray-600"
                >
                  Login
                </MyLink>

                <MyLink
                  to="/signup"
                  className="px-4 py-3  transition font-semibold text-gray-600"
                >
                  Register
                </MyLink>
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default NavBar;
