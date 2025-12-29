import { useState } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddBook = async (e) => {
    e.preventDefault();

    if (!auth.currentUser) {
      alert("Please login first");
      return;
    }

    if (!title || !author) {
      alert("Fill all fields");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "books"), {
        title,
        author,
        userId: auth.currentUser.uid,
        userName: auth.currentUser.displayName,
        createdAt: serverTimestamp(),
      });

      setTitle("");
      setAuthor("");
      alert("Book added successfully 📚");
    } catch (err) {
      console.error(err);
      alert("Failed to add book");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#020617",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        padding: "40px",
      }}
    >
      <form
        onSubmit={handleAddBook}
        style={{
          backgroundColor: "#020617",
          border: "1px solid #1e293b",
          borderRadius: "16px",
          padding: "32px",
          width: "100%",
          maxWidth: "420px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
        }}
      >
        <h2 style={{ marginBottom: "20px", fontFamily: "serif" }}>
          Add a Book 📖
        </h2>

        <input
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={inputStyle}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#facc15",
            color: "#020617",
            border: "none",
            borderRadius: "8px",
            fontWeight: "600",
            cursor: "pointer",
            marginTop: "16px",
          }}
        >
          {loading ? "Adding..." : "Add Book"}
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "14px",
  borderRadius: "8px",
  border: "1px solid #1e293b",
  backgroundColor: "#020617",
  color: "white",
};

export default AddBook;
