import './App.css';

import CardList from './components/Card/CardList';
import TitleSection from './components/TitleSection/TitleSection';
import NavBar from './Layout/NavBar/NavBar';




function App() {
  return (
    <div className="App">
      <NavBar />
      <TitleSection>
        Stays in Finland
      </TitleSection>
      <CardList />
    </div>
  );
}

export default App;
