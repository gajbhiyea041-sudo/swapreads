import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    backgroundColor: "#020617",
    padding: "18px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };

  const logoStyle = {
    color: "white",
    fontSize: "24px",
    fontWeight: "700",
    fontFamily: "serif"
  };

  const linkStyle = {
    color: "#e5e7eb",
    textDecoration: "none",
    marginLeft: "24px",
    fontWeight: "500"
  };

  return (
    <div style={navStyle}>
      <div style={logoStyle}>SwapReads 📚</div>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/browse" style={linkStyle}>Browse</Link>
        <Link to="/add" style={linkStyle}>Add Book</Link>
        <Link to="/profile" style={linkStyle}>Profile</Link>
      </div>
    </div>
  );
}

export default Navbar;
