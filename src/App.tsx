import './App.scss';

function App() {

  return (
    <div className="container">
      <div className="row">
        

        <div className="column column-100">
          <h1>Andre Merchant</h1>
          <p>Software Engineer
    <br />
          <small>próximamente</small>
          </p>

          <nav className="row row-wrap">
            <a href="https://drive.google.com/file/d/1aBl0x7GLH5VCyRZhFSN4VeN9-9I_T_ok/view?usp=sharing" className="button">Resume 2026</a>
            {/* <a href="#" className="button">Ver CV web</a> */}
            <a target="_blank" href="https://github.com/andrerchant" className="button">Github</a>
            <a target="_blank" href="https://www.linkedin.com/in/andremerchant/" className="button">LinkedIn</a>
          </nav>
        </div>

        
      </div>
    </div>
  );
}

export default App;