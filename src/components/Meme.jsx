export default function Meme() {
  return (
    <main>
      <form className="form">
        <input type="text" className="formInput" placeholder="Top Text" />
        <input type="text" className="formInput" placeholder="Bottom Text" />
        <button className="formButton">Generate A New Meme Image 👻</button>
      </form>
    </main>
  );
}
