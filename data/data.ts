import giving from "../public/assets/giving.png"
import diversity from '../public/assets/diversity.png'
import racisim from "../public/assets/racisim.png"
import problemSolving from '../public/assets/problemSolving.png'
import applicationProcess from "../public/assets/applicationProcess.png"
import visaProcessing from "../public/assets/visaProcessing.png"
import predepartureSupport from "../public/assets/predepartureSupport.png"
import arrival from "../public/assets/arrival.png"
import job from "../public/assets/job.png"
import donation from "../public/assets/donation.png"
import collaboration from "../public/assets/collaboration.png"
import support from "../public/assets/support.png"

export const navigations = [
    {
        href:"/",
        name:"Home",
    },
    {
        href:"/about",
        name:"About",
    },
    {
        href:"/#destinations",
        name:"Destinations",
    },
    {
        href:"/#testimonials",
        name:"Testimonials",
    },
    {
        href:"/apply",
        name:"Apply",
    },
    {
        href:"/#contact",
        name:"Contact",
    },
]



export const services = [
  {
    id: 1,
    name: "Cultural Integration",
    description: "Creating a welcoming space for Ethiopian students to adapt to new cultures and share experiences.",
    icon: diversity,
  },
  {
    id: 2,
    name: "Racial and Cultural Support",
    description: "Providing peer support and advocacy to help students navigate challenges related to race and ethnicity.",
    icon: racisim,
  },
  {
    id: 3,
    name: "Collective Problem Solving",
    description: "Encouraging students to collaborate on addressing academic, housing, and social challenges.",
    icon: problemSolving,
  },
  {
    id: 4,
    name: "Guiding the Application Process",
    description: "Comprehensive assistance with university applications, personal statements, and scholarships.",
    icon: applicationProcess,
  },
  {
    id: 5,
    name: "Visa and Immigration Assistance",
    description: "Guiding students through visa applications and immigration processes for successful outcomes.",
    icon: visaProcessing,
  },
  {
    id: 6,
    name: "Pre-Departure Support",
    description: "Workshops and guidance on travel, finances, and managing cultural shock before leaving Ethiopia.",
    icon: predepartureSupport,
  },
  {
    id: 7,
    name: "Post-Arrival Assistance",
    description: "Helping students settle in, find accommodation, and connect with local support networks.",
    icon: arrival,
  },
  {
    id: 8,
    name: "Part-Time Job Opportunities & Tutoring",
    description: "Assisting students in finding part-time work and balancing academics through tutoring services.",
    icon: job,
  },
  {
    id: 9,
    name: "Fundraising and Donations",
    description: "Mobilizing resources to support underprivileged communities through impactful charitable projects.",
    icon: donation,
  },
  {
    id: 10,
    name: "Collaboration with Companies and NGOs",
    description: "Partnering with organizations to create sustainable programs for Ethiopian communities.",
    icon: collaboration,
  },
  {
    id: 11,
    name: "Supporting the Poor and Vulnerable",
    description: "Providing scholarships, healthcare, and essential services to uplift underprivileged families.",
    icon: support,
  },
  {
    id: 12,
    name: "Creating a Giving Culture",
    description: "Fostering empathy and solidarity among Ethiopian students to inspire positive change.",
    icon: giving,
  },
];



  const educationDestinations = [
    {
      id: 1,
      name: "China",
      description: "China is home to some of the world’s top universities and offers high-quality education in fields like science and engineering.",
      imageSrc: "/assets/china.jpeg",
    },
    {
      id: 2,
      name: "USA",
      description: "The USA hosts renowned universities known for research, innovation, and a wide variety of academic programs.",
      imageSrc: "/assets/usa.jpeg",
    },
    {
      id: 3,
      name: "Canada",
      description: "Canada is famous for affordable tuition fees, excellent education standards, and a welcoming multicultural environment.",
      imageSrc: "/assets/canada.jpeg",
    },
    {
      id: 4,
      name: "France",
      description: "France provides excellent academic programs, particularly in arts, fashion, and business, with low tuition costs.",
      imageSrc: "/assets/france.jpeg",
    },
    {
      id: 5,
      name: "Austria",
      description: "Austria offers world-class education and rich cultural experiences in a highly affordable and safe environment.",
      imageSrc: "/assets/austria.jpeg",
    },
    {
      id: 6,
      name: "Italy",
      description: "Italy is known for its heritage in art, history, and architecture, offering exceptional programs in these fields.",
      imageSrc: "/assets/italy.jpeg",
    },
    {
      id: 7,
      name: "South Korea",
      description: "South Korea is a global leader in technology and innovation, providing excellent education opportunities in tech and science.",
      imageSrc: "/assets/southKorea.jpeg",
    },
    {
      id: 8,
      name: "Malta",
      description: "Malta offers quality education in English-speaking institutions and is known for its safe and vibrant environment.",
      imageSrc: "/assets/malta.jpeg",
    },
    {
      id: 9,
      name: "Cyprus",
      description: "Cyprus provides affordable education with a mix of European culture and high academic standards.",
      imageSrc: "/assets/cypres.jpeg",
    },
    {
      id: 10,
      name: "Germany",
      description: "Germany is renowned for its free or low-cost tuition, cutting-edge research, and strong emphasis on science and engineering.",
      imageSrc: "/assets/germany.jpeg",
    },
  ];
  
  export default educationDestinations;
  

  export const testimonials = [
    {
      image: "/assets/1.jpg",
      name: "Abigiya",
      country: "Italy",
      level: "Bachelor's in",
      comment:
        "ISC made my dream of studying in Italy a reality. Navigating the visa process felt overwhelming at first, but the team at ISC guided me every step of the way. From helping me gather the correct documents to preparing for my interview, they ensured everything was handled with precision and care. Thanks to their expertise and unwavering support, I successfully secured my visa for a Bachelor's program in Italy",
    },
    {
      image: "/assets/2.jpg",
      name: "Habtamu ",
      country: "Austria",
      level: "Master's in",
      comment:
        "ISC transformed what once seemed like an unreachable goal into a tangible reality. Their guidance was thorough, and their encouragement unwavering. More than just offering practical support, ISC created a sense of belonging that made the entire process less daunting. Today, I am pursuing my Master’s degree in Austria, an opportunity I couldn’t have achieved without ISC’s expertise and care.",
    },
    {
      
      image: "/assets/3.jpg",
      name: "Eden",
      country: "China",
      level: "Bachelor's in",
      comment:
        "Thanks to ISC, I am now pursuing my Bachelor’s degree in China—a dream I once thought was out of reach. Their unwavering support and expert guidance made this milestone achievable, and I’m deeply appreciative of the life-changing opportunities they’ve opened up for me.",
    },
    {
      
      image: "/assets/4.jpg",
      name: "Loza",
      country: "South Korea",
      level: "Bachelor's in",
      comment:
        "With ISC’s exceptional support and guidance, I am now pursuing my Bachelor’s degree in South Korea.I’m profoundly grateful for the doors they’ve opened and the opportunities they’ve made possible",
    },
    {
      
      image: "/assets/5.JPG",
      name: "Bethlehem",
      country: "USA",
      level: "Bachelor's in",
      comment:
        "ISC was instrumental in turning my aspirations into reality. Their dedicated support and tailored guidance helped me navigate every challenge, making the process smoother and less overwhelming. Thanks to their efforts, I am now pursuing my Bachelor’s degree in the USA. I’m truly thankful for the opportunities ISC has unlocked and the confidence they’ve instilled in me.",
    },
    {
      
      image: "/assets/6.JPG",
      name: "Abenezer",
      country: "South Korea",
      level: "Bachelor's in",
      comment:
        "ISC played a pivotal role in helping me achieve my dream of studying abroad. Their expertise, combined with their genuine care, made the entire journey—from applications to securing my visa—so much easier. Now, I’m proud to say I’m pursuing my Bachelor’s degree in South Korea",
    },
    {
      
      image: "/assets/7.jpg",
      name: "Tayesew Cherenet",
      country: "Southkorea",
      level: "Master's in",
      comment:
        "The idea of studying abroad felt daunting until ISC stepped in with their unparalleled support. They didn’t just guide me—they empowered me to navigate every hurdle with confidence. Today, I am thrilled to be pursuing my Master’s degree in South Korea, a milestone I couldn’t have achieved without their dedication and encouragement",
    },
    {
      
      image: "/assets/8.jpg",
      name: "Fikadu",
      country: "South Korea",
      level: "Master's in",
      comment:
        "ISC’s expertise and encouragement transformed my ambitions into reality. Thanks to their support, I am now pursuing my Master’s degree in South Korea, a step that has redefined my future.",
    },
    {
      
      image: "/assets/9.jpg",
      name: "Alem",
      country: "Italy",
      level: "Bachelor's in",
      comment:
        "ISC didn’t just open doors to education abroad; they also provided the confidence and community I needed to take this life-changing step. I’m forever grateful to ISC for making my aspirations come true.",
    },
    {
      
      image: "/assets/10.jpg",
      name: "Seminar",
      country: "South Korea",
      level: "Bachelor's in",
      comment:
        "Their expert guidance ensured that I aced my visa interview and got admitted for my Bachelor's  in South Korea!",
    },
    {
      
      image: "/assets/11.jpg",
      name: "Seminar",
      country: " ",
      level: "With high school students",
      comment:
        "Before attending ISC’s seminar, I had so many questions and fears about studying abroad. The process felt confusing and overwhelming. But during the session, they explained everything in such a clear and relatable way. Now, I feel much more confident about pursuing my education abroad, and I know where to start. ISC truly opened my eyes to the opportunities that are possible",
    },{
      
      image: "/assets/15.jpg",
      name: "Seminar",
      country: "",
      level: "With high school students",
      comment:
        "Before attending ISC’s seminar, I had so many questions and fears about studying abroad. The process felt confusing and overwhelming. But during the session, they explained everything in such a clear and relatable way. Now, I feel much more confident about pursuing my education abroad, and I know where to start. ISC truly opened my eyes to the opportunities that are possible.",
    },{
      
      image: "/assets/13.jpg",
      name: "Seminar",
      country: "",
      level: "With high school students",
      comment:
        "I came into the seminar feeling unsure about whether studying abroad was even possible for someone like me. ISC not only gave me practical information but also inspired me with real examples of students who made it. I left the session feeling excited and prepared to take on the challenges ahead. They’ve made a huge difference in how I view my future.",
    },
  ];