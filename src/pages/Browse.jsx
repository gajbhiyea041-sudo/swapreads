function Browse() {
  const books = [
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "Atomic Habits", author: "James Clear" },
    { title: "Ikigai", author: "Héctor García" },
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
    { title: "The Psychology of Money", author: "Morgan Housel" },
    { title: "Think Like a Monk", author: "Jay Shetty" }
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#020617",
        padding: "60px",
        color: "white"
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "10px",
          fontFamily: "serif"
        }}
      >
        Browse Books 📚
      </h1>

      <p style={{ color: "#94a3b8", marginBottom: "40px" }}>
        Explore books shared by readers in the SwapReads community
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "30px"
        }}
      >
        {books.map((book, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#020617",
              border: "1px solid #1e293b",
              borderRadius: "14px",
              padding: "24px",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.borderColor = "#facc15";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "#1e293b";
            }}
          >
            <div
              style={{
                height: "180px",
                background:
                  "linear-gradient(135deg, #1e293b, #020617)",
                borderRadius: "10px",
                marginBottom: "16px"
              }}
            />

            <h3 style={{ marginBottom: "6px" }}>{book.title}</h3>
            <p style={{ color: "#94a3b8", fontSize: "14px" }}>
              {book.author}
            </p>

            <button
              style={{
                marginTop: "14px",
                padding: "10px 14px",
                backgroundColor: "#facc15",
                color: "#020617",
                border: "none",
                borderRadius: "6px",
                fontWeight: "600",
                cursor: "pointer"
              }}
            >
              Request Swap
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Browse;
