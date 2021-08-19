import '../style/BasePage.css';
import Header from './Header.js';

function Home() {
  return (
    <div className="main-div flex flex-column">
      <Header />
      <div className="main-content-div">
        <p>
        If you're a slow learner like me, this is your place for taking your time and understanding mechanics. Specially written for people like me who need detailed descriptions of mechanics and who feels details in videos lack attention.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut auctor lorem. Curabitur id semper odio, sed pharetra est. Nunc nec vehicula nulla, nec mollis felis. Sed facilisis, felis in vehicula laoreet, tortor lorem ornare justo, quis rutrum lorem elit nec lectus. Aliquam erat volutpat. Proin lobortis dolor nec enim dapibus accumsan. Phasellus id elit mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis ultrices nisl vitae euismod. Nulla dapibus lobortis ultrices. Donec luctus nisi sit amet magna interdum tristique ut non est.
        </p>
      </div>
      
    </div>

  );
}

export default Home;
