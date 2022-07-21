import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DemoButton from './components/demo/DemoButton';
import DemoMainTitle from './components/demo/DemoMainTitle';

function App() {
  return (
    <div className="wrapper-content">
      <Header />
      <DemoButton />
      <DemoMainTitle />

      <HomePage />
      <div className="spacing"></div>
      <Footer />
    </div>
  );
}

export default App;
