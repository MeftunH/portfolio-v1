const coursesList = [
  {
    title: "165.Softtech Java Spring Bootcamp",
    image: "./assets/courses/patika.png",
    link: "https://www.patika.dev/",
  },
  {
    title: "Object Oriented Programming",
    image: "./assets/courses/OOP.jpeg",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Data Structures",
    image: "./assets/courses/Data Structures.jpg",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Software Testing",
    image: "./assets/courses/Software Testing.jpg",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Database Management Systems",
    image: "./assets/courses/Database Management Systems.png",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Object Oriented Analysis and Design",
    image: "./assets/courses/Object Oriented Analysis and Design.png",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Concepts Of Programming Languages",
    image: "./assets/courses/Concepts Of Programming Languages.png",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Mathematics I",
    image: "./assets/courses/mathematics-1.jpg",
    link: "https://cs.sakarya.edu.tr/en/5486/ebs_bolum_lisans",
  },
  {
    title: "Physics I",
    image: "./assets/courses/physics-1.jpg",
    link: "https://cs.sakarya.edu.tr/en/5486/ebs_bolum_lisans",
  },
  {
    title: "Linear Algebra",
    image: "./assets/courses/linear-algebra.jpg",
    link: "https://cs.sakarya.edu.tr/en/5486/ebs_bolum_lisans",
  },
  {
    title: "Introduction To Computer Engineering",
    image: "./assets/courses/introduction-to-computer-engineering.jpg",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Introduction To Programming",
    image: "./assets/courses/Introduction To Programming.png",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "English",
    image: "./assets/courses/English.png",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Turkish Language",
    image: "./assets/courses/turkish.jpg",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Mathematics II",
    image: "./assets/courses/mathematics-2.jpg",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Physics II",
    image: "./assets/courses/physics-2.png",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Probability and Statistics",
    image: "./assets/courses/Probability and Statistics.jpeg",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Web Technologies",
    image: "./assets/courses/Web Technologies.png",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Princ.Of Ataturk and History Of Turkish Revolution",
    image:
      "./assets/courses/Princ.Of Ataturk and History Of Turkish Revolution.jpg",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Numerical Analysis",
    image: "./assets/courses/Numerical Analysis.jpg",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Logic Circuits",
    image: "./assets/courses/Logic Circuits.png",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Electronics Circuits and Laboratory",
    image: "./assets/courses/Electronics Circuits and Laboratory.jpg",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Differential Equations",
    image: "./assets/courses/Differential Equations.jpg",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Discrete Computational Structures",
    image: "./assets/courses/Discrete Computational Structures.jpg",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Microprocessor Systems and Laboratory",
    image: "./assets/courses/Microprocessor Systems and Laboratory.jpg",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Computer Organization",
    image: "./assets/courses/Computer Organization.png",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Operating Systems",
    image: "./assets/courses/Operating Systems.png",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Formal Languages and Abstract Machines",
    image: "./assets/courses/Formal Languages and Abstract Machines.png",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Signals and Systems",
    image: "./assets/courses/Signals and Systems.jpg",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Data Communication",
    image: "./assets/courses/Data Communication.png",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Web Programming",
    image: "./assets/courses/Web Programming.jpg",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Internet Of Things and Applications",
    image: "./assets/courses/Internet Of Things and Applications.jpg",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Artifical Intelligence",
    image: "./assets/courses/Artifical Intelligence.jpg",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Software Engineering",
    image: "./assets/courses/Software Engineering.jpg",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Algorithm Analysis and Design",
    image: "./assets/courses/Algorithm Analysis and Design.png",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Computer Networks",
    image: "./assets/courses/Computer Networks.png",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "System Programming",
    image: "./assets/courses/System Programming.jpg",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Entrepreneurship and Project Management",
    image: "./assets/courses/Entrepreneurship and Project Management.png",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Computer Engineering Design",
    image: "./assets/courses/Computer Engineering Design.jpg",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Academic Studies I",
    image: "./assets/courses/Academic Studies.jpg",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Optimization",
    image: "./assets/courses/Optimization.png",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Mobile Application Development",
    image: "./assets/courses/Mobile Application Development.jpg",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Financial Information Technologies (Sector Oriented)",
    image: "./assets/courses/Financial Information Technologies.jpg",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Renewable Energy Sources",
    image: "./assets/courses/Renewable Energy Sources.jpg",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Internet Security Protocols",
    image: "./assets/courses/Internet Security Protocols.png",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Network Programming",
    image: "./assets/courses/Network Programming.png",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
  {
    title: "Senior Design Project",
    image: "./assets/courses/Senior Design Project.png",
    link: "https://cs.sakarya.edu.tr/tr/5486/ebs_bolum_lisans",
  },
];
export default coursesList;
