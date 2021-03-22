import React from 'react'
import logo from './img/moi.JPG';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="pane">
        <div className="block identity">
          <img src={logo} className="rounded" alt="logo" />
          <p>Jérôme Commaret</p>
          <p>Fullstack Developer</p>
        </div>
        
        <div className="block">
          <h3>Background</h3>  
          <p>🎓 : 2010 <b>-</b><a href="http://www.hetic.net">Hétic</a>- MSC - Master : Information Technology Management and Engineering</p>
          <p>📚 : 2021 (will have certificate)<b>-</b> <a href="https://www.edx.org">Harvard - Technology Entrepreneurship: Lab to Market</a></p>
          <p>📚 : 2021 (will have certificate)<b>-</b> <a href="https://www.edx.org">Georgia Tech - Innovation Leadership</a></p>
          <p>⚙️ : Tech Agnostic, with a special interest in <b>-</b> Meteor, able to work with Wordpress, Symfony, React.js, React-native, Angular</p>
          <p>📝 : Blogging about meteor since 2016 (in French)<a href="https://medium.com/meteor-in-french"></a></p>
        </div>

        <div className="block">  
          <h3>Awards :</h3>
          <p>🏆 : Behind a proof of concept who led to a Mobile Marketing Awards for GDF Suez - 2010 </p>
          <p>🏆 : Google Online Marketing Challenge 2010 - Top 50 over 2000 Campaign</p>
        </div>

        <div className="block">
          <h3>Others stuffs</h3>
          <p>🦁 : LinkedIn Open Networker - 4k+ : <a href="https://fr.linkedin.com/in/jcommaret">LinkedIn</a></p>
          <h3>Recommandations</h3>
          <p><quote>- Ce fut un plaisir de travailler avec Jerome dans le cadre de la plateforme Preditt. Ses compétences et son écoute ont permis d'atteindre nos objectifs ! <br/> Julien - CEO Preditt</quote></p>
          <p><quote>- I had the pleasure to work with Jérôme and if you need someone who has great managerial skills and who is also a technical profile, you should definitely hire him. His knowledge of the production chain makes him great at doing what he does. He is a person who can adapt and learn quickly, and his mobile / e-commerce and localisation skills, makes him a valuable person in every teams, to build really great digital product. <br/> Rhose - Product Owner - The Coca Cola Company</quote></p>
          <p><quote>- Je n'ai pas rencontré beaucoup de personnes comme Jérôme dans ma carrière. J’ai eu l'occasion de travailler avec lui pendant 6 mois alors qu'il était "Web and Mobile Project Manager" chez Régime Coach et nous avons collaboré sur des projets d’envergure. C'est un geek assumé, qui paradoxalement a su faire preuve d'une grande pédagogie et de proximité avec les équipes métiers. Très au fait de l'écosystème dans lequel il a développé ses domaines de compétences, Jérôme est un expert en gestion de projets digitaux tant sur le plan technique que stratégique. Il est également capable d'une grande adaptabilité qui peut se révéler un véritable atout pour toute entreprise qui l'emploierait.<br/>Nathalie Davis - Directrice Europe des Services de Coaching - Groupe Dukan</quote></p>
          <p><quote>- J'ai toujours connu Jérôme avec des idées fraîches, créatives et ambitieuses. Nous avons eu l'occasion de travailler ensemble pour le compte d'un de mes projets, sur des problématiques techniques et marketing pointues. Faire l'expérience de ses talents et expertises n'a pas été une surprise, Jérôme est quelqu'un de vraiment très très fiable et passionné par son métier. C'est le genre de personne qui pousse les autres vers le haut et qui le fait avec beaucoup de sentiments et de modestie.<br/> Camille - CEO - Galopeo</quote></p>
          <p><quote>- J'ai eu l'occasion de travailler sur plusieurs projets avec Jérôme en tant que responsable éditorial. Ce dernier est toujours à l'écoute des demandes qui lui sont faites. Extrêmement compétent dans son domaine, il sait être pédagogue quand il le faut. Il sait prioriser et travaille toujours avec beaucoup de sérieux et d'enthousiasme. Ses connaissances des nouvelles technologies et des nouveaux media font de lui un élément indispensable pour une entreprise. Il sait relever les challenges qui lui sont proposés.<br/> Sonya - Freelance - Consultante en communication et Marketing</quote></p>  
          <p><quote>- Jérôme est un excellent graphiste en plus d'être un expert en marketing et référencement web. Il a toujours de bons conseils et de bonnes idées. De plus, il est toujours de souriant quel que soit le temps. C'est toujours plaisant de travailler à ces côtés ! <br/> Julien - Developpeur Web - Media Factory</quote></p>  
          
        </div>
        
      </div>
    </div>
  );
}

export default App;
