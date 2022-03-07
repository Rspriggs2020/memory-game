import './App.css';

const images = [
  {"src": "/img/traveler.jpeg"},
  {"src": "/img/paimon.png"},
  {"src": "/img/venti.webp"},
  {"src": "/img/beidou.webp"},
  {"src": "/img/Ei.webp"},
  {"src": "/img/zhongli.jpeg"}
]

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
