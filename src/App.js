import './App.css';
import ParentComponent from './PureComponent/ParentComponent';
import Count from './HOC/Count';
import Count1 from './HOC/Count1';


function App() {
  return (
    <div className="App">
     <h1>Pure Component && HOC</h1>
     
     <ParentComponent/>
     <h1>HOC</h1>
     <Count></Count>
     <Count1></Count1>
    </div>
  );
}

export default App;