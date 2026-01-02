import BookRow from "../components/BookRow";

export default function Home() {
  return (
    <div className="home-dashboard">
      <div className="search-bar">
        <input placeholder="Search for books" />
        <button>Search</button>
      </div>

      <div className="categories">
        {["All", "Fiction", "Romance", "Fantasy", "Mystery"].map(
          (cat) => (
            <span key={cat}>{cat}</span>
          )
        )}
      </div>

      <BookRow title="Popular Books" />
      <BookRow title="Best Sellers" />
    </div>
  );
}
