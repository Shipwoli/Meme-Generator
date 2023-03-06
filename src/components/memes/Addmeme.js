import { useState } from "react";
import axios from "axios";

const AddMeme = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [datePublished, setDatePublished] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://api.npoint.io/0f2bb8241816fdc5b20b", {
        title,
        imageUrl,
        datePublished,
      });
      setTitle("");
      setImageUrl("");
      setDatePublished("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter meme title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="imageUrl" className="form-label">
          Image URL
        </label>
        <input
          type="text"
          className="form-control"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Enter image URL"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="datePublished" className="form-label">
          Date Published
        </label>
        <input
          type="date"
          className="form-control"
          id="datePublished"
          value={datePublished}
          onChange={(e) => setDatePublished(e.target.value)}
          placeholder="Enter date published"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Meme
      </button>
    </form>
  );
};

export default AddMeme;
