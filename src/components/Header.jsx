import logo from "../assets/logoFrog.png";
export default function Header() {
  return (
    <header className="header">
      <img src={logo} className="headerImage" />
      <h1 className="headerTitle">Meme Generator</h1>
      <h4 className="headerAuthor">
        Made with &#9825; by{" "}
        <a href="https://www.linkedin.com/in/rayen-bourguiba/" target="_blank" className="authorLink">
          Rayen
        </a>
      </h4>
    </header>
  );
}
