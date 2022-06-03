import * as React from 'react';
import "./PageHome.css";


export default function Home() {
  return (
    <>

    <div id="Home">
      <div id='listProgramas'>
        <div id='Software'>
          <h2>Agenda - Programas Habilitados</h2>
          <h4></h4>
          <input type="text" />
        </div>
        <h3>02 de junho</h3>
        <ul id='programas'>
          <li><img src="src\components\Pictures\Rectangle 11.png" alt="" />A cada 5 almoçoes ganhe um Sneakees!</li>
          <li><img src="src\components\Pictures\Rectangle 19.png" alt="" />Ganhe uma fruta a sua escolha!</li>
          <li><img src="src\components\Pictures\Rectangle 20.png" alt="" />Peça 5 sobremesas e ganhe 1 churros!</li>
        </ul>
      </div>
    </div>
    </>
  );
}
