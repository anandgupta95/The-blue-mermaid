import React from 'react';

// Header Component
function Header() {
  return (
    <header>
      <nav>
        <h1>Education Website</h1>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section>
      <h1>Learn from the Best</h1>
      <p>We offer a wide range of courses for students of all levels.</p>
    </section>
  );
}

// Course List Component
function CourseList() {
  return (
    <section>
      <h2>Our Courses</h2>
      <ul>
        <li>React Fundamentals</li>
        <li>Node.js Fundamentals</li>
        <li>JavaScript Fundamentals</li>
        <li>CSS Fundamentals</li>
      </ul>
    </section>
  );
}

// Course Details Component
function CourseDetails({ match }) {
  return (
    <section>
      <h2>{match.params.courseName}</h2>
      <p>This course will cover the fundamentals of React and its applications.</p>
    </section>
  );
}

// About Us Component
function AboutUs() {
  return (
    <section>
      <h2>About Us</h2>
      <p>We are a team of experienced educators who are passionate about teaching and helping students reach their full potential.</p>
    </section>
  );
}

// Testimonial Component
function Testimonials() {
  return (
    <section>
      <h2>What our students say</h2>
      <blockquote>
        <p>"I have learned so much from this course and the instructors are amazing!"</p>
        <cite>- John Doe</cite>
      </blockquote>
      <blockquote>
        <p>"This was one of the best learning experiences I've had."</p>
        <cite>- Jane Doe</cite>
      </blockquote>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer>
      <p>&copy; Education Website 2023</p>
      <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Use</a></li>
      </ul>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <CourseList />
      <AboutUs />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App





// App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header';
import HeroSection from './HeroSection';
import CourseList from './CourseList';
import CourseDetails from './CourseDetails';
import AboutUs from './AboutUs';
import Testimonials from './Testimonials';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HeroSection />
          <CourseList />
          <AboutUs />
          <Testimonials />
        </Route>
        <Route path="/courses/:courseName">
          <CourseDetails />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <h1>Education Website</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

// HeroSection.js
import React from 'react';

function HeroSection() {
  return (
    <section>
      <h1>Learn from the Best</h1>
      <p>We offer a wide range of courses for students of all levels.</p>
    </section>
  );
}

export default HeroSection;

// CourseList.js
import React from 'react';
import { Link } from 'react-router-dom';

function CourseList() {
  return (
    <section>
      <h2>Our Courses</h2>
      <ul>
        <li><Link to="/courses/react-fundamentals">React Fundamentals</Link></li>
        <li><Link to="/courses/node-js-fundamentals">Node.js Fundamentals</Link></li>
        <li><Link to="/courses/javascript-fundamentals">JavaScript Fundamentals</Link></li>
        <li><Link to="/courses/css-fundamentals">CSS Fundamentals</Link></li>
      </ul>
    </section>
  );
}

export default CourseList;

// CourseDetails.js
import React from 'react';

function CourseDetails({ match }) {
  return (
    <section>
      <h2>{match.params.courseName}</h2>
      <p>This course will cover the fundamentals of React and its applications.</p>
    </section>
  );
}

export


