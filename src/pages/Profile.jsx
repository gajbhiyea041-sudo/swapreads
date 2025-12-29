function Profile() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#020617",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        padding: "40px"
      }}
    >
      <div
        style={{
          backgroundColor: "#020617",
          border: "1px solid #1e293b",
          borderRadius: "16px",
          padding: "32px",
          width: "100%",
          maxWidth: "420px",
          textAlign: "center",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
        }}
      >
        {/* Avatar */}
        <img
          src="https://i.imgur.com/8Km9tLL.png"
          alt="profile"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            marginBottom: "16px",
            border: "3px solid #facc15"
          }}
        />

        <h2
          style={{
            fontFamily: "serif",
            fontSize: "26px",
            marginBottom: "6px"
          }}
        >
          Akira
        </h2>

        <p style={{ color: "#94a3b8", marginBottom: "24px" }}>
          Book Lover • SwapReads Member
        </p>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginBottom: "28px"
          }}
        >
          <div
            style={{
              border: "1px solid #1e293b",
              borderRadius: "12px",
              padding: "16px"
            }}
          >
            <h3 style={{ fontSize: "22px", color: "#facc15" }}>4</h3>
            <p style={{ color: "#94a3b8", fontSize: "14px" }}>
              Books Shared
            </p>
          </div>

          <div
            style={{
              border: "1px solid #1e293b",
              borderRadius: "12px",
              padding: "16px"
            }}
          >
            <h3 style={{ fontSize: "22px", color: "#facc15" }}>2</h3>
            <p style={{ color: "#94a3b8", fontSize: "14px" }}>
              Swaps Done
            </p>
          </div>
        </div>

        {/* Button */}
        <button
          style={{
            padding: "12px 20px",
            backgroundColor: "#facc15",
            color: "#020617",
            border: "none",
            borderRadius: "8px",
            fontWeight: "600",
            cursor: "pointer"
          }}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
