
import { Header, Qualifications, Footer } from '../../Components';
import About from '../about'
import CourseList from '../course_list'
import ContactForm from '../contact_form';

export default function Home() {
  return (
    <>
      <Header />
        <div id="home">
          <h1>Welcome to BCE</h1>
          <h2>This is the Home Page</h2>
          <div class="img"></div>
        </div>
        <About />
        <CourseList />
        <ContactForm />
        <Qualifications />
      <Footer />
    </>
  );
}
