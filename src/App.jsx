import './App.css';
import { Header, Qualifications, Footer } from './Components';
import Home from './pages/home'
import About from './pages/about'
import CourseList from './pages/course_list'
import ContactForm from './pages/contact_form';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <CourseList />
      <ContactForm />
      <Qualifications />
      <Footer />
    </>
  );
}

export default App;
