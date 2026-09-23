import { Project, ExperienceItem, SkillCategory, PublicationItem, ApproachPillar } from '../types/portfolio';

import heroPortrait from '../assets/images/hero.png';
import bayanImg from '../assets/images/bayan.png';
import bhaavImg from '../assets/images/bhaav.jpg';
import creditImg from '../assets/images/credit.png';
import gestureImg from '../assets/images/gesture.png';
import libraryImg from '../assets/images/library.png';
import monkeyImg from '../assets/images/monkey.png';
import mustawfiImg from '../assets/images/mustawfi.png';
import nosoosImg from '../assets/images/nosoos.png';

export { heroPortrait };

export const initialExperience: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: { en: 'Microsoft Machine Learning Trainee', ar: 'متدرب تعلم آلة - Microsoft DEPI' },
    company: { en: 'DEPI (Digital Egypt Pioneers Initiative)', ar: 'مبادرة رواد مصر الرقمية (DEPI)' },
    period: { en: 'Jun 2025 — Dec 2025', ar: 'يونيو 2025 — ديسمبر 2025' },
    location: { en: 'Egypt', ar: 'مصر' },
    description: { 
      en: 'Trained on Azure ML workflows, experiment tracking with MLflow, and baseline CV/NLP model training.', 
      ar: 'التدريب العملي على مسارات Azure ML، تتبع التجارب بـ MLflow، وتدريب نماذج الرؤية والنصوص.' 
    },
    achievements: {
      en: [
        'Fine-tuned transfer learning models for custom NLP and image classification datasets.',
        'Built baseline RAG scripts and tested prompt patterns for unstructured document QA.'
      ],
      ar: [
        'تطبيق Transfer Learning وتدريب نماذج تصنيف للنصوص والصور.',
        'تجارب عملية على بناء RAG وبيانات غير مرتبة.'
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
      en: '126-hour practical training focused on LLM integration, prompt tuning, and building retrieval-augmented workflows.', 
      ar: 'تدريب مكثف (126 ساعة) عملي على تكامل نماذج LLMs، هندسة الأوامر، وتطبيقات الاسترجاع (RAG).' 
    },
    achievements: {
      en: [
        'Implemented local/API-backed LLM pipelines solving domain-specific text tasks.'
      ],
      ar: [
        'تطوير سكربتات وتطبيقات تعتمد على LLM لمهام معالجة النصوص العملية.'
      ]
    },
    technologies: ['LLMs', 'RAG', 'Prompt Engineering']
  },
  {
    id: 'exp-3',
    role: { en: 'Python / Backend Trainee', ar: 'متدرب بايثون وباك إند' },
    company: { en: 'Information Technology Institute (ITI)', ar: 'معهد تكنولوجيا المعلومات (ITI)' },
    period: { en: 'Jan 2025 — Feb 2025', ar: 'يناير 2025 — فبراير 2025' },
    location: { en: 'Egypt', ar: 'مصر' },
    description: { 
      en: 'Backend web development track focusing on Django, PostgreSQL schemas, and RESTful routing.', 
      ar: 'مسار تطوير الويب الخلفي باستخدام Django وقواعد بيانات PostgreSQL وربط الجداول.' 
    },
    achievements: {
      en: [
        'Wrote custom Django ORM queries, auth flows, and PostgreSQL database schemas.'
      ],
      ar: [
        'تصميم وبناء قواعد بيانات علائقية بـ PostgreSQL وربطها بـ Django ORM.'
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
      en: 'Loan eligibility checker parsing scanned/handwritten forms via custom OCR + FastAPI + React.', 
      ar: 'نظام فحص أهلية قروض يقرأ النماذج المطبوعة/المكتوبة بـ OCR مخصص مع FastAPI و React.' 
    },
    fullDescription: { 
      en: 'Extracts structured data from loan apps, runs eligibility scoring, and presents confidence metrics in a React UI.', 
      ar: 'بيطلع البيانات من الاستمارات المكتوبة أو المطبوعة، يحسب درجة الأهلية، ويعرض نسبة الثقة للمراجع.' 
    },
    category: 'ai',
    featured: true,
    order: 1,
    published: true,
    image: mustawfiImg, 
    gallery: [],
    technologies: ['Python', 'FastAPI', 'OpenCV', 'NumPy', 'Scikit-learn', 'Custom OCR', 'React 19', 'Tailwind CSS', 'shadcn/ui'],
    githubUrl: 'https://github.com/Tiger0x01/MUSTAWFI',
    liveDemoUrl: 'https://mustawfi.vercel.app',
    caseStudy: {
      overview: { en: 'Form OCR & Loan Scoring Pipeline.', ar: 'استخراج بيانات الاستمارات وتوقع الأهلية.' },
      problem: { en: 'Manual entry and validation take too long for loan review queues.', ar: 'إدخال ومراجعة استمارات القروض يدوياً بيأخذ وقت طويل.' },
      solution: { en: 'OpenCV/OCR extraction pipeline paired with a lightweight ML decision scoring script.', ar: 'مسار استخراج بالرؤية الحاسوبية مع نموذج تصنيف خفيف للأهلية.' },
      architecture: { en: 'FastAPI REST backend + React 19 frontend.', ar: 'باك إند FastAPI مع فريم إند React 19.' },
      features: { en: ['Field extraction', 'Human review toggle', 'Confidence score badges'], ar: ['استخراج الحقول', 'مراجعة يدوية سريعة', 'درجات الثقة بالقرار'] },
      challenges: { en: 'Noise and layout variations in scanned/handwritten paper forms.', ar: 'تشويش واختلاف خطوط اليد في الورق الممسوح ضوئياً.' },
      results: { en: 'Cuts manual typing effort down via structured auto-population.', ar: 'تقليل وقت الكتابة اليدوية عبر استخراج تلقائي ومنظم.' }
    }
  },
  {
    id: 'proj-2',
    slug: 'bhaav',
    title: { en: 'BHAAV', ar: 'بهاف (BHAAV)' },
    shortDescription: { 
      en: 'House price regression model for the Indian real estate market with a React interface.', 
      ar: 'نموذج انحدار لتوقع أسعار العقارات في السوق الهندي مع واجهة React.' 
    },
    fullDescription: { 
      en: 'Cleans real estate tabular data, trains regression estimators, and serves predictions via Vite/React.', 
      ar: 'ينظف بيانات العقارات، يدرب نماذج الانحدار، ويعرض التقدير الفوري عبر واجهة ويب خفيفة.' 
    },
    category: 'ml',
    featured: true,
    order: 2,
    published: true,
    image: bhaavImg, 
    gallery: [],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Joblib', 'React', 'Vite', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Tiger0x01/BHAAV',
    caseStudy: {
      overview: { en: 'Tabular Regression for Real Estate Pricing.', ar: 'تنبؤ بأسعار العقارات من بيانات جدولية.' },
      problem: { en: 'Pricing homes consistently across variable property features.', ar: 'توقع السعر العادل للعقار بناءً على المساحة والموقع.' },
      solution: { en: 'Scikit-learn regression pipeline serialized with Joblib and called via API/UI.', ar: 'نموذج انحدار Scikit-learn محفوظ بـ Joblib ومربوط بواجهة API/UI.' },
      architecture: { en: 'Python data script + React SPA UI.', ar: 'سكربت بايثون لتحليل البيانات + واجهة React.' },
      features: { en: ['Data EDA plots', 'Feature scaling', 'Live estimate UI'], ar: ['رسوم تحليل استكشافي', 'تحجيم الميزات', 'حاسبة فورية'] },
      challenges: { en: 'Outliers and categorical cardinality in real estate CSV dumps.', ar: 'القيم الشاذة والمتغيرات النصية الكثيرة في الـ CSV.' },
      results: { en: 'Clean baseline estimations for property valuation queries.', ar: 'تقديرات سريعة وممنهجة لسعر العقار.' }
    }
  },
  {
    id: 'proj-3',
    slug: 'bayan-ai',
    title: { en: 'Bayan AI', ar: 'بيان للذكاء الاصطناعي (Bayan AI)' },
    shortDescription: { 
      en: 'Cross-cultural message rewriter using FAISS vector retrieval and Qwen 2.5.', 
      ar: 'مساعد إعادة صياغة رسائل مهنية مراعاةً للثقافات بـ FAISS ونموذج Qwen 2.5.' 
    },
    fullDescription: { 
      en: 'Retrieves cultural etiquette guidelines via FAISS and prompts Qwen 2.5 to adapt email tone per target culture.', 
      ar: 'يسترجع قواعد الإيتيكيت الثقافي عبر FAISS ويطلب من Qwen 2.5 تعديل تالون الإيميل حسب البلد.' 
    },
    category: 'ai',
    featured: true,
    order: 3,
    published: true,
    image: bayanImg, 
    gallery: [],
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'Tailwind CSS', 'Qwen 2.5', 'FAISS', 'Embeddings'],
    githubUrl: 'https://github.com/Tiger0x01/Bayan-AI',
    liveDemoUrl: 'https://bayan.dpdns.org/',
    caseStudy: {
      overview: { en: 'RAG-based Cross-Cultural Communication Tool.', ar: 'أداة تواصل مهني عابرة للثقافات بـ RAG.' },
      problem: { en: 'Direct email phrasing can sound rude or blunt across international business cultures.', ar: 'طريقة الكتابة المباشرة قد تظهر بجفاء أو عدم إيتيكيت ثقافي.' },
      solution: { en: 'FAISS context lookup + structured prompt engineering for tone adjustment.', ar: 'بحث شعاعي في قواعد الثقافات + توجيه دقيق للنموذج.' },
      architecture: { en: 'FastAPI + FAISS + Qwen 2.5 + React UI.', ar: 'FastAPI مع FAISS و Qwen 2.5 و React.' },
      features: { en: ['Culture selection', 'Tone adjustment', 'Etiquette notes'], ar: ['اختيار الثقافة المستهدفة', 'تعديل التون', 'ملاحظات إيتيكيت'] },
      challenges: { en: 'Balancing polite rephrasing without losing core technical/business meaning.', ar: 'تعديل التون بدون تغيير أصل المعنى أو الأرقام.' },
      results: { en: 'Context-safe rephrased messages ready to copy.', ar: 'رسائل معدلة ومناسبة للسياق الثقافي.' }
    }
  },
  {
    id: 'proj-4',
    slug: 'nosoos-bot',
    title: { en: 'NosoosBot', ar: 'نصوص بوت (NosoosBot)' },
    shortDescription: { 
      en: 'Async Telegram bot extracting, translating, and summarizing long YouTube videos via Llama 3.3.', 
      ar: 'بوت تيليجرام يسحب يوتيوب يترجم ويلخص الفيديوهات الطويلة بـ Llama 3.3.' 
    },
    fullDescription: { 
      en: 'Handles async caption extraction, Map-Reduce chunk summaries for long videos, and file exports (TXT/PDF/DOCX).', 
      ar: 'يسحب الترجمة، يقسم الفيديوهات الطويلة بـ Map-Reduce للتلخيص، ويصدر ملفات TXT/PDF/DOCX.' 
    },
    category: 'ai',
    featured: true,
    order: 4,
    published: true,
    image: nosoosImg, 
    gallery: [],
    technologies: ['Python', 'Aiogram', 'youtube-transcript-api', 'Groq API', 'Llama 3.3 70B', 'FPDF', 'python-docx'],
    githubUrl: 'https://github.com/Tiger0x01/NosoosBot',
    caseStudy: {
      overview: { en: 'Async YouTube Transcript & Summarizer Bot.', ar: 'بوت تيليجرام لتلخيص يوتيوب.' },
      problem: { en: 'Long video transcripts exceed token limits or take forever to read.', ar: 'الفيديوهات الطويلة تعطل حدود الـ Tokens وصعبة المتابعة.' },
      solution: { en: 'Async transcription fetch + Map-Reduce summarization chunks via Groq/Llama 3.3.', ar: 'سحب غير متزامن للترجمة وتلخيص على دفعات Map-Reduce.' },
      architecture: { en: 'Aiogram bot + Groq API + local doc/PDF generators.', ar: 'بوت Aiogram مع Groq API ومولدات مستندات.' },
      features: { en: ['Transcript cleaning', 'Map-Reduce summary', 'Export to PDF/DOCX'], ar: ['تنظيف النصوص', 'تلخيص Map-Reduce', 'تصدير PDF/DOCX'] },
      challenges: { en: 'Managing API rate limits and chunk boundary context drops.', ar: 'إدارة الـ Rate limits وحدود تقسيم النصوص.' },
      results: { en: 'Fast multi-format summaries delivered directly in chat.', ar: 'ملخصات سريعة ومنسقة مباشرة في الشات.' }
    }
  },
  {
    id: 'proj-5',
    slug: 'library-management',
    title: { en: 'Library Management System', ar: 'نظام إدارة المكتبات' },
    shortDescription: { 
      en: 'Native PHP/MySQL web app for physical book borrowing and digital PDF purchases.', 
      ar: 'تطبيق ويب بـ PHP و MySQL لإدارة استعارة الكتب الورقية وشراء الـ PDFs.' 
    },
    fullDescription: { 
      en: 'Role-based portals for librarians and students handling inventory, due dates, and digital catalog checkout.', 
      ar: 'بوابات منفصلة لأمناء المكتبة والطلاب للتحكم بالمخزون، الإعارة، وشراء النسخ الرقمية.' 
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
      overview: { en: 'Dual-mode Library Operations Portal.', ar: 'نظام إدارة مكتبات ورقي ورقمي.' },
      problem: { en: 'Tracking physical book loans alongside digital store checkouts.', ar: 'إدارة الإعارة الورقية مع مبيعات الكتب الرقمية في مكان واحد.' },
      solution: { en: 'Relational MySQL schema with clean PHP session-based roles.', ar: 'قاعدة بيانات علائقية MySQL مع صلاحيات PHP مبسطة.' },
      architecture: { en: 'Native PHP procedural/OOP structure + MySQL.', ar: 'هيكلية PHP صافي مع MySQL.' },
      features: { en: ['Librarian desk', 'Student catalog', 'Borrow logs'], ar: ['لوحة الأمين', 'كتالوج الطلاب', 'سجلات الإعارة'] },
      challenges: { en: 'Handling inventory decrement sync for mixed physical/digital items.', ar: 'مزامنة المخزون بين النسخ الورقية والرقمية.' },
      results: { en: 'Functional portal managing checkouts and basic reporting.', ar: 'نظام شغال لإدارة الاستعارات والتقارير البسيطة.' }
    }
  },
  {
    id: 'proj-6',
    slug: 'monkey-banana',
    title: { en: 'Monkey & Banana Problem', ar: 'محاكاة القرد والموز (AI BFS)' },
    shortDescription: { 
      en: 'Interactive Python/Tkinter visualizer for state-space search (BFS algorithm).', 
      ar: 'محاكاة تفاعلية بـ Python و Tkinter تبين خطوات البحث بالاتساع (BFS).' 
    },
    fullDescription: { 
      en: 'Animates box-pushing, climbing, and pathfinding state transitions step-by-step.', 
      ar: 'يحرك الخطوات (دفع الصندوق، القفز، الوصول للموز) خطوة بخطوة بالواجهة.' 
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
      overview: { en: 'Visualizing State-Space Search.', ar: 'تمثيل بصري لبحث فضاء الحالة.' },
      problem: { en: 'Classic AI search algorithms are hard to visualize abstractly.', ar: 'خوارزميات البحث الكلاسيكية صعبة التخيل نظرياً.' },
      solution: { en: 'Tkinter frame animation stepping through BFS queue states.', ar: 'رسوم متحركة توضح طابور الـ BFS وحالة المشكلة.' },
      architecture: { en: 'Python BFS search generator + Tkinter GUI loop.', ar: 'منطق BFS مع لوب واجهة Tkinter.' },
      features: { en: ['Step-by-step playback', 'State logger', 'Grid movement'], ar: ['تشغيل خطوة بخطوة', 'عرض الحالة', 'حركة على الشبكة'] },
      challenges: { en: 'Freezing GUI thread during loop execution (handled via after/async state steps).', ar: 'منع تجميد الواجهة أثناء اللوب.' },
      results: { en: 'Clean educational visualization for search algorithms.', ar: 'محاكاة تعليمية واضحة لخوارزمية البحث.' }
    }
  },
  {
    id: 'proj-7',
    slug: 'hand-gesture',
    title: { en: 'Hand Gesture Recognition', ar: 'التعرف على إشارات اليد' },
    shortDescription: { 
      en: 'Real-time sign language classifier using 21 MediaPipe hand landmarks and Random Forest.', 
      ar: 'صنف إشارات اليد الفوري باستخدام 21 علامة حيوية من MediaPipe و Random Forest.' 
    },
    fullDescription: { 
      en: 'Extracts 3D hand keypoints per frame, flattens features, and runs inference via Streamlit camera feed.', 
      ar: 'يستخرج 21 نقطة لليد من الكاميرا، يحولها لمتجهات، ويتوقع الإشارة فوراً بـ Streamlit.' 
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
      overview: { en: 'Live Landmark-based Gesture Classification.', ar: 'تصنيف إشارات اليد بالوقت الفعلي.' },
      problem: { en: 'High-latency custom sign detection in lightweight browser deployments.', ar: 'تقليل البث والكمون في اكتشاف لغة الإشارة من الويب.' },
      solution: { en: 'MediaPipe landmark extraction feeding a pre-trained Random Forest model.', ar: 'استخراج العلامات بـ MediaPipe مع تصنيف Random Forest خفيف.' },
      architecture: { en: 'OpenCV frame loop -> MediaPipe -> Scikit-learn predict -> Streamlit UI.', ar: 'لوب الكاميرا + استخراج علامات + تصنيف + واجهة.' },
      features: { en: ['Live webcam tracking', 'Landmark plotting', 'Fast inference'], ar: ['تتبع كاميرا حي', 'رسم المفاصل', 'استنتاج سريع'] },
      challenges: { en: 'Lighting variations and hand angle jitter.', ar: 'اختلاف الإضاءة واهتزاز زاوية اليد.' },
      results: { en: 'Low-latency working sign gesture demo.', ar: 'ديمو خفيف وسريع لاكتشاف الإشارات.' }
    }
  },
  {
    id: 'proj-8',
    slug: 'customer-segmentation',
    title: { en: 'Customer Segmentation', ar: 'تقسيم عملاء البطاقات الائتمانية' },
    shortDescription: { 
      en: 'Unsupervised credit card customer clustering using K-Means, PCA, and DBSCAN outlier checks.', 
      ar: 'تجميع عملاء البطاقات الائتمانية بـ K-Means وتقليل الأبعاد PCA وكشف الشواذ بـ DBSCAN.' 
    },
    fullDescription: { 
      en: 'Performs EDA, feature scaling, optimal K selection (Elbow/Silhouette), and behavioral cluster profiling.', 
      ar: 'تحليل استكشافي، تحجيم ميزات، اختيار K الأمثل، وتحليل خصائص الشرائح.' 
    },
    category: 'ml',
    featured: false,
    order: 8,
    published: true,
    image: creditImg,
    gallery: [],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'K-Means', 'DBSCAN', 'PCA'],
    githubUrl: 'https://github.com/Tiger0x01/Credit-Card-Customers-Project',
    caseStudy: {
      overview: { en: 'Unsupervised Financial Profiling.', ar: 'تحليل وتجميع سلوك العملاء الماليين.' },
      problem: { en: 'Grouping heterogeneous credit card usage patterns without explicit labels.', ar: 'تحديد أنماط الإنفاق بدون بيانات مصنفة مسبقاً.' },
      solution: { en: 'Standard scaling + PCA reduction + K-Means cluster profiling.', ar: 'تجهيز بيانات + تقليل أبعاد PCA + تجميع K-Means.' },
      architecture: { en: 'Jupyter/Python data analysis pipeline.', ar: 'سكربت تحليل بيانات بايثون.' },
      features: { en: ['Elbow method plot', 'PCA scatter plot', 'Cluster stats summary'], ar: ['رسم Elbow', 'توزيع PCA', 'ملخص إحصائي للشرائح'] },
      challenges: { en: 'Choosing optimal cluster count on skewed transaction amounts.', ar: 'اختيار عدد الكتل المناسب مع اعوجاج بيانات التشتت المالي.' },
      results: { en: 'Actionable customer behavioral segments.', ar: 'تحديد شرائح عملاء واضحة.' }
    }
  }
];

export const initialSkills: SkillCategory[] = [
  {
    id: 'cat-languages',
    title: { en: '01 / LANGUAGES', ar: '01 / لغات البرمجة' },
    description: { en: 'Core languages', ar: 'لغات التطوير الأساسية' },
    skills: [
      { name: 'Python', level: 'Expert', focus: { en: 'AI/ML & backend scripts', ar: 'سكربتات الذكاء والباك إند' } },
      { name: 'SQL', level: 'Proficient', focus: { en: 'Queries & DB design', ar: 'استعلامات وتصميم قواعد بيانات' } },
      { name: 'C++', level: 'Intermediate', focus: { en: 'Logic & core DSA', ar: 'خوارزميات ومنطق أساسي' } },
      { name: 'PHP', level: 'Intermediate', focus: { en: 'Legacy/native web apps', ar: 'تطبيقات الويب التقليدية' } },
    ]
  },
  {
    id: 'cat-ml',
    title: { en: '02 / MACHINE LEARNING', ar: '02 / تعلم الآلة' },
    description: { en: 'Supervised/unsupervised models', ar: 'نماذج التعلم التقليدي والعميق' },
    skills: [
      { name: 'Scikit-learn', level: 'Advanced', focus: { en: 'Regression, clustering, preprocessing', ar: 'الانحدار والتجميع والمعالجة' } },
      { name: 'PyTorch', level: 'Advanced', focus: { en: 'Neural network training', ar: 'تدريب الشبكات العصبية' } },
      { name: 'TensorFlow', level: 'Intermediate', focus: { en: 'Model loading/inference', ar: 'استنتاج وتدريب نماذج' } },
    ]
  },
  {
    id: 'cat-genai',
    title: { en: '03 / GENERATIVE AI & RAG', ar: '03 / الذكاء التوليدي و RAG' },
    description: { en: 'LLMs, vector search, prompting', ar: 'نماذج اللغة والبحث الشعاعي' },
    skills: [
      { name: 'RAG', level: 'Expert', focus: { en: 'Vector retrieval & context injection', ar: 'استرجاع السياق الشعاعي' } },
      { name: 'LLMs', level: 'Advanced', focus: { en: 'API integration & fine-tuning basics', ar: 'تكامل نماذج وتوجيه' } },
      { name: 'FAISS', level: 'Advanced', focus: { en: 'Vector search index', ar: 'فهرسة البحث الشعاعي' } },
      { name: 'Prompt Engineering', level: 'Expert', focus: { en: 'Structured outputs & system prompts', ar: 'هندسة الأوامر وهيكلة المخرجات' } },
    ]
  },
  {
    id: 'cat-cv',
    title: { en: '04 / COMPUTER VISION', ar: '04 / الرؤية الحاسوبية' },
    description: { en: 'Video/image processing', ar: 'معالجة الفيديو والصور' },
    skills: [
      { name: 'OpenCV', level: 'Advanced', focus: { en: 'Image transforms & video frames', ar: 'معالجة إطارات الفيديو' } },
      { name: 'MediaPipe', level: 'Advanced', focus: { en: 'Pose/hand landmarks', ar: 'تتبع المفاصل والعلامات' } },
    ]
  },
  {
    id: 'cat-backend',
    title: { en: '05 / BACKEND & WEB', ar: '05 / الباك إند والويب' },
    description: { en: 'APIs & full-stack fundamentals', ar: 'واجهات برمجة وويب' },
    skills: [
      { name: 'FastAPI', level: 'Advanced', focus: { en: 'High-speed AI model endpoints', ar: 'واجهات سريعة لنماذج الذكاء' } },
      { name: 'Django', level: 'Proficient', focus: { en: 'ORM, auth, & full-stack apps', ar: 'إدارة قواعد بيانات ومصادقة' } },
      { name: 'React', level: 'Proficient', focus: { en: 'Frontend UI integration', ar: 'ربط واجهات المستخدم' } },
      { name: 'PostgreSQL', level: 'Proficient', focus: { en: 'Relational data modeling', ar: 'نمذجة بيانات علائقية' } },
    ]
  },
  {
    id: 'cat-data',
    title: { en: '06 / DATA', ar: '06 / معالجة البيانات' },
    description: { en: 'Data wrangling', ar: 'تنظيف وتحليل البيانات' },
    skills: [
      { name: 'Pandas', level: 'Advanced', focus: { en: 'Tabular cleaning & merging', ar: 'تنظيف ودمج الجداول' } },
      { name: 'NumPy', level: 'Advanced', focus: { en: 'Array math', ar: 'العمليات الحسابية المصفوفية' } },
    ]
  },
  {
    id: 'cat-cloud',
    title: { en: '07 / CLOUD & MLOPS', ar: '07 / السحابيات و MLOps' },
    description: { en: 'Deployment & tooling', ar: 'النشر والأدوات' },
    skills: [
      { name: 'Azure AI', level: 'Intermediate', focus: { en: 'Cloud ML workspaces', ar: 'مساحات عمل سحابية' } },
      { name: 'MLflow', level: 'Intermediate', focus: { en: 'Experiment logging', ar: 'تسجيل وتتبع التجارب' } },
      { name: 'Git', level: 'Proficient', focus: { en: 'Version control', ar: 'إدارة الإصدارات' } },
      { name: 'Linux', level: 'Intermediate', focus: { en: 'CLI & system basics', ar: 'أوامر النظام والتشغيل' } },
    ]
  }
];

export const initialPublications: PublicationItem[] = [
  {
    id: 'pub-1',
    type: 'article',
    title: { en: 'AI Systems Integration Notes', ar: 'ملاحظات حول تكامل أنظمة الذكاء الاصطناعي' },
    source: { en: 'Tech Notes', ar: 'مدونة تقنية' },
    date: { en: '2026', ar: '2026' },
    tag: { en: 'Article', ar: 'مقال' },
    link: '#',
    actionText: { en: 'Read Note', ar: 'قراءة الملاحظة' }
  }
];

export const initialApproach: ApproachPillar[] = [
  {
    id: 'app-1',
    number: '01',
    title: { en: 'Practical Scope First', ar: 'التركيز على المشكلة أولاً' },
    description: { en: 'Understand data constraints and latency limits before writing model training scripts.', ar: 'فهم حدود البيانات والكمون قبل كتابة كود التدريب.' },
    highlights: { en: ['Data Check', 'Baseline First'], ar: ['فحص البيانات', 'Baseline أولاً'] }
  }
];