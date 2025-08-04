const memberList = [
  {
    id: 0,
    imgSrc: "assets/images/tl-1/member-1.png",
  },
  {
    id: 1,
    imgSrc: "assets/images/tl-1/member-2.png",
  },
  {
    id: 2,
    imgSrc: "assets/images/tl-1/member-3.png",
  },
  {
    id: 3,
    imgSrc: "assets/images/tl-1/member-4.png",
  },
  {
    id: 4,
    imgSrc: "assets/images/tl-1/member-5.png",
  },
  {
    id: 5,
    imgSrc: "assets/images/tl-1/member-3.png",
  },
];

const courseList = [
  {
    id: 0,
    youtubeUrl: "https://www.youtube.com/embed/v4G_a-R0Q48",
    imgSrc: "assets/images/kb-13/event-2.jpg",
    price: "$53.00",
    author: "Brian Cumin",
    title: "The Blueprint of Success Mr. Sanjay Ghodawat TEDxWCE Sangli",
    slug: "teaching-math-and-science-inquiry-based-approaches",
    lessons: 6,
    students: 32,
    desc: "Engage young minds in math and science with inquiry-based teaching methods.",
    age: "5-8 Year",
    time: "8-10 AM",
    seat: 32,
  },
  {
    id: 1,
    youtubeUrl: "https://www.youtube.com/embed/wKRok_xGZEg",
    imgSrc: "assets/images/kb-13/event-2.jpg",
    price: "$45.00",
    author: "Alice Johnson",
    title: "Sanjay Ghodawat University Video",
    slug: "introduction-to-programming-with-javascript",
    lessons: 8,
    students: 45,
    desc: "Learn the fundamentals of programming using JavaScript.",
    age: "9-12 Year",
    time: "10-12 AM",
    seat: 40,
    programTitle: 'Collage Life',
  },
  {
    id: 2,
    youtubeUrl: "https://www.youtube.com/embed/ZjfLA2zSnBc",
    imgSrc: "assets/images/kb-13/event-3.jpg",
    price: "$69.00",
    author: "Emma Smith",
    title: "SGU LIVE 5th Convocation Ceremony",
    slug: "web-development-fundamentals-intro",
    lessons: 10,
    students: 27,
    desc: "Master the basics of web development and create your own websites.",
    age: "13-18 Year",
    time: "2-4 PM",
    seat: 25,
    programTitle: 'Athletics',
  },
  {
    id: 3,
    youtubeUrl: "https://www.youtube.com/embed/yGhURLZxdFs",
    imgSrc: "assets/images/kb-13/event-1.jpg",
    price: "$59.00",
    author: "John Davis",
    title: "Chairman Sanjay Ghodawat Birthday Massage for Student",
    slug: "data-science-and-machine-learning-basics",
    lessons: 7,
    students: 38,
    desc: "Explore the world of data science and machine learning fundamentals.",
    age: "18+",
    time: "6-8 PM",
    seat: 50,
    programTitle: 'Academics',
  },
  {
    id: 4,
    youtubeUrl: "https://www.youtube.com/embed/o_HsdG6vdWQ?si=nN3XTXrstYUYW9ts",
    imgSrc: "assets/images/blog/blog-1.png",
    price: "$40.00",
    author: "Sarah Brown",
    title: "Advanced Art and Creativity Workshop",
    slug: "advanced-art-and-creativity-workshop",
    lessons: 5,
    students: 20,
    desc: "Unleash your creativity through various art forms and techniques.",
    age: "8-12 Year",
    time: "4-6 PM",
    seat: 20,
  },
  {
    id: 5,
    youtubeUrl: "https://www.youtube.com/embed/LxO-6rlihSg?si=dYrtS_H3CYCnpg4L",
    imgSrc: "assets/images/blog/blog-2.png",
    price: "$75.00",
    author: "Michael Clark",
    title: "Advanced Outdoor Photography Masterclass",
    slug: "advanced-outdoor-photography-masterclass",
    lessons: 12,
    students: 15,
    desc: "Take your photography skills to the next level with advanced techniques.",
    age: "16+",
    time: "10-12 AM",
    seat: 15,
  },
  {
    id: 6,
    youtubeUrl: "https://www.youtube.com/embed/nUydkUedo4s?si=Do30-mSUyH1-BZw7",
    imgSrc: "assets/images/blog/blog-3.png",
    price: "$55.00",
    author: "Sophia Anderson",
    title: "Cooking and Culinary Arts Course",
    slug: "cooking-and-culinary-arts-course",
    lessons: 9,
    students: 25,
    desc: "Discover the art of cooking and culinary delights from around the world.",
    age: "12-18 Year",
    time: "3-5 PM",
    seat: 25,
  },
  {
    id: 7,
    youtubeUrl: "https://www.youtube.com/embed/fIJ86j0HIxM?si=0JZC457-nBM2r1OE",
    imgSrc: "assets/images/blog/blog-4.png",
    price: "$68.00",
    author: "David White",
    title: "Financial Planning and Investment Strategies",
    slug: "financial-planning-and-investment-strategies",
    lessons: 8,
    students: 30,
    desc: "Learn to manage your finances and make smart investment decisions.",
    age: "18+",
    time: "6-8 PM",
    seat: 30,
  },
  {
    id: 8,
    youtubeUrl: "https://www.youtube.com/embed/AJXiiwyxwE0?si=DVjNfqPHZrAg6AXK" ,
    imgSrc: "assets/images/blog/blog-5.png",
    price: "$49.00",
    author: "Olivia Green",
    title: "Language and Culture Exchange Program",
    slug: "language-and-culture-exchange-program",
    lessons: 6,
    students: 18,
    desc: "Immerse yourself in different languages and cultures from around the world.",
    age: "14-21 Year",
    time: "2-4 PM",
    seat: 18,
  },
  {
    id: 9,
    youtubeUrl: "https://www.youtube.com/embed/sMqtwbKc8EA?si=vBtZZO0lHY4h_CV-" ,
    imgSrc: "assets/images/blog/blog-6.png",
    price: "$42.00",
    author: "Daniel Lee",
    title: "Environmental Sustainability Workshop",
    slug: "environmental-sustainability-workshop",
    lessons: 4,
    students: 22,
    desc: "Learn about environmental issues and sustainable practices for a greener future.",
    age: "10-16 Year",
    time: "4-6 PM",
    seat: 22,
  },
  {
    id: 10,
    youtubeUrl: "https://www.youtube.com/embed/rwSNvPLG2CQ?si=6CNeTPlpj2LGaHRV",
    imgSrc: "assets/images/blog/blog-7.png",
    price: "$62.00",
    author: "Grace Miller",
    title: "Yoga and Mindfulness Retreat",
    slug: "yoga-and-mindfulness-retreat",
    lessons: 7,
    students: 15,
    desc: "Relax your mind and body through yoga and mindfulness techniques.",
    age: "18+",
    time: "8-10 AM",
    seat: 15,
  },
  {
    id: 11,
    youtubeUrl: "https://www.youtube.com/embed/0rHUDWjR5gg?si=D6g0WS26DQWEpBWB" ,
    imgSrc: "assets/images/blog/blog-8.png",
    price: "$55.00",
    author: "Sophie Turner",
    title: "Introduction to Astronomy",
    slug: "introduction-to-astronomy",
    lessons: 6,
    students: 20,
    desc: "Explore the wonders of the universe and the basics of astronomy.",
    age: "12+",
    time: "10-12 AM",
    seat: 20,
  },
  {
    id: 12,
    youtubeUrl: "https://www.youtube.com/embed/aozlwC3XwfY?si=wlxJKKraYK8c_8OX",
    imgSrc: "assets/images/blog/blog-9.png",
    price: "$70.00",
    author: "Robert Harris",
    title: "Entrepreneurship and Business Development",
    slug: "entrepreneurship-and-business-development",
    lessons: 9,
    students: 28,
    desc: "Learn the essentials of entrepreneurship and start your own business journey.",
    age: "18+",
    time: "2-4 PM",
    seat: 28,
  },
  {
    id: 13,
    youtubeUrl: "https://www.youtube.com/embed/WONZVnlam6U?si=M6qq_TJpBFe16TUr",
    imgSrc: "assets/images/blog/blog-10.png",
    price: "$58.00",
    author: "Lucy Parker",
    title: "Graphic Design Essentials",
    slug: "graphic-design-essentials",
    lessons: 8,
    students: 23,
    desc: "Unlock your creativity and design skills with graphic design fundamentals.",
    age: "16+",
    time: "6-8 PM",
    seat: 23,
  },
  {
    id: 14,
    youtubeUrl: "https://www.youtube.com/embed/A1wBXNu0zs4?si=7oxEyUbEaOl_ZDFt",
    imgSrc: "assets/images/blog/blog-11.png",
    price: "$48.00",
    author: "Michael Adams",
    title: "Music Production and Composition Workshop",
    slug: "music-production-and-composition-workshop",
    lessons: 7,
    students: 18,
    desc: "Create your own music and explore the art of music production.",
    age: "14-21 Year",
    time: "4-6 PM",
    seat: 18,
  },
  {
    id: 15,
    youtubeUrl: "https://www.youtube.com/embed/6Ia0arVEhqs?si=f7GD1Rl-pYivxAOz",
    imgSrc: "assets/images/blog-2/blog-1.png",
    price: "$35.00",
    author: "Lisa Johnson",
    title: "Fun with Colors and Shapes",
    slug: "fun-with-colors-and-shapes",
    lessons: 5,
    students: 15,
    desc: "Introduce your child to the world of colors and shapes through fun activities.",
    age: "3-5 Year",
    time: "9-11 AM",
    seat: 15,
  },
  {
    id: 16,
    youtubeUrl: "https://www.youtube.com/embed/0KsdJhWLPDw?si=HiHrhv9ZDOvKciyf",
    imgSrc: "assets/images/blog-2/blog-2.png",
    price: "$40.00",
    author: "David Smith",
    title: "Storytime Adventures",
    slug: "storytime-adventures",
    lessons: 6,
    students: 12,
    desc: "Immerse your child in the world of storytelling with exciting adventures.",
    age: "4-6 Year",
    time: "10-12 AM",
    seat: 12,
  },
  {
    id: 17,
    youtubeUrl: "https://www.youtube.com/embed/3oLculV1Od8?si=E_zZXlUt_vAbgfjs",
    imgSrc: "assets/images/blog-2/blog-3.png",
    price: "$45.00",
    author: "Emily White",
    title: "Outdoor Nature Exploration",
    slug: "outdoor-nature-exploration",
    lessons: 4,
    students: 10,
    desc: "Let your child discover the wonders of nature through outdoor adventures.",
    age: "3-6 Year",
    time: "1-3 PM",
    seat: 10,
  },
  {
    id: 18,
    youtubeUrl: "https://www.youtube.com/embed/sT-fdlxELxs?si=WnrSYd0RcCALbyt7",
    imgSrc: "assets/images/blog-2/blog-4.png",
    price: "$38.00",
    author: "Sarah Turner",
    title: "Creative Arts and Crafts",
    slug: "creative-arts-and-crafts",
    lessons: 7,
    students: 14,
    desc: "Foster your child's creativity with exciting arts and crafts projects.",
    age: "4-5 Year",
    time: "2-4 PM",
    seat: 14,
  },
  {
    id: 19,
    youtubeUrl: "https://www.youtube.com/embed/Mv80WebB2e4?si=1UtPvIbU87m_Dxu3",
    imgSrc: "assets/images/blog-2/blog-5.png",
    price: "$30.00",
    author: "Daniel Green",
    title: "Music and Rhythm Playtime",
    slug: "music-and-rhythm-playtime",
    lessons: 5,
    students: 12,
    desc: "Introduce your child to the joy of music and rhythm in a playful environment.",
    age: "3-4 Year",
    time: "11 AM - 1 PM",
    seat: 12,
  },
  {
    id: 20,
    youtubeUrl: "https://www.youtube.com/embed/Uv9DNdCvG00?si=K_KqCYgtPoJSYFA6",
    imgSrc: "assets/images/blog-2/blog-6.png",
    price: "$33.00",
    author: "Sophia Davis",
    title: "Little Scientists Explorers",
    slug: "little-scientists-explorers",
    lessons: 6,
    students: 14,
    desc: "Ignite your child's curiosity through fun science experiments and discoveries.",
    age: "4-6 Year",
    time: "9-11 AM",
    seat: 14,
  },
  {
    id: 21,
    youtubeUrl: "https://www.youtube.com/embed/OZLNb_fbGks?si=jjeuJ1u12O9-xq58",
    imgSrc: "assets/images/blog-2/blog-7.png",
    price: "$36.00",
    author: "Olivia Brown",
    title: "Outdoor Art and Nature Crafts",
    slug: "outdoor-art-and-nature-crafts",
    lessons: 5,
    students: 10,
    desc: "Combine art and nature with creative outdoor craft activities for kids.",
    age: "3-5 Year",
    time: "10 AM - 12 PM",
    seat: 10,
  },
  {
    id: 22,
    youtubeUrl: "https://www.youtube.com/embed/Q_MejK4STuM?si=Rxm9nHqU8G4YKkrG" ,
    imgSrc: "assets/images/blog-2/blog-8.png",
    price: "$42.00",
    author: "Michael Harris",
    title: "Fantasy Storytelling Adventures",
    slug: "fantasy-storytelling-adventures",
    lessons: 7,
    students: 12,
    desc: "Take your child on magical journeys through imaginative storytelling.",
    age: "4-6 Year",
    time: "2-4 PM",
    seat: 12,
  },
  {
    id: 23,
    youtubeUrl: "https://www.youtube.com/embed/mCD8IOt9ln8?si=U6AT9RIuR7FjxIwr",
    imgSrc: "assets/images/blog-2/blog-9.png",
    price: "$39.00",
    author: "Emma Turner",
    title: "Playful Math and Numbers",
    slug: "playful-math-and-numbers",
    lessons: 6,
    students: 14,
    desc: "Make math fun and engaging with interactive games and activities for kids.",
    age: "3-5 Year",
    time: "11 AM - 1 PM",
    seat: 14,
  },
  {
    id: 24,
    youtubeUrl: "https://www.youtube.com/embed/T7VJvQFkO6Y?si=QOcXOd8L5DWHdIsj",
    imgSrc: "assets/images/blog-2/blog-10.png",
    price: "$37.00",
    author: "John Anderson",
    title: "Creative Storybook Illustration",
    slug: "creative-storybook-illustration",
    lessons: 6,
    students: 12,
    desc: "Let your child's imagination run wild with creative storybook illustration projects.",
    age: "4-6 Year",
    time: "9-11 AM",
    seat: 12,
  },
  {
    id: 25,
    youtubeUrl: "https://www.youtube.com/embed/xplQI2X9RPU?si=B-OIrTigIyQLqAlq",
    imgSrc: "assets/images/blog-2/blog-11.png",
    price: "$34.00",
    author: "Sophie Adams",
    title: "Outdoor Science Explorers",
    slug: "outdoor-science-explorers",
    lessons: 5,
    students: 10,
    desc: "Discover the wonders of the natural world through outdoor science experiments.",
    age: "3-6 Year",
    time: "10 AM - 12 PM",
    seat: 10,
  },
  {
    id: 26,
    youtubeUrl: "https://www.youtube.com/embed/FyXyF9_La6w?si=ywbNis-FsJubofOU" ,
    imgSrc: "assets/images/blog-2/blog-12.png",
    price: "$32.00",
    author: "Lucy Parker",
    title: "Dance and Movement Exploration",
    slug: "dance-and-movement-exploration",
    lessons: 4,
    students: 8,
    desc: "Let your child express themselves through creative dance and movement.",
    age: "3-4 Year",
    time: "1-3 PM",
    seat: 8,
  },
  {
    id: 27,
    youtubeUrl: "https://www.youtube.com/embed/ECmGcs_VXrg?si=vyN3BeNbSvIuufcV",
    imgSrc: "assets/images/blog-2/blog-13.png",
    price: "$31.00",
    author: "Michael Turner",
    title: "Gardening and Planting Fun",
    slug: "gardening-and-planting-fun",
    lessons: 5,
    students: 10,
    desc: "Teach your child the joy of gardening and caring for plants.",
    age: "3-5 Year",
    time: "2-4 PM",
    seat: 10,
  },
  {
    id: 28,
    youtubeUrl: "https://www.youtube.com/embed/AhP5Tg_BLIk?si=ooXLT3Y9igiMeVYY",
    imgSrc: "assets/images/blog-2/blog-14.png",
    price: "$33.00",
    author: "Olivia Harris",
    title: "Exploring Animals and Nature",
    slug: "exploring-animals-and-nature",
    lessons: 6,
    students: 12,
    desc: "Learn about animals and nature through exciting outdoor adventures.",
    age: "4-6 Year",
    time: "9-11 AM",
    seat: 12,
  },
  {
    id: 29,
    youtubeUrl: "https://www.youtube.com/embed/WFygb_vU6e0?si=uoMkWKeKnzlIhu90" ,
    imgSrc: "assets/images/blog-2/blog-15.png",
    price: "$35.00",
    author: "Daniel Clark",
    title: "Fun with Science Experiments",
    slug: "fun-with-science-experiments",
    lessons: 5,
    students: 10,
    desc: "Inspire curiosity with hands-on science experiments for young learners.",
    age: "3-5 Year",
    time: "10 AM - 12 PM",
    seat: 10,
  },
  {
    id: 30,
    youtubeUrl: "https://www.youtube.com/embed/Q-o3ZL15d8s?si=i118y8c6emKElWI3" ,
    imgSrc: "assets/images/blog-2/blog-16.png",
    price: "$36.00",
    author: "Sophia Turner",
    title: "Crafting and Creative Play",
    slug: "crafting-and-creative-play",
    lessons: 6,
    students: 12,
    desc: "Encourage creativity through fun crafting and creative playtime.",
    age: "4-6 Year",
    time: "1-3 PM",
    seat: 12,
  },
// collaborations start
{
  id: 31,
  youtubeUrl: "https://www.youtube.com/embed/3dx04Vz3jiI?si=n1JkjIZfyys3Bxc5",
  imgSrc: "assets/images/tl-8/colab1-img.png",
  price: "$250.00",
  author: "John Smith",
  title: "San Jose State University, California",
  slug: "school-of-commerce-and-management",
  lessons: 10,
  students: 15,
  desc: "USA",
 details: "Articulation Of Program\nM.S/M.Tech Aerospace Engineering.\n1+1\nM.Tech(SGU)+M.S(SJSU)\n3+1+1\nB.Tech(SGU)+M.S (SJSU)",
  age: "16+",
  time: "9 AM - 11 AM",
  seat: 15
},
  {
    id: 32,
    youtubeUrl: "https://www.youtube.com/embed/3dx04Vz3jiI?si=n1JkjIZfyys3Bxc5",
    imgSrc: "assets/images/tl-8/colab2-img.png",
    price: "$250.00",
    author: "John Smith",
    title: "Teesside University",
    slug: "school-of-commerce-and-management",
    lessons: 10,
    students: 15,
    desc: "U.K",
    details: "Articulation of B. Design\nPrograms 3+1 (U.G) in Product Design/Space Design/Interior Design/Graphic Design\nM.S Disaster Management\n*Possible start up July 2024",
    age: "16+",
    time: "9 AM - 11 AM",
    seat: 15
  },
  {
    id: 33,
    youtubeUrl: "https://www.youtube.com/embed/3dx04Vz3jiI?si=n1JkjIZfyys3Bxc5",
    imgSrc: "assets/images/tl-8/colab3-img.png",
    price: "$250.00",
    author: "John Smith",
    title: "Victorian Institute of Technology, Melbourne",
    slug: "school-of-commerce-and-management",
    lessons: 10,
    students: 15,
    desc: "Australia",
    details: "Study Abroad Program",
    age: "16+",
    time: "9 AM - 11 AM",
    seat: 15
  },
  {
    id: 34,
    youtubeUrl: "https://www.youtube.com/embed/3dx04Vz3jiI?si=n1JkjIZfyys3Bxc5",
    imgSrc: "assets/images/tl-8/colab4-img.png",
    price: "$250.00",
    author: "John Smith",
    title: "University of the Highlands and Islands, Scotland",
    slug: "school-of-commerce-and-management",
    lessons: 10,
    students: 15,
    desc: "United Kingdom (U.K.)",
    details: "Develop Academic and Educational Collaboration",
    age: "16+",
    time: "9 AM - 11 AM",
    seat: 15
  },
  {
    id: 35,
    youtubeUrl: "https://www.youtube.com/embed/3dx04Vz3jiI?si=n1JkjIZfyys3Bxc5",
    imgSrc: "assets/images/tl-8/colab5-img.png",
    price: "$250.00",
    author: "John Smith",
    title: "Chonnam National University",
    slug: "school-of-commerce-and-management",
    lessons: 10,
    students: 15,
    desc: "South Korea",
    details: "Establish Framework for Education and Research",
    age: "16+",
    time: "9 AM - 11 AM",
    seat: 15
  },
  {
    id: 36,
    youtubeUrl: "https://www.youtube.com/embed/3dx04Vz3jiI?si=n1JkjIZfyys3Bxc5",
    imgSrc: "assets/images/tl-8/colab6-img.png",
    price: "$250.00",
    author: "John Smith",
    title: "Yeungnam University, Gyeongbuk",
    slug: "school-of-commerce-and-management",
    lessons: 10,
    students: 15,
    desc: "Republic of Korea",
    details: "Establish Framework for Education and Research",
    age: "16+",
    time: "9 AM - 11 AM",
    seat: 15
  },
  {
    id: 37,
    youtubeUrl: "https://www.youtube.com/embed/3dx04Vz3jiI?si=n1JkjIZfyys3Bxc5",
    imgSrc: "assets/images/tl-8/colab7-img.png",
    price: "$250.00",
    author: "John Smith",
    title: "Teesside University",
    slug: "school-of-commerce-and-management",
    lessons: 10,
    students: 15,
    desc: "UK",
    details: "Student & Faculty Exchange",
    age: "16+",
    time: "9 AM - 11 AM",
    seat: 15
  },
  {
    id: 38,
    youtubeUrl: "https://www.youtube.com/embed/3dx04Vz3jiI?si=n1JkjIZfyys3Bxc5",
    imgSrc: "assets/images/tl-8/colab8-img.png",
    price: "$250.00",
    author: "John Smith",
    title: "University of South Carolina Aiken",
    slug: "school-of-commerce-and-management",
    lessons: 10,
    students: 15,
    desc: "USA",
    details: "Student & Faculty Exchange",
    age: "16+",
    time: "9 AM - 11 AM",
    seat: 15
  },
  {
    id: 39,
    youtubeUrl: "https://www.youtube.com/embed/3dx04Vz3jiI?si=n1JkjIZfyys3Bxc5",
    imgSrc: "assets/images/tl-8/colab9-img.png",
    price: "$250.00",
    author: "John Smith",
    title: "Northumbria University",
    slug: "school-of-commerce-and-management",
    lessons: 10,
    students: 15,
    desc: "UK",
    details: "Student & Faculty Exchange",
    age: "16+",
    time: "9 AM - 11 AM",
    seat: 15
  }, 
  //colaboration end
  {
    id: 40,
    youtubeUrl: "https://www.youtube.com/embed/BBz-Jyr23M4?si=uknYb9rUpowAwqOe",
    imgSrc: "assets/images/tl-9/class-2.jpg",
    price: "$400",
    author: "David Harris",
    title: "Guitar Basics",
    slug: "guitar-basics",
    lessons: 8,
    students: 15,
    desc: "Learn the fundamentals of playing the guitar.",
    age: "8-12 Year",
    time: "3-5 PM",
    seat: 15,
    duration: 3,
  },
  {
    id: 41,
    youtubeUrl: "https://www.youtube.com/embed/4SXQ_wlbWog?si=k3i3v5y-3WZLMyZS",
    imgSrc: "assets/images/tl-9/class-3.jpg",
    price: "$380",
    author: "Olivia Smith",
    title: "Piano for Beginners",
    slug: "piano-for-beginners",
    lessons: 10,
    students: 20,
    desc: "Start your musical journey with piano lessons.",
    age: "10-16 Year",
    time: "4-6 PM",
    seat: 20,
    duration: 8,
  },
  {
    id: 42,
    youtubeUrl: "https://www.youtube.com/embed/K8HnZ8DHXN4?si=msY0Fz0RyeOFmPoH",
    imgSrc: "assets/images/blog-4/blog-4.png",
    price: "$320",
    author: "John Turner",
    title: "Drumming Essentials",
    slug: "drumming-essentials",
    lessons: 6,
    students: 18,
    desc: "Discover the rhythm with drumming lessons.",
    age: "12+",
    time: "2-4 PM",
    seat: 18,
    duration: 9,
  },
  {
    id: 43,
    youtubeUrl: "https://www.youtube.com/embed/Rg8LfBRRR0o?si=NJmNtYbT4Cwi9ZRs",
    imgSrc: "assets/images/blog-4/blog-5.png",
    price: "$420",
    author: "Emily White",
    title: "Flute Masterclass",
    slug: "flute-masterclass",
    lessons: 12,
    students: 15,
    desc: "Master the art of playing the flute.",
    age: "10-18 Year",
    time: "10-12 AM",
    seat: 15,
    duration: 5,
  },
  {
    id: 44,
    youtubeUrl: "https://www.youtube.com/embed/G_IOGR87fbE?si=S32yzDiXCraypqSX" ,
    imgSrc: "assets/images/blog-4/blog-6.png",
    price: "$360",
    author: "Lucas Turner",
    title: "Trumpet Lessons",
    slug: "trumpet-lessons",
    lessons: 8,
    students: 20,
    desc: "Learn to play the trumpet.",
    age: "12-16 Year",
    time: "4-6 PM",
    seat: 20,
    duration: 9,
  },
  {
    id: 45,
    youtubeUrl: "https://www.youtube.com/embed/AFfuYZudBIU?si=EjH_xcFsWy8zL4DP",
    imgSrc: "assets/images/blog-4/blog-7.png",
    price: "$400",
    author: "Sophia Smith",
    title: "Electric Guitar Rockstar",
    slug: "electric-guitar-rockstar",
    lessons: 10,
    students: 15,
    desc: "Become a rockstar with electric guitar lessons.",
    age: "14-21 Year",
    time: "6-8 PM",
    seat: 15,
    duration: 7,
  },
  {
    id: 46,
    youtubeUrl: "https://www.youtube.com/embed/-E5ovOA9VM8?si=8XqoOZRiO5fPqUWf",
    imgSrc: "assets/images/blog-4/blog-8.png",
    price: "$380",
    author: "Oliver Davis",
    title: "Saxophone Melodies",
    slug: "saxophone-melodies",
    lessons: 8,
    students: 12,
    desc: "Create beautiful melodies with saxophone lessons.",
    age: "18+",
    time: "8-10 PM",
    seat: 12,
    duration: 3,
  },
  {
    id: 47,
    youtubeUrl: "https://www.youtube.com/embed/Gfggr-IJeh4?si=W8XM3NxushOz3fny",
    imgSrc: "assets/images/blog-4/blog-9.png",
    price: "$360",
    author: "Natalie Harris",
    title: "Keyboard Magic",
    slug: "keyboard-magic",
    lessons: 6,
    students: 10,
    desc: "Explore the magic of keyboard music.",
    age: "16+",
    time: "6-8 AM",
    seat: 10,
    duration: 5,
  },
  {
    id: 48,
    youtubeUrl: "https://www.youtube.com/embed/gTnz040x5CA?si=8aGnDuB-LnRnB0Cf",
    imgSrc: "assets/images/blog-4/blog-10.png",
    price: "$380",
    author: "Daniel Turner",
    title: "Violin Mastery",
    slug: "violin-mastery",
    lessons: 10,
    students: 15,
    desc: "Master the art of playing the violin.",
    age: "18+",
    time: "5-7 PM",
    seat: 15,
    duration: 9,
  },
  {
    id: 49,
    youtubeUrl: "https://www.youtube.com/embed/8Xd6XeWqEtI?si=2s3ocor5jt2PUMHB",
    imgSrc: "assets/images/blog-4/blog-11.png",
    price: "$420",
    author: "Emma Turner",
    title: "Harmonica Harmonies",
    slug: "harmonica-harmonies",
    lessons: 12,
    students: 15,
    desc: "Learn to play harmonica and create harmonious melodies.",
    age: "10-18 Year",
    time: "1-3 PM",
    seat: 15,
    duration: 11,
  },
  {
    id: 50,
    youtubeUrl: "https://www.youtube.com/embed/Iiaw93EbFBQ?si=eS5-7W3JXxWmBU6f" ,
    imgSrc: "assets/images/blog-4/blog-12.png",
    price: "$350",
    author: "Liam Harris",
    title: "Ukulele Strumming",
    slug: "ukulele-strumming",
    lessons: 6,
    students: 12,
    desc: "Strum your way into the world of ukulele music.",
    age: "8-14 Year",
    time: "3-5 PM",
    seat: 12,
    duration: 6,
  },
  {
    id: 51,
    youtubeUrl: "https://www.youtube.com/embed/9FmnQcHnacg?si=w-Ras670v58IB1na",
    imgSrc: "assets/images/blog-4/blog-13.png",
    price: "$420",
    author: "Sophie Turner",
    title: "Accordion Virtuoso",
    slug: "accordion-virtuoso",
    lessons: 12,
    students: 15,
    desc: "Master the accordion and play beautiful tunes.",
    age: "12-18 Year",
    time: "10-12 AM",
    seat: 15,
    duration: 4,
  },
  {
    id: 52,
    youtubeUrl: "https://www.youtube.com/embed/ywSMRccMDvE?si=woYCRn1uHD8NZfbB" ,
    imgSrc: "assets/images/blog-4/blog-14.png",
    price: "$360",
    author: "Mia Harris",
    title: "Xylophone Magic",
    slug: "xylophone-magic",
    lessons: 6,
    students: 10,
    desc: "Create enchanting music with the xylophone.",
    age: "6-12 Year",
    time: "4-6 PM",
    seat: 10,
    duration: 8,
  },
  {
    id: 53,
    youtubeUrl: "https://www.youtube.com/embed/G5DBX9vrP5U?si=uCg7mY6ffOMfIzho",
    imgSrc: "assets/images/blog-4/blog-1.png",
    price: "$380",
    author: "Ethan Turner",
    title: "Harp Harmony",
    slug: "harp-harmony",
    lessons: 8,
    students: 15,
    desc: "Discover the harmonious world of the harp.",
    age: "14-21 Year",
    time: "6-8 PM",
    seat: 15,
    duration: 5,
  },
  {
    id: 54,
    youtubeUrl: "https://www.youtube.com/embed/qzJ1o165jpc?si=gMwFYp4hy_CU65U6",
    imgSrc: "assets/images/blog-4/blog-2.png",
    price: "$350",
    author: "Luna Smith",
    title: "Mandolin Melodies",
    slug: "mandolin-melodies",
    lessons: 6,
    students: 12,
    desc: "Strum the mandolin and create beautiful melodies.",
    age: "10-16 Year",
    time: "2-4 PM",
    seat: 12,
    duration: 3,
  }
];


const testimonialList = [
  {
    id: 0,
    imgSrc: "assets/images/electronics-communication-engineering/alumni/alumni01.jpg",
    review:
      "Today I am pursuing the higher education in UK in a reputed university and the course of my choice . Thanks to our faculty and professors at Dept of  E& C Engg. at SGI who counseled me  in the beginning nurtured me and guided me to realize my dream to pursue M.S in UK.",
    name: "Mr.Girish Shirwadkar",
    label: "Northumbria university",
  },
  {
    id: 1,
    imgSrc: "assets/images/electronics-communication-engineering/alumni/alumni02.jpg",
    review:
      "My Days at SGU remind me of three things very specifically Discipline, Hard work and Success. Engineering they say is a way of life and I am glad I could live it at E & TC Engg. Dept. at SGI now SGU. Those days were filled with challenges and learning. Thanks to my professors for always being supportive and recognizing the talents in me. I am ever so grateful for the lessons from them that I stand tall today by doing well in my life.",
    name: "Ms. Anam Sayad",
    label: "Capegemini",
  },
  {
    id: 2,
    imgSrc: "assets/images/electronics-communication-engineering/alumni/alumni03.jpg",
    review:
      "Dept of E & C and its faculty members are the reason why I am here today. They helped me develop my domain knowledge and other skills. I got placed in the campus itself. Indeed the institute has shaped my career and future.",
    name: "Ms. Romi Kumari",
    label: "L & T Infotech",
  },
  {
    id: 3,
    imgSrc: "assets/images/electronics-communication-engineering/alumni/alumni04.jpg",
    review:
      "I am fortunate to learn and graduate from Dept of E & TC Engineering at SGI now SGU. As they not only developed and taught domain based skills but also other skills which motivated me and prepared me to pass MPSC exams in flying colors and gave me the opportunity to serve the nation in police uniform.",
    name: "Ms. Neha Sutar",
    label: "Assistant Sub Inspector Maharashtra Police",
  },
];

const commerceAlumni = [
  {
    id: 1,
    imgSrc: "assets/images/commerce-dept/alumni/alumni1.png",
    review:
      "After appearing for CAT 2022, she is currently pursuing an MBA in Finance from the Indian Institute of Management (IIM) Amritsar. During her MBA, she interned with ICICI Bank at their headquarters, working in the Operational Risk Management Group. She has now secured a placement as a Finance Consultant with Deloitte USI.",
    name: "Mansi Wadhva",
    batch :"Bachelor of Commerce (2022-23)",
    label: "Pursuing MBA in IIM Amritsar",
  },
  {
    id: 2,
    imgSrc: "assets/images/commerce-dept/alumni/alumni2.png",
    review:
      "He has Commerce Graduate and subsequently done an MBA with specialization in HR and Finance wherein He stood at second rank in the university level and in institution He was then first ranker in the year 2015 and later in the year 2021 He has completed with a law degree (LLB).Currently, He is working with Samruddhi Industries Limited, situated at Sangli having multiplication plants with a central corporate office in Sangli. He is leading HR functions and a senior member in strategic planning and key member in operations part in the organization, while reporting to MD.",
    name: "Atul Malpani",
    batch :"Bachelor of Commerce (2014-15)",
    label: "HR & Strategic Planning , Samruddhi Industries Limited",
  },
  {
    id: 3,
    imgSrc: "assets/images/commerce-dept/alumni/alumni3.png",
    review:
      "We are a manufacturer of corrugated Boxes for packaging products.For the last 9 years he has been running his business successfully and achieved the Best Industrial performance award from Laxmi Co. Ind. Estate among 250 industries.",
    name: "Aniket Barwade",
    batch :"Bachelor of Commerce (2013-14)",
    label: "Proprietor , Royal Wings & Infinity packaging",
  },
  {
    id: 4,
    imgSrc: "assets/images/commerce-dept/alumni/alumni4.png",
    review:
      "Originally from Kolhapur, Maharashtra, He is an international athlete. He has competed in various National and international competitions. He has completed his Bachelor of commerce from Sanjay Ghodawat University, Kolhapur. After graduating from this institute he was officially called to represent in sports (Aquatics) by the university of Mumbai. He is now pursuing MBA in marketing from Pillai Institute of Management Studies & Research, Mumbai. During his MBA, he interned with ONGC at their headquarters at BKC, Mumbai (Oil& Natural Gas Corporation limited). Currently he is in his placement process associated with his current academics. Here are his current achievements in Swimming (Aquatics).",
    name: "Mr. Sujit",
    batch :"Bachelor of Commerce (2013-14)",
    label: "Proprietor , Royal Wings & Infinity packaging",
  },
  {
    id: 5,
    imgSrc: "assets/images/commerce-dept/alumni/alumni5.png",
    review:
      " We are proud to highlight the achievements of Sanket Jadhav a distinguished alumni of SGU, who is currently thriving in the role of Deputy Manager at Kotak Mahindra Bank. After completing his bachelor's degree in commerce in 2021, Sanket Jadhav embarked on a promising career journey in the banking and finance sector. Starting with a strong academic foundation and practical skills gained during his time at SGU, he quickly made a mark in the professional world.",
    name: "Sanket Jadhav",
    batch :"Bachelor of Commerce (2020-21)",
    label: "Deputy Manager ,Kotak Mahindra Bank",
  },
  /* {
    id: 6,
    imgSrc: "assets/images/commerce-dept/alumni/alumni6.png",
    review:
      " We are proud to celebrate the achievements of Shweta Shedshale, an esteemed alumnus of Sanjay Ghodawat University, who is now making significant contributions as an Assistant Professor at the very same institution.",
    name: "Shweta Sunil Shedshale",
    batch :"Bachelor of Commerce (2015-16)",
    label: "Assistant Professor ,Sanjay Ghodawat University",
  }  */
]

const pharmacyAlumniList = [
  {
    id: 1,
    imgSrc: "assets/images/pharmacy-dept/alumni/phar_Alu_01.png",
    name: "Mr. Vedant R Patil",
    company: "TCS Sigma Pharmacovigilance",
    package: "3.8LPA"
  },
  {
    id: 2,
    imgSrc: "assets/images/pharmacy-dept/alumni/phar_Alu_02.jpg",
    name: "Mr.Tejas Ananda Talekar",
    company: "TCS Sigma Pharmacovigilance",
    package: "3.8LPA"
  },
  {
    id: 3,
    imgSrc: "assets/images/pharmacy-dept/alumni/phar_Alu_03.jpg",
    name: "Ms. Kimaya Rajendra Shinde",
    company: "Ediglobe/Aminfo/Bombay IIT/Episource",
    package: "5.5 LPA"
  },
  {
    id: 4,
    imgSrc: "assets/images/pharmacy-dept/alumni/phar_Alu_04.jpg",
    name: "Mr. Arihant Shrenik Parmaj",
    company: "Edglobe/Wellness Forever/TCMS/Sigma Aldrich",
    package: "5.5 LPA"
  }
];

const managementAlumniList = [
  {
    id: 0,
    imgSrc: "assets/images/management-dept/alumni/sanakar.png",
    name: "Sanskar Nawal",
    batch:"BBA (International Business) 2017-20",
    designation: 'Retail Planner Trainee, LVMH Perfumes & Cosmetics,Dubai, United Arab Emirates. Founder, Glamup Ventures.',
    dec: "He has completed his MBA in Global Logistics & SCM from S P Jain School of Global Management, Dubai. On current job his role is as a Retail Planner Trainee for GUERLAIN at LVMH Parfums Christian Dior where, he is responsible for various aspects of inventory management and stock accuracy, contributing to the smooth operation of the retail process. He is also a founder of his own company named GLAMUP VENTURES."
  },
  {
    id: 1,
    imgSrc: "assets/images/management-dept/alumni/radhika.png",
    name: "Radhika Toshniwal",
    batch:"MBA 2022-24",
    designation : "Executive Associate, Ghodawat Consumer Ltd. (GCL), Chipri, Dist. Kolhapur",
    dec: 'Recently joined ONE SGG, Ghodawat Consumer Ltd. (GCL) for an internship as an Executive Associate in the COO office under the guidance of Mrs.Salloni Siroya Ghodawat.'
  },
  {
    id: 2,
    imgSrc: "assets/images/management-dept/alumni/varad.png",
    name: "Varad Bagewadi",
    batch:"MBA (Marketing) 2021-23",
    designation : "Territory Sales Officer, Asian Paints, Mumbai",
    dec: "Recently embarked on an incredible journey with Asian Paints as an Adhesive Territory Sales Executive. He is confident that his dedication and enthusiasm will help drive success and make a meaningful impact on the company's vision."
  },
  {
    id: 3,
    imgSrc: "assets/images/management-dept/alumni/punit.jpg",
    name: "Punit Savala",
    batch:"MBA (Marketing) 2021-23",
    designation : "Talent Acquisition Specialist, Digital Intelligence Systems, LLC (DISYS) India Pvt. Ltd. Pune.",
    dec: "Before joining DISYS, Punit was Business Development Associate in RapidForce Technologies Pvt. Ltd., Kolhapur. Punit is expert in sales, marketing and business development activities. He is soft spoken person and good human relation skills."
  },
  {
    id: 4,
    imgSrc: "assets/images/management-dept/alumni/manasi.png",
    name: "Manasi Mirajkar",
    batch:"MBA (HR) 2021-23",
    designation : "HR Professional, Atyeti Inc. Pune.",
    dec: "She has completed her MBA internship form JISA Softech Private Limited, Pune as a HR Recruiter Intern. She also received a Best Outgoing Student Award of Sanjay Ghodawat University in Post Graduate category for the year 2022-2023."
  },
 /* {
    id: 5,
    imgSrc: "assets/images/management-dept/alumni/vedashri.png",
    name: "Vedashri Kulkarni",
    batch:"MBA (Marketing) 2021-23",
    designation : "US IT Recruiter, Spearhead Technology, Dallas, Texas, United States-On-site.",
    dec: "She has completed her MBA internship form OpEx Accelerator Pvt. Ltd., Kolhapur as a Business Development Executive Intern.She was selected as a US IT Recruiter in tCognition, Kolhapur through campus placement."
  }, */
  {
    id: 5,
    imgSrc: "assets/images/management-dept/alumni/ronak.png",
    name: "Ronak Chauhan",
    batch:"MBA (HR) 2021-23",
    designation : "Talent Acquisition Specialist, Velociti HR Services,Pune.",
    dec: "She has completed her MBA internship Ifortis WorldwideTM, Bengaluru, Karnataka as a Human Resources Associate. Ronal is highly motivated and enthusiastic HR professional with solid foundation in HR fundamentals and a strong desire to learn and develop her skills."
  },
  {
    id: 6,
    imgSrc: "assets/images/management-dept/alumni/harshada.png",
    name: "Harshada Mohite",
    batch:"MBA (Operations & SCM) 2021-23",
    designation : "Resource Executive, Shipco IT Private Limited, Pune.",
    dec: "She has completed her MBA internship Tata Motors, Pune as a Supply Chain Intern. Before joining Shipco IT Pvt. Ltd. harshada was Sales Coordinator at Aircare System & Solution India Pvt Ltd., Pune. She was selected as Purchase Assistant in Ultra Enterprises, Pune through campus placement."
  },
  {
    id: 7,
    imgSrc: "assets/images/management-dept/alumni/vedika.png",
    name: "Vedika Narote",
    batch:"MBA (HR) 2021-23",
    designation : "Business Development Executive, tCognition, Pune.",
    dec: "She has completed her MBA internship in tCognition, Kolhapur as a HR Intern. As a Business Development Executive at tCognition, she leverage her MBA degree and he skills to identify and pursue new opportunities for the company."
  },
 /* {
    id: 9,
    imgSrc: "assets/images/management-dept/alumni/avinash.jpg",
    name: "Avinash Diwan",
    batch:"MBA (Marketing) 2020-22",
    designation : "Sales Consultant, Lindström, Kolhapur.",
    dec: "Avinash is a hardworking and self-motivated person with good sales and customer relationship management skills. He has completed his engineering in Mechanical."
  },

  {
    id: 10,
    imgSrc: "assets/images/management-dept/alumni/saurabh.jpg",
    name: "Saurabh Agare",
    batch:"MBA (Operations & SCM) 2020-22",
    designation : "Operations Specialist, Tech Mahindra, Sangli.",
    dec : "Before joining Tech Mahindra, Sourabh was selected as Operations Manager in NEXA - Maruti Suzuki India Ltd. through campus placement. He is highly motivated and hardworking professional with solid foundation in operations and business processes and always ready to learn and develop his skills."
  },
  {
    id: 11,
    imgSrc: "assets/images/management-dept/alumni/shafiya.jpg",
    name: "Shafiya Khatib",
    batch:"MBA (HR) 2020-22",
    designation : "Talent Acquisition Executive, Brainworks Business Solutions, Kolhapur.",
    dec : "Safiya was worked as a Human Resources Executive at Evers Ecommerce Pvt. Ltd. Pune during her MBA internship. She is hardworking HR professional with talent acquisition and recruitment skills."
  },
  {
    id: 12,
    imgSrc: "assets/images/management-dept/alumni/aishwarya.jpg",
    name: "Aishwarya Shettimali",
    batch:"MBA (HR) 2020-22",
    designation : "Executive HR Recruiter, Le Human Resources Solutions Pvt. Ltd., Pune.",
    dec : "Saba was worked as a Human Resources intern at Raymond Limited, Kolhapur during her MBA internship. She is good in decision making team building and leadership skills."
  },
  {
    id: 13,
    imgSrc: "assets/images/management-dept/alumni/saba.jpg",
    name: "Saba Mulla",
    batch:"MBA (HR) 2020-22",
    designation : "HR Executive, Anvis Digital Pvt Ltd, Mumbai.",
    dec : "Saba was worked as a Human Resources intern at Fashion Yarn Business | Grasim Industries Limited, Kalyan Mumbai during her MBA internship. She is good in soft skills and highly dedicated to her work."
  },

  {
    id: 14,
    imgSrc: "assets/images/management-dept/alumni/indrasen.jpg",
    name: "Indrasen Mane",
    batch:"MBA (Marketing) 2018-20",
    designation : "Sr. Marketing Executive, Danube Properties (UAE).",
    dec : "Before joining Danube Properties, Indrasen was Marketing Executive in NITSHAW Wood Panel & Surface Technologies Pvt. Ltd. at Bengaluru, Karnataka. Indrasen is a seasoned marketing professional with a diverse skill set and a wealth of experience in both traditional and digital marketing"
  },
  {
    id: 15,
    imgSrc: "assets/images/management-dept/alumni/nikhil.jpg",
    name: "Nikhil Ghatekari",
    batch:"MBA (Marketing) 2018-20",
    designation : "Sr. Executive, Atal Incubation Centre - Pinnacle Industries, Mumbai.",
    dec : "Before joining Atal Incubation Centre - Pinnacle Industries Nikhil, Indrasen was Social Media Executive in Varahe Analytics Private Ltd. at Bengaluru, Karnataka. Nikhil is a social media marketing professional with a diverse skill set."
  },
  {
    id: 16,
    imgSrc: "assets/images/management-dept/alumni/abhinav.jpg",
    name: "Abhinav Nalawade",
    batch:"MBA (Marketing) 2017-19",
    designation : "Deputy Manager-Corporate Sales, Indo Edge India Ltd., Kolhapur.",
    dec : "Previous he worked as a Territory Sales Manager in NoBroker.com for one year and then shifted to Indo Edge India Ltd. as a Deputy Manager-Corporate Sales. Since his childhood, he was a confident speaker who had participated many speech competition, debates, GDs and story narrations which always help him to convey his views, thoughts and ideas with the people around him for his professional growth and networking."
  },
  {
    id: 17,
    imgSrc: "assets/images/management-dept/alumni/swarup.jpg",
    name: "Swarup Jadhav",
    batch:"MBA (Finance) 2015-17",
    designation : "Senior Financial Analyst, BNY Mellon, Pune.",
    dec : "After completion of his MBA, he joined Atos Syntel, Pune IT services and Consultancy firm as a Junior Financial Analyst in 2017 to 2018, then he promoted as Financial Analyst in 2018 to Feb. 2020. In March 2020 he shifted to SS&C Technologies, Pune as a Senior Financial Analyst. In April 2022, he got an offer from BNY Mellon, Pune as a Senior Financial Analyst where he has now completed 2 years. He has a strong work profile in finance, and analytics with skill sets as account reconciliation, Microsoft excel, investment management, and investment banking."
  },
  {
    id: 18,
    imgSrc: "assets/images/management-dept/alumni/shweta.jpg",
    name: "Shweta Singh",
    batch:"MBA (Marketing & HR) 2015-17",
    designation : "Assistant Manager Sales & Marketing, GTT Foundation, Pune.",
    dec : "From Campus placement she joined Bharti Airtel Ltd., Pune as a Territory Sales Manager in 2017 to 2019, then she shifted to MN World Enterprise Private Ltd., Pune as a Key Account Manager in 2020. In 2021 she got an offer from Reliance Jio Infocom Ltd. Pune as an Assistant Sales Manager where she worked till Feb 2022. She has a strong work profile in Sales and Marketing."
  },
  {
    id: 19,
    imgSrc: "assets/images/management-dept/alumni/sanyukta.jpg",
    name: "Sanyukta Bhilare",
    batch:"BBA (International Business) 2018-21",
    designation : "Import Export Executive, Seashell Logistics Pvt Ltd, Navi Mumbai.",
    dec : "She has completed her MBA in Marketing & SCM from D Y Patil School of Management."
  },
  {
    id: 20,
    imgSrc: "assets/images/management-dept/alumni/sonukumar.jpg",
    name: "Sonukumar Bharti",
    batch:"B.Com. (Accounting & Finance) 2021-23",
    designation : "Business Development Manager, Niva Bupa Health Insurance, Sangli.",
    dec : "Currently also he is pursuing his MBA from Shoolini University, Solan, Himachal Pradesh. Sonukumar is a passionate and results-driven insurance sales professional with proven track record of exceeding sales targets through strategic prospecting, client relationship management, and innovative sales techniques."
  },
  {
    id: 21,
    imgSrc: "assets/images/management-dept/alumni/female.jpg",
    name: "Shweta Bagi",
    batch:"MBA (Finance & HR) 2012-14",
    designation : "Senior Auditor, HDFC Bank, Kolhapur.",
    dec : "Earlier she was working as a Teller Authorizer, HDFC Bank, Kolhapur and now promoted as senior auditor."
  },
  {
    id: 22,
    imgSrc: "assets/images/management-dept/alumni/shurti.jpg",
    name: "Shurti Patil",
    batch:"MBA (Finance & HR) 2012-14",
    designation : "Branch Operations Manager, Kotak Mahindra Bank Ltd., Pune.",
    dec : "From Campus placement she joined HDFC Bank, Pune as an Assistant Manager in 2014 to 2017, then she shifted to IndusInd Bank, Pune as a Deputy Branch Manager in 2017. Currently, she is working with Kotak Mahindra Bank Ltd., Pune as a Branch Operations Manager. She has a strong work profile in Banking."
  },
  {
    id: 23,
    imgSrc: "assets/images/management-dept/alumni/jithin.jpg",
    name: "Jithin Vijayan",
    batch:"MBA (Finance & HR) 2013-15",
    designation : "Senior Manager, LTIMindtree, IT Services and IT Consulting Mumbai.",
    dec : "Post MBA he was joined as Data Management Processor in BYN Mellon and from there to PwC as a Project Management Consultant (Risk and Advisory Consulting). In 2017, he shifted to Malomatia as a Corporate PMO and then in 2019 CompuCom as a Technical Project Manager, in Feb. 2021 to Persistent Systems as a Senior Technical Project Manager/ Lead and in June 2021 to LTI - Larsen & Toubro Infotech as a Manager - Project & Program Management. He has a strong profile in a Project and Supply Chain Management Managing Large Scale Projects."
  },
  {
    id: 24,
    imgSrc: "assets/images/management-dept/alumni/dilip.jpg",
    name: "Dilip Gatade",
    batch:"MBA (Marketing & HR) 2011-13",
    designation : "Marketing Head, Sevasadan Lifeline Super speciality Hospital, Miraj.",
    dec : "Post MBA he was joined as Officer Marketing in Vasan Eye Care Hospital, Kolhapur and from there to Aster Aadhar Hospital, Kolhapur as a Asst. Manager- Marketing. In Nov. 2016, he shifted to Kolhapur Cancer Centre as a Head of Marketing. He has a strong profile in a hospital marketing and management."
  },
  {
    id: 25,
    imgSrc: "assets/images/management-dept/alumni/rohit.jpg",
    name: "Rohit Malagi",
    batch:"MBA (HR) 2012-14",
    designation : "Senior Human Resources Generalist, Atyeti Inc, Pune.",
    dec : "Post MBA he was joined as Educational Counsellor in Sanjay Ghodawat IIT & Medical Academy, Kolhapur and from there to Rajendra Mane College of Engineering & Technology as an Assistant Professor. In Jun. 2017, he shifted to Konstelec Engineers Pvt. Ltd. Mumbai as a Human Resource Officer then in 2019 to Barometer (White Copper Hospitality) Pune as a Human Resource Manager. He has a strong profile in a talent acquisition and human resource management."
  },
  {
    id: 26,
    imgSrc: "assets/images/management-dept/alumni/prasann.jpg",
    name: "Prasann Ingale",
    batch:"MBA (Marketing & Finance) 2014-16",
    designation : "Customer Service Officer, Hindustan Unilever Ltd.,Ratnagiri.",
    dec : "Post MBA he was joined as Territory Sales Manager in Airtel, Kolhapur and from there to Monginis Foods Pvt. Ltd., Sangli as an Area Franchise Executive. In Mar. 2020, he shifted to Hindustan Unilever Ltd., Ratnagiri as a Customer Service Officer."
  },
  {
    id: 27,
    imgSrc: "assets/images/management-dept/alumni/shweta.jpg",
    name: "Shweta Chandwani",
    batch:"MBA (Marketing) 2019-21",
    designation : "International Sales Executive, Market Research Future® (MRFR), Pune.",
    dec : "Post MBA he was joined as Senior Business Development Executive in Unacademy, Kolhapur During her MBA she worked as a State Head intern for Unschool Project. She is good in handling and leading various teams, networking, sales and marketing, building culture within the teams."
  },
  {
    id: 28,
    imgSrc: "assets/images/management-dept/alumni/amar.jpg",
    name: "Amar Vishnu Patil",
    batch:"MBA (Finance) 2021-23",
    designation : "Relationship Manager, Home First Finance Company (HFFC), Sangli.",
    dec : "Amar is good in communication, networking, finance and analytics."
  },
  {
    id: 29,
    imgSrc: "assets/images/management-dept/alumni/sana.jpg",
    name: "Sana Pathan",
    batch:"MBA (Marketing & HR) 2015-17",
    designation : "a Senior Officer-TAG, Hexaware Technologies, Mumbai.",
    dec : "Post MBA she was joined as HR in Skeiron Group, Pune and from there to Executive81 HR Solutions Pvt. Ltd., Pune as a Senior Recruiter. In Sep. 2020, she shifted to Hexaware Technologies Mumbai as a Senior Officer- TAG. Sana is a hardworking and self-motivated person with good written and verbal communication skills. Her job profile is in talent acquisition and recruitment."
  },
  {
    id: 30,
    imgSrc: "assets/images/management-dept/alumni/amartya.jpg",
    name: "Amartya Yevluje",
    batch:"MBA (Marketing) 2021-23",
    designation : "Brand Manager, The Socma Digital Pvt Ltd, Pune.",
    dec : "Post MBA he was joined as Digital Marketing Manager in PIIDM - #1 Digital Marketing Training Institute, Pune Amartya is a creative and self- motivated person with communication skills. His job profile is in brand building, product shoot, social media handling and digital marketing."
  },
  {
    id: 31,
    imgSrc: "assets/images/management-dept/alumni/vijayraj.png",
    name: "Vijayraj Khobare",
    batch:"MBA (Marketing) 2017-19",
    designation : "Business Owner, RepubliQ Fine Dine, Kolhapur.",
    dec : "Vijayraj is a hardworking and self-motivated person with good business development skills."
  },
  {
    id: 32,
    imgSrc: "assets/images/management-dept/alumni/chintan.jpg",
    name: "Chintan Rathod",
    batch:"MBA (Marketing & HR) 2015-17",
    designation : "Owner, Nakoda Travels, Kolhapur.",
    dec : "Chintan is a hardworking and self-motivated person with good interpersonal and communication skills. Currently he is handling his own transportation business successfully."
  },
  {
    id: 33,
    imgSrc: "assets/images/management-dept/alumni/atul.jpg",
    name: "Atul Malpani",
    batch:"MBA (Marketing) 2014-16",
    designation : "Executive Secretary and Business Coordinator, E-clerk, Samrudhi Industries Ltd, Sangli.",
    dec : "Atul is a hardworking and self-motivated person with good communication skills. He was awarded by the hands of Bollywood superstar Mr. Anil Kapoor as a Best Outgoing Student of MBA batch 2014-16 and also he was secured second rank (Merit) in Shivaji University, Kolhapur in MBA (2015-16)."
  },
  {
    id: 34,
    imgSrc: "assets/images/management-dept/alumni/suraj.jpg",
    name: "Suraj Jamdade",
    batch:"MBA (Marketing & HR) 2011-13",
    designation : "Store Manager, Reliance Retail, Jalgaon.",
    dec : "Post MBA he was joined as a Lecturer in Jaikranti college, Latur and from there to COCSIT, Latur as an Assistant Professor. Suraj has a vast experience of working on various profiles such as sales and Business Development with Into Wellness Pune, Sales Manager in Kronos Fitness, Department Manager in Shoppers Stop Latur and so on."
  },  */
  
  
];

const computerAlumniList = [
  {
    id: 0,
    imgSrc: "assets/images/computer-science-engineering/alumni/aa1.png",
    name: "Harshvardhan Patil",
    company:"EXL",
    designation: 'Automation Test Engineer',
    package:"9 LPA",
    testimonials:"I am currently working as an Automation Test Engineer and have completed 3 years in the industry. I was placed in EXL with a package of 9lpa. My journey in the automation field has been enriching — from learning practical skills like [mention a few - Selenium, Cucumber, Ruby, Java, etc.] to handling real-time projects and quality assurance responsibilities. I'm thankful to my Sanjay Ghodawat University for providing the foundation that helped me build a strong career path in the IT industry.”"
  },

  {
    id: 1,
    imgSrc: "assets/images/computer-science-engineering/alumni/alumni2.png",
    name: "Aishwarya Bhosale",
    company:"Verdata",
    designation: 'Data Scientist',
    package:"1 Crore",
    testimonials:"My time at Sanjay Ghodawat University (2014-2018) was transformative. From a fresher to a gold medalist in Computer Science & Engineering, I was shaped by academic excellence and leadership roles, including being the General Secretary. These accomplishments were made possible by the support of my parents and the guidance of the faculty. I'm truly grateful for the opportunities that helped me grow.”"
  },

  {
    id: 2,
    imgSrc: "assets/images/computer-science-engineering/alumni/alumni3.png",
    name: "Ashish Sankpal",
    company:"Aexonic Technologies ",
    designation: 'Project Manager ',
    package:"22 LPA",
    testimonials:"Sanjay Ghodawat Institutes played a key role in shaping my academic and professional journey by providing a strong foundation of knowledge and skills. With excellent faculty, modern infrastructure, and an industry-focused curriculum, SGI fosters innovation and growth. Beyond academics, it nurtures leadership, teamwork, and problem-solving skills, preparing students for real-world success. My time at SGI was truly transformative, offering invaluable opportunities for learning, networking, and career advancement. I am proud to be an SGI alumnus, where education, discipline, and holistic development shape future leaders.”"
  },

  {
    id: 3,
    imgSrc: "assets/images/computer-science-engineering/alumni/alumni4.png",
    name: "Pavan Ratankumar Advani",
    company:"Payment Services and Integrators",
    designation: 'Product Owner',
    package:"40 LPA",
    testimonials:""
  },

  {
    id: 4,
    imgSrc: "assets/images/computer-science-engineering/alumni/alumni5.png",
    name: "Mahamadayaj Salim Mhaldar",
    company:"Paytm",
    designation: 'Technical Lead',
    package:"36 LPA",
    testimonials:""
  },

  {
    id: 5,
    imgSrc: "assets/images/computer-science-engineering/alumni/alumni6.png",
    name: "Shivani Sunil Jadhav",
    company:"Technology Consulting Pvt. Ltd.",
    designation: 'Senior Quality Analyst ',
    package:"14 LPA",
    testimonials:"During my 8 years of experience in software testing,I have honed my skills in manual and automated testing, test planning, execution, defect management, and quality assurance processes."
  },

  {
    id: 6,
    imgSrc: "assets/images/computer-science-engineering/alumni/alumni7.png",
    name: "Gautami Nilpankar",
    company:"Tieto India PVT LTD",
    designation: 'Software Engineer',
    package:"19 LPA",
    testimonials:"Looking back, my time at Sanjay Ghodawat Institute  was one of the most valuable phases of my life. The knowledge, skills, and experiences I gained during my college years have played a significant role in shaping my career. The dedicated faculty, diverse learning opportunities, and vibrant campus life prepared me for the challenges of the professional world. I am proud to be an alumnus of  Sanjay Ghodawat Institute and grateful for the foundation it provided for my journey ahead."
  },

  {
    id: 7,
    imgSrc: "assets/images/computer-science-engineering/alumni/alumni8.png",
    name: "Rohit Jamdar",
    company:"IBM India Pvt Ltd",
    designation: 'Senior System Engineer',
    package:"14 LPA",
    testimonials:"I am a IT professional with total 5+ years experience. I have Experience i n Development,Administration, Configuration, Customization,Data Migration and Integration with External Cloud. I am experienced i n Salesforce Lightning and also experienced in Salesforce Marketing Automation tool which includes Campaign executions."
  },

  {
    id: 8,
    imgSrc: "assets/images/computer-science-engineering/alumni/alumni9.jpeg",
    name: "Tejas Ajay Shaha",
    company:"Mphasis",
    designation: 'Senior Software Engineer',
    package:"40 LPA",
    testimonials:""
  },

  {
    id: 9,
    imgSrc: "assets/images/computer-science-engineering/alumni/alumni10.png",
    name: "Siddhesh Sundar Toraskar",
    company:"Druva Inc.",
    designation: 'Principal Software Engineer',
    package:"40 LPA",
    testimonials:"Looking back on my time at Sanjay Ghodawat University, I realize how instrumental it was in shaping my career. The college provided excellent infrastructure that supported both academic learning and hands-on experimentation. From well-equipped labs to a thriving campus environment, every aspect encouraged innovation and growth.The university fostered a culture of curiosity and critical thinking, preparing me not just for my first job but for a lifelong journey of learning and problem-solving.Even after 10 years, the impact of my time at SGU is evident in the way I approach challenges and opportunities. I’m proud to be an alumnus and grateful for the foundation this institution provided!"
  },
];

const teacherList = [
  {
    id: 0,
    imgSrc: "/assets/images/management/team1.jpg",
    name: "Mr. Sanjay Ghodawat",
    slug: "sanjay-ghodawat",
    position: "President",
    pdf:'https://manage-api.sguk.ac.in/api/assets/6756b3b29173bf9f471abdd0',
    bio: "Sanjay Ghodawat University commenced in the year 2017 to accommodate more students under its aegis to prepare them for the 21st century. The motto is to prepare leaders who can lead on all fronts on a global platform. We have a wide variety of courses where inter-disciplinary approach among students is encouraged. We also focus on entrepreneurial skill impartation among students. We want to have industry-ready technocrats and business-ready professionals.\nWith curricular education, our University is keen on imparting value education to students. We are helping our students to be sensitive about global issues like climate change, global warming, gender discrimination, loss of Biodiversity and extinction of species, hunger crisis, and Post Covid-19 world challenges. Developing a broader outlook and being more accommodating are some of the virtues that our students imbibe in the culture of our University.\nI welcome you to the Sanjay Ghodawat University where excellence is the order of the day, where you will discover more opportunities to prepare yourself for your true calling and be ready to lead the century.\n With Best Wishes,",
  },
  {
    id: 1,
    imgSrc: "/assets/images/management/team2.jpg",
    name: "Mr. Shrenik Ghodawat",
    slug: "shrenik-ghodawat",
    position: "Secretary",
    pdf:"https://manage-api.sguk.ac.in/api/assets/6756b4369173bf9f471abdd7",
    bio: 'At the very porticos of the Sanjay Ghodawat University resounds this philosophy, “You were created limitless and you can achieve anything". Today just in the matter of last 8 years, Sanjay Ghodawat Institutes has transformed to Sanjay Ghodawat University for we the Management, the staff and students were imbibed by these very words and faith in our hearts. But forming the University is just a means towards greater ends. We hope to embrace global practices in teaching and learning, formation of the curriculum, institute and industrial tie ups, research and innovation. We want to open a whole new vista of opportunities to students across the nation as well as the whole world.\nThere is one thing that I am sure of and that is - nothing worthwhile can be achieved in solitude. It is the overwhelming response from our stakeholders the students, the parents that has helped our Institute to see the days of glory and we want you to retain your faith in Sanjay Ghodawat University. Be rest assured that we will not stop short of giving you the very best in the world of education if you put your trust in us. Ultimately seeing the success of the students who are moulded in the furnace of the University and who go on to make difference in the world will be the reward of parents, teachers, the management and all concerned. So I welcome you to the Sanjay Ghodawat University so that our coming together can create a better world for our future generation.\nWith Best Wishes,',
  },
  {
    id: 2,
    imgSrc: "/assets/images/management/team3.jpg",
    name: "Mr. Vinayak V Bhosale",
    slug: "vinayak-bhosale",
    position: "Trustee",
    pdf:'/assets/images/short-profile/VB-profile.jpg',
    bio: "Every beginning has ending and every ending a new beginning! When we commenced the Sanjay Ghodawat Institutes, we wanted to foray in the Education sector and make a mark on the educational map of the Nation by providing the best of educational facilities to our students and stakeholders. Today Sanjay Ghodawat Institutes has evolved as Sanjay Ghodawat University after its successful streak in the education field for the last 8 years. The vision of our Chairman is crystal clear to be reckoned among top educational institutes of the globe in coming years.\nIt is with this vision that we are all marching towards attaining our goals. From successful institute to successful university that is where we want to head to. Accommodating students from all across the nation plus from other countries, giving them best of the educational environment and facilities, giving them a chance to rediscover their true selves so that they emerge as better human beings who go out and make an impact; that is our mission.\nAs our stakeholders and students have always given us wonderful response in the past, we hope to better ourselves to be worthy of their trust in us. We believe that we will continue through the University to serve a larger number of students with varied choices in the coming years. I appeal to all of you to continue with your love and trust for the Sanjay Ghodawat University.\nWith Best Wishes,",
  },
  {
    id: 3,
    imgSrc: "/assets/images/management/team4.jpg",
    name: "Dr. Udhav Bhosle",
    slug: "udhav-bhosle",
    position: "Vice Chancellor",
    pdf:"https://manage-api.sguk.ac.in/api/assets/6756b45b9173bf9f471abddc",
    bio: "In the great tapestry of education, every thread contributes to the masterpiece of knowledge. Welcome to Sanjay Ghodawat University, where each student is a brushstroke, and every faculty member and staff is an artist shaping the canvas of tomorrow. It is matter of immense pleasure that destiny has given me an opportunity to lead SG University Kolhapur.\nHigher education scenario globally has witnessed a significant change in approach. Higher education in India too has rapidly adapted to the global demands and every institution has geared up to meet the challenges by harnessing the innovations in education. The move towards inter- disciplinary studies, research-based learning with technology integration have opened up several opportunities as well as created challenges. India is a juncture where a huge population of young men and women are opting for higher education. In the wake of rapid privatization of education, the major focus is on creating an optimized and vibrant platform for quality in knowledge enhancement and bridging the gap between academia and industry with an objective to build up core competencies & skills in students with focus on the foundation of necessary ethics and values. With advancement in technologies related to dissemination and creation of knowledge there is a paradigm shift in teaching learning. Today's education is 'education at anytime, anywhere and education on demand'.\nAs we navigate the ever-evolving landscape of education, our commitment to excellence, innovation, and inclusivity remains steadfast. Sanjay Ghodawat University is not just an institution; it is a vibrant community dedicated to the pursuit of knowledge, the development of critical thinking skills, and the nurturing of individuals who will make meaningful contributions to the society.\nAll the programs are designed to meet international standards. Our experienced and qualified faculty members are engaged in the maintenance and enhancement of student centric learning environment through innovative pedagogy. The University offers choice-based credit system (CBCS) with outcome-based approach and industry specific goals. The evaluation system comprises of continuous assessment with grade point\nOur faculty, renowned for their expertise and commitment, are here to guide and inspire you on your academic journey. To our students, I encourage you to embrace the opportunities that this University offers. Seize every moment for learning, exploration, and personal growth. Your time at Sanjay Ghodawat University is a transformative experience that goes beyond the classroom.\nAt our University, we are not just shaping professionals; we are fostering leaders, thinkers, and innovators. We take pride in our commitment to diversity, equity, and sustainability, ensuring that our community reflects the richness of perspectives that make education truly holistic. We are dedicated to providing a supportive and dynamic environment that empowers each individual to achieve their full potential. Together, let us embark on a journey of discovery, collaboration, and positive impact. Your aspirations and dreams find a home here, where excellence is not just a goal but a way of life. Join the symphony of learning at Sanjay Ghodawat University where curiosity meets knowledge, and dreams take flight.\nWith Best Wishes,",
  },
  {
    id: 4,
    imgSrc: "assets/images/tl-2/board-of-director-image5.jpg",
    name: "Mr. Shrenik S. Ghodawat",
    pdf:"#",
    slug: "shrenik-ghodawat",
    position: "Secretary",
    bio: 'John Doe is an inspiring educator, has dedicated his life to nurturing young minds...',
  },
  {
    id: 5,
    imgSrc: "assets/images/tl-2/board-of-director-image6.jpg",
    name: "Mr. Vinod D. Ghodawat",
    slug: "vinod-ghodawat",
    position: "Trustee",
  },
  {
    id: 6,
    imgSrc: "assets/images/tl-2/board-of-director-image7.jpg",
    name: "Mr. Rajesh Ghodawat",
    slug: "rajesh-ghodawat",
    position: "Trustee",
  },
  {
    id: 7,
    imgSrc: "assets/images/tl-2/board-of-director-image8.jpg",
    name: "Mr. Atul M. Shinde",
    slug: "atul-shinde",
    position: "Trustee",
  },
  {
    id: 8,
    imgSrc: "assets/images/tl-2/board-of-director-image9.jpg",
    name: "Mr. Vinayak V. Bhosale",
    slug: "vinayak-bhosale",
    position: "Trustee",
  },
  {
    id: 9,
    imgSrc: "assets/images/tl-2/teacher-10.jpg",
    name: "James Taylor",
    slug: "james-taylor",
    position: "Physics Teacher",
  },
  {
    id: 10,
    imgSrc: "assets/images/tl-2/teacher-11.jpg",
    name: "Emma Wilson",
    slug: "emma-wilson",
    position: "Biology Teacher",
  },
  {
    id: 11,
    imgSrc: "assets/images/tl-2/teacher-12.jpg",
    name: "Lucas Robinson",
    slug: "lucas-robinson",
    position: "Geography Teacher",
  },
  {
    id: 12,
    imgSrc: "assets/images/tl-2/teacher-13.jpg",
    name: "Ava Garcia",
    slug: "ava-garcia",
    position: "French Teacher",
  },
  {
    id: 13,
    imgSrc: "assets/images/tl-2/teacher-14.jpg",
    name: "Henry Adams",
    slug: "henry-adams",
    position: "Physical Education Teacher",
  },
  {
    id: 14,
    imgSrc: "assets/images/tl-2/teacher-15.jpg",
    name: "Mia Turner",
    slug: "mia-turner",
    position: "Music Teacher",
  },
  {
    id: 15,
    imgSrc: "assets/images/tl-2/teacher-16.jpg",
    name: "Oliver Martin",
    slug: "oliver-martin",
    position: "Drama Teacher",
  },
  {
    id: 16,
    imgSrc: "assets/images/tl-2/teacher-17.jpg",
    name: "Sophie Evans",
    slug: "sophie-evans",
    position: "Computer Science Teacher",
  },
  {
    id: 17,
    imgSrc: "assets/images/tl-7/fac-1.jpg",
    name: "Parsley Montana",
    slug: "parsley-montana",
    position: "Special Education Teacher",
  },
  {
    id: 18,
    imgSrc: "assets/images/tl-7/fac-2.jpg",
    name: "Jackson Adams",
    slug: "jackson-adams",
    position: "Physical Education Teacher",
  },
  {
    id: 19,
    imgSrc: "assets/images/tl-7/fac-3.jpg",
    name: "Grace Martinez",
    slug: "grace-martinez",
    position: "Spanish Teacher",
  },
  {
    id: 20,
    imgSrc: "assets/images/tl-7/fac-4.png",
    name: "Sophie White",
    slug: "sophie-white",
    position: "Biology Teacher",
  },
  {
    id: 21,
    imgSrc: "assets/images/tl-7/fac-5.png",
    name: "Ethan Turner",
    slug: "ethan-turner",
    position: "Chemistry Teacher",
  },
  {
    id: 22,
    imgSrc: "assets/images/tl-7/fac-6.png",
    name: "Lucas Smith",
    slug: "lucas-smith",
    position: "Physics Teacher",
  },
  {
    id: 23,
    imgSrc: "assets/images/tl-7/fac-7.png",
    name: "Liam Johnson",
    slug: "liam-johnson",
    position: "Mathematics Teacher",
  },
  {
    id: 24,
    imgSrc: "assets/images/tl-7/fac-8.png",
    name: "Emma Wilson",
    slug: "emma-wilson",
    position: "English Teacher",
  },
  {
    id: 25,
    imgSrc: "assets/images/tl-7/fac-9.png",
    name: "Olivia Davis",
    slug: "olivia-davis",
    position: "Art Teacher",
  },
  {
    id: 26,
    imgSrc: "assets/images/tl-7/fac-10.png",
    name: "Daniel Taylor",
    slug: "daniel-taylor",
    position: "History Teacher",
  },
  {
    id: 27,
    imgSrc: "assets/images/tl-7/fac-11.png",
    name: "Ava Garcia",
    slug: "ava-garcia",
    position: "Music Teacher",
  },
  {
    id: 28,
    imgSrc: "assets/images/tl-7/fac-12.png",
    name: "Henry Adams",
    slug: "henry-adams",
    position: "Computer Science Teacher",
  },
  {
    id: 29,
    imgSrc: "assets/images/tl-7/fac-13.png",
    name: "Sophia Adams",
    slug: "sophia-adams",
    position: "Physical Education Teacher",
  },
  {
    id: 30,
    imgSrc: "assets/images/tl-7/fac-14.png",
    name: "David Johnson",
    slug: "david-johnson",
    position: "French Teacher",
  },
  {
    id: 31,
    imgSrc: "assets/images/tl-7/fac-15.png",
    name: "Lily Robinson",
    slug: "lily-robinson",
    position: "Geography Teacher",
  },
  {
    id: 32,
    imgSrc: "assets/images/tl-5/faculty-1.jpg",
    name: "Dominic L. Ement",
    slug: "dominic-l-ement",
    position: "Lecturer",
  },
  {
    id: 33,
    imgSrc: "assets/images/tl-5/faculty-2.jpg",
    name: "Sophia Williams",
    slug: "sophia-williams",
    position: "Physical Education Teacher",
  },
  {
    id: 34,
    imgSrc: "assets/images/tl-5/faculty-3.jpg",
    name: "Jacob Brown",
    slug: "jacob-brown",
    position: "Spanish Teacher",
  },
  {
    id: 35,
    imgSrc: "assets/images/tl-5/faculty-4.jpg",
    name: "Ava Davis",
    slug: "ava-davis",
    position: "Biology Teacher",
  },
  {
    id: 36,
    imgSrc: "assets/images/tl-5/faculty-5.jpg",
    name: "Liam Turner",
    slug: "liam-turner",
    position: "Chemistry Teacher",
  },
  {
    id: 37,
    imgSrc: "assets/images/tl-5/faculty-6.jpg",
    name: "Olivia Smith",
    slug: "olivia-smith",
    position: "Physics Teacher",
  },
  {
    id: 38,
    imgSrc: "assets/images/tl-5/faculty-7.jpg",
    name: "Ethan Adams",
    slug: "ethan-adams",
    position: "Mathematics Teacher",
  },
  {
    id: 39,
    imgSrc: "assets/images/tl-5/faculty-8.jpg",
    name: "Isabella Johnson",
    slug: "isabella-johnson",
    position: "English Teacher",
  },
  {
    id: 40,
    imgSrc: "assets/images/tl-5/faculty-9.jpg",
    name: "Daniel Wilson",
    slug: "daniel-wilson",
    position: "Art Teacher",
  },
  {
    id: 41,
    imgSrc: "assets/images/tl-5/faculty-10.jpg",
    name: "Sophie Taylor",
    slug: "sophie-taylor",
    position: "History Teacher",
  },
  {
    id: 42,
    imgSrc: "assets/images/tl-5/faculty-11.jpg",
    name: "Mia Garcia",
    slug: "mia-garcia",
    position: "Music Teacher",
  },
  {
    id: 43,
    imgSrc: "assets/images/tl-5/faculty-12.jpg",
    name: "Henry Smith",
    slug: "henry-smith",
    position: "Computer Science Teacher",
  },
  {
    id: 44,
    imgSrc: "assets/images/tl-5/faculty-13.jpg",
    name: "Lily Adams",
    slug: "lily-adams",
    position: "Geography Teacher",
  },
  {
    id: 45,
    imgSrc: "assets/images/tl-5/faculty-14.jpg",
    name: "Sophia Robinson",
    slug: "sophia-robinson",
    position: "French Teacher",
  },
];

const aboutTestimonialList = [
  {
    id: 0,
    desc: "It was my immense luck and fortune to be a part of SGU University where I can grow. The entire faculty & department leaves no stone unturned to shape one's future in my four years.",
    imgSrc: "assets/images/student-testimonials/student1.jpg",
    name: "Shivtej Khot",
    label: "B.Tech - Civil, 2015 - 2020",
  },
  {
    id: 1,
    desc: "SGU University provided me with a nurturing environment to pursue my passion for technology. The support from professors and the cutting-edge facilities made my journey unforgettable.",
    imgSrc: "assets/images/student-testimonials/student2.jpg",
    name: "Vijay Patil",
    label: "B.Sc - Computer Science, 2016 - 2021",
  },
  {
    id: 2,
    desc: "I had an amazing time at SGU University. The diverse community and engaging courses helped me develop both academically and personally. I had a great time. Highly recommended!",
    imgSrc: "assets/images/student-testimonials/student3.jpg",
    name: "Abhishek Patil",
    label: "B.A - Economics, 2017 - 2022",
  },
  {
    id: 3,
    desc: "My experience at SGU University was transformative. The challenging curriculum and supportive professors prepared me for success in my chosen field. Hope everyone gets to experience it.",
    imgSrc: "assets/images/student-testimonials/student4.jpg",
    name: "Sanskriti Bhokare",
    label: "B.Sc - Biology, 2018 - 2023",
  },
];

const alumniImgList = [
  {
    id: 0,
    imgSrc: "assets/images/more-details-images/more1.jpg",
  },
  {
    id: 1,
    imgSrc: "assets/images/more-details-images/more2.jpg",
  },
  {
    id: 2,
    imgSrc: "assets/images/more-details-images/more3.jpg",
  },
  {
    id: 3,
    imgSrc: "assets/images/more-details-images/more4.jpg",
  },
  {
    id: 4,
    imgSrc: "assets/images/more-details-images/more5.jpg",
  }
];

const alumniTextList = [
  {
    id: 0,
    text: "“Indian Star Woman Cricketer and Vice Captain, Smriti Mandhana has taken Admission in our University”",
    name: "Douglas Lyphe",
    label: "Professor of Technology",
  },
  {
    id: 1,
    text: "“Convocation Ceremony 2024”",
    name: "Alice Smith",
    label: "B.A. in Psychology",
  },
  {
    id: 2,
    text: "Brands of Maharashtra Award by Sakal, for SG Group the hands of Deputy CM Hon.Devendraji Fadanvis, June 2023”",
    name: "John Doe",
    label: "Ph.D. in Physics",
  },
  {
    id: 3,
    text: "9001:2015 and ISO 21001:2018 Certified”",
    name: "John Doe",
    label: "Ph.D. in Physics",
  },
];

const membershipList = [
  {
    id: 0,
    imgSrc: "assets/images/recruiters/engg02.jpg",
  },
  {
    id: 1,
    imgSrc: "assets/images/recruiters/engg03.jpg",
  },
  {
    id: 2,
    imgSrc: "assets/images/recruiters/engg04.jpg",
  },
  {
    id: 3,
    imgSrc: "assets/images/recruiters/engg05.jpg",
  },
  {
    id: 4,
    imgSrc: "assets/images/recruiters/engg06.jpg",
  },
  {
    id: 5,
    imgSrc: "assets/images/recruiters/engg07.jpg",
  },
  {
    id: 6,
    imgSrc: "assets/images/recruiters/engg08.jpg",
  },
  {
    id: 7,
    imgSrc: "assets/images/recruiters/engg09.jpg",
  },
  {
    id: 8,
    imgSrc: "assets/images/recruiters/engg10.jpg",
  },
  {
    id: 9,
    imgSrc: "assets/images/recruiters/engg11.jpg",
  },
  {
    id: 10,
    imgSrc: "assets/images/recruiters/engg12.jpg",
  },
  {
    id: 11,
    imgSrc: "assets/images/recruiters/engg14.jpg",
  },
  {
    id: 12,
    imgSrc: "assets/images/recruiters/engg15.jpg",
  },
  {
    id: 13,
    imgSrc: "assets/images/recruiters/engg16.jpg",
  },
  {
    id: 14,
    imgSrc: "assets/images/recruiters/engg17.jpg",
  },
  {
    id: 15,
    imgSrc: "assets/images/recruiters/engg18.jpg",
  },
  {
    id: 16,
    imgSrc: "assets/images/recruiters/engg21.jpg",
  },
  {
    id: 17,
    imgSrc: "assets/images/recruiters/engg33.jpg",
  },
  {
    id: 18,
    imgSrc: "assets/images/recruiters/engg36.jpg",
  },
  {
    id: 19,
    imgSrc: "assets/images/recruiters/engg37.jpg",
  },
  {
    id: 20,
    imgSrc: "assets/images/recruiters/engg38.jpg",
  },
  {
    id: 21,
    imgSrc: "assets/images/recruiters/mba01.jpg",
  },
  {
    id: 22,
    imgSrc: "assets/images/recruiters/mba02.jpg",
  },
  {
    id: 23,
    imgSrc: "assets/images/recruiters/mba04.jpg",
  },
  {
    id: 24,
    imgSrc: "assets/images/recruiters/mba05.jpg",
  },
  {
    id: 25,
    imgSrc: "assets/images/recruiters/mba07.jpg",
  },
  {
    id: 26,
    imgSrc: "assets/images/recruiters/mba10.jpg",
  },
  {
    id: 27,
    imgSrc: "assets/images/recruiters/mba11.jpg",
  },
  {
    id: 28,
    imgSrc: "assets/images/recruiters/mba12.jpg",
  },
  {
    id: 29,
    imgSrc: "assets/images/recruiters/mba14.jpg",
  },
  {
    id: 30,
    imgSrc: "assets/images/recruiters/mba15.jpg",
  },
  {
    id: 31,
    imgSrc: "assets/images/recruiters/mba16.jpg",
  },
  {
    id: 32,
    imgSrc: "assets/images/recruiters/mba18.jpg",
  },

];

const bannerSliderData = [
  {
    id: 0,
    banner: "slider-1",
    title: "Empowering Student Knowledge.",
    desc: "Through a combination of lectures, readings, and discussions, students will gain a solid foundation in educational psychology.",
  },
  {
    id: 1,
    banner: "slider-2",
    title: "Unlock Your Potential.",
    desc: "Our programs are designed to help you discover your strengths and reach your full potential in a supportive learning environment.",
  },
  {
    id: 2,
    banner: "slider-3",
    title: "Join Our Community.",
    desc: "Become a part of our vibrant educational community, where you can connect with like-minded individuals and grow together.",
  },
];

const testimonialList2 = [
  {
    id: 0,
    desc: "Morbi consectetur elementum purus mattis cursus purus vel metus iaculis sagittis. Vestibulum molestie bibendum turpis, id luctus sem lacinia quis. Quisque sit amet velit sit amet dui hendrerit ultricies a id ipsum.",
    name: "Thomas R. Toe",
    role: "Student",
    imgSrc: "assets/images/tl-7/reviewer-1.jpg",
  },
  {
    id: 1,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere ligula nec urna vehicula, eget ultrices velit efficitur. Vivamus eget nunc odio. Sed pharetra laoreet quam, at bibendum tellus placerat quis.",
    name: "Jennifer K. Smith",
    role: "Teacher",
    imgSrc: "assets/images/tl-7/reviewer-2.png",
  },
  {
    id: 2,
    desc: "Pellentesque tristique tincidunt dolor, nec placerat odio. Sed nec massa non mi rhoncus rhoncus. Sed eget massa scelerisque, aliquam quam a, suscipit nisl. Curabitur interdum ultricies ex, a laoreet quam semper a.",
    name: "David M. Johnson",
    role: "Alumnus",
    imgSrc: "assets/images/tl-7/reviewer-3.jpg",
  },
  {
    id: 3,
    desc: "Aenean dignissim tincidunt dolor, id aliquam nunc vehicula nec. In viverra libero vitae tincidunt tristique. Ut in ligula vitae lorem bibendum malesuada ac eget ante. Vestibulum pharetra arcu nec est pharetra, ut convallis tellus tristique.",
    name: "Emily L. White",
    role: "Parent",
    imgSrc: "assets/images/tl-7/reviewer-4.jpg",
  },
];

const testimonialList3 = [
  {
    id: 0,
    desc: "Morbi consectetur elementum purus mattis cursus purus vel metus iaculis sagittis. Vestibulum molestie bibendum turpis, id luctus sem lacinia quis. Quisque sit amet velit sit amet dui hendrerit ultricies a id ipsum.",
    name: "Thomas R. Toe",
    role: "Student",
    imgSrc: "assets/images/tl-9/reviewer-1.jpg",
  },
  {
    id: 1,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere ligula nec urna vehicula, eget ultrices velit efficitur. Vivamus eget nunc odio. Sed pharetra laoreet quam, at bibendum tellus placerat quis.",
    name: "Jennifer K. Smith",
    role: "Teacher",
    imgSrc: "assets/images/tl-9/reviewer-2.jpg",
  },
  {
    id: 2,
    desc: "Pellentesque tristique tincidunt dolor, nec placerat odio. Sed nec massa non mi rhoncus rhoncus. Sed eget massa scelerisque, aliquam quam a, suscipit nisl. Curabitur interdum ultricies ex, a laoreet quam semper a.",
    name: "David M. Johnson",
    role: "Alumnus",
    imgSrc: "assets/images/tl-9/reviewer-3.jpg",
  },
  {
    id: 3,
    desc: "Aenean dignissim tincidunt dolor, id aliquam nunc vehicula nec. In viverra libero vitae tincidunt tristique. Ut in ligula vitae lorem bibendum malesuada ac eget ante. Vestibulum pharetra arcu nec est pharetra, ut convallis tellus tristique.",
    name: "Emily L. White",
    role: "Parent",
    imgSrc: "assets/images/tl-9/reviewer-4.jpg",
  },
];

const serviceSliderData = [
  {
    id: 0,
    imgSrc: "fa-regular fa-handshake texttt-4xl",
    order: "01",
    title: "Collaborations",
    desc: " SGU has collaborations with Foreign Universities, Industries .....",
  },
  {
    id: 1,
    imgSrc: "fa-regular fa-th texttt-4xl",
    order: "02",
    title: "Credit Based Evaluation (CBE) System",
    desc: " Student have the flexibility to pursue",
  },
  {
    id: 2,
    imgSrc: "fa-regular fa-book texttt-4xl",
    order: "03",
    title: "Job Oriented Programmes",
    desc: "Industry Oriented Programmes for job opportunities",
  },
  {
    id: 3,
    imgSrc: "fa-regular fa-clipboard texttt-4xl",
    order: "04",
    title: "Outcome Based Education (OBE) System",
    desc: "Best Practices in Teaching - Learning.",
  },
  {
    id: 4,
    imgSrc: "fa-regular fa-handshake texttt-4xl",
    order: "05",
    title: "Safety & Security",
    desc: "Safety is our top priority; we provide a secure environment to ensure peace of mind for our residents and their families.",
  },
  {
    id: 5,
    imgSrc: "fa-regular fa-handshake texttt-4xl",
    order: "06",
    title: "Wellness Programs",
    desc: "We offer comprehensive wellness programs to promote physical and mental health, enhancing the overall quality of life for our residents.",
  },
];

const blogList = [
  {
    id: 0,
    imgSrc: "assets/images/latest-news/sara-visit.jpg",
    date: "February 28, 2019",
    title: "Birthday Celebration of Hon. President",
    author: "David Brown",
    category: "Latest News",
    desc: "54th Birthday Celebration of Hon. President Mr. Sanjayji Ghodawat in the presence of Ms. Sara Ali Khan (Bollywood Megastar) and Ms. Manasi Joshi (Indian Para - Badminton Athlete) on 28th February 2019 at Sanjay Ghodawat University Campus",
    slug : "photo-gallery-54-birthday",
  },
  {
    id: 1,
    imgSrc: "assets/images/latest-news/event1-blog.jpg",
    date: "April 1, 2020",
    title: "1st Convocation Ceremony - 2020",
    author: "Jane Doe",
    category: "Technology",
    desc: "Congratulations..!! Sanjay Ghodawat University became first University in India to receive ISO 9001:2015 & ISO 21001:2018 Dual Certification",
    slug : "#",
  },
  {
    id: 2,
    imgSrc: "assets/images/latest-news/ebent2-blog.jpg",
    date: "April 2, 2021",
    title: "2nd Convocation Ceremony - 2021",
    author: "John Smith",
    category: "Latest News",
    desc: "Chairman Sanjay ji Ghodawat is voted as the Influential Educator of the Year 2023 by 'Education Today' and has been awarded the Certificate of Excellence",
    slug : "#",
  },
  {
    id: 3,
    imgSrc: "assets/images/latest-news/event3-blog.jpg",
    date: "April 3, 2023",
    title: "3rd Convocation Ceremony - 2022",
    author: "Alice Johnson",
    category: "Latest News",
    desc: "Sancheti, Chairman Sanjay ji Ghodawat were felicitated at the 35th Pune Festival",
    slug : "#",
  },
  {
    id: 4,
    imgSrc: "assets/images/latest-news/tata2-blog.jpg",
    date: "December 19, 2017",
    title:
      "Inauguration of Technology Competency Center",
    author: "John Smilga",
    category: "Industrial Training",
    desc: "Inauguration of Technology Competency Center with TATA Technology on 19th December 2017 at the hands of Chief Guest Hon. Shreekanthji Moorthy, Global Vice President & LOB Head - PLM, TATA Technologies Ltd., Pune. In the presence of the President of the Function Hon. Sanjayji Ghodawat, President, SGU",
    slug : "photo-gallery-tata-technology",
  },
  {
    id: 5,
    imgSrc: "assets/images/latest-news/scistar2-blog.jpg",
    date: "April 5, 2023",
    title: "Sci-STAR 2018 (A State Level Science Competition)",
    author: "Emily Wilson",
    category: "Latest News",
    desc: "Congratulations Chairman Sanjay ji Ghodawat receives Singhania Lifetime Achievement Award by the hands of Hon'ble Minister of Marathi Language and School Education Deepak ji  Kesarkar",
    slug : "photo-gallery-sci-star-2018",
  },
  {
    id: 6,
    imgSrc: "assets/images/latest-news/event7-blog.jpg",
    date: "November 14, 2018",
    title: "Reinventing India Event",
    author: "Hannah Davis",
    category: "Latest News",
    desc: "Padma Vibhushan Hon. Raghunath Mashelkar former Director General of CSIR visited SGU Campus on 14th Nov, 2018 and addressed the staff on 'Reinventing India'",
    slug : "photo-gallery-reinventing-india",
  },
  {
    id: 7,
    imgSrc: "assets/images/latest-news/event8-blog.jpg",
    date: "April 6, 2023",
    title: "NCSAS 2019",
    author: "George Anderson",
    category: "Latest News",
    desc: "Greetings from Sanjay Ghodawat University (SGU)  Kolhapur...! We, SGU's Faculty of Commerce and Management* cordially invites you to participate in Five Days Online Faculty Development Program (FDP) on NEP 2020 - Paradigm Shift in Asynchronous Learning and Industry- Academic Research Collaboration.Let us hear from renowned speakers and pave our journey for effective implementation of National Education Policy-2020.",
    slug : "#",
  },
  {
    id: 8,
    imgSrc: "assets/images/latest-news/event9-blog.jpg",
    date: "April 8, 2023",
    title: "Asian Tennis Volleyball Championship",
    author: "Isaac Clark",
    category: "Latest News",
    desc: "SGU Global Articulation and partnership programs",
    slug : "https://manage-api.sguk.ac.in/api/assets/6756afeb9173bf9f471abdcb",
  },
  {
    id: 9,
    imgSrc: "assets/images/latest-news/event5-blog.jpg",
    date: "April 9, 2023",
    title: "A Story of Grit and Determination",
    author: "Jessica Evans",
    category: "Latest News",
    desc: "Sanjay Ghodawat Group (SGG) has grown significantly under its Founder & Chairman Mr Sanjay Ghodawat's stewardship. Driven by ethics and values, SGG has millions of customers globally, a workforce of more than 10,000, and a student base of more than 17,000.",
    slug : "https://manage-api.sguk.ac.in/api/assets/675d61099173bf9f471accaa",
  },
 /* {
    id: 10,
    imgSrc: "assets/images/blog/blog-11.png",
    date: "April 10, 2023",
    title: "The Rise of E-Commerce: Shopping in the Digital Age",
    author: "Kevin White",
    category: "E-Commerce",
    desc: "E-commerce has revolutionized the way we shop. Explore the growth of online retail and the convenience it offers to consumers.",
    slug: "#",
  },
  {
    id: 11,
    imgSrc: "assets/images/blog/blog-12.png",
    date: "April 11, 2023",
    title: "Mindfulness Meditation: Finding Inner Peace",
    author: "Laura Turner",
    category: "Mental Health",
    desc: "Mindfulness meditation is a powerful practice for reducing stress and achieving inner peace. Learn how to incorporate mindfulness into your daily life.",
    slug: "mindfulness-meditation-finding-inner-peace",
  },
  {
    id: 12,
    imgSrc: "assets/images/blog/blog-13.png",
    date: "April 12, 2023",
    title: "Exploring the Marvels of Space: Astronomy Adventures",
    author: "Michael Parker",
    category: "Science",
    desc: "Astronomy offers a fascinating glimpse into the vastness of the universe. Embark on astronomy adventures and discover the wonders of space.",
    slug: "exploring-the-marvels-of-space-astronomy-adventures",
  },
  {
    id: 13,
    imgSrc: "assets/images/blog/blog-14.png",
    date: "April 13, 2023",
    title: "The Art of Creative Writing: Crafting Compelling Stories",
    author: "Natalie Reed",
    category: "Writing",
    desc: "Creative writing is a form of self-expression and storytelling. Explore the art of crafting compelling stories and nurturing your creativity as a writer.",
    slug: "the-art-of-creative-writing-crafting-compelling-stories",
  },
  {
    id: 14,
    imgSrc: "assets/images/blog/blog-15.png",
    date: "April 14, 2023",
    title: "The Joy of Gardening: Cultivating Green Spaces",
    author: "Oliver Harris",
    category: "Gardening",
    desc: "Gardening is a rewarding hobby that allows you to nurture plants and create beautiful green spaces. Discover the joy of gardening and tips for success.",
    slug: "the-joy-of-gardening-cultivating-green-spaces",
  },
  {
    id: 15,
    imgSrc: "assets/images/blog/blog-16.png",
    date: "April 15, 2023",
    title: "Exploring the World of Travel Photography",
    author: "Patricia Lewis",
    category: "Photography",
    desc: "Travel photography combines adventure and artistry. Join us on a journey to explore the world through the lens of a travel photographer.",
    slug: "exploring-the-world-of-travel-photography",
  },
  {
    id: 16,
    imgSrc: "assets/images/blog-2/blog-1.png",
    author: "James Snow",
    category: "Photography",
    date: "March 24, 2023",
    title: "The Learning Revolution: Embracing Innovation in Education",
    slug: "the-learning-revolution-embracing-innovation-in-education",
    desc: "There are many variations of passages of Lorem Ipsum available, but majority.",
  },
  {
    id: 17,
    category: "Education",
    imgSrc: "assets/images/blog-2/blog-2.png",
    author: "Alice Johnson",
    date: "April 12, 2023",
    title: "The Future of Artificial Intelligence in Healthcare",
    slug: "the-future-of-artificial-intelligence-in-healthcare",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 18,
    category: "Culture",
    imgSrc: "assets/images/blog-2/blog-3.png",
    author: "David Smith",
    date: "May 3, 2023",
    title: "A Guide to Modern Web Design Trends",
    slug: "a-guide-to-modern-web-design-trends",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 19,
    category: "Sports",
    imgSrc: "assets/images/blog-2/blog-4.png",
    author: "Emily Wilson",
    date: "June 15, 2023",
    title: "The Impact of Renewable Energy on the Environment",
    slug: "impact-of-renewable-energy-on-environment",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 20,
    category: "Technology",
    imgSrc: "assets/images/blog-2/blog-5.png",
    author: "Michael Brown",
    date: "July 7, 2023",
    title: "Mastering the Art of Content Marketing",
    slug: "mastering-art-of-content-marketing",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 21,
    category: "Photography",
    imgSrc: "assets/images/blog-2/blog-6.png",
    author: "Sarah Davis",
    date: "August 22, 2023",
    title: "The Future of E-Commerce: Trends and Innovations",
    slug: "future-of-e-commerce-trends-and-innovations",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 22,
    category: "PreSchool",
    imgSrc: "assets/images/blog-2/blog-7.png",
    author: "John Miller",
    date: "September 10, 2023",
    title: "Navigating the World of Cryptocurrency",
    slug: "navigating-world-of-cryptocurrency",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 23,
    category: "Music",
    imgSrc: "assets/images/blog-2/blog-8.png",
    author: "Rachel White",
    date: "October 5, 2023",
    title: "The Art of Mobile App Design: Best Practices",
    slug: "art-of-mobile-app-design-best-practices",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 24,
    category: "Photography",
    imgSrc: "assets/images/blog-2/blog-9.png",
    author: "Daniel Lee",
    date: "November 18, 2023",
    title: "Understanding Blockchain Technology",
    slug: "understanding-blockchain-technology",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 25,
    category: "Dance",
    imgSrc: "assets/images/blog-2/blog-10.png",
    author: "Olivia Clark",
    date: "December 9, 2023",
    title: "The Power of Data Analytics in Business",
    slug: "power-of-data-analytics-in-business",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 26,
    category: "Science",
    imgSrc: "assets/images/blog-2/blog-11.png",
    author: "Thomas Anderson",
    date: "January 25, 2024",
    title: "A Deep Dive into Machine Learning Algorithms",
    slug: "deep-dive-into-machine-learning-algorithms",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 27,
    category: "Education",
    imgSrc: "assets/images/blog-2/blog-12.png",
    author: "Sophia Taylor",
    date: "February 14, 2024",
    title: "The Future of Space Exploration",
    slug: "future-of-space-exploration",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 28,
    category: "Culture",
    imgSrc: "assets/images/blog-2/blog-13.png",
    author: "William Brown",
    date: "March 9, 2024",
    title: "Tips for Effective Project Management",
    slug: "tips-for-effective-project-management",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 29,
    category: "Technology",
    imgSrc: "assets/images/blog-2/blog-14.png",
    author: "Emma Smith",
    date: "April 18, 2024",
    title: "The Future of Artificial Intelligence in Business",
    slug: "future-of-artificial-intelligence-in-business",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 30,
    category: "Philosophy",
    imgSrc: "assets/images/blog-2/blog-15.png",
    author: "Michael Wilson",
    date: "May 3, 2024",
    title: "The Impact of Social Media on Society",
    slug: "impact-of-social-media-on-society",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 31,
    category: "Design",
    imgSrc: "assets/images/blog-2/blog-16.png",
    author: "Linda Davis",
    date: "June 12, 2024",
    title: "The Art of User Interface Design",
    slug: "art-of-user-interface-design",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 32,
    category: "Development",
    imgSrc: "assets/images/blog-2/blog-17.png",
    author: "John Doe",
    date: "July 5, 2024",
    title: "Exploring the Latest Trends in Web Development",
    slug: "exploring-latest-trends-in-web-development",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 33,
    category: "Revolution",
    imgSrc: "assets/images/blog-3/blog-1.png",
    author: "John Doe",
    date: "July 5, 2024",
    comments: 25,
    title: "Stories of Growth and Achievement at University Kidba.",
    slug: "stories-of-growth-and-achievement-at-university-kidba.",
    desc: "Maurus sit abet lacinia est, vitae critique menus tempos nigh vitae pulvinar uptraces.",
  },
  {
    id: 34,
    category: "Learning",
    imgSrc: "assets/images/blog-3/blog-2.png",
    author: "Jane Smith",
    date: "August 15, 2024",
    comments: 18,
    title: "The Power of Online Learning: Transforming Education",
    slug: "the-power-of-online-learning-transforming-education",
    desc: "Explore how online learning is reshaping the future of education."
    },
    
    {
    id: 35,
    category: "Notebook",
    imgSrc: "assets/images/blog-3/blog-3.png",
    author: "Michael Johnson",
    date: "September 9, 2024",
    comments: 12,
    title: "Innovative Teaching Methods: Fostering Creativity in Students",
    slug: "innovative-teaching-methods-fostering-creativity-in-students",
    desc: "Discover unique teaching approaches that inspire creativity in the classroom."
    },
    
    {
    id: 36,
    category: "Revolution",
    imgSrc: "assets/images/blog-3/blog-4.png",
    author: "Emily Davis",
    date: "October 21, 2024",
    comments: 20,
    title: "The Role of Technology in Modern Education",
    slug: "the-role-of-technology-in-modern-education",
    desc: "Learn how technology is revolutionizing the way students learn and educators teach."
    },
    
    {
    id: 37,
    category: "Inclusion",
    imgSrc: "assets/images/blog-3/blog-5.png",
    author: "David Williams",
    date: "November 8, 2024",
    comments: 15,
    title: "Creating Inclusive Classrooms: Embracing Diversity in Education",
    slug: "creating-inclusive-classrooms-embracing-diversity-in-education",
    desc: "Explore strategies for building inclusive learning environments that celebrate diversity."
    },
    
    {
    id: 38,
    category: "HigherEd",
    imgSrc: "assets/images/blog-3/blog-6.png",
    author: "Sarah Brown",
    date: "December 3, 2024",
    comments: 22,
    title: "The Future of Higher Education: Trends and Predictions",
    slug: "the-future-of-higher-education-trends-and-predictions",
    desc: "Get insights into the evolving landscape of higher education and what lies ahead."
    },
    
    {
    id: 39,
    category: "Early Childhood",
    imgSrc: "assets/images/blog-3/blog-7.png",
    author: "Daniel Lee",
    date: "January 17, 2025",
    comments: 14,
    title: "Early Childhood:The Importance of Early Childhood Education",
    slug: "early-childhood-the-importance-of-early-childhood-education",
    desc: "Discover the lifelong impact of quality early childhood education programs."
    },
    
    {
    id: 40,
    category: "Sustainability",
    imgSrc: "assets/images/blog-3/blog-8.png",
    author: "Olivia Clark",
    date: "February 9, 2025",
    comments: 16,
    title: "Education and Sustainability: Teaching the Next Generation",
    slug: "education-and-sustainability-teaching-the-next-generation",
    desc: "Learn how educators are integrating sustainability into their curricula."
    },
    
    {
    id: 41,
    category: "Lifelong Learning",
    imgSrc: "assets/images/blog-3/blog-9.png",
    author: "James Anderson",
    date: "March 25, 2025",
    comments: 19,
    title: "The Art of Lifelong Learning: Cultivating a Growth Mindset",
    slug: "the-art-of-lifelong-learning-cultivating-a-growth-mindset",
    desc: "Explore the benefits of continuous learning and adopting a growth mindset."
    },
    
    {
    id: 42,
    category: "Professional Development",
    imgSrc: "assets/images/blog-3/blog-10.png",
    author: "Sophia Wilson",
    date: "April 14, 2025",
    comments: 23,
    title: "Empowering Teachers: Strategies for Professional Development",
    slug: "empowering-teachers-strategies-for-professional-development",
    desc: "Discover effective ways to support and empower educators through professional development."
    },
    
    {
    id: 43,
    category: "Cognitive Psychology",
    imgSrc: "assets/images/blog-3/blog-11.png",
    author: "Robert Turner",
    date: "May 7, 2025",
    comments: 17,
    title: "The Science of Learning: Applying Cognitive Psychology in Education",
    slug: "the-science-of-learning-applying-cognitive-psychology-in-education",
    desc: "Explore how understanding cognitive processes can enhance teaching and learning."
    },
    
    {
    id: 44,
    category: "Remote Learning",
    imgSrc: "assets/images/blog-3/blog-12.png",
    author: "Ella Martinez",
    date: "June 19, 2025",
    comments: 21,
    title: "Remote Learning Success: Strategies for Students and Educators",
    slug: "remote-learning-success-strategies-for-students-and-educators",
    desc: "Navigate the world of remote learning with tips for both students and educators."
    },
    
    {
    id: 45,
    category: "Parental Support",
    imgSrc: "assets/images/blog-3/blog-13.png",
    author: "William Harris",
    date: "July 11, 2025",
    comments: 13,
    title: "The Role of Parents in Supporting Children's Education",
    slug: "the-role-of-parents-in-supporting-childrens-education",
    desc: "Discover how parents can play an active role in their children's educational journey."
    },
    
    {
    id: 46,
    category: "EdTech Innovations",
    imgSrc: "assets/images/blog-3/blog-14.png",
    author: "Linda Adams",
    date: "August 28, 2025",
    comments: 25,
    title: "The Future of EdTech: Innovations Shaping Education",
    slug: "the-future-of-edtech-innovations-shaping-education",
    desc: "Explore the latest technological advancements in the field of education."
    },
    
    {
    id: 47,
    category: "Critical Thinking",
    imgSrc: "assets/images/blog-3/blog-15.png",
    author: "Richard Carter",
    date: "September 14, 2025",
    comments: 18,
    title: "The Importance of Critical Thinking Skills in Education",
    slug: "the-importance-of-critical-thinking-skills-in-education",
    desc: "Learn how critical thinking skills are essential for success in today's education."
    },
    {
      id: 48,
      category: "Trumpet",
      imgSrc: "assets/images/blog-4/blog-1.png",
      author: "Hugh Millie-Yate",
      date: "September 14, 2025",
      comments: 18,
      title: "The Art of Sound Music School Stories and Resources.",
      slug: "the-art-of-sound-music-school-stories-and-resources.",
      desc: "Learn how critical thinking skills are essential for success in today's education."
      },
      {
        id: 49,
        category: "Guitar",
        imgSrc: "assets/images/blog-4/blog-2.png",
        author: "Alex Turner",
        date: "October 5, 2025",
        comments: 12,
        title: "Mastering Fingerstyle Guitar Techniques",
        slug: "mastering-fingerstyle-guitar-techniques",
        desc: "Explore the intricate world of fingerstyle guitar playing and improve your skills."
        },
        
        {
        id: 50,
        category: "Piano",
        imgSrc: "assets/images/blog-4/blog-3.png",
        author: "Emily Smith",
        date: "November 20, 2025",
        comments: 25,
        title: "The Journey to Becoming a Piano Virtuoso",
        slug: "journey-to-piano-virtuoso",
        desc: "Discover the steps and dedication required to become a true piano virtuoso."
        },
        
        {
        id: 51,
        category: "Violin",
        imgSrc: "assets/images/blog-4/blog-4.png",
        author: "Daniel Lee",
        date: "December 10, 2025",
        comments: 8,
        title: "Unveiling the Secrets of Violin Bowing Techniques",
        slug: "violin-bowing-techniques",
        desc: "Learn the art of producing beautiful melodies through expert violin bowing techniques."
        },
        
        {
        id: 52,
        category: "Flute",
        imgSrc: "assets/images/blog-4/blog-5.png",
        author: "Sarah Johnson",
        date: "January 15, 2026",
        comments: 14,
        title: "Breathing Techniques for Flute Players",
        slug: "flute-breathing-techniques",
        desc: "Explore the importance of proper breathing in flute playing and how to master it."
        },
        
        {
        id: 53,
        category: "Drums",
        imgSrc: "assets/images/blog-4/blog-6.png",
        author: "Mike Davis",
        date: "February 8, 2026",
        comments: 20,
        title: "The Rhythm Revolution: Drumming Essentials",
        slug: "drumming-essentials",
        desc: "Get into the groove with essential drumming techniques and rhythm principles."
        },
        
        {
        id: 54,
        category: "Saxophone",
        imgSrc: "assets/images/blog-4/blog-7.png",
        author: "Sophie Adams",
        date: "March 22, 2026",
        comments: 16,
        title: "Jazzing It Up: Saxophone Improvisation Tips",
        slug: "saxophone-improvisation-tips",
        desc: "Unlock the world of jazz improvisation on the saxophone with expert advice."
        },
        
        {
        id: 55,
        category: "Music Theory",
        imgSrc: "assets/images/blog-4/blog-8.png",
        author: "David Robinson",
        date: "April 18, 2026",
        comments: 30,
        title: "Demystifying Complex Music Theory Concepts",
        slug: "music-theory-demystified",
        desc: "Make sense of advanced music theory concepts and enhance your musical knowledge."
        },
        
        {
        id: 56,
        category: "Voice",
        imgSrc: "assets/images/blog-4/blog-9.png",
        author: "Ella Brown",
        date: "May 9, 2026",
        comments: 22,
        title: "The Power of Vocal Warm-Ups for Singers",
        slug: "vocal-warm-ups-for-singers",
        desc: "Discover the importance of vocal warm-ups and how they can improve your singing."
        },
        
        {
        id: 57,
        category: "Bass Guitar",
        imgSrc: "assets/images/blog-4/blog-10.png",
        author: "James Wilson",
        date: "June 12, 2026",
        comments: 11,
        title: "Groove Like a Pro: Bass Guitar Techniques",
        slug: "bass-guitar-techniques",
        desc: "Learn essential techniques to become a skilled bass guitarist and hold down the groove."
        },
        
        {
        id: 58,
        category: "Songwriting",
        imgSrc: "assets/images/blog-4/blog-11.png",
        author: "Olivia Taylor",
        date: "July 7, 2026",
        comments: 19,
        title: "Crafting Meaningful Lyrics: Songwriting Tips",
        slug: "songwriting-tips",
        desc: "Explore the art of songwriting and create lyrics that resonate with your audience."
        },
        
        {
        id: 59,
        category: "Music Production",
        imgSrc: "assets/images/blog-4/blog-12.png",
        author: "Max Collins",
        date: "August 20, 2026",
        comments: 15,
        title: "From Idea to Masterpiece: Music Production Workflow",
        slug: "music-production-workflow",
        desc: "Follow the creative process of music production from inception to the final masterpiece."
        },
        
        {
        id: 60,
        category: "Harmonica",
        imgSrc: "assets/images/blog-4/blog-13.png",
        author: "Liam Turner",
        date: "September 5, 2026",
        comments: 9,
        title: "Blowing Blues: Mastering the Harmonica",
        slug: "mastering-harmonica",
        desc: "Dive into the world of harmonica playing and learn to play the blues like a pro."
        },
        
        {
        id: 61,
        category: "Music Education",
        imgSrc: "assets/images/blog-4/blog-14.png",
        author: "Nina Garcia",
        date: "October 10, 2026",
        comments: 13,
        title: "Incorporating Technology in Music Education",
        slug: "technology-in-music-education",
        desc: "Explore the role of technology in modern music education and its benefits."
        },   */
];

const eventList = [
  {
    id: 0,
    imgSrc: "assets/images/blog/blog-1.png",
    youtubeUrl: "https://www.youtube.com/embed/VqhDnaqhnd4?si=LL6xoZfjSJkMNNLJ",
    dayDate: '05',
    monthYear: 'March, 2023',
    location: 'London, UK',
    startTime: '6.00 am',
    endTime: '8.00 pm',
    participants: '230',
    skillLevel: 'basic',
    title: 'Connecting Education and Real-World Challenges.',
    slug: 'connecting-education-and-real-world-challenges',
  },
  {
    id: 1,
    imgSrc: "assets/images/blog/blog-2.png",
    youtubeUrl: "https://www.youtube.com/embed/2U1mE-dJy_c?si=yZFpDpVICduMAukZ",
    dayDate: '15',
    monthYear: 'March, 2023',
    location: 'New York, USA',
    startTime: '9.30 am',
    endTime: '12.00 pm',
    participants: '180',
    skillLevel: 'intermediate',
    title: 'Tech Innovations Summit',
    slug: 'tech-innovations-summit',
  },
  {
    id: 2,
    imgSrc: "assets/images/blog/blog-3.png",
    youtubeUrl: "https://www.youtube.com/embed/5p248yoa3oE?si=0TyDKoEacnKTLTxH",
    dayDate: '20',
    monthYear: 'March, 2023',
    location: 'San Francisco, USA',
    startTime: '2.00 pm',
    endTime: '5.00 pm',
    participants: '300',
    skillLevel: 'advanced',
    title: 'AI and Machine Learning Conference',
    slug: 'ai-and-machine-learning-conference',
  },
  {
    id: 3,
    imgSrc: "assets/images/blog/blog-4.png",
    youtubeUrl: "https://www.youtube.com/embed/C-EHoNfkoDM?si=ZGXNX6GSFRYTJ89W",
    dayDate: '10',
    monthYear: 'March, 2023',
    location: 'Chicago, USA',
    startTime: '10.00 am',
    endTime: '1.00 pm',
    participants: '150',
    skillLevel: 'basic',
    title: 'Web Development Workshop',
    slug: 'web-development-workshop',
  },
  {
    id: 4,
    imgSrc: "assets/images/blog/blog-5.png",
    youtubeUrl: "https://www.youtube.com/embed/ND_AjF_KTD8?si=zXbMMqzs6gvddhzN",
    dayDate: '12',
    monthYear: 'March, 2023',
    location: 'Los Angeles, USA',
    startTime: '3.30 pm',
    endTime: '6.30 pm',
    participants: '220',
    skillLevel: 'intermediate',
    title: 'Data Science Summit',
    slug: 'data-science-summit',
  },
  {
    id: 5,
    imgSrc: "assets/images/blog/blog-6.png",
    youtubeUrl: "https://www.youtube.com/embed/UnIZlFrFWIY?si=uC1HnRZ27a4szFOY",
    dayDate: '22',
    monthYear: 'March, 2023',
    location: 'Toronto, Canada',
    startTime: '11.00 am',
    endTime: '2.00 pm',
    participants: '280',
    skillLevel: 'advanced',
    title: 'Blockchain Symposium',
    slug: 'blockchain-symposium',
  },
  {
    id: 6,
    imgSrc: "assets/images/blog/blog-7.png",
    youtubeUrl: "https://www.youtube.com/embed/bhkZEhPog2M?si=xCOR9grZ_zxu6yp-",
    dayDate: '18',
    monthYear: 'March, 2023',
    location: 'Berlin, Germany',
    startTime: '1.30 pm',
    endTime: '4.30 pm',
    participants: '190',
    skillLevel: 'basic',
    title: 'Digital Marketing Workshop',
    slug: 'digital-marketing-workshop',
  },
  {
    id: 7,
    imgSrc: "assets/images/blog/blog-8.png",
    youtubeUrl: "https://www.youtube.com/embed/8H3WaMzDiTo?si=Yj7pM2icDds9OnF3" ,
    dayDate: '07',
    monthYear: 'March, 2023',
    location: 'Paris, France',
    startTime: '9.00 am',
    endTime: '12.00 pm',
    participants: '260',
    skillLevel: 'intermediate',
    title: 'Cloud Computing Conference',
    slug: 'cloud-computing-conference',
  },
  {
    id: 8,
    imgSrc: "assets/images/blog/blog-9.png",
    youtubeUrl: "https://www.youtube.com/embed/_u-PQyM_mvE?si=zXQbNr5NYZqS5kO0",
    dayDate: '25',
    monthYear: 'March, 2023',
    location: 'Sydney, Australia',
    startTime: '2.30 pm',
    endTime: '5.30 pm',
    participants: '170',
    skillLevel: 'advanced',
    title: 'AI in Healthcare Symposium',
    slug: 'ai-in-healthcare-symposium',
  },
  {
    id: 9,
    imgSrc: "assets/images/blog/blog-10.png",
    youtubeUrl: "https://www.youtube.com/embed/I1ZDQXNde98?si=zmC5ePxu7TXe24Mg",
    dayDate: '08',
    monthYear: 'March, 2023',
    location: 'Tokyo, Japan',
    startTime: '10.30 am',
    endTime: '1.30 pm',
    participants: '210',
    skillLevel: 'basic',
    title: 'Frontend Development Summit',
    slug: 'frontend-development-summit',
  },
  {
    id: 10,
    imgSrc: "assets/images/blog/blog-11.png",
    youtubeUrl: "https://www.youtube.com/embed/IYUoJ9pKlAA?si=1vQgxtU1viaDSFKR",
    dayDate: '17',
    monthYear: 'March, 2023',
    location: 'London, UK',
    startTime: '3.00 pm',
    endTime: '6.00 pm',
    participants: '240',
    skillLevel: 'intermediate',
    title: 'Data Analytics Workshop',
    slug: 'data-analytics-workshop',
  },
  {
    id: 11,
    imgSrc: "assets/images/blog/blog-12.png",
    youtubeUrl: "https://www.youtube.com/embed/csRe0WzvtD8?si=vBCwewGkgUlQErPb",
    dayDate: '13',
    monthYear: 'March, 2023',
    location: 'New York, USA',
    startTime: '8.00 am',
    endTime: '11.00 am',
    participants: '290',
    skillLevel: 'advanced',
    title: 'IoT Conference',
    slug: 'iot-conference',
  },
  {
    id: 12,
    imgSrc: "assets/images/blog/blog-13.png",
    youtubeUrl: "https://www.youtube.com/embed/rlOVickyVuQ?si=pZb5KdKDSXNmG8mm",
    dayDate: '28',
    monthYear: 'March, 2023',
    location: 'Sydney, Australia',
    startTime: '4.30 pm',
    endTime: '7.30 pm',
    participants: '250',
    skillLevel: 'basic',
    title: 'AWS Workshop',
    slug: 'aws-workshop',
  },
  {
    id: 13,
    imgSrc: "assets/images/blog/blog-14.png",
    youtubeUrl: "https://www.youtube.com/embed/xoVJKj8lcNQ?si=fOxnup0S1LGxGRAL",
    dayDate: '10',
    monthYear: 'April, 2023',
    location: 'Berlin, Germany',
    startTime: '2.30 pm',
    endTime: '5.30 pm',
    participants: '160',
    skillLevel: 'intermediate',
    title: 'AI Ethics Symposium',
    slug: 'ai-ethics-symposium',
  },
  {
    id: 14,
    imgSrc: "assets/images/blog/blog-15.png",
    youtubeUrl: "https://www.youtube.com/embed/awUglvaa1dQ?si=q2dQ9TQlQsw-SCtz",
    dayDate: '05',
    monthYear: 'April, 2023',
    location: 'San Francisco, USA',
    startTime: '10.00 am',
    endTime: '1.00 pm',
    participants: '220',
    skillLevel: 'advanced',
    title: 'Cybersecurity Conference',
    slug: 'cybersecurity-conference',
  },
  {
    id: 15,
    imgSrc: "assets/images/blog-4/blog-1.png",
    youtubeUrl: "https://www.youtube.com/embed/vwGp16NXgQU?si=BQzYwkuFlx0qHCwJ",
    dayDate: '08',
    monthYear: 'April, 2023',
    location: 'Nashville, USA',
    startTime: '7.00 pm',
    endTime: '10.00 pm',
    participants: '350',
    skillLevel: 'beginner',
    title: 'Salsa Night Fever',
    slug: 'salsa-night-fever',
  },
  {
    id: 16,
    imgSrc: "assets/images/blog-4/blog-2.png",
    youtubeUrl: "https://www.youtube.com/embed/sYIu9ibtLXk?si=418AYr8cNN3YnyF9",
    dayDate: '12',
    monthYear: 'April, 2023',
    location: 'Miami, USA',
    startTime: '6.30 pm',
    endTime: '9.30 pm',
    participants: '280',
    skillLevel: 'intermediate',
    title: 'Jazz Fusion Showcase',
    slug: 'jazz-fusion-showcase',
  },
  {
    id: 17,
    imgSrc: "assets/images/blog-4/blog-3.png",
    youtubeUrl: "https://www.youtube.com/embed/FJRl5yRB6v4?si=mC8q5Y0FCYIq8WLk",
    dayDate: '18',
    monthYear: 'April, 2023',
    location: 'Rio de Janeiro, Brazil',
    startTime: '8.00 pm',
    endTime: '11.00 pm',
    participants: '400',
    skillLevel: 'advanced',
    title: 'Carnival Rhythms',
    slug: 'carnival-rhythms',
  },
  {
    id: 18,
    imgSrc: "assets/images/blog-4/blog-4.png",
    youtubeUrl: "https://www.youtube.com/embed/eAcjgh2ofQ8?si=vNs6B7w-wmj6dCRb",
    dayDate: '22',
    monthYear: 'April, 2023',
    location: 'Barcelona, Spain',
    startTime: '5.30 pm',
    endTime: '8.30 pm',
    participants: '320',
    skillLevel: 'beginner',
    title: 'Flamenco Fiesta',
    slug: 'flamenco-fiesta',
  },
  {
    id: 19,
    imgSrc: "assets/images/blog-4/blog-5.png",
    youtubeUrl: "https://www.youtube.com/embed/gDZdcPOl1b8?si=xlpPc1gwRG0OSHJi",
    dayDate: '25',
    monthYear: 'April, 2023',
    location: 'Sydney, Australia',
    startTime: '7.00 pm',
    endTime: '10.00 pm',
    participants: '350',
    skillLevel: 'intermediate',
    title: 'Bollywood Beats Extravaganza',
    slug: 'bollywood-beats-extravaganza',
  },
  {
    id: 20,
    imgSrc: "assets/images/blog-4/blog-6.png",
    youtubeUrl: "https://www.youtube.com/embed/3zIlvmiWjM0?si=1fLnbd6t6lcCxVHr",
    dayDate: '02',
    monthYear: 'May, 2023',
    location: 'Paris, France',
    startTime: '8.30 pm',
    endTime: '11.30 pm',
    participants: '380',
    skillLevel: 'advanced',
    title: 'Latin Dance Carnival',
    slug: 'latin-dance-carnival',
  },
  {
    id: 21,
    imgSrc: "assets/images/blog-4/blog-7.png",
    youtubeUrl: "https://www.youtube.com/embed/wucZxx-XaVA?si=qtl4m1Nst66Ay7F2",
    dayDate: '06',
    monthYear: 'May, 2023',
    location: 'Tokyo, Japan',
    startTime: '6.00 pm',
    endTime: '9.00 pm',
    participants: '300',
    skillLevel: 'beginner',
    title: 'Hip-Hop Groove Night',
    slug: 'hip-hop-groove-night',
  },
  {
    id: 22,
    imgSrc: "assets/images/blog-4/blog-8.png",
    youtubeUrl: "https://www.youtube.com/embed/lXqbilHU05Q?si=rMUp40JcMdoOoTrb",
    dayDate: '12',
    monthYear: 'May, 2023',
    location: 'London, UK',
    startTime: '7.30 pm',
    endTime: '10.30 pm',
    participants: '400',
    skillLevel: 'intermediate',
    title: 'Samba Spectacular',
    slug: 'samba-spectacular',
  },
  {
    id: 23,
    imgSrc: "assets/images/blog-4/blog-9.png",
    youtubeUrl: "https://www.youtube.com/embed/dC2-X1Gk1Cw?si=9gyuZFNe3KiQ95os",
    dayDate: '16',
    monthYear: 'May, 2023',
    location: 'Los Angeles, USA',
    startTime: '8.00 pm',
    endTime: '11.00 pm',
    participants: '350',
    skillLevel: 'advanced',
    title: 'Tap Dance Extravaganza',
    slug: 'tap-dance-extravaganza',
  },
  {
    id: 24,
    imgSrc: "assets/images/blog-4/blog-10.png",
    youtubeUrl: "https://www.youtube.com/embed/HgGAzBDE454?si=X-vREeKYVeoLcVjz",
    dayDate: '21',
    monthYear: 'May, 2023',
    location: 'Berlin, Germany',
    startTime: '6.30 pm',
    endTime: '9.30 pm',
    participants: '320',
    skillLevel: 'beginner',
    title: 'Irish Folk Dance Festival',
    slug: 'irish-folk-dance-festival',
  },
  {
    id: 25,
    imgSrc: "assets/images/blog-4/blog-11.png",
    youtubeUrl: "https://www.youtube.com/embed/26-1t15R_MU?si=AQfcwnTZufzwIjfZ",
    dayDate: '25',
    monthYear: 'May, 2023',
    location: 'New York, USA',
    startTime: '7.00 pm',
    endTime: '10.00 pm',
    participants: '380',
    skillLevel: 'intermediate',
    title: 'Swing Dance Soiree',
    slug: 'swing-dance-soiree',
  },
  {
    id: 26,
    imgSrc: "assets/images/blog-4/blog-12.png",
    youtubeUrl: "https://www.youtube.com/embed/FBlfDsZ4OvI?si=T54MzteZqADHUoXb",
    dayDate: '02',
    monthYear: 'June, 2023',
    location: 'Sydney, Australia',
    startTime: '8.30 pm',
    endTime: '11.30 pm',
    participants: '400',
    skillLevel: 'advanced',
    title: 'Ballet Gala Performance',
    slug: 'ballet-gala-performance',
  },
  {
    id: 27,
    imgSrc: "assets/images/blog-4/blog-13.png",
    youtubeUrl: "https://www.youtube.com/embed/0GnavRiwgmk?si=DTFlTF3a98ToazAF",
    dayDate: '06',
    monthYear: 'June, 2023',
    location: 'Barcelona, Spain',
    startTime: '6.00 pm',
    endTime: '9.00 pm',
    participants: '350',
    skillLevel: 'beginner',
    title: 'Funk Fusion Jam Session',
    slug: 'funk-fusion-jam-session',
  },
]

const faqList = [
  {
    id: 0,
    ques: 'What is the affiliation and approval of the university?',
    ans: 'Sanjay Ghodawat University (SGU) is a State Private University established in the year 2017 under the Maharashtra Act no. XL of 2017 and degrees awarded by the university are equivalent to that of any Central/State Government universities or deemed universities and recognized all over India and abroad.'
  },
  {
    id: 1,
    ques: 'Which is the Sponsoring body or trust?',
    ans: 'SGU is Sponsored and supported by Sou.Sushila Danchand Ghodawat Charitable Trust founded in the name of respected mother of Hon. Shri.Sanjay Ghodawat , President of SGU who also is the chairman of renowned Ghodawat Group of Industries.'
  },
  {
    id: 2,
    ques: "Where is the university Situated/located?",
    ans: "SGU is situated near the wonderful scenic location of Atigre village in Kolhapur district of Maharashtra on a Kolhapur Sangli Highway."
  },
  {
    id: 3,
    ques: 'What are the Schools under university and what are the Programs/Course offered under these schools?',
    ans: 'SGU at Present offers UG, PG and PhD courses through its four different schools namely School of Technology, School of Commerce and Management, School of Science and School of Liberal arts.\n\n <a href="/school-of-engineering" class="tl-def-btn-2">Click here</a> for Programmes Offered by SGU'
  },
  {
    id: 4,
    ques: "What is the academic background of the university?",
    ans: "SGU was formerly known as Sanjay Ghodawat Institute (SGI) which was established in the year 2009 and became the most preferred institute for engineering education in the region in a short span of seven years and received NAAC 'A' Grade and NBA accreditation. It has been awarded by many National and International Ranking Agencies"
  },
  {
    id: 5,
    ques: "What is the Eligibility for admissions in different programs?",
    ans: '<a href="/eligibility-criteria" class="tl-def-btn-2">Click here</a> to View the eligibility for admissions of different programs'
  },
  {
    id: 6,
    ques: "What is the syllabus/curriculum/Course contents and credits of different programs offered?",
    ans: "For Department wise information please check Department menu of Home Page."
  },
  {
    id: 7,
    ques: "What is the Fee Structure?",
    ans: '<a href="/academic-year-24-25" class="tl-def-btn-2">Click here</a> to View the Fee Structure of different programs.'
  },
  {
    id: 8,
    ques: "Whether Reservation is available for admissions?",
    ans: "Yes. The University offers reservation for admissions under different programs as per the rules and guidelines of the Central/State government. The reservation is only for the number of seats under the program and not for the Fees."
  },
  {
    id: 9,
    ques: "What is the Process of admission for a particular program?",
    ans: '<a href="/how-to-apply" class="tl-def-btn-2">Click here</a> to View the process of admissions of different programs.'
  },
  {
    id: 10,
    ques: "Is there any scholarship/fee waiver offered?",
    ans: "Yes. University offers various scholarships for meritorious students based on their scores in the qualifying examinations. Policy is decided every year"
  },
  {
    id: 11,
    ques: "What are different Facilities offered by the university?",
    ans: '<a href="/facilities" class="tl-def-btn-2">Click here</a> to View the Facilities offered by SGU'
  },
  {
    id: 12,
    ques: "Who are the industrial Academic Partners for different programs?",
    ans: 'Programs conducted under SGU are supported by academic partners from the Industry namely Tata Technology, Harvard Business Publishing School etc.\n\n <a href="/industry-collaborations" class="tl-def-btn-2">Click here</a> for more information'
  },
  {
    id: 13,
    ques: "What are the research facilities/collaborations?",
    ans: "The SGU has an exclusive Research and Development (R & D) center with state of the art infrastructure and Laboratories equipped with Major instruments and softwares."
  },
  {
    id: 14,
    ques: "Are there any academic tie-ups with the foreign universities?",
    ans: "Yes. SGU has signed MoU's for strategic academic Partnerships with Northumbria University in United Kingdom, South Carolina University and Harvard business publishing School in United States.\n\n <a href='/foreign-university' class='tl-def-btn-2'>Click here</a> for more information"
  },
  {
    id: 15,
    ques: "What is Credit Based Evaluation (CBE) System ?",
    ans: "<a href='/credit-system' class='tl-def-btn-2'>Click here</a> for more information on Credit Based Evaluation (CBE) System"
  },
  {
    id: 16,
    ques: "What is Outcome Based Education (OBE)?",
    ans: "<a href='/outcome-system' class='tl-def-btn-2'>Click here</a> for more information on Outcome Based Education (OBE)"
  },
  {
    id: 17,
    ques: "Which are the Co-curricular / extracurricular activities conducted for all round development of the students?",
    ans: "SGU has developed a culture of vibrant campus. Number of activities like Techno-Fest, Seminars, Confrences, Hackathons and Quizzes are organized throughout the year. Annual Social gathering, Annual Cultural and Sports are also organized."
  },
  {
    id: 18,
    ques: "Whether university facilitates the students for participating in National/International Conferences, publications of Research paper, Symposium, filing patents etc?",
    ans: "Yes. There is a full encouragement and support offered for such activities. There is also provision of funding with all the schools under the University for such Activities. Research and professional development of teachers is always encouraged."
  },
  {
    id: 19,
    ques: "How many Ph.D. awarded faculty members are there in the university/Program?",
    ans: "There are 20 faculty members who have completed their Ph.D. and more than 30 members are on the verge of completing their Ph.Ds"
  },
  {
    id: 20,
    ques: "Whether university provides training and Placement assistance?",
    ans: "Yes. We have central placement cell with Placement Officer. All the students in SGU participate in a comprehensive Softskill training program every year to prepare themselves to face the recruitment process of National and International recruiters. Efforts are made to place all the eligible candidates."
  },
  {
    id: 21,
    ques: "What are the recreational facilities in the campus?",
    ans: "As a part of its state of the art infrastructure SGU has a Multicuisne Food Court , A music Academy, Indoor and Outdoor Sports complex, Swimming pool , Fully equipped gymnasium, Auditorium and an amphitheater"
  },
  {
    id: 22,
    ques: "Who are the recruiters of the different program under university?",
    ans: "<a href='/recruiters-technology' class='tl-def-btn-2'>Click here</a> for Engineering Recruiters List \n\n <a href='/recruiters-management-commerce' class='tl-def-btn-2'>Click here</a> for Management Recruiters List"
  },
  {
    id: 23,
    ques: "How many times the parents are allowed to meet their wards in a semester?",
    ans: "Parents are allowed to meet their wards once in a month. If required whenever necessary with the prior permission of the authoritiy."
  },
  {
    id: 24,
    ques: "What are the schedules/working hours of particular program?",
    ans: "Working hours are from 10 AM to 5 PM"
  },
  {
    id: 25,
    ques: "Whether the university has Internal Complaints Committee?",
    ans: "Yes. Safety and security of the entire student is taken care of. Our 24 hours security services are available. The whole campus is under CCCTV. Anti-ragging policies are strictly observed and special vigilance squad is in place."
  },
  {
    id: 26,
    ques: "Whether university provides any assistance coaching for appearing for Civil Services exams?",
    ans: "Yes. SGU has in its campus Sanjay Ghodawat Institute for Administrative Services (SGIAS) exclusively for training and facilitation to Aspirant students."
  }
];
const libraryActivities = [
  {
    id:0,
    title : "Swami Vivekanand Jayanti Celebrated On 12th Jan 2021",
    desc : "Sanjay Ghodawat University, Central Library Celebrated Swami Vivekanand Jayanti on 12th January 2021. Dr. Shirishkumar Ambavade, Principal, School of pharmaceutical Science was chief Guest for the program, Mr.Kantilal Tamhane ,Librarian,SGU and all Library staff were present to grace the occasion. Also Programme start with the Saraswati Poojan & followed by Swami Vivekanand Photo Poojan. Librarian sir explained some moments in Life of Swami Vivekanand. The Swami Vivekanand Book Club was open for the day for staff & student Reference, also. Library displayed the books on Swami Vivekanand in Reference Section, MBA Building.",
    images : []

  },
  {
    id:1,
    title : "Felicitation programme of library staff for successfully qualified UGC-NET Exam 7th Jan 2021",
    desc : "The library staff felicitation for successfully qualified UGC-NET Exam By the hands of Librarian Mr.Kantilal Tamhane.",
    images : []
  },
  {
    id:2,
    title : "Library Week Celebrated on 14th to 20th Nov 2020",
    desc : "On occasion of Library Week from 14th November 2020 to 20th November 2020 Central Library conducted the competition on the book “I LIKE MOST” , In which four participants have taken part and submitted the audio of the book which they like most. We have called the external judge for evaluation of these audios and declared the first rank holders in two categories viz. internal and external participants.The winners are as follows \n1) Mrs. Shobha Kumbar (1st rank Internal Participant) \n2) Mrs Shital Jagtap (1st rank external participants)",
    images : []
  },
  {
    id:3,
    title : "Vachan Prerna Din Celebrated on 15th Oct 2020",
    desc : "Sanjay Ghodawat University,Central Library celebrated Vachan Prerna Din on 15th October, 2020 commemorating the birth anniversary of Dr. A.P.J. Abdul Kalam. An advocate of learning, Dr. Kalam ignited the minds of young people across the country and inspired them to dream big.\nThe programme began with the traditional floral tribute to Dr. A.P.J. Abdul Kalam and followed by felicitation of Ph.D. awarded scholars in 2019-2020.\nThe Program was inaugurated with the hands of vice-chancellor Dr, M.T. Telsang & graced by the presence of Registrar Dr. N.K. Patil, Director Dr. V.V. Kulkarni, Librarian Mr. K.N. Tamhane & other Library staff.\nOn this occasion library staff prepared audio's of 16th books available in library as following list.\nग्रंथ १. श्रीमद्भगवदगीत,\nग्रंथ 2. महात्मा ज्योतोराव फुले,\nग्रंथ 3. मित्रहो,\nग्रंथ 4. द डायरी ऑफ यंग गर्ल,\nग्रंथ 5. साने गुरुजी,\nग्रंथ 6. नोबल पारितोषिक विजेते,\nग्रंथ 7. श्रीगाडगेमहाराज,\nग्रंथ 8. देह झाला चंदनाचा,\nग्रंथ 9. अब्राहम लिंकन: फाळणी टाळणारा महापुरुष,\nग्रंथ 10. पानिपत,\nग्रंथ 11. डॉ. बाबासाहेब आंबेडकर,\nग्रंथ 12. भारताचे संविधान,\nग्रंथ 13. असा होता सिकंदर ,\nग्रंथ 14. फेसाटी,\nग्रंथ 15. श्रीमान योगी,\nग्रंथ 16. व्यक्ती आणि वल्ली",
    images : []
  },
  {
    id:4,
    title : "Librarian's Day Celebrated on 12th Aug 2020",
    desc : "On the Occasion of Birth Anniversary of Dr. S.R.Rangnathan, Sanjay Ghodawat University, Central Library Organizing the Programme for Library Staff Urkund Plagiarism software training and Group Discussion on Best practices in Library on Wednesday, 12th August 2020.",
    images : []
  },
  {
    id:5,
    title : "Chhatrapati Shahu Maharaj Jayanti Celebrated on 26th Jun 2020",
    desc : "Sanjay Ghodawat University, Central Library celebrated Chhatrapati Shahu Maharaj Jayanti on 26th June 2020. Mr. Kantilal Tamhane, Librarian,SGU and all Library staff, were present and Performed pooja of the photoframe of Chhatrapati Shahu Maharaj. Mr.Rohan Pawar highlighted the work done towards the society by Chhatrapati Shahu Maharaj. Mr. Satywan Kadam & Mr. Sudhir Mane given information about life of Chhtrapati Shahu Maharaj.",
    images : []
  },
  {
    id:6,
    title : "Makar Sankaranti celebrated on 15th Jan 2020",
    desc : "Sanjay Ghodawat University, Central Library was conducted a Programme on Wednesday, 15th Jan 2020 for House Keeping Women On Topic of Benefits / Importance of Education for Women on occasion of Makar Sankaranti. Our Librarian Mr. Kantilal Nanaso Tamhane delivered a Lecture on this programme.",
    images : []
  },
  {
    id:7,
    title : "Vice Chancellor Birthday Celebrated on 3rd Dec 2019",
    desc : "On the occasion of Hon.Vice Chancellor Dr. V.A. Raikar Birthday Central Library has organized Poster Display/ Presentation on Nobel Laureates On 3rd December 2019. In this Presentation Library displayed the Nobel Prize Winner from 1901 To 1950 Viz. following categories.\nA) Chemistry B) Literature C) Physics D) Medicines.",
    images : []
  },
  {
    id:8,
    title : "Library Week Celebrated on 11th Nov 2019",
    desc : "On Occasion of Library Week Sanjay Ghodawat University, Central Library Organized Essay Writing Competition for student on 11th November 2019.",
    images : []
  },
  {
    id:9,
    title : "Vachan Prerna Din Celebrated on 15th Oct 2019",
    desc : "Sanjay Ghodawat University, Central Library organized Poster Presentation on Different types of Reference management styles for Vachan prerna Din Celebrated on Occasion of Dr. A.P.J. Abdul Kalam Birth Anniversary on 15th October 2019.",
    images : []
  },
  {
    id:10,
    title : "Teachers Day Celebrated on 5th Sept 2019",
    desc : "On the occasion of Teachers Day Sanjay Ghodawat University, Central Library has organized Poster Presentation /Display on Teaching Methods on Thursday 5th September 2019.",
    images : []
  },
  {
    id:11,
    title : "Librarian's Day Celebration on 12th August 2019",
    desc : "National Librarians' Day is observed on 12th August every year to commemorate the birth anniversary of Padmashri Dr S. R. Ranganathan (1892-1972), who is as father of library science in India. Dr. Ranganathan dedicated his entire life to library profession in India leaving a rich legacy. On 126th birth anniversary of Dr. S. R. Ranganathan, the Central Library of Sanjay Ghodawat University celebrated National Librarian's Day on 13th August 2018.\n\nThe occasion was graced by the presence of Dr. V.A. Raikar, Vice Chancellor. Sanjay Ghodawat University, Kolhapur. Mr. Kantilal Tamhane, Librarian , Sanjay Ghodawat University, all library staff of SGU. The programme began with the traditional floral tribute to Goddess Saraswati and Dr. S. R. Ranganathan. All staff of Central Library paid homage and tribute to illustrious Guru Dr. S.R Ranganathan on this auspicious occasion.",
    images : []
  },
  {
    id:12,
    title : "National Girl Child Celebration on 24th January 2019",
    desc : 'Sanjay Ghodawat University, Central Library conducted Health Check up Camp for Girls on event of "National Girl Child Day" on Thursday 24th January 2019 at 11.30am. at Vidya Mandir, Laxmiwadi.\n\nNational Girl Child Day was Celebrated trough medical check-up camp of girls child between age of 1 to 5 years at Laxmiwadi Dr .Bimal Tiwade checked 40 girl students & advised about health.',
    images : []
  },
  {
    id:13,
    title : "Best Library User Award on 11th January 2019",
    desc : 'The purpose behind announcing the Best Library User Award is to motivate the staff members for reading habit. Other purpose behind this function was maximum utilization of Library resources \n\nIn this regard we collected the data from January 2016 to December 2018 for all the faculty members regarding number of books issued by them. During this period & we have declared top five "Best Library Users" as per the report generated from Slim Software & these five faculty members were prizes as "Best Library Users-2019" on the Occasion of inaugural function of Faculty Conclave-2019 on 11th January 2019.',
    images : []
  },
  {
    id:14,
    title : "Inaugural Function Of Swami Vivekananda Book Club & Chatrapati Shivaji Maharaja Book Club on 27th September 2018",
    desc : 'Sanjay Ghodawat University, Central Library inaugurated the book clubs named "Swami Vivekanand Book Club" & "Chatrapati Shivaji Maharaj Book Club" by the hands of Hon. Dr. M.T. Telsang , Academic Dean and Hon. Dr. V.V. Kulkarni, Director. These book clubs will be working for inculcate Reading Habits, Personality Development, Moral Development, Entertainment within students and faculty members.',
    images : []
  },
  {
    id:15,
    title : "International Literacy Day Celebration on 8th September 2018",
    desc : 'Literacy Dindi was arranged with the help of students, Dindi took a round in SGU campus holding the banners in hands. Poster Presentation competition was organised for Student on Literacy & Skill Development, Skill India: A Literacy Project and Illiterate & Poverty themes. A Book Review competition was held for Staff to acquire updated knowledge and the utilization of Library resources',
    images : []
  },
]

const socialMediaData = [
  {
    title: 'YouTube',
    platform: 'Subscribe Channel',
    description: 'Nulla lacinia velit at nisl volutpat placerat. Fusce at elit id orci molestie iaculis eget eget metus. Donec purus est, porttitor at lacus sit amet.',
  },
  {
    title: 'Facebook',
    platform: 'Like Page',
    description: 'Nulla lacinia velit at nisl volutpat placerat. Fusce at elit id orci molestie iaculis eget eget metus. Donec purus est, porttitor at lacus sit amet.',
  },
  {
    title: 'Instagram',
    platform: 'Follow Account',
    description: 'Nulla lacinia velit at nisl volutpat placerat. Fusce at elit id orci molestie iaculis eget eget metus. Donec purus est, porttitor at lacus sit amet.',
  },
  {
    title: 'Twitter',
    platform: 'Follow Handle',
    description: 'Nulla lacinia velit at nisl volutpat placerat. Fusce at elit id orci molestie iaculis eget eget metus. Donec purus est, porttitor at lacus sit amet.',
  },
];

const categoriesData = [
  { title: 'Product Design', icon: 'assets/images/tl-12/sub-5.png' },
  { title: 'App Development', icon: 'assets/images/tl-12/sub-3.png' },
  { title: 'Data Engineering', icon: 'assets/images/tl-12/sub-7.png' },
  { title: 'Language', icon: 'assets/images/tl-13/cate-4.png' },
  { title: 'Rocket Science', icon: 'assets/images/tl-13/cate-2.png' },
  { title: 'Literature', icon: 'assets/images/tl-13/cate-1.png' },
  { title: 'Advanced Skills', icon: 'assets/images/tl-12/sub-2.png' },
  { title: 'Higher Study', icon: 'assets/images/tl-12/sub-1.png' },
];

const articlesData = [
  {
    category: 'revolution',
    image: 'assets/images/tl-3/blog-1.jpg',
    articleCategory: 'Education',
    date: 'March 23, 2023',
    title: 'Educational Insights: Discovering the Art of Learning.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus libero vel cursus tortor, Nunc non.',
  },
  {
    category: 'notebook',
    image: 'assets/images/tl-3/blog-2.jpg',
    articleCategory: 'Education',
    date: 'March 23, 2023',
    title: 'Exploring Notebooks: A Comprehensive Guide.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus libero vel cursus tortor, Nunc non.',
  },
  {
    category: 'revolution',
    image: 'assets/images/tl-3/blog-3.jpg',
    articleCategory: 'Education',
    date: 'March 23, 2023',
    title: 'Revolutionizing Education: The Future of Learning.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus libero vel cursus tortor, Nunc non.',
  },
  {
    category: 'learning',
    image: 'assets/images/tl-5/blog-1.jpg',
    articleCategory: 'Education',
    date: 'March 23, 2023',
    title: 'The Art of Lifelong Learning: Strategies and Tips.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus libero vel cursus tortor, Nunc non.',
  },
];

const schoolsList = [
  {
    id:0,
    schoolsdept :"School of  Design",
    schoolsubdept : "UG" ,
    desc : "Bachelor of  Design",
    slug: "/design-dept-about",
  },
  {
    id:1,
    schoolsdept :"Department of Commerce",
    schoolsubdept : "UG, PG, Ph.D." ,
    desc : "UG, PG, Ph.D. Programmes in Commerce.",
    slug:"/commerce-dept-about"
  },
  {
    id:2,
    schoolsdept :"Department of Management",
    schoolsubdept : "UG, PG, Ph.D." ,
    desc : "UG, PG, Ph.D. Programmes in Management.",
    slug:"/management-dept-about"
  },
  {
    id:3,
    schoolsdept :"Department of Physics",
    schoolsubdept : "UG, PG, Ph.D." ,
    desc : "B.Sc., M.Sc., Ph.D. in Physics",
    slug:"/physical-dept-about"
  },
  {
    id:4,
    schoolsdept :"Department of Chemistry",
    schoolsubdept : "UG, PG, Ph.D." ,
    desc : "B.Sc., M.Sc., Ph.D. in Chemistry",
    slug:"/chemical-dept-about"
  },
  {
    id:5,
    schoolsdept :"Department of Mathematics",
    schoolsubdept : "UG, PG, Ph.D." ,
    desc : "B.Sc., M.Sc., Ph.D. in Mathematics",
    slug:"/mathematics-dept-about"
  },
  {
    id:6,
    schoolsdept :"Department of Pharmaceutical Sciences",
    schoolsubdept : "Diploma, UG" ,
    desc : "D.Pharmacy, B.Pharmacy",
    slug:"/pharmacy-dept-about"
  },
  {
    id:7,
    schoolsdept :"Bachelor of computer Applications",
    schoolsubdept : "UG, PG" ,
    desc : "B.C.A., M.C.A.",
    slug:"/BCA-dept-about"
  },
  {
    id:8,
    schoolsdept :"Master of computer Applications",
    schoolsubdept : "UG, PG" ,
    desc : "B.C.A., M.C.A.",
    slug:"/MCA-dept-about"
  },
  {
    id:9,
    schoolsdept :"Department of Legal Studies (Law)",
    schoolsubdept : "UG" ,
    desc : "B.A.L.L.B(Hons.),B.B.A.L.L.B (Hons.),L.L.B",
    slug:"/law-dept-about"
  },
  {
    id:10,
    schoolsdept :"B.Sc(Food Science & Technology)",
    schoolsubdept : "UG" ,
    desc : "B sc Food Science and Technology",
    slug:"/FST-dept-about"
  },
  {
    id:11,
    schoolsdept :"B.M.L.T(Food Science & Technology)",
    schoolsubdept : "UG" ,
    desc : "B sc in Medical Laboratory Technology",
    slug:"/MLT-dept-about"
  },
  {
    id:12,
    schoolsdept :"Biotechnology",
    schoolsubdept : "UG" ,
    desc : "BioTechnology",
    slug:"/biotech-dept-about"
  },
  {
    id:13,
    schoolsdept :"Department of English",
    schoolsubdept : "UG" ,
    desc : "UG, PG and Phd in English",
    slug:"/english-dept-about"
  },
  {
    id:14,
    schoolsdept :"Department of Geography",
    schoolsubdept : "UG" ,
    desc : "Bachelor of Arts in Geography (B.A. in Geography)",
    slug:"/geography-dept-about"
  },
  {
    id:15,
    schoolsdept :"Department of Media",
    schoolsubdept : "UG" ,
    desc : "B.A-Journalism & Mass Communication",
    slug:"/masscommunication-dept-about"
  },
  {
    id:16,
    schoolsdept :"Department of Aerospace Engineering",
    schoolsubdept : "UG, PG, Ph.D" ,
    desc : "B.Tech., M.Tech., Ph.D. Courses available in Aerospace Engineering.",
    slug:"/aerospace-engineering-about"
  },
  {
    id:17,
    schoolsdept :"Department of Mechanical Engineering",
    schoolsubdept : "UG, PG, Ph.D" ,
    desc : "B.Tech., M.Tech., Phd Courses available in Mechanical Engineering.",
    slug:"/mechanical-dept-about"
  },
  {
    id:18,
    schoolsdept :"Department of Civil Engineering",
    schoolsubdept : "UG, PG, Ph.D" ,
    desc : "B.Tech., M.Tech., Ph.D. Courses available in Civil Engineering Streams.",
    slug:"/civil-dept-about"
  },
  {
    id:19,
    schoolsdept :"Department of Electrical and Electronics Engineering",
    schoolsubdept : "UG, PG, Ph.D" ,
    desc : "B.Tech., M.Tech., Ph.D. Courses available in Electrical Engineering.",
    slug:"/electrical-dept-about"
  },
  {
    id:20,
    schoolsdept :"Department of Electronics and Communication Engineering",
    schoolsubdept : "UG, PG, Ph.D" ,
    desc : "B.Tech., M.Tech., Ph.D. Courses available in Electronics and Telecommunication Engineering.",
    slug:"/electronics-dept-about"
  },
  {
    id:21,
    schoolsdept :"Department of Computer Science & Engineering",
    schoolsubdept : "UG, PG, Ph.D" ,
    desc : "B.Tech., M.Tech., Ph.D. Courses available in Computer Science and Engineering.",
    slug:"/computer-science-dept-about"
  },
  {
    id:22,
    schoolsdept :"Department of Artificial Intelligence and Machine Learning(AI&ML)",
    schoolsubdept : "UG, PG, Ph.D" ,
    desc : "B.Tech., M.Tech. Courses available in Artificial Intelligence and Machine Learning(AI&ML).",
    slug:"/AI-ML-dept-faculty"
  },
  
];
const sguhighlightdata = [
      {
        id:0,
        imgSrc:"assets/images/tl-10/scroll8.jpg",
        title:"2 th Convocation Ceremony 2021",
        slug:"https://www.sanjayghodawatuniversity.ac.in/convocation.php?year=2021"
      },
      {
        id:1,
        imgSrc:"assets/images/tl-10/scroll1.jpg",
        title:"TATA Technology Competency Center",
        slug:"https://www.sanjayghodawatuniversity.ac.in/inauguration-tcc-tata.php"
      },
      {
        id:2,
        imgSrc:"assets/images/tl-10/scroll3.jpg",
        title:"Bollywood Megastar Sara Ali Khan Visit",
        slug:"https://www.sanjayghodawatuniversity.ac.in/visit-saraalikhan.php"
      },
      {
        id:3,
        imgSrc:"assets/images/tl-10/scroll6.jpg",
        title:"Reinventing India",
        slug:"https://www.sanjayghodawatuniversity.ac.in/reinventing-india-event.php"
      },
      {
        id:4,
        imgSrc:"assets/images/tl-10/latest-image8.jpg",
        title:"A Story of Grit and Determination",
        slug:"assets/docs/sgu-highlights/forbes-artical.pdf"
      },
      {
        id:5,
        imgSrc:"assets/images/tl-10/scroll5.jpg",
        title:"Asian Tennis Volleyball Championship",
        slug:"assets/docs/sgu-highlights/shubham-kore-championship.pdf"
      },
      {
        id:6,
        imgSrc:"assets/images/tl-10/scroll2.jpg",
        title:"Sci - Star 2018",
        slug:"https://www.sanjayghodawatuniversity.ac.in/scistar2018.php"
      },
      {
        id:7,
        imgSrc:"assets/images/tl-10/scroll8.jpg",
        title:"1 st Convocation Ceremony 2020",
        slug:"https://www.sanjayghodawatuniversity.ac.in/convocation.php?year=2020"
      },
      {
        id:8,
        imgSrc:"assets/images/tl-10/scroll20.jpg",
        title:"3 th Convocation Ceremony 2022",
        slug:"https://www.sanjayghodawatuniversity.ac.in/convocation.php?year=2022"
      },
      {
        id:9,
        imgSrc:"assets/images/tl-10/scroll4.jpg",
        title:"NCSAS 2019",
        slug:"https://www.sanjayghodawatuniversity.ac.in/conference/ncsas2019.php"
      }
]

const openElectiveI = [
  {
    id:1,
    courseCode : "UOE011",
    courseTitle : "Creativity and Innovation",
    credits : "02",
    School : "School of Technology",
    slug : "assets/docs/open-electives/open-electives-I/UOE 011 Creativity & Innovation.pdf"
  },
  {
    id:2,
    courseCode : "UOE012",
    courseTitle : "Software Models",
    credits : "02",
    School : "School of Computer Science",
    slug : "assets/docs/open-electives/open-electives-I/UOE 012 Software Models Syllabus.pdf"
  },
  {
    id:3,
    courseCode : "UOE013",
    courseTitle : "Origami",
    credits : "02",
    School : "School of Design and Architecture",
    slug : "assets/docs/open-electives/open-electives-I/UOE 013 Origami  Syllabus.pdf"
  },
  {
    id:4,
    courseCode : "UOE014",
    courseTitle : "Selling Skills",
    credits : "02",
    School : "School of Commerce",
    slug : "assets/docs/open-electives/open-electives-I/SELLING SKILLS.pdf"
  },
  {
    id:5,
    courseCode : "UOE015",
    courseTitle : "Basics of Marketing",
    credits : "02",
    School : "School of Management",
    slug : "assets/docs/open-electives/open-electives-I/BASICS OF MARKETING.pdf"
  },
  {
    id:6,
    courseCode : "UOE016",
    courseTitle : "World Of Nanoscience",
    credits : "02",
    School : "School of Science",
    slug : "assets/docs/open-electives/open-electives-I/UOE 016 World of Nanoscience.pdf"
  },
  {
    id:7,
    courseCode : "UOE017",
    courseTitle : "Pharmaceutical Biochemistry",
    credits : "02",
    School : "School of Pharmacy",
    slug : "assets/docs/open-electives/open-electives-I/UOE 17 Pharmaceutical Biochemistry.pdf"
  },
  {
    id:8,
    courseCode : "UOE018",
    courseTitle : "Food Safety",
    credits : "02",
    School : "School of Allied Health Sciences",
    slug : "assets/docs/open-electives/open-electives-I/UOE 018 Food Safety.pdf"
  },
  {
    id:9,
    courseCode : "UOE019",
    courseTitle : "Creative Writing",
    credits : "02",
    School : "School of Liberal Arts",
    slug : "https://www.sanjayghodawatuniversity.ac.in/Open%20Electives/.pdf"
  }
]

const openElectiveII = [
  {
    id:1,
    courseCode : "UOE021",
    courseTitle : "Electric Vehicles",
    credits : "02",
    School : "School of Technology",
    slug : "assets/docs/open-electives/open-electives-II/ELECTRIC VEHICLES (OPen elective UOE021).pdf"
  },
  {
    id:2,
    courseCode : "UOE022",
    courseTitle : "Programming in Python",
    credits : "02",
    School : "School of Computer Science",
    slug : "assets/docs/open-electives/open-electives-II/UOE 022 Programming in Paython.pdf"
  },
  {
    id:3,
    courseCode : "UOE023",
    courseTitle : "Design Management & Innovation",
    credits : "02",
    School : "School of Design and Architecture",
    slug : "assets/docs/open-electives/open-electives-II/UOE023-Design Management & Innovation.pdf"
  },
  {
    id:4,
    courseCode : "UOE024",
    courseTitle : "Financial Literacy",
    credits : "02",
    School : "School of Commerce",
    slug : "https://www.sanjayghodawatuniversity.ac.in/Open%20Electives/.pdf"
  },
  {
    id:5,
    courseCode : "UOE025",
    courseTitle : "Emotional Intelligence for Managers",
    credits : "02",
    School : "School of Management",
    slug : "https://www.sanjayghodawatuniversity.ac.in/Open%20Electives/.pdf"
  },
  {
    id:6,
    courseCode : "UOE026",
    courseTitle : "Miracles In Nanotechnology",
    credits : "02",
    School : "School of Science",
    slug : "assets/docs/open-electives/open-electives-II/UOE 026 Miracles in Nanotechnology.pdf"
  },
  {
    id:7,
    courseCode : "UOE027",
    courseTitle : "Pharmaceutical Microbiology",
    credits : "02",
    School : "School of Pharmacy",
    slug : "assets/docs/open-electives/open-electives-I/UOE 027 Pharmaceutical Microbiology.pdf"
  },
  {
    id:8,
    courseCode : "UOE028",
    courseTitle : "Post-harvest Technology of Fruits & Vegetables",
    credits : "02",
    School : "School of Allied Health Sciences",
    slug : "assets/docs/open-electives/open-electives-II/UOE 028 Post Hrvesting Technology.pdf"
  },
  {
    id:9,
    courseCode : "UOE029",
    courseTitle : "Vlogging",
    credits : "02",
    School : "School of Liberal Arts",
    slug : "assets/docs/open-electives/open-electives-II/UOE 029  Vlogging.pdf"
  }
]

const openElectiveIII = [
  {
    id:1,
    courseCode : "UOE031",
    courseTitle : "Engineering Management",
    credits : "02",
    School : "School of Technology",
    slug : "https://www.sanjayghodawatuniversity.ac.in/Open%20Electives/.pdf"
  },
  {
    id:2,
    courseCode : "UOE032",
    courseTitle : "Introduction to data science",
    credits : "02",
    School : "School of Computer Science",
    slug : "assets/docs/open-electives/open-electives-III/UOE 032 Introduction to Data Science.pdf"
  },
  {
    id:3,
    courseCode : "UOE033",
    courseTitle : "Design Entrepreneurship",
    credits : "02",
    School : "School of Design and Architecture",
    slug : "https://www.sanjayghodawatuniversity.ac.in/Open%20Electives/.pdf"
  },
  {
    id:4,
    courseCode : "UOE034",
    courseTitle : "Entrepreneurship",
    credits : "02",
    School : "School of Commerce",
    slug : "https://www.sanjayghodawatuniversity.ac.in/Open%20Electives/.pdf"
  },
  {
    id:5,
    courseCode : "UOE035",
    courseTitle : "Leadership skills",
    credits : "02",
    School : "School of Management",
    slug : "https://www.sanjayghodawatuniversity.ac.in/Open%20Electives/.pdf"
  },
  {
    id:6,
    courseCode : "UOE036",
    courseTitle : "Green Chemistry & Sustainability",
    credits : "02",
    School : "School of Science",
    slug : "https://www.sanjayghodawatuniversity.ac.in/Open%20Electives/.pdf"
  },
  {
    id:7,
    courseCode : "UOE037",
    courseTitle : "Pharmaceutical Microbiology",
    credits : "02",
    School : "School of Pharmacy",
    slug : "https://www.sanjayghodawatuniversity.ac.in/Open%20Electives/.pdf"
  },
  {
    id:8,
    courseCode : "UOE038",
    courseTitle : "Food Quality Management",
    credits : "02",
    School : "School of Allied Health Sciences",
    slug : "https://www.sanjayghodawatuniversity.ac.in/Open%20Electives/.pdf"
  },
  {
    id:9,
    courseCode : "UOE039",
    courseTitle : "Social Media",
    credits : "02",
    School : "School of Liberal Arts",
    slug : "https://www.sanjayghodawatuniversity.ac.in/Open%20Electives/.pdf"
  }
]

const openElectiveIV = [
  {
    id:1,
    courseCode : "UOE041",
    courseTitle : "Industry 4.0",
    credits : "02",
    School : "School of Technology",
    slug : "assets/docs/open-electives/open-electives-IV/INDUSTRY 4.0 (OPen elective UOE041).pdf"
  },
  {
    id:2,
    courseCode : "UOE042",
    courseTitle : "Introduction to data analytics",
    credits : "02",
    School : "School of Computer Science",
    slug : "assets/docs/open-electives/open-electives-IV/UOE 042 Introduction to Data Analytics.pdf"
  },
  {
    id:3,
    courseCode : "UOE043",
    courseTitle : "Photography",
    credits : "02",
    School : "School of Design and Architecture",
    slug : "assets/docs/open-electives/open-electives-IV/UOE043 - Photography Syllabus.pdf"
  },
  {
    id:4,
    courseCode : "UOE044",
    courseTitle : "Culture and Entertainment",
    credits : "02",
    School : "School of Commerce",
    slug : "https://www.sanjayghodawatuniversity.ac.in/Open%20Electives/.pdf"
  },
  {
    id:5,
    courseCode : "UOE045",
    courseTitle : "Event Management",
    credits : "02",
    School : "School of Management",
    slug : "https://www.sanjayghodawatuniversity.ac.in/Open%20Electives/.pdf"
  },
  {
    id:6,
    courseCode : "UOE045",
    courseTitle : "Chemistry of Nanomaterials",
    credits : "02",
    School : "School of Science",
    slug : "https://www.sanjayghodawatuniversity.ac.in/Open%20Electives/.pdf"
  },
  {
    id:7,
    courseCode : "UOE047",
    courseTitle : "Pharmaceutical Biotechnology",
    credits : "02",
    School : "School of Pharmacy",
    slug : "https://www.sanjayghodawatuniversity.ac.in/Open%20Electives/.pdf"
  },
  {
    id:8,
    courseCode : "UOE048",
    courseTitle : "Dairy Science",
    credits : "02",
    School : "School of Allied Health Sciences",
    slug : "https://www.sanjayghodawatuniversity.ac.in/Open%20Electives/.pdf"
  },
  {
    id:9,
    courseCode : "UOE049",
    courseTitle : "English for Competitive",
    credits : "02",
    School : "School of Liberal Arts",
    slug : "https://www.sanjayghodawatuniversity.ac.in/Open%20Electives/.pdf"
  }
]

const openElectiveV = [
  {
    id:1,
    courseCode : "UOE051",
    courseTitle : "Optimization Techniques",
    credits : "02",
    School : "School of Technology",
    slug : "assets/docs/open-electives/open-electives-V/OPTIMIZATION TECHNIQUES (OPen elective UOE051).pdf"
  },
  {
    id:2,
    courseCode : "UOE052",
    courseTitle : "Digital Marketing",
    credits : "02",
    School : "School of Computer Science",
    slug : "assets/docs/open-electives/open-electives-V/UOE052.Digital Marketing.pdf"
  },
  {
    id:3,
    courseCode : "UOE053",
    courseTitle : "Calligraphy",
    credits : "02",
    School : "School of Design and Architecture",
    slug : "assets/docs/open-electives/open-electives-V/UOE 053 Calligraphy Syllabus.pdf"
  },
  {
    id:4,
    courseCode : "UOE054",
    courseTitle : "Perosnnel Administration",
    credits : "02",
    School : "School of Commerce",
    slug : "https://www.sanjayghodawatuniversity.ac.in/Open%20Electives/.pdf"
  },
  {
    id:5,
    courseCode : "UOE055",
    courseTitle : "Management Games for Skill Development",
    credits : "02",
    School : "School of Management",
    slug : "https://www.sanjayghodawatuniversity.ac.in/Open%20Electives/.pdf"
  },
  {
    id:6,
    courseCode : "UOE056",
    courseTitle : "Renewable energy",
    credits : "02",
    School : "School of Science",
    slug : "https://www.sanjayghodawatuniversity.ac.in/Open%20Electives/.pdf"
  },
  {
    id:7,
    courseCode : "UOE057",
    courseTitle : "Instrumental Methods of Analysis",
    credits : "02",
    School : "School of Pharmacy",
    slug : "https://www.sanjayghodawatuniversity.ac.in/Open%20Electives/.pdf"
  },
  {
    id:8,
    courseCode : "UOE058",
    courseTitle : "Sea Food",
    credits : "02",
    School : "School of Allied Health Sciences",
    slug : "https://www.sanjayghodawatuniversity.ac.in/Open%20Electives/.pdf"
  },
  {
    id:9,
    courseCode : "UOE059",
    courseTitle : "Soft Skills",
    credits : "02",
    School : "School of Liberal Arts",
    slug : "https://www.sanjayghodawatuniversity.ac.in/Open%20Electives/.pdf"
  }
]
/* const arospaceFaculty = [
  {
      id:1,
      facultyName : "Mr.S.Sulthan",
      position:"HOD & Assistant Professor",
      imgSrc:"assets/images/faculty-profile/aerospace-engineering/hod.jpg"
  },
  {
    id:2,
    facultyName : "Mr. R.R. Vinoth Kumar",
    position:"Assistant Professor",
    imgSrc:"assets/images/faculty-profile/aerospace-engineering/assistant-professor1.jpg"
  },
  {
    id:3,
    facultyName : "Dr.Muzeer.S",
    position:"Assistant Professor",
    imgSrc:"assets/images/faculty-profile/aerospace-engineering/male-dummy-image.jpg"
  },
  {
    id:4,
    facultyName : "Mr. Anant Uday Nalavade",
    position:"Teaching Assistant",
    imgSrc:"assets/images/faculty-profile/aerospace-engineering/male-dummy-image.jpg"
  },
  {
    id:5,
    facultyName : "Mr. Syed Habeeb",
    position:"Assistant Professor",
    imgSrc:"assets/images/faculty-profile/aerospace-engineering/assistant-professor2.jpg"
  },
  {
    id:6,
    facultyName : "Mr.Mohammed Hashim Y",
    position:"Assistant Professor",
    imgSrc:"assets/images/faculty-profile/aerospace-engineering/assistant-professor3.jpg"
  }
]  */


const programsList = {
  level : [
      {
          id : 1,
          levelName : "UG" ,
              school : [
                  {
                      id : 1,
                      schoolName : "School of Engineering & Technology",
                          program : [
                              {
                                  id: 1,
                                  programName : "B. Tech. Aeronautical Engineering"
                              },
                              {
                                  id: 2,
                                  programName : "B. Tech. Civil Engineering"
                              },
                              {
                                  id: 3,
                                  programName : "B. Tech. Computer Science and Engineering"
                              },
                              {
                                  id: 4,
                                  programName : "B. Tech. Artificial Intelligence and Machine Learning (AI&ML)"
                              },
                              {
                                  id: 5,
                                  programName : "B. Tech. Electronics & Communication Engineering"
                              }
                          ]
                  },
                  {
                      id : 2,
                      schoolName : "School of Computer Applications",
                          program : [
                              {
                                  id: 1,
                                  programName : "BCA"
                              },
                          ]
                  },
                  {
                    id : 3,
                    schoolName : "School of Physical & Chemical Sciences",
                        program : [
                            {
                                id: 1,
                                programName : "B.Sc.Physics"
                            },
                            {
                              id: 2,
                              programName : "B.Sc.Chemistry"
                          },
                      ]
                },
                {
                  id : 4,
                  schoolName : "School of Pharmaceutical Science",
                      program : [
                          {
                              id: 1,
                              programName : "B. Pharm."
                          },
                    ]
                },
                {
                  id : 5,
                  schoolName : "School of Allied Health Sciences",
                      program : [
                          {
                              id: 1,
                              programName : "B.Sc Medical Lab Technology (B.M.L.T.)"
                          },
                          {
                              id: 2,
                              programName : "B.Sc Food Science & Technology (F.S.T.)"
                          },
                          {
                            id: 3,
                            programName : "B.Sc Bio Technology"
                          },
                    ]
                },
                {
                  id : 6,
                  schoolName : "School of Commerce & Management",
                      program : [
                          {
                              id: 1,
                              programName : "B.Com"
                          },
                          {
                              id: 2,
                              programName : "BBA"
                          },
                    ]
                },
                {
                  id : 7,
                  schoolName : "School of Design",
                      program : [
                          {
                              id: 1,
                              programName : "B.Des.Fashion Design, Styling & Business"
                          },
                          {
                              id: 2,
                              programName : "B.Des.Interior Design, Styling & Practice"
                          },
                          {
                              id: 3,
                              programName : "B.Des. Product Design"
                          },
                          {
                            id: 4,
                            programName : "B.Des. Communication Design"
                          },
                          {
                            id: 5,
                            programName : "B.Sc. Fashion Design"
                          },
                          {
                            id: 6,
                            programName : "B.Sc. Interior Design"
                          },
                          {
                            id: 7,
                            programName : "B.Sc. Graphic Design, Animation & VFX"
                          },
                          {
                            id: 8,
                            programName : "B.Sc. UI UX"
                          },
                          {
                            id: 9,
                            programName : "B.Sc. Game Design"
                          },
                    ]
                },
                {
                  id : 8,
                  schoolName : "School of Media",
                      program : [
                          {
                              id: 1,
                              programName : "B.A. Journalism & Mass Communication"
                          },
                    ]
                },
                {
                  id : 9,
                  schoolName : "School of Social Science",
                      program : [
                          {
                              id: 1,
                              programName : "B.A.History"
                          },
                          {
                            id: 2,
                            programName : "B.A.Geography"
                          },
                          {
                            id: 3,
                            programName : "B.A.Political Science"
                          },
                    ]
                },
                {
                  id : 10,
                  schoolName : "School of Legal Studies (Law)",
                      program : [
                          {
                              id: 1,
                              programName : "B.A.L.L.B (Honours)"
                          },
                          {
                            id: 2,
                            programName : "B.B.A.L.L.B.(Honours)"
                          },
                          {
                            id: 3,
                            programName : "L.L.B."
                          },
                    ]
                },
              ]
        },
        {
          id : 2,
          levelName : "PG",
            school :[
              {
                id: 1,
                schoolName : "Engineering & Technology",
                program : [
                  {
                      id: 1,
                      programName : "M.Tech Aerospace Engineering"
                  },
                  {
                      id: 2,
                      programName : "M.Tech Civil Engineering in Construction Engineering & Management"
                  },
                  {
                      id: 3,
                      programName : "M.Tech Civil Engineering in Structural Engineering"
                  },
                  {
                      id: 4,
                      programName : "M.Tech Artificial Intelligence & Data Science (AI&DS)"
                  },
                  {
                      id: 5,
                      programName : "M.Tech Electronics Engineering - Embedded Systems"
                  }
                ]
              },
              {
                id: 2,
                schoolName : "Computer Applications",
                program : [
                  {
                      id: 1,
                      programName : "M.C.A."
                  },
                ]
              },
              {
                id: 3,
                schoolName : "Physical & Chemical Sciences",
                program : [
                  {
                      id: 1,
                      programName : "M.Sc. Chemistry (Organic)"
                  },
                  {
                    id: 2,
                    programName : "M.Sc. Chemistry (Analytical)"
                  },
                  {
                    id: 3,
                    programName : "M.Sc. Physics (Space Science)"
                  },
                  {
                    id: 4,
                    programName : "M.Sc. Physics (Nano Science)"
                  },
                ]
              },
              {
                id: 4,
                schoolName : "Pharmaceutical Science",
                program : [
                  {
                      id: 1,
                      programName : "M. Pharm (Pharmaceutics)"
                  },
                  {
                    id: 2,
                    programName : "M. Pharm (Pharmaceutical Quality Assurance)"
                  },
                ]
              },
              {
                id: 5,
                schoolName : "Commerce & Management",
                program : [
                  {
                      id: 1,
                      programName : "M.B.A."
                  },
                  {
                    id: 2,
                    programName : "M.B.A. in Disaster Management "
                  },
                ]
              }
            ]
        },
        {
          id : 3,
          levelName : "PHD",
          school :[
            {
              id: 1,
              schoolName : "PHD",
                  program : [
                    {
                      id : 1,
                      programName : "Aeronautical Engineering"
                    },
                    {
                      id : 2,
                      programName : "Civil Engineering"
                    },
                    {
                      id : 3,
                      programName : "Computer Science and Engineering"
                    },
                    {
                      id : 4,
                      programName : "Computer Applications"
                    },
                    {
                      id : 5,
                      programName : "Physics"
                    },
                    {
                      id : 6,
                      programName : "Chemistry"
                    },
                    {
                      id : 7,
                      programName : "Pharmacy"
                    },
                    {
                      id : 8,
                      programName : "Commerce"
                    },
                    {
                      id : 9,
                      programName : "Management"
                    }
                ]
              }
            ]
        },
        {
          id : 4,
          levelName : "DIPLOMA",
            school : [
              {
                  id : 1,
                  schoolName : "Pharmaceutical Science",
                    program : [
                        {
                            id : 1,
                            programName : "D.Pharm"
                        }
                    ]
              }
            ]
        }
  ]
}




export {
    memberList,
    courseList,
    testimonialList,
    teacherList,
    aboutTestimonialList,
    alumniImgList,
    alumniTextList,
    membershipList,
    bannerSliderData,
    serviceSliderData,
    testimonialList2,
    testimonialList3,
    blogList,
    eventList,
    faqList,
    socialMediaData,
    categoriesData,
    articlesData,
    schoolsList,
    sguhighlightdata,
    libraryActivities,
    openElectiveI,
    openElectiveII,
    openElectiveIII,
    openElectiveIV,
    openElectiveV,
    programsList, pharmacyAlumniList,
    managementAlumniList,
    computerAlumniList,
    commerceAlumni
};
