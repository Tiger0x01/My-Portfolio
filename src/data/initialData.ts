import { Project, ExperienceItem, SkillCategory, PublicationItem, ApproachPillar } from '../types/portfolio';

// Local high-fidelity generated images
import heroPortrait from '../assets/images/hero.png';



import bayanImg from '../assets/images/bayan.png';
import bhaavImg from '../assets/images/bhaav.jpg';
import creditImg from '../assets/images/credit.png';
import gestureImg from '../assets/images/gesture.png';
import libraryImg from '../assets/images/library.png';
import logoImg from '../assets/images/logo.png';
import monkeyImg from '../assets/images/monkey.png';
import mustawfiImg from '../assets/images/mustawfi.png';
import nosoosImg from '../assets/images/nosoos.png';


export { heroPortrait };

export const initialExperience: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: { en: 'Microsoft Machine Learning Engineer Trainee', ar: 'متدرب هندسة تعلم الآلة - Microsoft DEPI' },
    company: { en: 'DEPI (Digital Egypt Pioneers Initiative)', ar: 'مبادرة رواد مصر الرقمية (DEPI)' },
    period: { en: 'Jun 2025 — Dec 2025', ar: 'يونيو 2025 — ديسمبر 2025' },
    location: { en: 'Egypt', ar: 'مصر' },
    description: { 
      en: 'Engineered and deployed end-to-end ML pipelines on Azure, applying MLOps practices for model deployment, experiment tracking, versioning, and monitoring using MLflow.', 
      ar: 'هندسة ونشر خطوط أنابيب تعلم آلة متكاملة على Azure مع تطبيق ممارسات MLOps لنشر النماذج وتتبع التجارب والإصدارات والمراقبة باستخدام MLflow.' 
    },
    achievements: {
      en: [
        'Developed Deep Learning models for NLP and Computer Vision tasks, applying transfer learning and attention architectures to improve inference accuracy.',
        'Built Generative AI solutions and RAG-based applications utilizing advanced Prompt Engineering techniques tailored for diverse datasets.'
      ],
      ar: [
        'تطوير نماذج تعلم عميق لمهام معالجة اللغات الطبيعية (NLP) والرؤية الحاسوبية، وتطبيق التعلم بالتحويل (Transfer Learning) لرفع دقة الاستنتاج.',
        'بناء حلول ذكاء اصطناعي توليدي وتطبيقات تعتمد على RAG مع توظيف تقنيات هندسة الأوامر المتقدمة.'
      ]
    },
    technologies: ['Azure AI', 'MLflow', 'NLP', 'Computer Vision', 'Generative AI', 'RAG']
  },
  {
    id: 'exp-2',
    role: { en: 'Generative AI Intern', ar: 'متدرب الذكاء الاصطناعي التوليدي' },
    company: { en: 'Edrak For AI', ar: 'إدراك للذكاء الاصطناعي' },
    period: { en: 'May 2026 — Jul 2026', ar: 'مايو 2026 — يوليو 2026' },
    location: { en: 'Egypt', ar: 'مصر' },
    description: { 
      en: 'Completed a comprehensive 126-hour Generative AI internship focused on modern AI concepts, LLM applications, and practical Generative AI workflows.', 
      ar: 'إتمام تدريب مكثف لمدة 126 ساعة في الذكاء الاصطناعي التوليدي يركز على المفاهيم الحديثة وتطبيقات نماذج اللغة الكبيرة (LLMs).' 
    },
    achievements: {
      en: [
        'Built end-to-end AI applications leveraging LLMs, prompt engineering, and retrieval-augmented generation (RAG) to solve practical business scenarios.'
      ],
      ar: [
        'بناء تطبيقات ذكاء اصطناعي متكاملة باستخدام LLMs، وهندسة الأوامر، وRAG لحل سيناريوهات أعمال عملية.'
      ]
    },
    technologies: ['LLMs', 'RAG', 'Prompt Engineering']
  },
  {
    id: 'exp-3',
    role: { en: 'Python Track Trainee', ar: 'متدرب مسار بايثون' },
    company: { en: 'Information Technology Institute (ITI)', ar: 'معهد تكنولوجيا المعلومات (ITI)' },
    period: { en: 'Jan 2025 — Feb 2025', ar: 'يناير 2025 — فبراير 2025' },
    location: { en: 'Egypt', ar: 'مصر' },
    description: { 
      en: 'Developed scalable backend web applications using Django, integrating user authentication and CRUD functionality.', 
      ar: 'تطوير تطبيقات ويب خلفية قابلة للتوسع باستخدام Django مع دمج المصادقة ووظائف CRUD.' 
    },
    achievements: {
      en: [
        'Designed relational database architectures using PostgreSQL and integrated them with Django ORM.'
      ],
      ar: [
       ' صرت على تصميم هياكل قواعد بيانات علائقية باستخدام PostgreSQL وربطها بـ Django ORM.'
      ]
    },
    technologies: ['Python', 'Django', 'PostgreSQL', 'Django ORM']
  }
];



export const initialProjects: Project[] = [
  {
    id: 'proj-1',
    slug: 'mustawfi',
    title: { en: 'MUSTAWFI', ar: 'مستوفي (MUSTAWFI)' },
    shortDescription: { 
      en: 'Smart loan eligibility system combining Computer Vision, OCR, and ML with a React/FastAPI stack.', 
      ar: 'نظام ذكي لأهلية القروض يجمع بين الرؤية الحاسوبية، التعرف البصري على الحروف (OCR)، وتعلم الآلة.' 
    },
    fullDescription: { 
      en: 'MUSTAWFI is an intelligent loan application processing platform that extracts structured info from forms and predicts loan eligibility with confidence scores.', 
      ar: 'مستوفي هي منصة ذكية لمعالجة طلبات القروض، تستخرج المعلومات الهيكلية من النماذج وتتنبأ بأهلية القرض مع عرض درجات الثقة للمراجع البشري.' 
    },
    category: 'ai',
    featured: true,
    order: 1,
    published: true,
    image: mustawfiImg, 
    gallery: [],
    technologies: ['Python', 'FastAPI', 'OpenCV', 'NumPy', 'Scikit-learn', 'Custom OCR', 'React 19', 'TanStack Start', 'Tailwind CSS', 'Framer Motion', 'shadcn/ui'],
    githubUrl: 'https://github.com/Tiger0x01/MUSTAWFI',
    liveDemoUrl: 'https://mustawfi.vercel.app',
    caseStudy: {
      overview: { en: 'Smart Loan Eligibility Intelligence.', ar: 'نظام ذكي لمعالجة أهلية القروض.' },
      problem: { en: 'Manual processing of handwritten or printed loan forms.', ar: 'المعالجة اليدوية لنماذج القروض المكتوبة بخط اليد أو المطبوعة.' },
      solution: { en: 'Automated workflow using Custom OCR for extraction and ML for eligibility prediction.', ar: 'سير عمل آلي يعتمد على OCR مخصص للاستخراج وتعلم الآلة لتوقع الأهلية.' },
      architecture: { en: 'React 19 frontend + Python/FastAPI backend with OpenCV.', ar: 'واجهة أمامية بـ React 19 وخلفية Python/FastAPI مع OpenCV.' },
      features: { en: ['Handwritten/printed data extraction', 'Human-in-the-loop verification', 'ML confidence scores', 'Visual decision factors'], ar: ['استخراج البيانات المطبوعة والمكتوبة يدوياً', 'نظام مراجعة بشرية للبيانات', 'درجات ثقة مدعومة بتعلم الآلة', 'عوامل قرار مرئية'] },
      challenges: { en: 'Accurately extracting structured data from varied handwriting.', ar: 'استخراج البيانات الهيكلية بدقة من خطوط اليد المتنوعة.' },
      results: { en: 'Automated data extraction and streamlined ML-based eligibility decisions.', ar: 'استخراج آلي للبيانات وقرارات أهلية مدعومة بتعلم الآلة.' }
    }
  },
  {
    id: 'proj-2',
    slug: 'bhaav',
    title: { en: 'BHAAV', ar: 'بهاف (BHAAV)' },
    shortDescription: { 
      en: 'AI-powered platform predicting house prices in the Indian real estate market.', 
      ar: 'منصة مدعومة بالذكاء الاصطناعي لتوقع أسعار العقارات في السوق الهندي.' 
    },
    fullDescription: { 
      en: 'BHAAV processes property characteristics through an ML pipeline and returns an estimated price via a clean React interface.', 
      ar: 'تحلل منصة بهاف خصائص العقارات عبر خط أنابيب تعلم آلي لتقديم تقدير دقيق لسعر العقار من خلال واجهة React بسيطة.' 
    },
    category: 'ml',
    featured: true,
    order: 2,
    published: true,
    image: bhaavImg, 
    gallery: [],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Joblib', 'React', 'Vite', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Tiger0x01/BHAAV',
    caseStudy: {
      overview: { en: 'AI-Powered House Price Prediction.', ar: 'تنبؤ بأسعار العقارات مدعوم بالذكاء الاصطناعي.' },
      problem: { en: 'Difficulty in estimating property prices accurately based on multiple attributes.', ar: 'صعوبة تقدير أسعار العقارات بدقة بناءً على خصائص متعددة.' },
      solution: { en: 'Machine learning regression models analyzing location, area, and amenities.', ar: 'نماذج انحدار تحلل الموقع والمساحة والمرافق لتقديم سعر دقيق.' },
      architecture: { en: 'ML pipeline with Scikit-learn + React TS UI.', ar: 'خط أنابيب بيانات بـ Scikit-learn مع واجهة React TS.' },
      features: { en: ['Data preprocessing', 'Feature engineering', 'Property attribute analysis', 'Web interface estimator'], ar: ['معالجة البيانات المسبقة', 'هندسة الميزات', 'تحليل خصائص العقار (المساحة، الموقع، الخ)', 'حاسبة أسعار ويب'] },
      challenges: { en: 'Handling diverse real estate data parameters in the Indian market.', ar: 'التعامل مع متغيرات بيانات العقارات المتنوعة في السوق الهندي.' },
      results: { en: 'Accurate estimated property prices delivered to users.', ar: 'توفير أسعار تقديرية دقيقة للعقارات للمستخدمين.' }
    }
  },
  {
    id: 'proj-3',
    slug: 'bayan-ai',
    title: { en: 'Bayan AI', ar: 'بيان للذكاء الاصطناعي (Bayan AI)' },
    shortDescription: { 
      en: 'Cross-cultural communication assistant rewriting professional messages respecting cultural etiquette via RAG.', 
      ar: 'مساعد تواصل عابر للثقافات يعيد صياغة الرسائل المهنية لتناسب الإيتيكيت الثقافي باستخدام RAG.' 
    },
    fullDescription: { 
      en: 'Bayan AI uses a RAG pipeline and Qwen 2.5 to generate context-aware professional responses, cultural warnings, and compatibility scores.', 
      ar: 'يستخدم بيان RAG ونموذج Qwen 2.5 لتوليد ردود مهنية تراعي السياق الثقافي، مع تقديم تحذيرات ثقافية وتقييم للتوافق.' 
    },
    category: 'ai',
    featured: true,
    order: 3,
    published: true,
    image: bayanImg, 
    gallery: [],
    technologies: ['Python', 'FastAPI', 'React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Qwen 2.5', 'Hugging Face', 'RAG', 'Embeddings', 'FAISS'],
    githubUrl: 'https://github.com/Tiger0x01/Bayan-AI',
    caseStudy: {
      overview: { en: 'Cross-Cultural Communication Assistant.', ar: 'مساعد تواصل مهني عابر للثقافات.' },
      problem: { en: 'Cultural misunderstandings in international professional communication.', ar: 'سوء الفهم الثقافي في التواصل المهني الدولي.' },
      solution: { en: 'RAG system retrieving cultural knowledge to guide Qwen 2.5 message rewriting.', ar: 'نظام RAG يسترجع المعرفة الثقافية لتوجيه Qwen 2.5 في إعادة صياغة الرسالة.' },
      architecture: { en: 'FastAPI + FAISS + Qwen 2.5 + React UI.', ar: 'FastAPI مع قاعدة بيانات FAISS ونموذج Qwen 2.5 وواجهة React.' },
      features: { en: ['Cultural message rewriting', 'Etiquette suggestions', 'Cultural warnings', 'Compatibility score'], ar: ['إعادة صياغة الرسائل ثقافياً', 'اقتراحات الإيتيكيت', 'تحذيرات ثقافية', 'درجة التوافق الثقافي'] },
      challenges: { en: 'Preserving the original meaning while altering the cultural tone.', ar: 'الحفاظ على المعنى الأصلي للرسالة مع تغيير التون الثقافي.' },
      results: { en: 'Context-aware professional responses tailored to different countries.', ar: 'ردود مهنية تراعي السياق ومخصصة لثقافات الدول المختلفة.' }
    }
  },
  {
    id: 'proj-4',
    slug: 'nosoos-bot',
    title: { en: 'NosoosBot', ar: 'نصوص بوت (NosoosBot)' },
    shortDescription: { 
      en: 'AI Telegram bot extracting, translating, and summarizing YouTube transcripts via Llama 3.3.', 
      ar: 'بوت تيليجرام لاستخراج وترجمة وتلخيص نصوص يوتيوب بالذكاء الاصطناعي (Llama 3.3).' 
    },
    fullDescription: { 
      en: 'NosoosBot supports multiple languages, async processing, rate limiting, and Map-Reduce summarization for long YouTube videos.', 
      ar: 'يدعم بوت نصوص لغات متعددة، والمعالجة غير المتزامنة، وتلخيص الفيديوهات الطويلة جداً عبر خوارزمية Map-Reduce.' 
    },
    category: 'ai',
    featured: true,
    order: 4,
    published: true,
    image: nosoosImg, 
    gallery: [],
    technologies: ['Python', 'Aiogram', 'aiohttp', 'youtube-transcript-api', 'Groq API', 'Llama 3.3 70B', 'FPDF', 'python-docx', 'cachetools', 'dotenv'],
    githubUrl: 'https://github.com/Tiger0x01/NosoosBot',
    caseStudy: {
      overview: { en: 'AI YouTube Transcript & Summarization Bot.', ar: 'بوت تيليجرام لتلخيص نصوص يوتيوب.' },
      problem: { en: 'Extracting insights from long YouTube videos efficiently.', ar: 'صعوبة استخراج الرؤى السريعة من فيديوهات يوتيوب الطويلة.' },
      solution: { en: 'Automated transcript extraction and Map-Reduce AI summarization.', ar: 'استخراج آلي للنصوص وتلخيص ذكي بتقنية Map-Reduce.' },
      architecture: { en: 'Async Aiogram + Groq API (Llama 3.3) + Caching.', ar: 'مكتبة Aiogram غير المتزامنة + Groq API ونظام تخزين مؤقت.' },
      features: { en: ['YouTube caption extraction', 'Translation & Cleaning', 'Map-Reduce Summarization', 'TXT/PDF/DOCX exports'], ar: ['استخراج ترجمات يوتيوب', 'التنظيف والترجمة', 'التلخيص المتقدم بـ Map-Reduce', 'تصدير بصيغ TXT/PDF/DOCX'] },
      challenges: { en: 'Handling context limits for extremely long video transcripts.', ar: 'التعامل مع حدود سياق النماذج للفيديوهات الطويلة جداً.' },
      results: { en: 'Fast, accurate, and exportable multilingual video summaries.', ar: 'ملخصات سريعة ودقيقة متعددة اللغات جاهزة للتصدير.' }
    }
  },
  {
    id: 'proj-5',
    slug: 'library-management',
    title: { en: 'Library Management System', ar: 'نظام إدارة المكتبات' },
    shortDescription: { 
      en: 'Web-based application in Native PHP/MySQL to manage physical and digital library services.', 
      ar: 'تطبيق ويب بـ PHP و MySQL لإدارة خدمات المكتبة الفعلية والرقمية.' 
    },
    fullDescription: { 
      en: 'The system provides separate portals for librarians and students, handling book inventory, borrowing, and digital PDF purchasing.', 
      ar: 'نظام متكامل يقدم بوابات منفصلة لأمناء المكتبة والطلاب، ويدير مخزون الكتب والإعارة وشراء النسخ الرقمية (PDF).' 
    },
    category: 'web',
    featured: false,
    order: 5,
    published: true,
    image: libraryImg,
    gallery: [],
    technologies: ['Native PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Tiger0x01/Library-Management-System',
    caseStudy: {
      overview: { en: 'Web-based Library Management.', ar: 'نظام إدارة مكتبات عبر الويب.' },
      problem: { en: 'Manual tracking of library inventory, physical borrowing, and digital sales.', ar: 'التتبع اليدوي لمخزون المكتبة والإعارة والمبيعات الرقمية.' },
      solution: { en: 'Dedicated librarian and student portals connected to a relational database.', ar: 'بوابات مخصصة للطلاب وأمناء المكتبة متصلة بقاعدة بيانات علائقية.' },
      architecture: { en: 'Native PHP backend with MySQL database.', ar: 'خلفية Native PHP مع قاعدة بيانات MySQL.' },
      features: { en: ['Librarian & Student portals', 'Inventory management', 'Borrowing & Returns', 'Digital PDF purchasing', 'Sales analytics'], ar: ['بوابة للطلاب والأمناء', 'إدارة المخزون', 'الإعارة والإرجاع', 'شراء كتب PDF رقمية', 'تحليلات المبيعات'] },
      challenges: { en: 'Managing dual services (physical books and digital PDFs) in one system.', ar: 'إدارة الخدمات المزدوجة (كتب ورقية ورقمية) في نظام واحد.' },
      results: { en: 'Streamlined library operations and clear analytics.', ar: 'تبسيط عمليات المكتبة وعرض تحليلات واضحة.' }
    }
  },
  {
    id: 'proj-6',
    slug: 'monkey-banana',
    title: { en: 'Monkey & Banana Problem', ar: 'محاكاة القرد والموز (AI BFS)' },
    shortDescription: { 
      en: 'Interactive AI simulation demonstrating the Breadth-First Search (BFS) algorithm.', 
      ar: 'محاكاة تفاعلية للذكاء الاصطناعي توضح عمل خوارزمية البحث بالاتساع (BFS).' 
    },
    fullDescription: { 
      en: 'A visual solver for the classic AI problem featuring movement, jumping, box pushing, and gravity via a Tkinter interface.', 
      ar: 'حل مرئي للمشكلة الكلاسيكية في الذكاء الاصطناعي، يوضح آليات الحركة، القفز، ودفع الصندوق باستخدام واجهة Tkinter.' 
    },
    category: 'research',
    featured: false,
    order: 6,
    published: true,
    image: monkeyImg,
    gallery: [],
    technologies: ['Python', 'Tkinter', 'PIL', 'BFS Algorithm'],
    githubUrl: 'https://github.com/Tiger0x01/Monkey-and-Banana-problem',
    liveDemoUrl: 'https://Tiger0x01.github.io/Monkey-and-Banana-problem/',
    caseStudy: {
      overview: { en: 'BFS Algorithm Simulation.', ar: 'محاكاة خوارزمية BFS.' },
      problem: { en: 'Visualizing state-space search for a goal-oriented AI problem.', ar: 'تصوير مرئي للبحث في فضاء الحالة (State-space) لمشكلة ذكاء اصطناعي.' },
      solution: { en: 'Interactive GUI animating the BFS resolution steps.', ar: 'واجهة رسومية تفاعلية تحرك خطوات الحل بناءً على خوارزمية BFS.' },
      architecture: { en: 'Python algorithmic logic wrapped in Tkinter GUI.', ar: 'منطق خوارزمي بـ Python داخل واجهة رسومية Tkinter.' },
      features: { en: ['BFS pathfinding', 'State animations', 'Physics simulation (gravity/pushing)'], ar: ['إيجاد المسار بـ BFS', 'تحريك الحالات', 'محاكاة فيزيائية مبسطة'] },
      challenges: { en: 'Synchronizing GUI animations with algorithm state changes.', ar: 'مزامنة الرسوم المتحركة في الواجهة مع تغيرات حالة الخوارزمية.' },
      results: { en: 'Educational visualization of classic AI search.', ar: 'تصوير تعليمي ناجح لعمليات البحث في الذكاء الاصطناعي.' }
    }
  },
  {
    id: 'proj-7',
    slug: 'hand-gesture',
    title: { en: 'Hand Gesture Recognition', ar: 'التعرف على إشارات اليد' },
    shortDescription: { 
      en: 'Real-time sign-language detection system using MediaPipe and Random Forest.', 
      ar: 'نظام فوري لاكتشاف إشارات لغة اليد باستخدام MediaPipe و Random Forest.' 
    },
    fullDescription: { 
      en: 'Extracts 21 hand landmarks, converts them to numerical features, and classifies gestures in real-time via a Streamlit interface.', 
      ar: 'يستخرج 21 علامة حيوية لليد، ويحولها لخصائص رقمية لتصنيف الإشارات بالوقت الفعلي عبر كاميرا وتطبيق Streamlit.' 
    },
    category: 'ai',
    featured: false,
    order: 7,
    published: true,
    image: gestureImg,
    gallery: [],
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'Scikit-learn', 'Random Forest', 'Streamlit'],
    githubUrl: 'https://github.com/Tiger0x01/Hand-Gesture-Recognition-System',
    liveDemoUrl: 'https://depi-sign-language-project.streamlit.app/',
    caseStudy: {
      overview: { en: 'Real-time Hand Gesture CV System.', ar: 'نظام رؤية حاسوبية لإشارات اليد بالوقت الفعلي.' },
      problem: { en: 'Translating sign language gestures into machine-readable data instantly.', ar: 'ترجمة إشارات لغة اليد إلى بيانات مقروءة آلياً بشكل فوري.' },
      solution: { en: 'MediaPipe landmark tracking fed into a trained Random Forest classifier.', ar: 'تتبع العلامات الحيوية بـ MediaPipe وإدخالها لمصنف Random Forest.' },
      architecture: { en: 'OpenCV capture + MediaPipe extraction + Scikit-learn + Streamlit UI.', ar: 'التقاط بـ OpenCV + استخراج بـ MediaPipe + واجهة Streamlit.' },
      features: { en: ['Real-time hand tracking', 'Custom dataset collection', 'Landmark extraction', 'Live camera classification'], ar: ['تتبع فوري لليد', 'تجميع بيانات مخصصة', 'استخراج 42 ميزة رقمية', 'تصنيف حي عبر الكاميرا'] },
      challenges: { en: 'Ensuring low-latency processing in a browser/Streamlit environment.', ar: 'ضمان معالجة منخفضة الكمون عبر بيئة Streamlit.' },
      results: { en: 'Lightweight and accurate sign-language word detection.', ar: 'نظام خفيف ودقيق لاكتشاف كلمات لغة الإشارة.' }
    }
  },
  {
    id: 'proj-8',
    slug: 'customer-segmentation',
    title: { en: 'Customer Segmentation', ar: 'تقسيم عملاء البطاقات الائتمانية' },
    shortDescription: { 
      en: 'Data science project analyzing customer behavior using K-Means clustering and PCA.', 
      ar: 'مشروع علم بيانات لتحليل سلوك العملاء باستخدام تجميع K-Means وتقليل الأبعاد PCA.' 
    },
    fullDescription: { 
      en: 'Explores credit card data through EDA, feature engineering, K-Means clustering, DBSCAN outlier detection, and predictive modeling.', 
      ar: 'يستكشف بيانات البطاقات عبر التحليل الاستكشافي، التجميع، كشف القيم الشاذة بـ DBSCAN، والتصنيف التنبؤي.' 
    },
    category: 'ml',
    featured: false,
    order: 8,
    published: true,
    image: creditImg,
    gallery: [],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'K-Means', 'DBSCAN', 'PCA', 'Random Forest', 'Data Visualization'],
    githubUrl: 'https://github.com/Tiger0x01/Credit-Card-Customers-Project',
    caseStudy: {
      overview: { en: 'Credit Card Customer Analysis.', ar: 'تحليل عملاء البطاقات الائتمانية.' },
      problem: { en: 'Understanding underlying behavioral groups in unstructured financial data.', ar: 'فهم السلوكيات الضمنية للعملاء في البيانات المالية.' },
      solution: { en: 'Unsupervised ML clustering paired with dimensionality reduction for clear insights.', ar: 'تجميع تعلم غير خاضع للإشراف مع تقليل الأبعاد لاستخراج رؤى واضحة.' },
      architecture: { en: 'Python data science pipeline (Data Preprocessing -> EDA -> ML Models).', ar: 'خط أنابيب علم بيانات بايثون (معالجة -> تحليل استكشافي -> نمذجة).' },
      features: { en: ['EDA & Feature Engineering', 'K-Means Segmentation', 'PCA Dimensionality Reduction', 'DBSCAN Outlier Detection', 'Predictive Modeling'], ar: ['تحليل استكشافي وهندسة ميزات', 'تقسيم بـ K-Means', 'تقليل أبعاد بـ PCA', 'كشف شواذ بـ DBSCAN', 'نمذجة تنبؤية'] },
      challenges: { en: 'Handling high-dimensional feature spaces and detecting subtle outliers.', ar: 'التعامل مع البيانات عالية الأبعاد واكتشاف القيم الشاذة الدقيقة.' },
      results: { en: 'Distinct behavioral clusters identified for targeted financial strategies.', ar: 'تحديد شرائح سلوكية واضحة يمكن استهدافها باستراتيجيات مالية.' }
    }
  }
];


export const initialSkills: SkillCategory[] = [
  {
    id: 'cat-languages',
    title: { en: '01 / LANGUAGES', ar: '01 / لغات البرمجة' },
    description: { en: 'Core programming languages', ar: 'لغات التطوير الأساسية' },
    skills: [
      { name: 'Python', level: 'Expert', focus: { en: 'Backend & AI scripts', ar: 'الباك إند وسكربتات الذكاء الاصطناعي' } },
      { name: 'SQL', level: 'Proficient', focus: { en: 'Database querying & design', ar: 'استعلامات وتصميم قواعد البيانات' } },
      { name: 'C++', level: 'Intermediate', focus: { en: 'Performance logic', ar: 'منطق الأداء العالي' } },
      { name: 'PHP', level: 'Intermediate', focus: { en: 'Web applications', ar: 'تطبيقات الويب' } },
    ]
  },
  {
    id: 'cat-ml',
    title: { en: '02 / MACHINE LEARNING', ar: '02 / تعلم الآلة' },
    description: { en: 'Supervised/unsupervised algorithms & deep learning', ar: 'خوارزميات التعلم العميق والتقليدي' },
    skills: [
      { name: 'Scikit-learn', level: 'Advanced', focus: { en: 'Classical ML & clustering', ar: 'التصنيف والتجميع الكلاسيكي' } },
      { name: 'PyTorch', level: 'Advanced', focus: { en: 'Neural networks', ar: 'الشبكات العصبية العميقة' } },
      { name: 'TensorFlow', level: 'Intermediate', focus: { en: 'Deep learning models', ar: 'نماذج التعلم العميق' } },
    ]
  },
  {
    id: 'cat-genai',
    title: { en: '03 / GENERATIVE AI & NLP', ar: '03 / الذكاء الاصطناعي التوليدي و NLP' },
    description: { en: 'LLMs, RAG, and vector retrieval', ar: 'نماذج اللغة الكبيرة وأنظمة الاسترجاع' },
    skills: [
      { name: 'RAG', level: 'Expert', focus: { en: 'Vector search & context retrieval', ar: 'البحث والاسترجاع الشعاعي' } },
      { name: 'LLMs', level: 'Advanced', focus: { en: 'Fine-tuning & prompting', ar: 'توجيه وضبط النماذج الكبيرة' } },
      { name: 'Hugging Face', level: 'Proficient', focus: { en: 'Transformer pipelines', ar: 'مكتبات وتحويلات Hugging Face' } },
      { name: 'FAISS', level: 'Advanced', focus: { en: 'Vector databases', ar: 'قواعد البيانات الشعاعية' } },
      { name: 'Prompt Engineering', level: 'Expert', focus: { en: 'Structured generation', ar: 'هندسة الأوامر المتقدمة' } },
    ]
  },
  {
    id: 'cat-cv',
    title: { en: '04 / COMPUTER VISION', ar: '04 / الرؤية الحاسوبية' },
    description: { en: 'Real-time video & image processing', ar: 'معالجة الصور والفيديو بالوقت الفعلي' },
    skills: [
      { name: 'OpenCV', level: 'Advanced', focus: { en: 'Image processing pipelines', ar: 'معالجة إطارات الفيديو والصور' } },
      { name: 'MediaPipe', level: 'Advanced', focus: { en: 'Pose & landmark tracking', ar: 'تتبع المفاصل والعلامات الحيوية' } },
    ]
  },
  {
    id: 'cat-backend',
    title: { en: '05 / BACKEND & WEB', ar: '05 / الويب والباك إند' },
    description: { en: 'Full-stack & high-speed APIs', ar: 'تطوير الويب وواجهات البرمجة' },
    skills: [
      { name: 'FastAPI', level: 'Advanced', focus: { en: 'High-speed AI/REST APIs', ar: 'واجهات برمجة سريعة للذكاء الاصطناعي' } },
      { name: 'Django', level: 'Proficient', focus: { en: 'Full-stack web apps', ar: 'تطبيقات الويب المتكاملة' } },
      { name: 'React', level: 'Proficient', focus: { en: 'Frontend UI architecture', ar: 'واجهات المستخدم الأمامية' } },
      { name: 'TypeScript', level: 'Proficient', focus: { en: 'Type-safe web apps', ar: 'تطوير آمن الأنواع' } },
      { name: 'PostgreSQL', level: 'Proficient', focus: { en: 'Relational data modeling', ar: 'نمذجة وقواعد بيانات علائقية' } },
    ]
  },
  {
    id: 'cat-data',
    title: { en: '06 / DATA', ar: '06 / معالجة البيانات' },
    description: { en: 'Data manipulation and analysis', ar: 'تحليل ومعالجة البيانات' },
    skills: [
      { name: 'Pandas', level: 'Advanced', focus: { en: 'Data wrangling & tabular analysis', ar: 'تنظيف وتحليل الجداول والبيانات' } },
      { name: 'NumPy', level: 'Advanced', focus: { en: 'Numerical computing', ar: 'الحوسبة العددية والمصفوفات' } },
    ]
  },
  {
    id: 'cat-cloud',
    title: { en: '07 / CLOUD & MLOPS', ar: '07 / السحابيات و MLOps' },
    description: { en: 'Deployment, tracking & infrastructure', ar: 'النشر وتتبع التجارب والبنية التحتية' },
    skills: [
      { name: 'Azure AI', level: 'Intermediate', focus: { en: 'Cloud ML pipelines', ar: 'خطوط الأنابيب السحابية' } },
      { name: 'MLflow', level: 'Intermediate', focus: { en: 'Experiment tracking', ar: 'تتبع التجارب وإصدار النماذج' } },
      { name: 'Docker', level: 'Intermediate', focus: { en: 'Containerization', ar: 'الحاويات والتشغيل المعياري' } },
      { name: 'Git', level: 'Proficient', focus: { en: 'Version control', ar: 'إدارة الإصدارات' } },
      { name: 'Linux', level: 'Intermediate', focus: { en: 'System operations', ar: 'إدارة أنظمة Linux' } },
    ]
  }
];


export const initialPublications: PublicationItem[] = [
  {
    id: 'pub-1',
    type: 'article',
    title: { en: 'AI Systems Integration', ar: 'تكامل أنظمة الذكاء الاصطناعي' },
    source: { en: 'Tech Review', ar: 'مجلة التقنية' },
    date: { en: '2026', ar: '2026' },
    tag: { en: 'Article', ar: 'مقال' },
    link: '#',
    actionText: { en: 'Read Article', ar: 'قراءة المقال' }
  }
];

export const initialApproach: ApproachPillar[] = [
  {
    id: 'app-1',
    number: '01',
    title: { en: 'Strategic Analysis', ar: 'التحليل الاستراتيجي' },
    description: { en: 'Understand core constraints before code.', ar: 'فهم القيود الأساسية قبل كتابة الكود.' },
    highlights: { en: ['Requirements', 'Scope'], ar: ['المتطلبات', 'النطاق'] }
  }
];