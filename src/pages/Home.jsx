import Sidebar from "../components/sidebar";
import BookRow from "../components/bookrow";
import ChatPanel from "../components/chatpanel";

function Home() {
  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content">
        <BookRow title="Popular Books" />
        <BookRow title="Recently Added" />
        <BookRow title="Recommended for You" />
      </main>

      <ChatPanel />
    </div>
  );
}

export default Home;
