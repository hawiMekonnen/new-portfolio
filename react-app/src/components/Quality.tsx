function Quality() {
  return (
    <>
      <div className="quality " id="skills">
        <h1 className="skill">Why choose me</h1>
        <h3 className="skill-title">My experience area</h3>

        <div className="row mb-3">
          <div className="col-md-6">
            <h5>UI/UX Design</h5>
            <div
              className="progress"
              role="progressbar"
              aria-valuenow={90}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-bar" style={{ width: "90%" }}>
                90%
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h5>Programming Languages (Python, JS, CSS, HTML)</h5>
            <div
              className="progress"
              role="progressbar"
              aria-valuenow={85}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-bar" style={{ width: "85%" }}>
                85%
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <h5>Database</h5>
            <div
              className="progress"
              role="progressbar"
              aria-valuenow={70}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-bar" style={{ width: "70%" }}>
                70%
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h5>Node.js (Backend)</h5>
            <div
              className="progress"
              role="progressbar"
              aria-valuenow={75}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-bar" style={{ width: "75%" }}>
                75%
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <h5>Front-end Development</h5>
            <div
              className="progress"
              role="progressbar"
              aria-valuenow={95}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-bar" style={{ width: "95%" }}>
                95%
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h5>Web Design</h5>
            <div
              className="progress"
              role="progressbar"
              aria-valuenow={80}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-bar" style={{ width: "80%" }}>
                80%
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <h5>Problem Solving</h5>
            <div
              className="progress"
              role="progressbar"
              aria-valuenow={90}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-bar" style={{ width: "90%" }}>
                90%
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h5>Collaboration & Teamwork</h5>
            <div
              className="progress"
              role="progressbar"
              aria-valuenow={95}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-bar" style={{ width: "95%" }}>
                95%
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quality;
