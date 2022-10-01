/* Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!

Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside
const barraNavegacao = (
  <nav>
    <h1 className="header">Site de teste</h1>
    <ul>
      <li>Preço</li>
      <li>Sobre</li>
      <li>Contato</li>
    </ul>
  </nav>
);

ReactDOM.render(barraNavegacao, document.getElementById("root"));
-----------------------------------------------------------------------------------------------------------
function Page() {
  return (
    <div>
      <header>
        <nav>
          <img src="./react-logo.png" width="50" />
        </nav>
      </header>
      <h1>Motivos Pelos Quais Estou Aprendendo React</h1>
      <ol>
        <li>Preciso para a IC</li>
        <li>Agregara ao meu curriculo </li>
      </ol>
      <footer>© 2022 JoaoJoaoVF development. All rights reserved.</footer>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));


function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./react-logo.png" width="40px" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div>
      <h1>Motivos Pelos Quais Estou Aprendendo React</h1>
      <ol>
        <li>Preciso para a IC</li>
        <li>Agregara ao meu curriculo </li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <footer>
        <small>© 2021 JoaoJoaoVF development. All rights reserved.</small>
      </footer>
    </div>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
*/

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./react-logo.png" className="nav-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2021 Ziroll development. All rights reserved.</small>
    </footer>
  );
}

function MainContent() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </div>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
