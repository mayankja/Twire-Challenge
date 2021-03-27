import Leaderbord from './container';
import Background from './background.png'
function App() {
  return (
    <div style={{backgroundImage: `url(${Background})`, height: '800px'}}>
      <Leaderbord />
    </div>
  );
}

export default App;
