import "./App.css";

function App() {
  return (
    <div className="container">

      
      <div className="card-wrapper">

        <h2 className="card-title">Student</h2>

        <div className="card">
          <img
            src="https://i.pravatar.cc/200"
            alt="Student"
            className="profile-img"
          />

          <h1>MUJEEB AHMED</h1>
          <h3>MODERN WEB N APP</h3>
          <h4>SAYLANI MASS IT TRAINING</h4>

          <p>
            I am a passionate computer science student who loves coding,
            web development, and learning new technologies. I also enjoy
            creative projects.
          </p>

          <button>Contact Me</button>
        </div>
      </div>


     
      <div className="card-wrapper">

        <h2 className="card-title">Teacher</h2>

        <div className="card">
          <img
            src="https://i.pravatar.cc/200"
            alt="Teacher"
            className="profile-img"
          />

          <h1>MAJID HUSSAIN</h1>
          <h3>MODERN WEB N APP TEACHER</h3>
          <h4>5 Years Experience</h4>

          <p>
            An experienced and dedicated teacher who helps students
            understand programming concepts in an easy and practical way.
          </p>

          <button>Contact Teacher</button>
        </div>
      </div>

    </div>
  );
}

export default App;