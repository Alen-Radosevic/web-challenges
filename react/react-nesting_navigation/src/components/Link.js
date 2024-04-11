export default function Link({ children, propHref }) {
  return (
    <a className="navigation__link" href={propHref}>
      {children}
    </a>
  );
}
