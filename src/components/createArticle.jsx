function CreateArticle() {
  return (
    <>
      <h2>Create Article</h2>
      <form action="">
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <textarea name="" id="desc"></textarea>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default CreateArticle;
