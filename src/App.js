import React from 'react'
import logo from './img/moi.JPG';
import './App.scss';
import './Animation.scss';
import SimpleSlider from './Slider'

function App() {
  return (
    <div className="App">
      <div className="pane">
        <div className="block">
          <img src={logo} className="rounded" alt="logo" />
          <p className="id">Jérôme Commaret</p>
          <p className="id">Fullstack Developer</p>
        </div>

        <div className="block">
          <h3>Background</h3>  
          <p>📚 : 2021 <b>-</b> <a href="https://www.edx.org">Georgia Tech - Innovation Leadership</a></p>
          <p>🎓 : 2010 <b>-</b> <a href="http://www.hetic.net">Hétic</a>- MSC - Master : Information Technology Management and Engineering</p>
          <p>👨‍💻 : Wordpress, Symfony, React, Angular...</p>
          <p>⚙️ : TypeScript, Javascript, jQuery, Git, Gulp, Webpack, PHP, Sass, all struff like that</p>
        </div>

        <div className="block">  
          <h3>Awards :</h3>
          <p>🏆 : Behind a proof of concept who led to a Mobile Marketing Awards for GDF Suez - 2010 </p>
          <p>🏆 : Google Online Marketing Challenge 2010 - Top 50 over 2000 Campaign</p>
        </div>

        <div className="block">
          <h3>Others stuffs</h3>
          <p>🦁 : LinkedIn Open Networker - 4k+ : <a href="https://fr.linkedin.com/in/jcommaret">LinkedIn</a></p>
        </div>

        <div className="block">  
          <h3>Leisure :</h3>
          <p>📸 : Photograph </p>
          <p>🙋‍♂️ : Model Bodypositive</p>
          <p>🎸 : Attended to many music festival</p>
          <p>🎮 : Mario Kart, Zelda, Need For Speed Hot Pursuit, Mario Odyssey</p>
          <p>🎨 : Enjoy museum, street Arts</p>
          <p>🎭 : Played tragedy and comedy </p>
        </div>
        <SimpleSlider></SimpleSlider> 
      </div>
    </div>
  );
}

export default App;
