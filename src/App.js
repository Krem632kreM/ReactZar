import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React.JS!16
        </p>
        
      </header>
    </div>
  );
}


var x;
for (x=10; x<10;--x){
  if(x===5){
    break;
  }
}
console.log(x);

export default App;
