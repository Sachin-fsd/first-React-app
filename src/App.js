import logo from './logo.svg';
import Nav from './components/navbar/navbar';
import CourseList from './components/courseComponent/course.list';
import courses from './data/courses';
import './App.css';




function App() {

  return (
    <div className="App">
      <Nav />
      <CourseList courses={courses}/>
    </div>
  );
}

export default App;
