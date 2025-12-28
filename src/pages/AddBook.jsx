import { useState } from "react";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [condition, setCondition] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Book added (UI only for now)");
    setTitle("");
    setAuthor("");
    setCondition("");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "14px",
          width: "100%",
          maxWidth: "420px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Add a Book 📘</h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label>Book Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label>Condition</label>
            <select
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              required
            >
              <option value="">Select condition</option>
              <option value="New">New</option>
              <option value="Good">Good</option>
              <option value="Used">Used</option>
            </select>
          </div>

          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
