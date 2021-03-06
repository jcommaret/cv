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
          <p className="id">Jรฉrรดme Commaret</p>
          <p className="id">Fullstack Developer</p>
        </div>

        <div className="block">
          <h3>Background</h3>  
          <p>๐ : 2010 <b>-</b><a href="http://www.hetic.net">Hรฉtic</a>- MSC - Master : Information Technology Management and Engineering</p>
          <p>๐ : 2021 (will have certificate)<b>-</b> <a href="https://www.edx.org">Georgia Tech - Innovation Leadership</a></p>
          <p>๐ : Since 2016 : Blogging about <a href="https://medium.com/meteor-in-french">Meteor</a></p>
          <p>๐จโ๐ป : Meteor, if not : Wordpress, Symfony, React.js, React-native, Angular...</p>
          <p>โ๏ธ : TypeScript, Javascript, jQuery, Git, Gulp, Webpack, php, scss, sass, all struff like that</p>
        </div>

        <div className="block">  
          <h3>Awards :</h3>
          <p>๐ : Behind a proof of concept who led to a Mobile Marketing Awards for GDF Suez - 2010 </p>
          <p>๐ : Google Online Marketing Challenge 2010 - Top 50 over 2000 Campaign</p>
        </div>

        <div className="block">
          <h3>Others stuffs</h3>
          <p>๐ฆ : LinkedIn Open Networker - 4k+ : <a href="https://fr.linkedin.com/in/jcommaret">LinkedIn</a></p>
        </div>

        <div className="block">  
          <h3>Leisure :</h3>
          <p>๐ธ : Photograph </p>
          <p>๐โโ๏ธ : Model Bodypositive</p>
          <p>๐ธ : Attended to many music festival</p>
          <p>๐ฎ : Mario Kart, Zelda, Need For Speed Hot Pursuit, Mario Odyssey</p>
          <p>๐จ : Enjoy museum, street Arts</p>
          <p>๐ญ : Played tragedy and comedy </p>
        </div>
        <SimpleSlider></SimpleSlider> 
      </div>
    </div>
  );
}

export default App;
