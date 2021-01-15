import './App.css';
import React from "react";
import Fullname from './Profile/Allprofil'
import Photo from './Profile/images/oussama.jpg'
import Alert from './Profile/Hand'

function App() {
  return (
    <div className="App">
      <Fullname name='Mahamed Oussama Boussetta'></Fullname>
<img src={Photo} alt='PhotoDeProfil' width= '150px'/>
      <Fullname bio='Student Fullstack ReactJs in Go My Code '></Fullname>
      <Fullname profession='Propriétaire de Valhalla Virtual Escape Game  '></Fullname>

<Alert/>
    </div>



  );
}

export default App;
