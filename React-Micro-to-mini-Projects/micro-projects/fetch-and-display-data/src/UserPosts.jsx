import React, { useEffect, useState } from "react";

function UserPosts({ userId }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    setError("");
    setPosts([]);

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch posts");
        return res.json();
      })
      .then((data) => {
        if (!ignore) {
          setPosts(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!ignore) {
          setError("Error fetching posts.");
          setLoading(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, [userId]);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (posts.length === 0) return <p>No posts found for this user.</p>;

  return (
    <div>
      <h3>User {userId} Posts</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <b>{post.title}</b>
            <br />
            <span>{post.body}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPosts