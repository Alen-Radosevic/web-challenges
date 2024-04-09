export default function Article({ title, label, isFavorite }) {
  return (
    <article className="article">
      <h2 className="article_title">{title}</h2>
      <label htmlFor="input-field">{label}</label>
      <input id="input-field" />
      <a
        className="article__link"
        href="https://developer.mozilla.org/en-US/docs/Web/API/Element/className"
      >
        Something about className
      </a>
      {isFavorite ? <p>Favorite</p> : null}
    </article>
  );
}
