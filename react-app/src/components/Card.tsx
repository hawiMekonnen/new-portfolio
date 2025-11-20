import { type FC, type JSX, useState } from "react";
import {
  FaPaintBrush,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

interface ServiceItem {
  title: string;
  text: string;
  icon: JSX.Element;
}

const Card: FC = () => {
  const items: ServiceItem[] = [
    {
      title: "UI/UX Design",
      text: "Crafting intuitive and visually appealing user experiences with a focus on usability.",
      icon: <FaPaintBrush size={30} color="#FF7F50" />,
    },
    {
      title: "Web Design",
      text: "Designing responsive and modern websites that balance aesthetics with functionality.",
      icon: <FaCode size={30} color="#FF7F50" />,
    },
    {
      title: "Front-end Development",
      text: "Building interactive and dynamic interfaces using modern frameworks and clean code.",
      icon: <FaLaptopCode size={30} color="#FF7F50" />,
    },
    {
      title: "Back-end Development",
      text: "Developing robust server-side applications, APIs, and logic to power web solutions.",
      icon: <FaServer size={30} color="#FF7F50" />,
    },
    {
      title: "Database",
      text: "Designing and managing efficient databases to ensure secure and scalable data storage.",
      icon: <FaDatabase size={30} color="#FF7F50" />,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;

  const visibleItems = items.slice(currentIndex, currentIndex + cardsPerPage);

  const handleNext = () => {
    if (currentIndex + cardsPerPage < items.length) {
      setCurrentIndex(currentIndex + cardsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - cardsPerPage >= 0) {
      setCurrentIndex(currentIndex - cardsPerPage);
    }
  };

  return (
    <div className="card-part" id="services">
      <div
        className="card"
        style={{ width: "18rem", border: "none", padding: "20px" }}
      >
        <div>
          <h2 className="services">Services</h2>
          <p className="services-par">
            I Provide Wide Range Of Coding And Design services
          </p>
          <div className="d-grid gap-2 d-md-block arrow-btns">
            <button
              type="button"
              className="btn btn-outline-warning circle-btn"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <FaArrowLeft />
            </button>
            <button
              type="button"
              className="btn btn-outline-warning circle-btn"
              onClick={handleNext}
              disabled={currentIndex + cardsPerPage >= items.length}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="card text-center mb-3 service-card"
            style={{ width: "18rem", border: "none" }}
          >
            <div className="card-body">
              <div className="icon">{item.icon}</div>
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
