import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const PostMaker = () => {
  const history = useHistory();
  const [text, settext] = useState("");

  const PostData = () => {
    const user = localStorage.getItem("user");
    const result = JSON.parse(user);
    // const jwt = localStorage.getItem("jwt")
    console.log(result);

    fetch(`http://localhost:3005/posts/`+ result._id,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer `+ localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        text: text
      }),
    })
      .then((res) => res.json(console.log(res)))
      .then((data) => {
        alert("post id =>"+ data._id)
        console.log(data);
        if (data.error) {
          console.log(data.error);
          
        } else {
          console.log(data.message);
          
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <h2>Linkdin</h2>
        <input
          type="text"
          placeholder="text"
          value={text}
          onChange={(e) => settext(e.target.value)}
        />

        <button onClick={() => PostData()}>Submit</button>
      </div>
    </div>
  );
};

export default PostMaker;
