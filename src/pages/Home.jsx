function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #020617, #0f172a)",
        color: "white",
        padding: "80px 60px"
      }}
    >
      {/* HERO SECTION */}
      <div
        style={{
          maxWidth: "900px",
          marginBottom: "80px"
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            fontWeight: "700",
            lineHeight: "1.2",
            marginBottom: "20px",
            fontFamily: "serif"
          }}
        >
          Discover. Swap.  
          <br /> Fall in love with books again 📖
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#cbd5f5",
            maxWidth: "600px",
            marginBottom: "40px"
          }}
        >
          SwapReads is a community-driven platform where readers exchange books,
          explore new stories, and build meaningful reading habits together.
        </p>

        <div>
          <button
            style={{
              padding: "14px 28px",
              fontSize: "16px",
              backgroundColor: "#facc15",
              color: "#020617",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
              marginRight: "16px"
            }}
          >
            Browse Books
          </button>

          <button
            style={{
              padding: "14px 28px",
              fontSize: "16px",
              backgroundColor: "transparent",
              color: "white",
              border: "1px solid #94a3b8",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Add Your Book
          </button>
        </div>
      </div>

      {/* FEATURE STRIP */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "30px"
        }}
      >
        {[
          { title: "📚 Swap Books", text: "Exchange books you’ve read for new stories." },
          { title: "🔍 Discover", text: "Find books shared by readers like you." },
          { title: "🤝 Community", text: "Connect with readers & build your profile." },
          { title: "🌱 Sustainable", text: "Reuse books. Reduce waste. Read more." }
        ].map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#020617",
              border: "1px solid #1e293b",
              padding: "28px",
              borderRadius: "12px"
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>{item.title}</h3>
            <p style={{ color: "#cbd5f5", fontSize: "15px" }}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
