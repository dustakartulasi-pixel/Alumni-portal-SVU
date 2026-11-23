import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const facultyData = [
  {
    id: 1,
    name: "Prof. M. Padmavathamma",
    designation: "Professor & Principal",
    image:
      "https://svuniversity.edu.in/storage/2021/12/Prof.-M.-Padmavathamma-e1639471531449.jpg",
    qualifications: "M.Sc., M.S., M.Ed., M.Phil., Ph.D.",
    specialization: "Cryptography, Network Security, Data Mining",
    experience: "30+ Years",
    email: "mpadma@svuniversity.ac.in",
    details:
      "Served as Joint Secretary of UGC, New Delhi. Principal Investigator for 9+ major research projects from DST, UGC, and AICTE. Published 110+ papers and 14 books.",
  },
  {
    id: 2,
    name: "Dr. G. Anjan Babu",
    designation: "Professor & Head",
    image:
      "https://svuniversity.edu.in/storage/2021/12/G-Anjan-Babu-e1639462915776.png",
    qualifications: "MCA, Ph.D.",
    specialization: "Big Data, Software Engineering, Neural Networks",
    experience: "27+ Years",
    email: "gababu@svuniversity.ac.in",
    details:
      "Coordinator for M.Sc. Data Science. Expert in Distributed Systems and Cloud Computing. Guided 10+ Ph.D. scholars in Computer Science.",
  },
  {
    id: 3,
    name: "Dr. E. Kesavulu Reddy",
    designation: "Professor",
    image:
      "https://svuniversity.edu.in/storage/2021/12/Kesavulu-Reddy-e1639470202349.png",
    qualifications: "MCA, M.Phil., Ph.D., FCSRC(USA)",
    specialization: "Elliptic Curve Cryptography, Expert Systems",
    experience: "21 Years",
    email: "ekreddysvu2008@gmail.com",
    details:
      "Fellow of Royal Council of Computer Research (London). Recipient of the Dr. Sarvepalli Radhakrishnan Lifetime Achievement Award.",
  },
  {
    id: 4,
    name: "Dr. Mooramreddy Sreedevi",
    designation: "Associate Professor",
    image:
      "https://svuniversity.edu.in/storage/2021/12/Dr.-MOORAMREDDY-SREEDEVI.png",
    qualifications: "MCA, M.Phil., Ph.D.",
    specialization: "Machine Learning, Big Data Analytics",
    experience: "25 Years",
    email: "msreedevi_svu2007@yahoo.com",
    details:
      "Published 80+ research papers. Former Deputy Warden for Women's Hostel. Received the Women Researcher Award in 2021.",
  },
  {
    id: 5,
    name: "Dr. G.V. Ramesh Babu",
    designation: "Associate Professor",
    image:
      "https://svuniversity.edu.in/storage/2021/12/Ramesh-Babu-GV-e1639467227448.png",
    qualifications: "MCA, Ph.D.",
    specialization: "Software Engineering, Computer Networks",
    experience: "22 Years",
    email: "gvrameshbabu2002@yahoo.com",
    details:
      "Specialist in Network protocols and System design. Heavily involved in Departmental Administration and Student Counseling.",
  },
  {
    id: 6,
    name: "Dr. Vijayalakshmi Kumba",
    designation: "Professor",
    image: "https://svuniversity.edu.in/storage/2021/12/VIJAYALAKSHMI-1.png",
    qualifications: "M.Tech, Ph.D.",
    specialization: "Artificial Intelligence, Data Structures",
    experience: "18 Years",
    email: "vijayalakshmik4@gmail.com",
    details:
      "Expert in AI algorithms and advanced data structures. Focuses on research in Natural Language Processing and Deep Learning.",
  },
];

const Faculty = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  return (
    <div
      className="container-fluid py-5 min-vh-100"
      style={{
        background: "linear-gradient(135deg, #001d4d 0%, #0052cc 100%)",
      }}
    >
      <div className="container mt-5 pt-4">
        <AnimatePresence mode="wait">
          {!selectedFaculty ? (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="row g-4 justify-content-center"
            >
              <div className="text-center mb-5 text-white">
                <h1 className="display-4 fw-bold">
                  Department of Computer Science
                </h1>
                <p className="lead opacity-75">
                  SVU College of CM & CS • Distinguished Faculty
                </p>
                <div
                  className="mx-auto bg-warning"
                  style={{ width: "80px", height: "4px" }}
                ></div>
              </div>

              {facultyData.map((faculty) => (
                <div key={faculty.id} className="col-md-6 col-lg-4">
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="card border-0 text-center p-4 h-100 shadow-lg"
                    style={{
                      borderRadius: "25px",
                      background: "rgba(255, 255, 255, 0.15)",
                      backdropFilter: "blur(10px)",
                      color: "white",
                    }}
                  >
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="rounded-circle mx-auto mb-3 border border-4 border-warning shadow"
                      style={{
                        width: "130px",
                        height: "130px",
                        objectFit: "cover",
                      }}
                    />
                    <h5 className="fw-bold mb-1">{faculty.name}</h5>
                    <p className="small text-warning mb-4 fw-bold">
                      {faculty.designation}
                    </p>
                    <button
                      onClick={() => setSelectedFaculty(faculty)}
                      className="btn btn-warning rounded-pill btn-sm px-4 fw-bold mt-auto"
                    >
                      View Profile
                    </button>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="row justify-content-center"
            >
              <div className="col-lg-10">
                <div
                  className="card border-0 shadow-lg overflow-hidden"
                  style={{ borderRadius: "30px", background: "white" }}
                >
                  <div className="row g-0">
                    <div className="col-md-4 bg-primary text-center p-5 text-white">
                      <img
                        src={selectedFaculty.image}
                        alt={selectedFaculty.name}
                        className="rounded-circle mb-4 border border-5 border-white shadow-lg"
                        style={{
                          width: "200px",
                          height: "200px",
                          objectFit: "cover",
                        }}
                      />
                      <h3 className="fw-bold mb-2">{selectedFaculty.name}</h3>
                      <span className="badge bg-warning text-dark px-3 py-2 mb-4">
                        {selectedFaculty.designation}
                      </span>
                      <br />
                      <button
                        onClick={() => setSelectedFaculty(null)}
                        className="btn btn-light rounded-pill px-4 fw-bold mt-3"
                      >
                        <i className="bi bi-arrow-left me-2"></i> Back to Staff
                      </button>
                    </div>

                    <div className="col-md-8 p-4 p-md-5 text-start">
                      <h4 className="fw-bold text-primary mb-4 border-bottom pb-2">
                        Academic Profile
                      </h4>
                      <div className="row g-4">
                        <div className="col-md-6">
                          <label className="fw-bold text-secondary small text-uppercase d-block">
                            Qualifications
                          </label>
                          <p className="fw-bold text-dark">
                            {selectedFaculty.qualifications}
                          </p>
                        </div>
                        <div className="col-md-6">
                          <label className="fw-bold text-secondary small text-uppercase d-block">
                            Experience
                          </label>
                          <p className="fw-bold text-dark">
                            {selectedFaculty.experience}
                          </p>
                        </div>
                        <div className="col-12">
                          <label className="fw-bold text-secondary small text-uppercase d-block">
                            Specialization
                          </label>
                          <p className="text-primary fw-bold">
                            {selectedFaculty.specialization}
                          </p>
                        </div>
                        <div className="col-12">
                          <label className="fw-bold text-secondary small text-uppercase d-block">
                            Research & Bio
                          </label>
                          <p
                            className="text-muted"
                            style={{ lineHeight: "1.7", textAlign: "justify" }}
                          >
                            {selectedFaculty.details}
                          </p>
                        </div>
                        <div className="col-12 border-top pt-4">
                          <i className="bi bi-envelope-at me-2 text-primary"></i>
                          <a
                            href={`mailto:${selectedFaculty.email}`}
                            className="text-decoration-none fw-bold text-dark"
                          >
                            {selectedFaculty.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Faculty;
