import '../App.css'
import Connections from '../components/Connections';


const Home = () => {
  return (
    <div className="container">
      <h1>Home</h1>
      <Connections />
      <div className="feed"></div>
    </div>
  );
}

export default Home;