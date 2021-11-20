import '../App.css'
import Connections from '../components/Connections';



const Home = () => {
  return (
    <div className="container">
      <Connections />
      <div className="usersImages">
        <h1>Home</h1>
      </div>
      <div className="suggestions"></div>
    </div>
  );
}

export default Home;