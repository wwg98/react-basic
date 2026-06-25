import { memo } from "react";
const Nav = memo(function Nav({ data, onChangeMode }) {
  console.log("Nav render");
  const lists = data.map(d => (
    <li key={d.id}>
      <a
        href={`/${d.id}`}
        onClick={e => {
          e.preventDefault();
          onChangeMode(d.id);
        }}>
        {d.title}
      </a>
    </li>
  ));
  return (
    <nav>
      <ul>{lists}</ul>
    </nav>
  );
});
export default Nav;
