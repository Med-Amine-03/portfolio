export type Language = "en" | "ar"

export interface Translations {
  // Navigation
  projects: string
  skills: string
  about: string
  contact: string

  // Hero Section
  heroHeadline: string
  heroTagline: string
  heroSubtagline: string
  heroDescription: string
  viewMyWork: string
  downloadResume: string

  // Projects Section
  featuredProjects: string
  github: string
  liveDemo: string
  details: string

  // Skills Section

  technicalSkills: string
  aiMachineLearning: string
  nlpLlm: string
  computerVision: string
  backendFrontend: string
  additionalTechnologies: string
  programmingFundamentals: string
  devOpsTools: string
  databasesStorage: string
  toolsPlatforms : string

  
  


  // About Section
  aboutMe: string
  aboutDescription1: string
  aboutDescription2: string
  aboutDescription3: string

  // Contact Section
  contactHeadline: string
  contactDescription: string
  githubProfile: string
  linkedinProfile: string
  emailContact: string
  name: string
  email: string
  subject: string
  message: string
  submit: string
  sending: string
  sendMessage: string
  yourName: string
  yourEmail: string
  yourMessage: string
  messageSent: string
  messageSentDescription: string
  error: string
  errorDescription: string
  errorGeneric: string

  // Footer
  builtWith: string
}

export const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    projects: "Projects",
    skills: "Skills",
    about: "About",
    contact: "Contact",

    // Hero Section
    heroHeadline: "Hi, I'm Mohamed Amine Othmani",
    heroTagline: "AI Engineer & Full‑Stack Developer",
    heroSubtagline: "Building intelligent apps with LLMs, Computer Vision, and Modern Web",
    heroDescription:
      "I design and deliver AI-powered applications—from emotion detection, translation, and resume analysis to multimodal chatbots and dashboards—deploying end-to-end with FastAPI + Next.js. I combine AI expertise with Python, NLP, CV, NLTK, Node.js, npm, Docker, CI/CD, Linux/WSL, automation, and design patterns to create scalable, maintainable solutions.",
    viewMyWork: "View My Work",
    downloadResume: "Download Resume",

    // Projects Section
    featuredProjects: "Featured Projects",
    github: "GitHub",
    liveDemo: "Live Demo",
    details: "Details",

    // Skills Section
    technicalSkills: "Technical Skills",
    aiMachineLearning: "AI & Machine Learning",
    nlpLlm: "NLP & LLM",
    computerVision: "Computer Vision",
    backendFrontend: "Backend & Frontend",
    additionalTechnologies: "Additional Technologies",
    programmingFundamentals: "Programming & CS Fundamentals",
    devOpsTools: "DevOps & Deployment",
    databasesStorage: "Databases & Storage",
    toolsPlatforms : "Tools & Platforms",

    // About Section
    aboutMe: "About Me",
    aboutDescription1:
      "I'm a full-stack AI & ML developer focused on building intelligent, scalable, and user-friendly applications. I bridge cutting-edge AI (LLMs, NLP, CV) with modern web tech (Next.js, FastAPI, Tailwind) to solve real-world problems.",
    aboutDescription2:
      "I enjoy turning complex ideas into functional products, from multimodal chatbots and emotion detection systems to translation tools, resume analyzers, and real-time dashboards. I also design automation pipelines, optimize model inference, and maintain robust deployments.",
    aboutDescription3:
      "Currently, I’m actively learning and building by experimenting with AI tools, fine-tuning models, applying design patterns, testing, debugging, and deploying in Linux/WSL environments. Open to internships, junior roles, and freelance collaborations.",

    // Contact Section
    contactHeadline: "Let's build something great",
    contactDescription:
      "I'm open to collaborations, internships, and freelance projects. Reach out and I'll get back to you soon.",
    githubProfile: "GitHub Profile",
    linkedinProfile: "LinkedIn Profile",
    emailContact: "Email Contact",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    submit: "Submit",
    sending: "Sending...",
    sendMessage: "Send Message",
    yourName: "Your Name",
    yourEmail: "Your Email",
    yourMessage: "Your Message",
    messageSent: "Message sent!",
    messageSentDescription: "Thank you for your message. I'll get back to you soon.",
    error: "Error",
    errorDescription: "Something went wrong. Please try again.",
    errorGeneric: "Failed to send message. Please try again later.",

    // Footer
    builtWith: "Built with Next.js & Tailwind",
  },

  ar: {
    // Navigation
    projects: "المشاريع",
    skills: "المهارات",
    about: "نبذة",
    contact: "تواصل",

    // Hero Section
    heroHeadline: "مرحباً، أنا محمد أمين العثماني",
    heroTagline: "مهندس ذكاء اصطناعي ومطور ويب متكامل",
    heroSubtagline: "أبني تطبيقات ذكية باستخدام نماذج اللغة الكبيرة ورؤية الحاسوب والويب الحديث",
    heroDescription:
      "أصمم وأطور تطبيقات مدعومة بالذكاء الاصطناعي—من كشف المشاعر والترجمة وتحليل السير الذاتية إلى روبوتات المحادثة ولوحات البيانات—مع النشر الشامل باستخدام FastAPI + Next.js. أجمع بين خبرتي في الذكاء الاصطناعي وPython، NLP، CV، NLTK، Node.js، npm، Docker، CI/CD، Linux/WSL، الأتمتة وأنماط التصميم لإنشاء حلول قابلة للتوسع والصيانة.",
    viewMyWork: "اطلع على أعمالي",
    downloadResume: "تحميل السيرة الذاتية",

    // Projects Section
    featuredProjects: "المشاريع المميزة",
    github: "جيت هاب",
    liveDemo: "عرض مباشر",
    details: "التفاصيل",

    // Skills Section
    technicalSkills: "المهارات التقنية",
    aiMachineLearning: "الذكاء الاصطناعي والتعلم الآلي",
    nlpLlm: "معالجة اللغات الطبيعية ونماذج اللغة الكبيرة",
    computerVision: "رؤية الحاسوب",
    backendFrontend: "الواجهة الخلفية والأمامية",
    additionalTechnologies: "تقنيات إضافية",
    programmingFundamentals: "البرمجة والأساسيات العلمية",
    devOpsTools: "النشر وأدوات DevOps",
    databasesStorage: "قواعد البيانات والتخزين",
    toolsPlatforms : "الأدوات والمنصات",

    // About Section
    aboutMe: "نبذة عني",
    aboutDescription1:
      "أنا مطور ويب وذكاء اصطناعي متكامل أركز على بناء تطبيقات ذكية وقابلة للتوسع وسهلة الاستخدام. أجمع بين أحدث تقنيات الذكاء الاصطناعي (LLMs، NLP، CV) وتقنيات الويب الحديثة (Next.js، FastAPI، Tailwind) لحل المشكلات الواقعية.",
    aboutDescription2:
      "أستمتع بتحويل الأفكار المعقدة إلى منتجات عملية، من روبوتات المحادثة متعددة الوسائط وأنظمة كشف المشاعر إلى أدوات الترجمة وتحليل السير الذاتية ولوحات البيانات في الوقت الفعلي. كما أقوم بتصميم خطوط الأتمتة، تحسين استنتاج النماذج، والحفاظ على نشر مستقر.",
    aboutDescription3:
      "حالياً، أدرس وأتعلم بنشاط من خلال تجربة أدوات الذكاء الاصطناعي، ضبط النماذج، تطبيق أنماط التصميم، الاختبار وتصحيح الأخطاء، والنشر في بيئات Linux/WSL. منفتح للتدريب، الأدوار المبتدئة، والتعاون المستقل.",

    // Contact Section
    contactHeadline: "لنبني شيئاً رائعاً",
    contactDescription: "أنا منفتح للتعاون والتدريب والمشاريع المستقلة. تواصل معي وسأرد عليك قريباً.",
    githubProfile: "ملف جيت هاب",
    linkedinProfile: "ملف لينكد إن",
    emailContact: "التواصل عبر البريد الإلكتروني",
    name: "الاسم",
    email: "البريد الإلكتروني",
    subject: "الموضوع",
    message: "الرسالة",
    submit: "إرسال",
    sending: "جاري الإرسال...",
    sendMessage: "إرسال الرسالة",
    yourName: "اسمك",
    yourEmail: "بريدك الإلكتروني",
    yourMessage: "رسالتك",
    messageSent: "تم إرسال الرسالة!",
    messageSentDescription: "شكراً لك على رسالتك. سأرد عليك قريباً.",
    error: "خطأ",
    errorDescription: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
    errorGeneric: "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى لاحقاً.",

    // Footer
    builtWith: "مبني باستخدام Next.js و Tailwind",
  },
};



export function getTranslation(language: Language): Translations {
  return translations[language]
}
