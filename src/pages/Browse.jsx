import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

function Browse() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "books"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const booksData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBooks(booksData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#020617",
        color: "white",
        padding: "40px",
      }}
    >
      <h1 style={{ fontFamily: "serif", marginBottom: "24px" }}>
        Browse Books 📚
      </h1>

      {books.length === 0 ? (
        <p style={{ color: "#94a3b8" }}>
          No books added yet.
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {books.map((book) => (
            <div
              key={book.id}
              style={{
                border: "1px solid #1e293b",
                borderRadius: "14px",
                padding: "20px",
                backgroundColor: "#020617",
                boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
              }}
            >
              <h3 style={{ marginBottom: "6px" }}>
                {book.title}
              </h3>
              <p style={{ color: "#94a3b8", marginBottom: "12px" }}>
                by {book.author}
              </p>

              <p style={{ fontSize: "13px", color: "#64748b" }}>
                Added by {book.userName}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Browse;
