//Article 컴포넌트
function MyArticle({ title, desc }) {
  return (
    <section>
      <article>
        <h2>{title}</h2>
        <p>{desc}</p>
      </article>
    </section>
  );
}
export default MyArticle;
