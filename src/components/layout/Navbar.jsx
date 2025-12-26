import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-5">
      <h1 className="text-xl font-bold tracking-wide">FutureMail</h1>
      <Link
        to="/login"
        className="border px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
      >
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
