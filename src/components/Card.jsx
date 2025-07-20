export default function Card({ darkMode, title, children }) {
  return (
    <div className={`card ${darkMode ? "card--dark" : "card--light"}`}>
      <div className="card__header">{title}</div>
      <div className="card__body">{children}</div>
    </div>
  );
}
