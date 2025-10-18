const projects = [
  {
    id: 1,
    title: "Real-time Olive Disease Detection System",
    description:
      "Final year project combining IoT and Deep Learning to detect olive tree diseases in real-time. The system uses an ESP32-CAM camera to capture leaf images, a detection model based on YOLOv8 and EfficientNetV2, and web and mobile interfaces for data visualization and management.",
    tache: [
      "Design of IoT architecture and detection model",
      "Collection and annotation of olive tree image dataset",
      "Training of YOLOv8 model for disease detection",
      "Backend development with Django for data management",
      "Creation of web and mobile interfaces for real-time monitoring"
    ],
    tech: [
      'ESP32-CAM',
      'YOLOv8',
      'EfficientNetV2',
      'Django',
      'Flutter'
    ],
    repo: 'https://github.com/soltaniahmed0/pfa',
    linkdin: 'https://www.linkedin.com/posts/raja-hannachi-01b668254_ai-iot-computervision-activity-7338286593654321152-QE4L?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6-5BcBOqobwBTkYL5L4r7bxMntCmj0PG8',
    post: [
      '/Photos/projects/olive2.png',
      '/Photos/projects/image1.png',
      '/Photos/projects/image3.png',
      '/Photos/projects/image4.png',
      '/Photos/projects/image5.png',
      '/Photos/projects/image6.png',
      '/Photos/projects/olive1.png',
    ]
  },
  {
    id: 2,
    title: "Academic Management Platform",
    description:
      "Design and implementation of a platform for managing students, courses and projects. It allows centralization of academic information, user account management and supervision of final year projects.",
    tache: [
      "UML design and database modeling",
      "Backend development with Node.js and Express.js",
      "Frontend creation with React.js and Tailwind CSS",
      "Authentication and user management implementation",
      "Integration of course and project management modules"
    ],
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB'
    ],
    repo: 'https://github.com/hazembensaria/isamm-platform-api',
    frontend: 'https://github.com/OneEyeX/React-Project',
    linkdin: 'https://www.linkedin.com/posts/nour-saidane2001_daezveloppement-reactjs-backend-ugcPost-7377134566601568257-VfRQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6-5BcBOqobwBTkYL5L4r7bxMntCmj0PG8',
  },
  {
    id: 3,
    title: "Restaurant Management Mobile Application",
    description:
      "Development of a mobile application for online restaurant management. The application facilitates reservations, menu management and order tracking, with real-time database.",
    tache: [
      "User interface design with Flutter",
      "Real-time database configuration with Firebase",
      "Development of menu and order management features",
      "User authentication system integration",
      "Performance testing and application optimization"
    ],
    tech: [
      'Flutter',
      'Firebase'
    ],
    repo: 'https://github.com/soltaniahmed0/mobile',
  },
  {
    id: 4,
    title: "IoT Plant Monitoring System",
    description:
      "Development of a plant monitoring system based on Arduino sensors, allowing measurement of soil temperature and humidity, with data display on a Flutter mobile application connected to Firebase.",
    tache: [
      "Design and assembly of Arduino electronic circuit",
      "Development of embedded code for sensor reading",
      "Creation of Flutter mobile application for data display",
      "Real-time connection with Firebase",
      "System testing and alert threshold calibration"
    ],
    tech: [
      'Arduino',
      'DHT11 Sensors',
      'Flutter',
      'Firebase'
    ],
    linkdin: 'https://www.linkedin.com/posts/nour-saidane2001_iot-flutter-smartfarming-ugcPost-7377109495325290496-VYUy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6-5BcBOqobwBTkYL5L4r7bxMntCmj0PG8',
    post: [
      '/Photos/projects/plant1.png',
      '/Photos/projects/plant2.png',
      '/Photos/projects/plant3.png',
    ]
  },
  {
    id: 5,
    title: "Startup Village",
    description: "This project involves enhancing an existing web application for managing deliveries and food services within the Startup Village.",
    tache: [
        "Implemented Design Patterns (GOF)",
        "Applied the GRASP principles",
        "Implemented SOLID principles",
        "Defined product constraints using OCL rules"
    ],
    tech: [
        'SpringBoot',
        'Java',
        'OCL',
        'Design Patterns'
    ],
    repo: 'https://github.com/soltaniahmed0/gl',
  },
  {
  id: 6,
  title: "Information Retrieval System - Gaza War Analysis",
    description: "Combining technology and humanity through Information Retrieval. Analysis of a tweet corpus on the Gaza war.",
    tache: [
      "Data collection via X (Twitter) API using Tweepy (500 tweets)",
        "Manual creation of QRELs file for relevance assessment",
        "Linguistic preprocessing: removal of links, hashtags, mentions",
        "Inverted index corpus with PyTerrier",
        "Thematic queries on critical situations in Gaza",
        "Evaluation of BM25 and TF-IDF models with standard metrics"
  ],
  tech: [
    'Python',
        'Tweepy',
        'PyTerrier',
        'Twitter/X API',
        'BM25',
        'TF-IDF'
  ],
  repo: 'https://github.com/noursaidane2001/Recherche_Information_X',
  linkdin: 'https://www.linkedin.com/posts/nour-saidane2001_sri-pyterrier-tweepy-activity-7378345297040789504-IKMa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6-5BcBOqobwBTkYL5L4r7bxMntCmj0PG8',
}

];

export default projects;