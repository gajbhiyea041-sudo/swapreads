function AddBook() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#020617",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        color: "white"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "460px",
          backgroundColor: "#020617",
          border: "1px solid #1e293b",
          borderRadius: "16px",
          padding: "32px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
        }}
      >
        <h2
          style={{
            fontFamily: "serif",
            fontSize: "28px",
            marginBottom: "10px"
          }}
        >
          Add a Book 📘
        </h2>

        <p style={{ color: "#94a3b8", marginBottom: "28px" }}>
          Share a book with the SwapReads community
        </p>

        {/* Title */}
        <div style={{ marginBottom: "18px" }}>
          <label style={{ color: "#cbd5f5", fontSize: "14px" }}>
            Book Title
          </label>
          <input
            type="text"
            placeholder="Eg. Atomic Habits"
            style={inputStyle}
          />
        </div>

        {/* Author */}
        <div style={{ marginBottom: "18px" }}>
          <label style={{ color: "#cbd5f5", fontSize: "14px" }}>
            Author
          </label>
          <input
            type="text"
            placeholder="Eg. James Clear"
            style={inputStyle}
          />
        </div>

        {/* Condition */}
        <div style={{ marginBottom: "26px" }}>
          <label style={{ color: "#cbd5f5", fontSize: "14px" }}>
            Condition
          </label>
          <select style={inputStyle}>
            <option>New</option>
            <option>Good</option>
            <option>Used</option>
          </select>
        </div>

        {/* Button */}
        <button
          style={{
            width: "100%",
            padding: "14px",
            backgroundColor: "#facc15",
            color: "#020617",
            border: "none",
            borderRadius: "8px",
            fontWeight: "600",
            cursor: "pointer"
          }}
        >
          Add Book
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  marginTop: "6px",
  backgroundColor: "#020617",
  border: "1px solid #1e293b",
  borderRadius: "8px",
  color: "white",
  outline: "none"
};

export default AddBook;
