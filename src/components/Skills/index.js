import './index.css'

const Skills = () => (
  <div className="skills-container">
    <img
      src="https://img.freepik.com/premium-vector/skills-flat-icon-simple-sign-from-gamification-collection-creative-skills-icon-illustration-web-design-infographics-more_676904-1186.jpg?w=740"
      alt="skills"
      className="skills-img"
    />
    <h1 className="skills-heading">SKILLS</h1>
    <hr className="line" />
    <div>
      <p className="text">
        <span className="bold">Frontend: </span> HTML, CSS, Bootstrap,
        JavaScript, React.js*
        <br />
        <span className="bold">Backend: </span>Python, Express, Node.js
        <br />
        <span className="bold">Databases: </span>SQLite
        <br />
        <span className="bold">Other skills: </span>C
        <br />
        <br />
        *courses yet to be completed.
      </p>
    </div>
  </div>
)

export default Skills
