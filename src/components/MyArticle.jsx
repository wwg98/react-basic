//Article 컴포넌트
function MyArticle({ title, desc, difficultyLevel, onChangeMode, onDelete }) {
  console.log("MyArticle render");
  return (
    <section>
      <article>
        <h2>{title}</h2>
        <p>{desc}</p>
        {difficultyLevel && <p>난이도 : {difficultyLevel}</p>}
      </article>
      {onChangeMode && <button onClick={onChangeMode}>수정</button>}
      {onDelete && <button onClick={onDelete}>삭제</button>}
    </section>
  );
}
export default MyArticle;
