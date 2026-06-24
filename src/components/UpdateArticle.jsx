import { useState } from "react";

function UpdateArticle({ title, desc, difficultyLevel, onSubmit }) {
  console.log("UpdateArticle render");
  const [content, setContent] = useState({
    title: title,
    desc: desc,
    difficultyLevel: difficultyLevel,
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setContent(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <>
      <h2>Update Article</h2>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          onSubmit(content.title, content.desc, content.difficultyLevel);
        }}>
        <div>
          <label htmlFor="title">title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={content.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="desc">desc</label>
          <textarea name="desc" id="desc" value={content.desc} onChange={handleChange}></textarea>
        </div>
        <div>
          <label htmlFor="difficultyLevel">difficultyLevel</label>
          <input
            type="number"
            name="difficultyLevel"
            id="difficultyLevel"
            min="1"
            max="10"
            value={content.difficultyLevel}
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
export default UpdateArticle;
