import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Login from './pages/Login';

function App() {
  return (
    <div className="wrapper-content">
      {/* <DemoButton />
      <DemoMainTitle />
      <DemoInput /> */}
      <Header />
      <Login />
      <HomePage />
      <div className="spacing"></div>
      <Footer />
    </div>
  );
}

export default App;
