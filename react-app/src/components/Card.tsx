import { type FC, type JSX, useState, useEffect } from "react";
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

  const getCardsPerPage = (): number => {
    if (typeof window === "undefined") return 3;
    const width = window.innerWidth;
    if (width >= 992) return 3;
    if (width >= 768) return 2;
    return 1;
  };

  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage());

  useEffect(() => {
    const handleResize = () => {
      const newPerPage = getCardsPerPage();
      if (newPerPage !== cardsPerPage) {
        setCardsPerPage(newPerPage);
        setCurrentIndex(0);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [cardsPerPage]);

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

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="card-part py-5" id="services">
      {isMobile ? (
        /* ==================== MOBILE LAYOUT ==================== */
        <div className="text-center px-3">
          {/* Title */}
          <h2 className="services mb-3">Services</h2>

          {/* Description */}
          <p className="services-par mb-4">
            I Provide Wide Range Of Coding And Design services
          </p>

          {/* Arrows - separate line, bigger top margin */}
          <div className="d-flex justify-content-center gap-4 mb-5">
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

          {/* Card */}
          <div className="d-flex justify-content-center">
            {visibleItems.map((item, index) => (
              <div
                key={index}
                className="card text-center mb-3 service-card"
                style={{
                  width: "100%",
                  maxWidth: "25rem",
                  border: "none",
                }}
              >
                <div className="card-body">
                  <div className="icon">{item.icon}</div>
                  <h5 className="card-title mt-3">{item.title}</h5>
                  <p className="card-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* ==================== TABLET & DESKTOP (unchanged) ==================== */
        <>
          <div>
            <div
              style={{
                display: "inline-block",
                width: "18rem",
                padding: "20px",
                textAlign: "left",
              }}
            >
              <h2 className="services">Services</h2>
              <p className="services-par">
                I Provide Wide Range Of Coding And Design services
              </p>

              <div className="arrow-btns d-grid gap-2 d-md-block">
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
                style={{
                  width: "18rem",
                  border: "none",
                }}
              >
                <div className="card-body">
                  <div className="icon">{item.icon}</div>
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
