function MyWorks() {
  return (
    <>
      <div className="myworks" id="projects">
        <div className="text-center">
          <h1 className="work">My Works</h1>
          <h3 className="work-title">Recent Projects</h3>
        </div>

        <div className="d-flex justify-content-center gap-4 flex-wrap mt-4">
          {/* Crop ChatBot Project */}
          <div
            className="card"
            style={{
              width: "18rem",
              border: "none",
              boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="card-body">
              <h5 className="card-title crop-chat">Crop ChatBot</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                AI-Powered Recommendation Tool
              </h6>
              <p className="card-text">
                A deployed chatbot that helps farmers with crop recommendations
                using AI and data-driven insights.
              </p>
              <a
                href="https://crop-recommendation-ai.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-warning custom-btn"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Charity Organization Website Project */}
          <div
            className="card"
            style={{
              width: "18rem",
              border: "none",
              boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="card-body">
              <h5 className="card-title charity">
                Charity Organization Website
              </h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Full-Stack Web Application
              </h6>
              <p className="card-text">
                A complete website for a charity organization with modern UI,
                responsive design, and Firebase deployment.
              </p>
              <a
                href="https://charity-organization-637f0.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-warning custom-btn"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyWorks;
