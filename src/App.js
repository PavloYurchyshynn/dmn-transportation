import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import MainButton from './components/MainButton/MainButton';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app__container'>
        <h1 className='app__container__title'>We are hiring!</h1>
        <h2 className='app__container__subtitle'>THE ROAD IS YOUR SECOND HOME? JOIN US!</h2>
        <Main />
        <h1 className='app__container__titleSecond'>Or send all needed information directly to our HR department</h1>
        <MainButton text={'APPLY NOW'} isArrow={true} />
      </div>
    </div>
  );
}

export default App;
