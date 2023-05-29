import { NavLink } from "react-router-dom";

export const Header = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "red" : "black",
    textDecoration: isActive ? "underline" : "none",
    borderRight: isActive ? "4px solid black" : "0"
  });

  const NavLinks = [
    {
      id: 1,
      Name: "Inbox",
      Link: "/"
    },
    {
      id: 2,
      Name: "Spam",
      Link: "/spam"
    },
    {
      id: 3,
      Name: "Trash",
      Link: "/trash"
    }
  ];

  return (
    <div>
      <div className="header">
        <nav>
          {NavLinks.map(({ Name, Link, id }) => (
            <div className="navItem" key={id}>
              <NavLink to={Link} style={getActiveStyle}>
                {Name}
              </NavLink>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};
