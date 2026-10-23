
const projects = [
  {
    title: "Social Media Application",
    category: "React, TypeScript, Firebase, JavaScript · Feb. 2025 – Apr. 2025",
    bullets: [
      "Designed and developed a database-driven social media application using React and TypeScript, building practical experience with component-based architecture, application state, and full-stack development.",
      "Integrated Firebase services to support data persistence and user-facing features, connecting frontend components with backend infrastructure.",
      "Implemented CRUD workflows for creating, retrieving, updating, and deleting application records, with data handling and validation to improve consistency and reliability.",
      "Structured application logic around reusable components and maintainable data flows, strengthening understanding of how frontend interfaces interact with backend services."
    ],
    href: "https://github.com/Tarkan-Zarrouk/Social-Media-App",
  },
  {
    title: "Computer Vision Detection System",
    category: "Python, OpenCV, YOLOv5",
    bullets: [
      "Developed computer vision prototypes for face and QR code detection using Python, OpenCV, and YOLOv5, exploring automated visual recognition through image processing and machine learning.",
      "Integrated trained model weights into detection pipelines to identify and classify visual features from image inputs.",
      "Worked with image preprocessing and model inference to understand how computer vision systems transform raw visual data into structured detection results.",
      "Explored object detection techniques and their practical applications in recognition tasks, gaining experience with the relationship between trained models, image data, and software implementation."
    ],
    href: "https://www.linkedin.com/in/tarkan-zarrouk/",
  },
  {
    title: "Real-Time Tracking System",
    category: "Python, MediaPipe, Arduino",
    bullets: [
      "Developed a real-time tracking prototype using Python and MediaPipe to process visual input and extract tracking information from a live camera feed.",
      "Connected software-based tracking with Arduino-controlled hardware, exploring how processed visual data can drive physical movement and interactive behaviour.",
      "Worked across computer vision, data processing, and hardware communication to bridge the gap between digital perception and physical actuation.",
      "Experimented with translating tracking results into control signals, building practical experience with interactive systems that respond to changing visual input."
    ],
    href: "https://www.linkedin.com/in/tarkan-zarrouk/",
  },
  {
    title: "Linear Algebra Visualization tool",
    category: "Mathematics",
    bullets: [
      "Interactive linear algebra visualizer for Carleton University MATH 1104 students",
      "Visualizes matrices, vectors, linear systems, and transformations in 2D and 3D",
      "Covers Gaussian elimination, RREF, vector spaces, determinants, eigenvalues, and orthogonality",
      "Step-by-step solutions to connect calculations with exam techniques",
      "Exact fraction arithmetic for accurate results",
      "Clean black-and-white UI with customizable colors and dark mode",
      "Designed to strengthen conceptual understanding through interactive exploration"
    ],
    href: "https://github.com/Tarkan-Zarrouk/LinearAlgebraVisualizer",
  },
  {
    title: "Autonomous Wall-Following Robot",
    category: "C++, Arduino, Ultrasonic Sensors",
    bullets: [
      "Designed and programmed an Arduino-powered robot capable of autonomous navigation using ultrasonic distance measurements and motor-control logic.",
      "Implemented wall-following behaviour by using sensor feedback and conditional logic to adjust movement in response to changing distances from surrounding obstacles.",
      "Integrated ultrasonic sensors, motor drivers, and embedded control logic into a coordinated system that responds to its physical environment.",
      "Explored feedback-driven control and autonomous decision-making, applying programming fundamentals to a physical system operating under changing environmental conditions."
    ],
    href: "https://github.com/Tarkan-Zarrouk/Arduino-Projects",
  },
  {
    title: "Minecraft Quality of Life Enhancements Modification",
    category: "Java, Minecraft Modding, Open Source",
    bullets: [
      "Developed a custom Minecraft client modification in Java, exploring the game's underlying codebase, class structure, and internal systems to implement additional gameplay and interface functionality.",
      "Used decompiled code and available mappings to investigate game classes, improve code readability, and understand how existing systems interact.",
      "Designed and implemented custom client-side features, including a modular ClickGUI with configurable settings, category-based organization, and interactive controls.",
      "Worked with rendering systems, event handling, keyboard input, and interface components to integrate new functionality into the existing game client.",
      "Organized functionality into reusable modules and settings, gaining experience with object-oriented design, reverse engineering for interoperability, and extending a large existing Java codebase."
    ],
    href: "https://github.com/Tarkan-Zarrouk/meow-client",
  },
];


export default function Projects() {
  return (
    <section
      className="mx-auto max-w-[1280px] border-t border-line px-[42px] pb-[150px] pt-[145px] max-md:px-[22px] max-md:pb-[95px] max-md:pt-[90px]"
      id="projects"
    >
      <div className="grid grid-cols-2 gap-[15px] max-md:grid-cols-1">
        {projects.map((project) => (
          <a
            className="flex min-h-[430px] flex-col bg-tile p-[29px] text-ink transition-transform hover:-translate-y-1.5 hover:bg-tile-hover max-md:min-h-0"
            href={project.href}
            target="_blank"
            rel="noreferrer"
            key={project.title}
          >
            <div className="flex justify-start text-[11px] text-muted">
              <span>{project.category}</span>
            </div>
            <h3 className="my-[28px] text-[clamp(26px,3vw,40px)] font-bold leading-none tracking-[-0.08em]">
              {project.title}
            </h3>
            <ul className="m-0 list-disc pl-[18px] text-xs leading-[1.7] text-muted">
              {project.bullets.map((bullet) => (
                <li className="mb-2 pl-1" key={bullet}>
                  {bullet}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}
