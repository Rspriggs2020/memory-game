import './App.css';

const images = {
  //6 images
}

function App() {
  //turn cards / 12 cards

  const turnCards = () => {
    const turnCards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
  }


  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button>New Game</button>
    </div>
  );
}

export default App;
