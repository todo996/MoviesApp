import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ onSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [textSearch, setTextSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = textSearch.trim();

    if (!keyword) return;

    if (onSearch) {
      onSearch(keyword);
    }

    navigate(`/search?q=${encodeURIComponent(keyword)}`);
    setMenuOpen(false);
  };

  const navClass = ({ isActive }) =>
    `text-sm px-4 py-2 rounded-md transition-all duration-200 ${
      isActive ? "bg-white text-black" : "text-white hover:bg-white/10"
    }`;

  return (
    <header className="w-full bg-black text-white border-b border-white/10">
      <div className="mx-auto flex h-17 max-w-360 items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Logo */}
        <Link to="/" className="text-xl font-medium shrink-0">
          TioMovie
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 rounded-xl border border-gray-700 px-4 py-2">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/movies" className={navClass}>
            Movie & Shows
          </NavLink>

          <NavLink to="/support" className={navClass}>
            Support
          </NavLink>
        </div>

        {/* Desktop search */}
        <form onSubmit={handleSubmit} className="hidden md:block">
          <input
            type="text"
            placeholder="Search"
            value={textSearch}
            onChange={(e) => setTextSearch(e.target.value)}
            className="h-10 w-40 rounded-md border border-white/20 bg-transparent px-3 text-white outline-none placeholder:text-white/50 focus:border-white/40 lg:w-52"
          />
        </form>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden rounded-md border border-white/20 px-3 py-2 text-sm"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 px-4 pb-4 pt-3">
          <div className="flex flex-col gap-2">
            <NavLink
              to="/"
              className={navClass}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/movies"
              className={navClass}
              onClick={() => setMenuOpen(false)}
            >
              Movie & Shows
            </NavLink>

            <NavLink
              to="/support"
              className={navClass}
              onClick={() => setMenuOpen(false)}
            >
              Support
            </NavLink>
          </div>

          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="text"
              placeholder="Search"
              value={textSearch}
              onChange={(e) => setTextSearch(e.target.value)}
              className="h-10 w-full rounded-md border border-white/20 bg-transparent px-3 text-white outline-none placeholder:text-white/50 focus:border-white/40"
            />
          </form>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func,
};

export default Header;