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

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="formInput"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="formInput"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="formButton" onClick={getMemeImage}>
          Generate A New Meme Image 👻
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="memeImage" />
        <h2 className="memeText top">{meme.topText}</h2>
        <h2 className="memeText bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
