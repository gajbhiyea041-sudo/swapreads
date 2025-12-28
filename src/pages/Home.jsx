function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
        color: "white",
        padding: "20px",
      }}
    >
      <div style={{ maxWidth: "600px", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "15px" }}>
          Welcome to SwapReads 📚
        </h1>

        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          A place where book lovers connect, swap books, and share stories.
        </p>

        <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
          <a href="/browse">
            <button>Browse Books</button>
          </a>

          <a href="/add">
            <button>Add a Book</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
