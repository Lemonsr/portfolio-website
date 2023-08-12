import React from 'react';
import "./App.scss";
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import MyProjects from './components/MyProjects/MyProjects';
import MyArtworks from './components/MyArtworks/MyArtworks';
import ContactMe from './components/ContactMe/ContactMe';
// import Card from './components/Card/Card';
// import cardConfigs from './components/Card/cardDescriptions';

function App() {
  // Takes initial value.
  // Define two outputs yourself (variable, set variable).
  const [cookies, setCookies] = React.useState(0);

  return (
    <div className="main-page">
      <NavBar />
      <Home />
      <AboutMe />
      <MyProjects />
      <MyArtworks />
      <ContactMe />
      {/* <h1>Hi</h1>
      <Card imageData={cardConfigs[0]}/>
      <Card imageData={cardConfigs[1]}/>
      <h3>Cookies:</h3>
      <p>{cookies}</p>
      <button onClick={() => setCookies(cookies + 1)}>Add cookie</button> */}
    </div>
  )
}

export default App;