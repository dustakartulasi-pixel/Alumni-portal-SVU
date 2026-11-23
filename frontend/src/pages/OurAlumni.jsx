import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Reliable placeholder images for demo
const p1 =
  "https://ui-avatars.com/api/?name=Suresh+Kumar&background=0D6EFD&color=fff&size=128";
const p2 =
  "https://ui-avatars.com/api/?name=Priya+Darshini&background=6610f2&color=fff&size=128";
const p3 =
  "https://ui-avatars.com/api/?name=Ravi+Teja&background=052c65&color=fff&size=128";

const initialAlumni = [
  {
    id: 1,
    name: "Suresh Kumar",
    from: "2015",
    to: "2017",
    role: "Senior Software Engineer",
    company: "Google",
    image: p1,
    linkedin: "https://www.linkedin.com",
  },
  {
    id: 2,
    name: "Priya Darshini",
    from: "2018",
    to: "2020",
    role: "Data Scientist",
    company: "Microsoft",
    image: p2,
    linkedin: "https://www.linkedin.com",
  },
  {
    id: 3,
    name: "Ravi Teja",
    from: "2014",
    to: "2016",
    role: "System Architect",
    company: "Amazon",
    image: p3,
    linkedin: "https://www.linkedin.com",
  },
  {
    id: 4,
    name: "Anitha Reddy",
    from: "2019",
    to: "2021",
    role: "Product Manager",
    company: "Adobe",
    image:
      "https://ui-avatars.com/api/?name=Anitha+Reddy&background=dc3545&color=fff",
    linkedin: "",
  },
  {
    id: 5,
    name: "Vamsi Krishna",
    from: "2016",
    to: "2018",
    role: "Full Stack Developer",
    company: "TCS",
    image:
      "https://ui-avatars.com/api/?name=Vamsi+Krishna&background=198754&color=fff",
    linkedin: "",
  },
  {
    id: 6,
    name: "Sneha Latha",
    from: "2017",
    to: "2019",
    role: "UI/UX Designer",
    company: "Meta",
    image:
      "https://ui-avatars.com/api/?name=Sneha+Latha&background=0dcaf0&color=fff",
    linkedin: "",
  },
  {
    id: 7,
    name: "Ganesh Achari",
    from: "1991",
    to: "1994",
    role: "Delivery Manager",
    company: "Wipro",
    image:
      "https://ui-avatars.com/api/?name=Ganesh+Achari&background=6c757d&color=fff",
    linkedin: "",
  },
  {
    id: 8,
    name: "M. Rajesh",
    from: "2013",
    to: "2015",
    role: "Cloud Specialist",
    company: "Oracle",
    image:
      "https://ui-avatars.com/api/?name=M+Rajesh&background=fd7e14&color=fff",
    linkedin: "",
  },
  {
    id: 9,
    name: "N. Swapna",
    from: "2021",
    to: "2023",
    role: "Cyber Analyst",
    company: "Palo Alto",
    image:
      "https://ui-avatars.com/api/?name=N+Swapna&background=20c997&color=fff",
    linkedin: "",
  },
  {
    id: 10,
    name: "B. Hari Prasad",
    from: "2010",
    to: "2012",
    role: "Eng Manager",
    company: "Uber",
    image:
      "https://ui-avatars.com/api/?name=B+Hari+Prasad&background=000&color=fff",
    linkedin: "",
  },
  {
    id: 11,
    name: "K. Murali",
    from: "2012",
    to: "2014",
    role: "DevOps Lead",
    company: "Infosys",
    image:
      "https://ui-avatars.com/api/?name=K+Murali&background=007cc3&color=fff",
    linkedin: "",
  },
  {
    id: 12,
    name: "T. Kavya",
    from: "2018",
    to: "2020",
    role: "Backend Dev",
    company: "Netflix",
    image:
      "https://ui-avatars.com/api/?name=T+Kavya&background=e50914&color=fff",
    linkedin: "",
  },
  {
    id: 13,
    name: "Dr. Arun V.",
    from: "2005",
    to: "2007",
    role: "Research Head",
    company: "IBM Research",
    image:
      "https://ui-avatars.com/api/?name=Arun+V&background=0062ff&color=fff",
    linkedin: "",
  },
  {
    id: 14,
    name: "Lokesh M.",
    from: "2011",
    to: "2013",
    role: "Security Admin",
    company: "Cisco",
    image:
      "https://ui-avatars.com/api/?name=Lokesh+M&background=1ba0d7&color=fff",
    linkedin: "",
  },
  {
    id: 15,
    name: "Deepika S.",
    from: "2016",
    to: "2018",
    role: "QA Lead",
    company: "Cognizant",
    image:
      "https://ui-avatars.com/api/?name=Deepika+S&background=003399&color=fff",
    linkedin: "",
  },
  {
    id: 16,
    name: "Sandeep R.",
    from: "2014",
    to: "2016",
    role: "Mobile Architect",
    company: "Zomato",
    image:
      "https://ui-avatars.com/api/?name=Sandeep+R&background=cb202d&color=fff",
    linkedin: "",
  },
  {
    id: 17,
    name: "P. Vinay",
    from: "2020",
    to: "2022",
    role: "ML Engineer",
    company: "NVIDIA",
    image:
      "https://ui-avatars.com/api/?name=Vinay+P&background=76b900&color=fff",
    linkedin: "",
  },
  {
    id: 18,
    name: "Meghana K.",
    from: "2017",
    to: "2019",
    role: "IT Consultant",
    company: "Accenture",
    image:
      "https://ui-avatars.com/api/?name=Meghana+K&background=a100ff&color=fff",
    linkedin: "",
  },
];

const AlumniDirectory = () => {
  const [alumniList, setAlumniList] = useState(() => {
    const saved = localStorage.getItem("svu_alumni_data_final");
    return saved ? JSON.parse(saved) : initialAlumni;
  });

  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("svu_alumni_data_final", JSON.stringify(alumniList));
  }, [alumniList]);

  const handleUpdate = (field, value) => {
    const updatedList = alumniList.map((a) =>
      a.id === selectedAlumni.id ? { ...a, [field]: value } : a
    );
    setAlumniList(updatedList);
    setSelectedAlumni({ ...selectedAlumni, [field]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => handleUpdate("image", reader.result);
      reader.readAsDataURL(file);
    }
  };

  const filteredAlumni = alumniList.filter(
    (a) =>
      a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="container-fluid py-5 min-vh-100"
      style={{
        background: "linear-gradient(135deg, #001d4d 0%, #0052cc 100%)",
      }}
    >
      <div className="container mt-5 pt-4">
        <AnimatePresence mode="wait">
          {!selectedAlumni ? (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-center mb-5 text-white">
                <h1 className="display-4 fw-bold">SVU CM&CS Alumni Portal</h1>
                <input
                  type="text"
                  className="form-control w-50 mx-auto rounded-pill border-0 shadow py-3"
                  placeholder="Search by name or company..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="row g-4">
                {filteredAlumni.map((alumni) => (
                  <div key={alumni.id} className="col-lg-6 col-xl-4">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="card border-0 shadow-lg p-4 h-100"
                      style={{
                        borderRadius: "25px",
                        background: "rgba(255, 255, 255, 0.12)",
                        backdropFilter: "blur(10px)",
                        color: "white",
                      }}
                    >
                      <div className="d-flex align-items-center gap-4">
                        <img
                          src={alumni.image}
                          className="rounded-circle border border-3 border-warning"
                          style={{
                            width: "90px",
                            height: "90px",
                            objectFit: "cover",
                          }}
                          alt=""
                        />
                        <div className="text-start">
                          <h5 className="fw-bold mb-0">{alumni.name}</h5>
                          <p className="text-warning small mb-1 fw-bold">
                            Batch: {alumni.from}-{alumni.to}
                          </p>
                          <p className="small opacity-75 mb-2">
                            {alumni.role} at {alumni.company}
                          </p>
                          <button
                            onClick={() => setSelectedAlumni(alumni)}
                            className="btn btn-warning btn-sm rounded-pill px-3 fw-bold"
                          >
                            View Profile
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div
                    className="card border-0 shadow-lg overflow-hidden"
                    style={{ borderRadius: "30px", background: "white" }}
                  >
                    <div className="row g-0">
                      <div className="col-md-5 bg-primary p-5 text-center text-white d-flex flex-column align-items-center">
                        <div className="position-relative mb-4">
                          <img
                            src={selectedAlumni.image}
                            className="rounded-circle border border-5 border-white shadow"
                            style={{
                              width: "200px",
                              height: "200px",
                              objectFit: "cover",
                            }}
                            alt=""
                          />
                          {isEditing && (
                            <label className="position-absolute bottom-0 end-0 bg-warning rounded-circle p-2 border border-2 border-white cursor-pointer shadow">
                              <i className="bi bi-camera-fill text-dark"></i>
                              <input
                                type="file"
                                className="d-none"
                                accept="image/*"
                                onChange={handleFileChange}
                              />
                            </label>
                          )}
                        </div>
                        {isEditing ? (
                          <button
                            onClick={() => setIsEditing(false)}
                            className="btn btn-success rounded-pill px-4 mb-3 w-75 shadow fw-bold"
                          >
                            Save Changes
                          </button>
                        ) : (
                          <button
                            onClick={() => setIsEditing(true)}
                            className="btn btn-warning rounded-pill px-4 mb-3 w-75 shadow fw-bold"
                          >
                            Edit Profile
                          </button>
                        )}
                        <button
                          onClick={() => {
                            setSelectedAlumni(null);
                            setIsEditing(false);
                          }}
                          className="btn btn-outline-light rounded-pill px-4 w-75"
                        >
                          Back
                        </button>
                      </div>
                      <div className="col-md-7 p-5 text-start bg-white">
                        <h3 className="fw-bold border-bottom pb-3 mb-4">
                          Alumni Profile Details
                        </h3>
                        <div className="mb-3">
                          <label className="text-muted small fw-bold uppercase">
                            Name
                          </label>
                          {isEditing ? (
                            <input
                              className="form-control"
                              value={selectedAlumni.name}
                              onChange={(e) =>
                                handleUpdate("name", e.target.value)
                              }
                            />
                          ) : (
                            <p className="fs-4 fw-bold">
                              {selectedAlumni.name}
                            </p>
                          )}
                        </div>
                        <div className="mb-3">
                          <label className="text-muted small fw-bold uppercase">
                            Role & Company
                          </label>
                          {isEditing ? (
                            <div className="d-flex gap-2">
                              <input
                                className="form-control"
                                value={selectedAlumni.role}
                                onChange={(e) =>
                                  handleUpdate("role", e.target.value)
                                }
                              />
                              <input
                                className="form-control"
                                value={selectedAlumni.company}
                                onChange={(e) =>
                                  handleUpdate("company", e.target.value)
                                }
                              />
                            </div>
                          ) : (
                            <p className="fs-5 text-primary fw-bold">
                              {selectedAlumni.role} @ {selectedAlumni.company}
                            </p>
                          )}
                        </div>
                        <div className="mb-3">
                          <label className="text-primary fw-bold mb-2 d-block">
                            LinkedIn Profile
                          </label>
                          {isEditing ? (
                            <input
                              className="form-control"
                              value={selectedAlumni.linkedin}
                              placeholder="Paste LinkedIn URL here (https://...)"
                              onChange={(e) =>
                                handleUpdate("linkedin", e.target.value)
                              }
                            />
                          ) : (
                            <div className="d-flex align-items-center gap-3">
                              {selectedAlumni.linkedin ? (
                                <>
                                  <p
                                    className="mb-0 text-muted text-truncate"
                                    style={{ maxWidth: "200px" }}
                                  >
                                    {selectedAlumni.linkedin}
                                  </p>
                                  <a
                                    href={selectedAlumni.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-sm d-flex align-items-center gap-2 rounded-pill px-3 fw-bold shadow-sm"
                                  >
                                    <i className="bi bi-linkedin fs-6"></i>
                                    Open LinkedIn
                                  </a>
                                </>
                              ) : (
                                <p className="text-muted italic mb-0">
                                  Not provided
                                </p>
                              )}
                            </div>
                          )}
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

export default AlumniDirectory;
