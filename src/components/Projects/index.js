import './index.css'

const Projects = () => (
  <div>
    <div className="projects-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxwQUHBGC8MrL6S17RWHtfXjTHbipoYlCXoA&usqp=CAU"
        alt="projects"
        className="projects-img"
      />
      <h1 className="projects-heading">PROJECTS</h1>
    </div>
    <hr className="line" />
    <div className="project-container">
      <p className="project-heading">
        1. My Projects (My Projects Page)
        <span>
          (
          <a
            href="https://projectpagemy.ccbp.tech/"
            target="_blank"
            rel="noreferrer"
          >
            projectpagemy.ccbp.tech
          </a>
          )
        </span>
      </p>
      <p>
        Developed a website where people like interviewers can see list of
        projects that a person implemented
        <ul className="list">
          <li>
            <p className="text">
              Designed a banner section and the project cards using different
              HTML block, inline elements.
            </p>
          </li>
          <li>
            <p className="text">
              Styled the website using CSS3 properties such as background, flex,
              and CSS box model properties and relative units such as vh, vw,
              and used absolute units such as px.
            </p>
          </li>
        </ul>
        <span className="bold">Technologies used: </span>
        HTML, CSS, Bootstrap
      </p>
    </div>
    <div className="project-container">
      <p className="project-heading">
        2. Wikipedia Search Application
        <span>
          (
          <a
            href="https://wikisearchmy.ccbp.tech/"
            target="_blank"
            rel="noreferrer"
          >
            wikisearchmy.ccbp.tech
          </a>
          )
        </span>
      </p>
      <p>
        Developed custom wikipedia search application where user can search and
        view curated results and can see detailed explanation in wikipedia by
        clicking on the specific result
        <ul className="list">
          <li className="text">
            Displayed list of search results with HTML list elements with
            hyperlink as url, styled list using CSS, Bootstrap and implemented
            responsiveness using Flex properties and CSS Box model.
          </li>
          <li className="text">
            Fetched search results from server asynchronously using fetch GET
            HTTP API call. When a user clicks on a particular result, opens the
            website in a new tab by using the target attribute of the anchor tag
            in HTML.
          </li>
        </ul>
        <span className="bold">Technologies used: </span>
        HTML, CSS, JS, REST API Calls, Bootstrap
      </p>
    </div>
    <div className="project-container">
      <p className="project-heading">
        3. Chatbot
        <span>
          (
          <a
            href="https://chatbotmy.ccbp.tech/"
            target="_blank"
            rel="noreferrer"
          >
            chatbotmy.ccbp.tech
          </a>
          )
        </span>
      </p>
      <p>
        Developed a mini Chatbot Application which initially wishes user and
        responds to user if user input matches to list of answers that chat bot
        maintains
        <ul className="list">
          <li className="text">
            Displayed conversation between user and chatbot using HTML list
            elements , styled using CSS, Bootstrap.
          </li>
          <li className="text">
            Displayed user input message using HTML form input element and reply
            from the chatbot dynamically in the UI by using JavaScript DOM
            Operations and Array push method. Implemented response from Chatbot
            by using Array filter method.
          </li>
        </ul>
        <span className="bold">Technologies used: </span>
        HTML, CSS, JS, Bootstrap
      </p>
    </div>
    <div className="project-container">
      <p className="project-heading">
        4. Emergency Vehicle Tracking System using GPS and Arduino.
      </p>
      <p className="text">
        To implement prototype of early Emergency vehicle warning System. It
        detects any emergency vehicle such as an ambulance or fire engine which
        are approaching towards automobiles. When these emergency vehicles are
        in a range of 1 KM, driver of an automobile gets an alert through
        wireless communication and the alert gets displayed on the LED screen
        installed in the automobile. After the alert is received the driver
        makes a way to the emergency vehicle well in advance.
        <br />
        <br />
        <span className="bold">Technologies used: </span>
        Arduino IDE, GPS Modules, RFID Module, Proteus IDE
      </p>
    </div>
  </div>
)

export default Projects
