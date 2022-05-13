import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;
function AllActivities() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/activity`)
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => console.warn("catch", error));
  }, []);

  const activities = posts.map((post) => {
    return (
      <div className="Post">
        <Link to={`/Activity/${post.id}`}>
          <h3>{post.name}</h3>
          <img className="post-picture" src={post.image} alt={post.name} width="300" height="300"></img>
        </Link>
        <p>{post.description}</p>
      </div>
    );
  });

  return <section className="AllPosts">{activities}</section>;
}

export default AllActivities;
