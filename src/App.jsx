import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ChatPanel from "./components/ChatPanel";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <Home />
      <ChatPanel />
    </div>
  );
}
