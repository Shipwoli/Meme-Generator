import React, { useState, useEffect } from 'react';

const MyMemes = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch('https://api.npoint.io/de5e266a6f5b0dc8a592')
      .then(response => response.json())
      .then(data => setMemes(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container my-4">
      <h2>My Memes</h2>
      {memes.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Image URL</th>
              <th>Date Published</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {memes.map(meme => (
              <tr key={meme.id}>
                <td>{meme.id}</td>
                <td>{meme.title}</td>
                <td><img src={meme.imageUrl} alt={meme.title} className="img-thumbnail" /></td>
                <td>{meme.datePublished}</td>
                <td>
                  <button className="btn btn-primary">Edit</button>
                  <button className="btn btn-danger ml-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>You haven't added any memes yet.</p>
      )}
    </div>
  );
};

export default MyMemes;
