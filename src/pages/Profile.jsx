function Profile() {
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
          textAlign: "center",
        }}
      >
        <img
          src="https://avatars.githubusercontent.com/u/9919?v=4"
          alt="anime profile"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            marginBottom: "15px",
            objectFit: "cover",
          }}
        />

        <h2>Akira</h2>
        <p style={{ color: "#666" }}>Anime & Book Enthusiast 📘🔥</p>

        <div style={{ marginTop: "20px", textAlign: "left" }}>
          <p><strong>Books Shared:</strong> 4</p>
          <p><strong>Books Requested:</strong> 1</p>
          <p><strong>Favorite Genre:</strong> Fiction</p>
        </div>

        <button style={{ marginTop: "20px" }}>Edit Profile</button>
      </div>
    </div>
  );
}

export default Profile;
