function CreateArticle({ onSubmit }) {
  console.log("CreateArticle render");
  return (
    <>
      <h2>Create Article</h2>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          onSubmit(e.target.title.value, e.target.desc.value);
        }}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <textarea name="desc" id="desc"></textarea>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default CreateArticle;
