import React from "react";

export default function Posts() {

  const postsUser = [
    {
      userUrl: "assets/img/meowed.svg",
      username: "meowed",
      postUrl: "assets/img/gato-telefone.svg",
      postAlt: "gato-telefone",
      likeUrl: "assets/img/respondeai.svg",
      likeUser: "respondeai",
      likeCounter: "101.523",
    },
    {
      userUrl: "assets/img/barked.svg",
      username: "barked",
      postUrl: "assets/img/dog.svg",
      postAlt: "dog",
      likeUrl: "assets/img/adorable_animals.svg",
      likeUser: "adorable_animals",
      likeCounter: "99.159",
    }, {
      userUrl: "assets/img/meowed.svg",
      username: "cats",
      postUrl: "assets/img/gato-telefone.svg",
      postAlt: "gato-telefone",
      likeUrl: "assets/img/respondeai.svg",
      likeUser: "niihdfr",
      likeCounter: "101.523",
    }
  ];

  return (
    <div className="posts">
      {postsUser.map((post, index) => (
        <Post
          key={index}
          userUrl={post.userUrl}
          username={post.username}
          postUrl={post.postUrl}
          postAlt={post.postAlt}
          likeUrl={post.likeUrl}
          likeUser={post.likeUser}
          likeCounter={post.likeCounter}
          activeLike={false}
        />
      ))}
    </div>
  );
}

function Post(props) {
  const [liked, setLiked] = React.useState(props.activeLike);
  const [heart, setHeart] = React.useState(props.activeLike ? "heart" : "heart-outline");
  const [saved, setSaved] = React.useState(false);
  const [likeCounter, setLikeCounter] = React.useState(parseInt(props.likeCounter.replace(/\./g, ""), 10));

  function likePost() {
    if (liked) {
      setLiked(false);
      setHeart("heart-outline");
      setLikeCounter(likeCounter - 1);
    } else {
      setLiked(true);
      setHeart("heart");
      setLikeCounter(likeCounter + 1); 
    }
  }

  function likeImage() {
    if (!liked) {
      setLiked(true);
      setHeart("heart");
      setLikeCounter(likeCounter + 1);
    }
  }

  function toggleSavePost() {
    setSaved(!saved);
  }

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.userUrl} alt={props.username} />
          {props.username}
        </div>

        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img 
          onClick={likeImage} 
          src={props.postUrl} 
          alt={props.postAlt} 
        />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              onClick={likePost}
              className={`${heart} ${liked ? "liked" : ""}`}
              name={heart}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              onClick={toggleSavePost}
              name={saved ? "bookmark" : "bookmark-outline"}
            ></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={props.likeUrl} alt={props.likeUser} />
          <div className="texto">
            Curtido por <strong>{props.likeUser}</strong> e{" "}
            <strong>outras {likeCounter.toLocaleString()}</strong> pessoas
          </div>
        </div>
      </div>
    </div>
  );
}
