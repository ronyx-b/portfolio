import './App.css';
import { Portfolio } from './Portfolio';

function App() {
  return (
    <div className="App">
      <header className="position-relative" style={{ backgroundImage: 'url("./img/mitchell-luo-FWoq_ldWlNQ-unsplash.jpg")' }}>
        <h1 className="position-absolute top-50 start-50 translate-middle fw-bold">Rony Boscan: Portfolio</h1>
      </header>
      <main>
        <Portfolio />
      </main>
      <footer>
        <div className="position-relative" style={{height: "150px"}}>
          <div className="position-absolute top-50 start-50 translate-middle">
            <div className="container-sm d-flex fs-3">
              <a className="m-3" href="https://github.com/ronyx-b" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
              <a className="m-3" href="https://www.linkedin.com/in/ronyboscan/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
              <a className="m-3" href="http://www.instagram.com/ronyboscan" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
              <a className="m-3" href="https://www.facebook.com/ronyboscan" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
              <a className="m-3" href="https://twitter.com/ronyx" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
            </div>
            <div>
              <div className="text-center">&copy; { (new Date()).getFullYear() } Rony Boscan</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
