import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer (Intern) </h4>
                <h5>Innovations Hub</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Developed responsive web pages using HTML, CSS, and JavaScript while focusing on clean UI structure and usability. Implemented client-side form validation to ensure accurate user input and better user experience. Gained practical experience in handling form data, DOM manipulation, and basic web development workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer (Intern) </h4>
                <h5>Web Magnet Media</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked on building responsive user interfaces using modern frontend technologies and integrated REST APIs to fetch and display dynamic data. Handled API responses and structured JSON data to render real-time content in the UI. Improved understanding of data flow between frontend and backend while developing scalable and maintainable components.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analytics & Cloud Computing</h4>
                <h5>TNS India Foundation</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Worked with datasets using Advanced MS Excel and Python libraries such as Pandas and NumPy for data cleaning, transformation, and analysis. Built interactive Power BI dashboards to visualize trends, KPIs, and business insights for data-driven decision making. Developed practical understanding of data analytics workflows and cloud-based analytical tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
