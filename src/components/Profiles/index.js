import './index.css'

const Profiles = () => (
  <div className="profiles-container">
    <img
      src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?b=1&s=170667a&w=0&k=20&c=Z5bM_O61NdvOVMAV91l_K_xVAsgPxayDrlVxvi19jqE="
      alt="profiles"
      className="profiles-img"
    />
    <h1 className="profiles-heading">PROFILES</h1>
    <hr className="line" />
    <div>
      <div className="profile-container">
        <img
          src="https://cdn.icon-icons.com/icons2/2659/PNG/512/linkedin_logo_brand_icon_161141.png"
          alt="linkedIn-icon"
          className="profile-icon"
        />
        <p className="bold">
          LinkedIn:
          <a
            href="https://www.linkedin.com/in/ksp007"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/ksp007
          </a>
        </p>
      </div>
      <div className="profile-container">
        <img
          src="https://cdn.dribbble.com/users/8063/screenshots/873671/github_icon_vector_shape.png?compress=1&resize=800x600&vertical=top"
          alt="github-icon"
          className="profile-icon"
        />
        <p className="bold">
          GitHub:
          <a
            href="https://www.github.com/KrishnaCCBP"
            target="_blank"
            rel="noreferrer"
          >
            github.com/KrishnaCCBP
          </a>
        </p>
      </div>
    </div>
  </div>
)

export default Profiles
