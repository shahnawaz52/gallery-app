import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';

const photos = [
  'https://picsum.photos/id/237/200/200',
  'https://picsum.photos/id/238/200/200',
  'https://picsum.photos/id/239/200/200',
  'https://picsum.photos/id/240/200/200',
  'https://picsum.photos/id/241/200/200',
  'https://picsum.photos/id/242/200/200',
]

function App() {
  return (
    <div>
      <Navbar />
      <div className="container text-center mt-5">
        <h1>Gallery</h1>
        <div className="row">
          {photos.map((photo) => <Cards src={photo} />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
