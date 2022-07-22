import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DemoButton from './components/demo/DemoButton';
import DemoMainTitle from './components/demo/DemoMainTitle';
import DemoInput from './components/demo/DemoInput';
import Login from './pages/Login';

function App() {
  return (
    <div className="wrapper-content">
      <DemoButton />
      <DemoMainTitle />
      <DemoInput />
      <Header />
      <Login />
      <HomePage />
      <div className="spacing"></div>
      <Footer />
    </div>
  );
}

export default App;
