/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Abdul Rahman",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Abdul Rahman Portfolio",
    type: "website",
    url: "http://abdulrahman.com/",
  },
};

//Home Page
const greeting = {
  title: "Abdul Rahman",
  logo_name: "Abdul Rahman",
  nickname: "Full Stack Developer",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1UZxG_DLNhJf1fra_FppKUlnxQ5PiaL7m/view?usp=drive_link",
  portfolio_repository: "https://github.com/abrehman17867",
  githubProfile: "https://github.com/abrehman17867",
};

const socialMediaLinks = [
  

  {
    name: "Github",
    link: "https://github.com/abrehman17867",
    fontAwesomeIcon: "fa-github", 
    backgroundColor: "#181717", 
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abdulrahman012",
    fontAwesomeIcon: "fa-linkedin-in", 
    backgroundColor: "#0077B5", 
  },
  {
    name: "Gmail",
    link: "mailto:ab.rehman17867@gmail.com",
    fontAwesomeIcon: "fa-google", 
    backgroundColor: "#D14836", 
  },
 
];

const skills = {
  data: [
   
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux & tailwind css",
        "⚡ Creating application backend in Node, Express",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        
      ],
    },

    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Punjab Group of Colleges",
      subtitle: "FSC pre Engineering",
      logo_path: "logo-pgc.png",
      alt_name: "PGC",
      duration: "2019 - 2020",
      descriptions: [
        "⚡ I have taken varity of courses related to Pre engineering like Mathematics, Chemistry & Physics etc.",
        "⚡ During my time at college, I was also work in labs and do practices.",
      ],
      website_link: "https://my.pgc.edu/",
    },
    {
      title: "University of Central Punjab",
      subtitle: "BS in Computer Engineering",
      logo_path: "logo_ucp.png",
      alt_name: "University of Central Punjab",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like OOP, DS, Algorithms, DBMS, OS, TOA, AI etc.",
        "⚡ Apart from this, I have done courses on Machine Learning, Data Science and Full Stack Development etc",
       
      ],
      website_link: "https://ucp.edu.pk/",
    },
   
  ],
};

const certifications = {
  certifications: [
    {
      title: "Artificial Intelligence",
      subtitle: "ITSOLERA",
      logo_path: "IT-Solera-LOGO.png",
      certificate_link:
        "https://drive.google.com/file/d/1Ug-EaDnDLPg5wL6aTlSEg500jRWf2ZC3/view?usp=drive_link",
      alt_name: "ITSOLERA",
      color_code: "#8C151599",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship ",
  description:
    "I have worked with many evolving startups as Frontend and Backend Developer, Designer and Software Architect. I have also worked with some well established companies mostly as Web Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Mern Stack Developer",
          company: "ItechX ",
          company_url: "https://itechx.co.uk/",
          logo_path: "itechx_logo.png",
          duration: "Jan 2024 - Present",
          location: "Lahore, Pakistan",
          description:
            "Skilled in developing web applications using MongoDB, Express, React, and Node.js. Experienced in building backend services, designing RESTful APIs, and creating dynamic front-end interfaces. Proficient in database management, authentication, state management with Redux, and deployment processes. Committed to writing clean, efficient, and scalable code.",
          color: "#000000",
        },
        
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "AI Intern",
          company: "ITSOLERA",
          company_url: "https://itsolera.com/",
          logo_path: "IT-Solera-LOGO.png",
          duration: "Jul 2024 - Sep 2024",
          location: "Karachi, Pakistan",
          description:
            "Hands-on experience with machine learning algorithms and data analysis. Proficient in Python, TensorFlow, and scikit-learn. Skilled in data preprocessing, model training, and evaluation. Passionate about applying AI to solve real-world problems.",
          color: "#000000",
        },
        {
          title: "Graphic Designing Intern",
          company: "Cyber Legends",
          company_url: "https://cyberlegends.org/",
          logo_path: "cyber_legends_Logo.png",
          duration: "Mar 2021 - Jul 2021",
          location: "Lahore, Pakistan",
          description:
            "Creative and proficient in Adobe Creative Suite, including Photoshop, Illustrator, and InDesign. Skilled in visual storytelling, branding, and layout design. Passionate about creating compelling visuals and enhancing user experience.",
          color: "#ee3c26",
        },
        {
          title: "Web Developer Intern",
          company: "Tech Implement",
          company_url:
            "https://techimplement.com/",
          logo_path: "logo-techimplement.png",
          duration: "Jan 2022 - Jun 2022",
          location: "Work From Home",
          description:
            "Proficient in HTML, CSS, and JavaScript. Experienced in building responsive websites and web applications. Familiar with frameworks like React and backend technologies such as Node.js. Passionate about coding and learning new technologies.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        
        {
          title: "Developer Students Club Member",
          company: "University of Central Punjab",
          company_url:
            "https://ucp.edu.pk/",
          logo_path: "logo_ucp.png",
          duration: "Jan 2023 - May 2024",
          location: "Lahore, Pakistan",
          description:
            "We have well established developer club in university which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Web Application Development and React JS.",
          color: "#0C9D58",
        },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Web based projects using Mongodb, Express, React js and Node js etc.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Final Year Project",
  description: "MERN stack & ML-Python",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "AI-Powered E-commerce Item Recoginition",
      createdAt: "2024-06-02T00:00:00Z",
      description: "Developed an AI-powered eCommerce item recognition system using the MERN stack (MongoDB, Express, React, Node.js). Leveraged machine learning algorithms to accurately identify and classify items. Implemented responsive front-end interfaces, robust backend services, and seamless API integrations to enhance user experience and streamline inventory management.",
      url: "#",
    },
   
  ], 
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_img.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Node and Web Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "#",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Lahore, Pakistan",
    locality: "San Jose",
    country: "Pakistan",
    region: "Lahore",
    postalCode: "05466",
    streetAddress: "Shalamar Town",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Shalimar+Bagh+Rd,+Lahore,+Punjab/@31.6013348,74.382177,17z/data=!3m1!4b1!4m6!3m5!1s0x39191a94a563999d:0xb1f5d60df78d99d2!8m2!3d31.6013348!4d74.382177!16s%2Fg%2F11gy5pdkvl?entry=ttu",
  },
  phoneSection: {
    title: "WhatsApp Number",
    subtitle: "0331400366",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
