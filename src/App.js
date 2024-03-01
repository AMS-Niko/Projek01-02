import { Routes, Route, Link} from 'react-router-dom';
import './index.css';
import LoginSignup from './LoginSignup'; // Import komponen LoginSignup


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/login-signup">Login</Link>
        <Link to="/contact">Contact Us</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/login-signup" element={<LoginSignup />} />

      </Routes>
    </div>
  );
}


function Home () {
  return (
    <section  className="px-10 py-10">
      <h1>Home Page</h1>
    </section>
  )
}

function AboutUs () {
  return (
    <section  className="px-10 py-10">
      <h1> About Us</h1>
      <Link to="/login-signup">Go to Login/Signup</Link> 

    </section>
  )
}

function ContactUs () {
  return (
    <section className="px-10 py-10">
      <h1>Contact Us</h1>
    </section>
  )
}


export default App;
