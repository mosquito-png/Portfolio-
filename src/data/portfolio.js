export const portfolioData = {
  personalInfo: {
    name: "Ganesh Kumar",
    initials: "GK",
    role: "B.Tech CSE Student & Aspiring Developer",
    college: "Swami Vivekanand Institute of Engineering and Technology (SVIET), Chandigarh",
    location: "Jansla, Rajpura, Punjab, India",
    email: "idkaki96@gmail.com",
    phone: "9341240360",
    github: "https://github.com/mosquito-png",
    linkedin: "https://www.linkedin.com/in/ganesh-kumar-537188380",
    instagram: "https://www.instagram.com/akira._991",
    resumeUrl: "/resume.pdf", // Place your resume.pdf in the public/ folder to enable download
    tagline: "Building the future of software, one line of code at a time.",
    bio: [
      "I am a B.Tech Computer Science & Engineering student at Swami Vivekanand Institute of Engineering and Technology (SVIET), Chandigarh, pursuing my studies from 2025 to 2029.",
      "My technical interests include programming, web development, software engineering, and modern AI technologies. Currently, I am actively developing my coding and system building skills.",
      "I am passionate about learning new technologies, working on practical projects, and my ultimate goal is to continuously improve my technical expertise to build meaningful, user-centric software."
    ],
    // EmailJS Configuration (Set these up at emailjs.com)
    emailConfig: {
      serviceId: "YOUR_SERVICE_ID",
      templateId: "YOUR_TEMPLATE_ID",
      publicKey: "YOUR_PUBLIC_KEY"
    }
  },
  
  // Categorized Skills - Only containing technologies Ganesh knows
  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "C", icon: "Code" },
        { name: "C++", icon: "Cpu" }
      ]
    },
    {
      category: "Web Development",
      items: [
        { name: "HTML", icon: "Layout" },
        { name: "CSS", icon: "Palette" },
        { name: "JavaScript", icon: "FileCode" }
      ]
    },
    {
      category: "Tools & Development",
      items: [
        { name: "Git", icon: "GitBranch" },
        { name: "GitHub", icon: "Github" }
      ]
    },
    {
      category: "AI / Technology",
      items: [
        { name: "Gemini", icon: "Sparkles" }
      ]
    }
  ],
  
  // Education Details
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      college: "Swami Vivekanand Institute of Engineering and Technology (SVIET), Chandigarh",
      duration: "2025 – 2029",
      description: "Focusing on core computer science subjects, algorithms, data structures, and software development methodologies."
    }
  ],

  /* 
    PROJECTS DATA
    Currently empty. To add a project later, uncomment or add items to this array:
    Example item format:
    {
      name: "Project Name",
      description: "Project description goes here...",
      image: "https://via.placeholder.com/600x400", // or path to local image in public/
      tags: ["C++", "HTML", "CSS"],
      githubUrl: "https://github.com/...",
      liveUrl: "https://..."
    }
  */
  projects: [],

  /*
    ACHIEVEMENTS / CERTIFICATIONS DATA
    Currently empty. To add an achievement later, add items to this array:
    Example item format:
    {
      title: "Certified Web Developer",
      organization: "Coursera / Google",
      date: "September 2026",
      description: "Earned certification in responsive web development and UI design principles.",
      credentialUrl: "https://...",
      image: "https://via.placeholder.com/400x300"
    }
  */
  achievements: []
};
