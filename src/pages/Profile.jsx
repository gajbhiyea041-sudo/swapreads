import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

function Profile() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({ booksShared: 0, swapsDone: 0 });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        // ensure user doc exists
        const userRef = doc(db, "users", currentUser.uid);
        const snap = await getDoc(userRef);
        if (!snap.exists()) {
          await setDoc(userRef, {
            name: currentUser.displayName,
            email: currentUser.email,
            photo: currentUser.photoURL,
            booksShared: 0,
            swapsDone: 0,
          });
        }

        // count books shared by this user
        const q = query(
          collection(db, "books"),
          where("userId", "==", currentUser.uid)
        );
        const booksSnap = await getDocs(q);
        setStats((s) => ({ ...s, booksShared: booksSnap.size }));
      } else {
        setUser(null);
        setStats({ booksShared: 0, swapsDone: 0 });
      }
    });

    return () => unsub();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err) {
      alert("Login failed");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
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
      <div
        style={{
          backgroundColor: "#020617",
          border: "1px solid #1e293b",
          borderRadius: "16px",
          padding: "32px",
          width: "100%",
          maxWidth: "420px",
          textAlign: "center",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
        }}
      >
        <img
          src={user?.photoURL || "https://i.imgur.com/8Km9tLL.png"}
          alt="profile"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            marginBottom: "16px",
            border: "3px solid #facc15",
          }}
        />

        <h2 style={{ fontFamily: "serif", fontSize: "26px", marginBottom: "6px" }}>
          {user ? user.displayName : "Guest User"}
        </h2>

        <p style={{ color: "#94a3b8", marginBottom: "24px" }}>
          {user ? user.email : "Book Lover • SwapReads Member"}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              border: "1px solid #1e293b",
              borderRadius: "12px",
              padding: "16px",
            }}
          >
            <h3 style={{ fontSize: "22px", color: "#facc15" }}>
              {stats.booksShared}
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "14px" }}>Books Shared</p>
          </div>

          <div
            style={{
              border: "1px solid #1e293b",
              borderRadius: "12px",
              padding: "16px",
            }}
          >
            <h3 style={{ fontSize: "22px", color: "#facc15" }}>
              {stats.swapsDone}
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "14px" }}>Swaps Done</p>
          </div>
        </div>

        {!user ? (
          <button
            onClick={handleGoogleLogin}
            style={{
              padding: "12px 20px",
              backgroundColor: "#facc15",
              color: "#020617",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Sign in with Google
          </button>
        ) : (
          <button
            onClick={handleLogout}
            style={{
              padding: "12px 20px",
              backgroundColor: "#1e293b",
              color: "#facc15",
              border: "1px solid #facc15",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Profile;
