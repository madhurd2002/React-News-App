export const Navbar = ({ category, setCategory }) => {

  const categories = [
    "technology",
    "business",
    "health",
    "sports",
    "entertainment"
  ];

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >

      <div className="container">

        {/* Logo */}
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark px-3 py-2">
            NewsPulse
          </span>
        </a>


        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        {/* Navigation Links */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >

          <ul className="navbar-nav ms-auto">

            {categories.map((item) => (

              <li className="nav-item" key={item}>

                <button
                  type="button"
                  className={
                    category === item
                      ? "nav-link active"
                      : "nav-link"
                  }
                  onClick={() => setCategory(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>

              </li>

            ))}

          </ul>

        </div>

      </div>

    </nav>
  );
};