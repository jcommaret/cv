import React from 'react'
import logo from './img/moi.JPG';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div class="pane">
        <img src={logo} className="rounded" alt="logo" />
        <h2>Je suis Jérôme Commaret</h2>
        <p>J'ai fait ma scolarité à <a href="http://www.hetic.net">Hétic</a>, ce qui m'a apporté des compétences transversales de la chaine de production web</p>
        <p>J'aime beaucoup Meteor.js, mais je sais travailler avec Wordpress, Symfony, React.js, React-native, Angular...</p>
        <p>J'écris des articles technique sur <a href="https://medium.com/meteor-in-french">Meteor JS</a></p>
        <p>Vous pouvez également trouver mes projets personnels sur <a href="https://github.com/jcommaret">Github</a></p> 
        <p>Une des preuves de concept iOS que j'ai développée a été récompensée d'un mobile marketing awards en 2010</p>
        <p>L'équipe dont j'étais responsable a été classée dans les 50 meilleurs sur plus de 2000 par Google lors d'un challenge étudiant</p>
        <p>Si vous voulez en savoir plus allez sur mon <a href="https://fr.linkedin.com/in/jcommaret">LinkedIn</a></p>
      </div>
    </div>
  );
}

export default App;
