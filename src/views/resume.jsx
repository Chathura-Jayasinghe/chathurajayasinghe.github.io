import { useState, useEffect, useRef } from "react";

// Custom hook for detecting when an element is visible in viewport
const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};

export default function ResumeSection() {
  const [activeTab, setActiveTab] = useState("education");

  // References for animations
  const [headerRef, isHeaderVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  const [contentRef, isContentVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  // Resume data
  const educationData = [
    {
      id: 1,
      degree: "BSc Engineering Honours",
      institution: "University of Moratuwa (2021 - 2025)",
      score: "3.90/4",
      description:
        "Coursework: Deep Learning for Vision, Machine Vision, Pattern Recognition, Modular Software Development, Networking and Programming Fundamentals.",
      years: "2021 - 2025",
    },
    {
      id: 2,
      degree: "G.C.E. Advanced Level",
      institution: "T/R.K.M. Sri Koneswara Hindu College (2006 - 2019)",
      score: "Ranked 125th islandwide",
      description:
        " Best Results at GCE A/L Examination 2019 in Physical Science Stream 3A's (Combined Mathematics, Physics, Chemistry) Trincomalee District 2nd, Island 125th, Z-score:- 2.6116",
      years: "2001 - 2005",
    },
    {
      id: 3,
      degree: "G.C.E. Ordinary Level",
      institution: "T/R.K.M. Sri Koneswara Hindu College (2006 - 2019)",
      score: "(9A's)",
      description:
        "Best Results at GCE O/L Examination 2016 9A's (Tamil, English, Mathematics, Science, Religion, History, Business and Accounting Studies, English Literature, ICT)",
      years: "2001 - 2005",
    },
  ];

  const experienceData = [
    {
      id: 1,
      position: "Research Engineering Intern",
      company: "Fetchseed - (Present)",
      location: "Sri Lanka",
      description:
        "Tailoring state-of-the-art 3D reconstruction models to deliver immersive and interactive user experiences through cutting-edge extended reality (XR) solutions",
      years: "2024",
    },
    {
      id: 2,
      position: "Mobile App Developer Intern",
      company: "PAXXY - (Present)",
      location: "Sri Lanka",
      description:
        "Contributing to the development of a front end portal of a MedTech wearable for Paxxy FMS LLC, a US startup.",
      years: "2025",
    },
    {
      id: 3,
      position: "Software Engineering Intern",
      company: "London Stock Exchange Group - (2024)",
      location: "Sri Lanka",
      description:
        "Worked on projects involving cloud server load balancing, development of a full stack application for internal use, and a learning pipeline for code vulnerability detection.",
      years: "2024",
    },
  ];
  const volunteeringData = [
    {
      id: 1,
      position: "Batch Representative",
      company: "Dept of ENTC, University of Moratuwa - (Sem 07/08)",
      location: "Sri Lanka",
      description:
        "Represented the batch in various departmental activities and events, ensuring effective communication between students and faculty.",
      years: "2023",
    },
    {
      id: 2,
      position: "Member",
      company:
        "Trincomalee District University Students' Association - (2021 - 2023)",
      location: "Sri Lanka",
      description:
        "Participated in various community service projects and initiatives aimed at improving the lives of students in the Trincomalee district.",
      years: "2023",
    },
    {
      id: 4,
      position: "Coordinator",
      company:
        "Instrumental Team, Tamil Literary Association, University of Moratuwa - (2022 - 2024)",
      location: "Sri Lanka",
      description:
        "Organized and coordinated musical events and activities for the Tamil Literary Association, promoting Tamil culture and literature within the university community.",
      years: "2023",
    },
  ];

  const publicationsData = [
    {
      id: 1,
      title:
        " DARB-Splatting: Generalizing Splatting with Decaying Anisotropic Radial Basis Functions",
      description:
        "Submitted a research paper; Vishagar A., Nazar F.S., Pramuditha A.A.H., Viruthshaan V., Ramasinghe S., Lucey S. and Rodrigo R. (2024). DARB-Splatting,that generalizes splatting algorithms for 3D reconstruction, which is currently under review.",
      presented: "ICCV 2023",
    },
    {
      id: 2,
      title: "Integrated Sensing and Communications",
      description:
        "Presented on the integration of sensing and communication technologies for enhanced data transmission and processing.",
      presented: "E-Carrier Magazine",
    },
    {
      id: 3,
      title: "Graph Signal Processing",
      description:
        "Presented on the applications of graph signal processing in modern data analysis and machine learning.",
      presented: "E-Carrier Magazine",
    },
    {
      id: 4,
      title: "Terahertz Communications",
      description:
        "Presented on the advancements and challenges in terahertz communication technologies.",
      presented: "E-Carrier Magazine",
    },
  ];

  const achievementsData = [
    {
      id: 0,
      title: "Dean's List",
      description:
        "Semester 1, Semester 2, Semester 4, Semester 6, Semester 7.",
    },
    {
      id: 1,
      title: "1st Runner Up",
      description: "IDEALIZE 2023 by AIESEC at University of Moratuwa.",
    },
    {
      id: 2,
      title: "7th Place",
      description:
        "ACES Coders 2023, an islandwide hackathon organized by the University of Peradeniya.",
    },
    {
      id: 3,
      title: "9th Place",
      description:
        "ACES Coders 2022, an islandwide hackathon organized by the University of Peradeniya.",
    },
    {
      id: 4,
      title: "Globally Ranked 14th",
      description: "IEEE VIP CUP 2023, Ophthalmic biomarker detection.",
    },
    {
      id: 5,
      title: "Finalist, Top 30 Teams Worldwide",
      description: "IEEE IES Generative AI Hackathon, 2024.",
    },
    {
      id: 6,
      title: "Finalist",
      description:
        "Spark Challenge 22/23, detecting hypoglycaemic situations using NIR rays.",
    },
    {
      id: 7,
      title: "Finalist",
      description:
        "HackX 7.0, Atmospheric CO2 prediction using IR rays and GHz telecommunication.",
    },
    {
      id: 8,
      title: "Mahapola Higher Education Scholarship",
      description:
        "Awarded for outstanding academic performance in the G.C.E. A/L examination.",
    },
    {
      id: 10,
      title: "Merit",
      description: "Codefest 2016, organized by SLIIT, School Category.",
    },
  ];

  const tabs = [
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "publications", label: "Publications" },
    { id: "achievements", label: "Achievements" },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        {/* Header Section */}
        <div
          ref={headerRef}
          className={`mb-16 text-center transition-all duration-1000 ${
            isHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-rose-600 mb-2 uppercase tracking-wider font-medium">
            Get to know more about me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-300 to-teal-700 bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="w-32 h-1 bg-rose-600 mx-auto"></div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-12 border-b border-zinc-800">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-white border-b-2 border-rose-600"
                  : "text-gray-400 hover:text-teal-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div
          ref={contentRef}
          className={`transition-all duration-500 ${
            isContentVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Education/Experience Content */}
          {(activeTab === "education" || activeTab === "experience") && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-rose-500">
                  {activeTab === "education" ? "Education" : "Internship"}
                </h2>
                <div className="relative border-l border-zinc-700 pl-6">
                  {(activeTab === "education"
                    ? educationData
                    : experienceData
                  ).map((item, index) => (
                    <TimelineItem
                      key={item.id}
                      item={item}
                      type={activeTab}
                      delay={index * 200}
                    />
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-rose-500">
                  {activeTab === "education"
                    ? "Work Experience"
                    : "Volunteering"}
                </h2>
                <div className="relative border-l border-zinc-700 pl-6">
                  {(activeTab === "education"
                    ? experienceData
                    : volunteeringData
                  ).map((item, index) => (
                    <TimelineItem
                      key={item.id}
                      item={item}
                      type={
                        activeTab === "education"
                          ? "experience"
                          : "volunteering"
                      }
                      delay={index * 200 + 100}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Skills Content */}
          {activeTab === "publications" && (
            <div>
              <h2 className="text-3xl font-bold mb-8 text-rose-500">
                Publications and other Research Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {publicationsData.map((publication, index) => (
                  <PublicationItem
                    key={publication.id}
                    publication={publication}
                    delay={index * 150}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Achievements Content */}
          {activeTab === "achievements" && (
            <div>
              <h2 className="text-3xl font-bold mb-8 text-rose-500">
                Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievementsData.map((achievement, index) => (
                  <AchievementItem
                    key={achievement.id}
                    achievement={achievement}
                    delay={index * 150}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Timeline Item Component
const TimelineItem = ({ item, type, delay = 0 }) => {
  const [itemRef, isItemVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div
      ref={itemRef}
      className={`mb-10 transition-all duration-700 ${
        isItemVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute -left-8 top-16 mt-1.5 h-4 w-4 rounded-full bg-rose-500 border-4 border-zinc-900"></div>
      <div className="bg-zinc-800 p-6 rounded-lg shadow-lg border border-zinc-700 hover:border-rose-600/30 transition-all hover:-translate-y-1 hover:shadow-rose-600/10">
        <div className="flex flex-wrap justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-white">
            {type === "education" ? item.degree : item.position}
          </h3>
          <span className="bg-rose-700/80 text-rose-50 px-2 py-1 rounded text-sm animate-pulse">
            {type === "education" ? item.score : item.location}
          </span>
        </div>
        <p className="text-teal-400 mb-4">
          {type === "education" ? item.institution : item.company}
        </p>
        <p className="text-gray-400">{item.description}</p>
      </div>
    </div>
  );
};

// Skill Item Component
const SkillItem = ({ skill, delay = 0 }) => {
  const [skillRef, isSkillVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div
      ref={skillRef}
      className={`bg-zinc-800 p-6 rounded-lg shadow-lg border border-zinc-700 hover:border-teal-600/30 transition-all hover:-translate-y-1 hover:shadow-teal-600/10 ${
        isSkillVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-medium text-white">{skill.name}</h3>
        <span className="text-teal-400 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-zinc-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-rose-600 to-teal-500 h-2 rounded-full transition-all duration-1000"
          style={{
            width: isSkillVisible ? `${skill.level}%` : "0%",
            transitionDelay: `${delay + 300}ms`,
          }}
        ></div>
      </div>
    </div>
  );
};

// Achievement Item Component
const AchievementItem = ({ achievement, delay = 0 }) => {
  const [achievementRef, isAchievementVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div
      ref={achievementRef}
      className={`bg-zinc-800 p-6 rounded-lg shadow-lg border border-zinc-700 hover:border-rose-600/30 transition-all hover:-translate-y-1 hover:shadow-rose-600/10 ${
        isAchievementVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start">
        <div className="shrink-0">
          <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-teal-400 mb-1">
            {achievement.title}
          </h3>
          <p className="text-gray-300 text-sm">{achievement.description}</p>
        </div>
      </div>
    </div>
  );
};

const PublicationItem = ({ publication, delay = 0 }) => {
  const [publicationRef, isPublicationVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div
      ref={publicationRef}
      className={`bg-zinc-800 p-6 rounded-lg shadow-lg border border-zinc-700 hover:border-rose-600/30 transition-all hover:-translate-y-1 hover:shadow-rose-600/10 ${
        isPublicationVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start">
        <div className="shrink-0">
          <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-teal-400 mb-1">
            {publication.title}
          </h3>
          <p className="text-gray-300 pb-2 text-sm">
            {publication.description}
          </p>
          <span className="text-gray-200 bg-rose-500 rounded-lg px-2 py-1 text-sm mt-1">
            {publication.presented}
          </span>
        </div>
      </div>
    </div>
  );
};
