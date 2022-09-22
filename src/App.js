import './App.css';
import Component from './components/component';

function App() {
  return (
    <div className="App">
      <Component
      name = 'Bart'
      age = '12'
      image = 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
      />

<Component
      name = 'Homer'
      age = '34'
      image = 'https://static.wikia.nocookie.net/simpsons/images/0/02/Homer_Simpson_2006.png'
      />

    </div>
  );
  
}

export default App;
