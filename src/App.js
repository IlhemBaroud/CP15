import logo from './logo.svg';
import './style.css'
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Adress';

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName className='nom'/>
      <Adress />
    </div>
  );
}

export default App;
