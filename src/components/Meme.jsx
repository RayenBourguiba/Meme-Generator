import memesData from "../memesData.js";
import { useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/9sw43.jpg",
  });

  const [allMemeImgs, setAllMemeImgs] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImgs.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  }
  return (
    <main>
      <div className="form">
        <input type="text" className="formInput" placeholder="Top Text" />
        <input type="text" className="formInput" placeholder="Bottom Text" />
        <button className="formButton" onClick={getMemeImage}>
          Generate A New Meme Image 👻
        </button>
      </div>
      <img src={meme.randomImage} className="memeImage" />
    </main>
  );
}
