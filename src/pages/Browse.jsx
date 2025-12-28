function Browse() {
  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      condition: "Good",
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      condition: "Used",
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      condition: "New",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "40px",
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>Browse Books 📚</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {books.map((book, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Condition: {book.condition}</p>
            <button style={{ marginTop: "10px" }}>Request Swap</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Browse;
