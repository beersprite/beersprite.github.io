import './Page.css';
import Umbra from './assets/Images/umbragif.gif';
import Doggo from './assets/Images/doggo.jpg';
import Thancred from './assets/Images/thancred.jpg';
import Uva from './assets/Images/uva.jpg';


function Page() {
  return (
    <div className="main-div flex flex-column">


      <div className="top-div flex flex-column">
        <h1>Savage Beginner's Guide</h1>
        <h2>A very detailed guide by beersprite</h2>

        <div className="top-div flex flex-row ">

          <div className="box-fight">
            <a href="/Umbra">
              <img src={Umbra} width="150px" alt="Cloud of Darkness"></img>
            </a>
          </div>

          <div className="box-fight">
            <a href="/Litany">
              <img src={Doggo} height="150px" alt="Shadowkeeper"></img>
            </a>
          </div>

          <div className="box-fight">
            <a href="/Anamorphosis">
              <img src={Thancred} height="150px" alt="Fatebreaker"></img>
            </a>
          </div>

          <div className="box-fight">
            <a href="/Eternity">
              <img src={Uva} height="150px" alt="Eden's Promise"></img>
            </a>
          </div>



        </div>



      </div>

      <p>     Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
      </p>

    </div>

  );
}

export default Page;
