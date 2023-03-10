/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './App.css';
function App() {
  return (
    <div>
      <div className="App">
        <h1>Ajut Emocional</h1>
      </div>
      <div className='container'>
        <div className='card'>
          <div className='card-body'>
          
            <h5 className='card-title'> <i className="fa-solid fa-head-side-cough"></i> Dolor</h5>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>Cap</li>
              <li className='list-group-item'>Estomac</li>
              <li className='list-group-item'>Esquena</li>
              <li className='list-group-item'>General</li>
            </ul>
            <button className='btn btn-outline-primary' style={{marginTop:'10px'}} > Més accions </button>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'><i className="fa-solid fa-people-line"> </i>Necessito</h5>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'><i className="fa-solid fa-bed"></i>Dormir</li>
              <li className='list-group-item'><i className="fa-solid fa-peace"></i>Tranquilitat</li>
              <li className='list-group-item'><i className="fa-solid fa-hands-bubbles"></i>Neteja</li>
              <li className='list-group-item'><i className="fa-solid fa-toilet"></i>Lavabo</li>
            </ul>
            <a href='#' className='btn btn-outline-primary'> Més accions </a>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'><i className="fa-solid fa-people-group"></i> Família</h5>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'><i className="fa-solid fa-person-dress"></i>Dona</li>
              <li className='list-group-item'><i className="fa-solid fa-children"></i>Fills</li>
              <li className='list-group-item'><i className="fa-solid fa-person"></i>Germans</li>
              <li className='list-group-item'>No molestin</li>
            </ul>
            <a href='#' className='btn btn-outline-primary'> Més accions </a>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'><i className="fa-solid fa-file-lines"></i>Documentació</h5>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'> <i className="fa-solid fa-passport"></i>DNI</li>
              <li className='list-group-item'><i className="fa-regular fa-credit-card"></i> Targeta moneder</li>
              <li className='list-group-item'> <i className="fa-solid fa-file-medical"></i>Informes</li>
              <li className='list-group-item'>Altres</li>
            </ul>
            <a href='#' className='btn btn-outline-primary'> Més accions </a>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'><i className="fa-solid fa-comment-medical"></i> Vull</h5>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'><i className="fa-solid fa-whiskey-glass"></i>Aigua</li>
              <li className='list-group-item'> <i className="fa-solid fa-hands-bubbles"></i>Higiene</li>
              <li className='list-group-item'> <i className="fa-solid fa-plate-wheat"></i>Menjar</li>
              <li className='list-group-item'> <i className="fa-solid fa-phone"></i> Telefon</li>
            </ul>
            <a href='#' className='btn btn-outline-primary'> Més accions </a>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'> <i className="fa-solid fa-question"></i>Si/No</h5>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>Estar sol</li>
              <li className='list-group-item'><i className="fa-solid fa-bed"></i>Dormir</li>
              <li className='list-group-item'><i className="fa-solid fa-book-open-reader"></i>Llegir</li>
              <li className='list-group-item'><i className="fa-solid fa-walkie-talkie"></i>Parlar</li>
            </ul>
            <a href='#' className='btn btn-outline-primary'> Més accions </a>
          </div>
        </div>
        <code> Exemple de pantalla principal </code>
      </div>
      
    </div>

  );
}

export default App;
