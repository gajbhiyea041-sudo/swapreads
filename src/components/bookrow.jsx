export default function BookRow({ title }) {
  return (
    <div className="book-row">
      <h3>{title}</h3>

      <div className="book-scroll">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="book-card">
            <div className="cover"></div>
            <p>Book Title</p>
            <span>Author</span>
          </div>
        ))}
      </div>
    </div>
  );
}
