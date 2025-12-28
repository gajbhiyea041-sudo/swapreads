import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 40px",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
      }}
    >
      <h2 style={{ color: "white", margin: 0 }}>SwapReads 📚</h2>

      <div style={{ display: "flex", gap: "24px" }}>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/browse">Browse</Link>
        <Link style={linkStyle} to="/add">Add Book</Link>
        <Link style={linkStyle} to="/profile">Profile</Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
};

export default Navbar;
