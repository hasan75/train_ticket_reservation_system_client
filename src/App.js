import './App.css';
import Header from './components/Header/Header';
import ContextProvider from './contexts/ContextProvider';
import MultiForm from './pages/MultiForm/MultiForm';

function App() {
  return (
    <div className='App'>
      <ContextProvider>
        <Header />
        <MultiForm />
      </ContextProvider>
    </div>
  );
}

export default App;
