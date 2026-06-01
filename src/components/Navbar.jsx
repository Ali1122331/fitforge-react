function Navbar({ page, setPage }) {
  const links = ["home", "workouts", "nutrition", "progress", "contact"];

  return (
    <nav className="navbar">
      <div className="logo">🔥 FitForge</div>

      <ul>
        {links.map((item) => (
          <li
            key={item}
            onClick={() => setPage(item)}
            className={page === item ? "active" : ""}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>

      
    </nav>
  );
}

export default Navbar;