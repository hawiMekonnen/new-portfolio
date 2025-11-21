function Home() {
  return (
    <>
      <div className="home" id="home">
        <div
          className="card mb-3"
          style={{
            maxWidth: "1200px",
            backgroundColor: "#FFF0F5",
            border: "none",
          }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="./images/pic-3.png"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h6 className="card-intro">Hi I'm</h6>
                <p className="card-text home-para">
                  <span className="card-name">Hawi Mekonnen</span>
                  <br />A software engineer with a passion for creating
                  innovative solutions to complex problems. Skilled in various
                  programming languages and frameworks, with a strong background
                  in web development and software design.
                </p>
                <div className="d-grid gap-2 d-md-block">
                  <button
                    type="button"
                    className="btn btn-outline-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#cvModal"
                  >
                    View CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Modal Markup */}
      <div
        className="modal fade"
        id="cvModal"
        tabIndex={-1}
        aria-labelledby="cvModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title my-cv" id="cvModalLabel">
                My CV
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ height: "500px" }}>
              <iframe
                src="./public/Hawi-Mekonnen-Gutema-Resume.pdf"
                title="Hawi Mekonnen CV"
                width="100%"
                height="500px"
                style={{ border: "none" }}
              ></iframe>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <a
                href="/Hawi-Mekonnen-Gutema-Resume.pdf"
                download
                className="btn btn-outline-warning"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
