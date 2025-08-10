import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Folder,
  FolderOpen,
  FileText,
  FileJson,
  ChevronRight,
  ChevronDown,
  Github,
  Linkedin,
  Globe,
  Mail,
  ExternalLink,
  Sun,
  Moon,
  Search,
  X,
  Rocket,
  Brain,
  Layers,
  Terminal,
} from "lucide-react";

const TYPO = {
  h1: "text-[49px] leading-[54px] tracking-[-0.0625em] font-bold",
  h2: "text-[39px] leading-[43px] tracking-[-0.05em] font-bold",
  h3: "text-[31px] leading-[40px] tracking-[-0.03125em] font-bold",
  h4: "text-[25px] leading-[33px] tracking-[-0.025em] font-bold",
  h5: "text-[20px] leading-[30px] tracking-[-0.00625em] font-bold",
  h6: "text-[18px] leading-[27px] font-bold",
  bodyLg: "text-[17px] leading-[26px] tracking-[0.01em]",
  body: "text-[16px] leading-[24px] tracking-[0.01em]",
  linkBase: "text-[15px] leading-[23px] tracking-[0.01em] underline underline-offset-4 decoration-dotted",
  caption: "text-[14px] leading-[22px] tracking-[0.01em]",
};

const PROJECTS = [
  {
    id: "proj1",
    title: "Event's Report (Taisuki Taiyaki)",
    slug: "events-report.md",
    category: "Data Analysis",
    image: "/src/assets/ramen.jpg",
    description: "Comprehensive event performance analysis for Japanese restaurant resulting in 60% sales increase through data-driven event optimization.",
    content: (
      <div className="max-w-none space-y-4">
        <p className={TYPO.body}>
          <strong>Challenge:</strong> Taisuki Taiyaki, a themed Japanese restaurant, hosts multiple events throughout the year to engage customers and strengthen brand loyalty. However, they lacked a structured approach to evaluating event performance. In 2021, the restaurant needed a comprehensive report analyzing a full year of event data to optimize future events and maximize sales impact. The challenge was to extract meaningful insights from historical data to improve decision-making.
        </p>
        <p className={TYPO.body}>
          <strong>Our Approach:</strong> I developed an event performance report by accessing and analyzing the restaurant's historical data. The process involved identifying key metrics such as event duration, total sales per event, and daily sales average to assess success factors. Using SQL for data extraction and Power BI for transformation and visualization, I structured the data into a clear, actionable report. The analysis revealed that events lasting three weeks to a month yielded the highest returns, leading to a strategic adjustment in event planning.
        </p>
        <p className={TYPO.body}>
          <strong>Results:</strong> The insights derived from the report directly influenced Taisuki Taiyaki's event strategy, leading to a 60% increase in sales during the first two events of the following year. The restaurant now leverages historical data to refine event planning, ensuring sustained engagement and revenue growth.
        </p>
        <p className={TYPO.body}>
          <strong>Future Plans:</strong> The next step involves integrating real-time tracking and customer feedback analysis to further enhance event effectiveness. Expanding the report's scope to include seasonal trends and customer behavior patterns will allow for more precise strategic adjustments.
        </p>
        <p className={TYPO.body}>
          <strong>Expertise:</strong> My background in data analysis, SQL, and Power BI was essential in transforming raw event data into actionable insights. By structuring event performance metrics, I provided a data-driven decision-making framework that optimized event planning and maximized sales potential.
        </p>
      </div>
    ),
  },
  {
    id: "proj2",
    title: "Sales Dashboard (Taisuki Taiyaki)",
    slug: "sales-dashboard.md",
    category: "Data Visualization",
    image: "/src/assets/taisuki-logo.png",
    description: "Interactive sales dashboard enabling data-driven decisions, reducing operational costs by 16% through optimized scheduling.",
    content: (
      <div className="max-w-none space-y-4">
        <p className={TYPO.body}>
          <strong>Challenge:</strong> Taisuki Taiyaki, a restaurant specializing in taiyaki, was storing sales data but lacked a functional dashboard for decision-making. Without clear visibility into peak hours, the restaurant risked inefficient staffing, leading to unnecessary operational costs. The goal was to develop a sales dashboard to identify sales trends and adjust operating hours accordingly.
        </p>
        <p className={TYPO.body}>
          <strong>Our Approach:</strong> To tackle this challenge, we designed a custom sales dashboard to analyze the restaurant's data. The project involved extracting raw data using SQL, applying transformations in Power BI, and visualizing key metrics such as total sales per month, daily revenue trends, and product-specific performance. By interpreting these insights, we identified periods where sales did not meet the break-even point. After presenting the findings, the restaurant adjusted its schedule, optimizing staff allocation.
        </p>
        <p className={TYPO.body}>
          <strong>Results:</strong> The sales dashboard enabled data-driven decision-making, leading to a reduction of two operating hours on Tuesdays and Fridays, when sales were consistently low. This adjustment resulted in a 16% decrease in personnel costs, improving overall efficiency while maintaining service quality.
        </p>
        <p className={TYPO.body}>
          <strong>Future Plans:</strong> The next step is to expand the dashboard's functionality by integrating inventory tracking and customer behavior analytics. These enhancements will further refine operational strategies and improve cost management.
        </p>
        <p className={TYPO.body}>
          <strong>Expertise:</strong> Our team, specializing in data analytics and business intelligence, leveraged SQL and Power BI to transform raw sales data into actionable insights. The result was a scalable, interactive solution that streamlined decision-making and optimized restaurant operations.
        </p>
      </div>
    ),
  },
  {
    id: "proj3",
    title: "Machine Learning (Olist)",
    slug: "olist-ml.md",
    category: "Data Science",
    image: "/src/assets/olist-project.jpg",
    description: "Predictive machine learning model for customer review forecasting using Random Forest, XGBoost and Decision Trees on Brazilian e-commerce data.",
    content: (
      <div className="max-w-none space-y-4">
        <p className={TYPO.body}>
          <strong>Challenge:</strong> This project was part of my Data Science capstone at CoderHouse, where we worked with public data from Olist, a Brazilian marketplace and logistics platform for small and medium enterprises in Mexico and Brazil. The goal was to develop a predictive model capable of forecasting customer reviews based on the available data. The challenge was to clean, analyze, and structure the dataset to build a reliable classification model.
        </p>
        <p className={TYPO.body}>
          <strong>Our Approach:</strong> We began by defining the project requirements and accessing the dataset. Using Python, we performed data cleaning, preprocessing, and exploratory data analysis (EDA) to understand key patterns and relationships. Once the dataset was structured, we applied various classification algorithms, including Decision Tree, Random Forest, and XGBoost, comparing their performance to determine the best model. After thorough evaluation, Random Forest was selected as the final model, and we documented the entire development process for future improvements.
        </p>
        <p className={TYPO.body}>
          <strong>Results:</strong> While the model was not production-ready, it provided a solid foundation for customer review prediction, highlighting key variables influencing ratings. The project successfully demonstrated machine learning applications in e-commerce, and all team members earned their Data Science certification upon completion.
        </p>
        <p className={TYPO.body}>
          <strong>Future Plans:</strong> Further refinements include hyperparameter tuning, feature engineering, and deep learning integration to improve accuracy. Expanding the dataset and incorporating sentiment analysis on customer feedback could also enhance predictive capabilities.
        </p>
        <p className={TYPO.body}>
          <strong>Expertise:</strong> My experience in machine learning, Python, and model evaluation was key to structuring the project. By applying classification algorithms and data science best practices, we developed a scalable and reproducible predictive model for customer sentiment analysis.
        </p>
      </div>
    ),
  },
  {
    id: "proj4",
    title: "Shrimp Export Forecasting (Ecuadorian Shrimp Industry)",
    slug: "shrimp-forecasting.md",
    category: "Data Science",
    image: "/src/assets/shrimp.jpg",
    description: "Time series forecasting model using SARIMA, Random Forest, and LSTM networks to predict shrimp export trends for Ecuador's global markets.",
    content: (
      <div className="max-w-none space-y-4">
        <p className={TYPO.body}>
          <strong>Challenge:</strong> The Ecuadorian shrimp industry is highly dependent on global markets such as the United States, China, and the European Union. However, fluctuations in demand, price variations, and regulatory changes create uncertainty, making it difficult for exporters to plan production efficiently. Without a predictive tool, companies struggle to anticipate market trends, impacting competitiveness and profitability. This project aimed to develop a data-driven forecasting model to optimize decision-making in the industry.
        </p>
        <p className={TYPO.body}>
          <strong>Our Approach:</strong> I developed a predictive model using SARIMA, Random Forest, and LSTM neural networks to estimate shrimp export trends. The process involved collecting historical export data (2011–2024) from Trademap.org, cleaning and structuring the dataset, and training models to identify patterns in exports. I then implemented a web application to visualize historical trends and future predictions, allowing industry stakeholders to make informed decisions about resource allocation and market strategy.
        </p>
        <p className={TYPO.body}>
          <strong>Results:</strong> The model successfully identified key export trends, with LSTM networks demonstrating the highest accuracy, especially in volatile markets like China. These insights enable better production planning, helping businesses reduce uncertainty and optimize export strategies to remain competitive in the global market.
        </p>
        <p className={TYPO.body}>
          <strong>Future Plans:</strong> Further improvements include integrating external variables such as economic indicators and climate conditions to enhance prediction accuracy. Additionally, expanding the web application to support real-time data updates will provide even greater strategic value to industry stakeholders.
        </p>
        <p className={TYPO.body}>
          <strong>Expertise:</strong> My experience in machine learning, time series forecasting, and data visualization was critical in developing this solution. By combining statistical and deep learning techniques, I created a scalable and adaptable forecasting framework for economic and industry analysis.
        </p>
      </div>
    ),
  },
  {
    id: "proj5",
    title: "Developing MIA (Platzi's Hackathon on AI in Education)",
    slug: "mia-platzi.md",
    category: "AI",
    image: "/src/assets/MiA.jpeg",
    description: "AI-powered educational assistant for personalized learning experiences. Top 100 finalist in Platzi's 2024 AI in Education Hackathon.",
    content: (
      <div className="max-w-none space-y-4">
        <p className={TYPO.body}>
          <strong>Challenge:</strong> As part of Platzi's 2024 Hackathon on AI in Education, I collaborated with a team of five in a highly competitive environment, where we tackled the challenge of improving access to personalized educational content. From thousands of applicants, I was selected within the top 100 and took on the role of Data Science and AI Architecture Specialist. Our goal was to create an intelligent assistant capable of dynamically generating learning experiences tailored to individual users.
        </p>
        <p className={TYPO.body}>
          <strong>Our Approach:</strong> We developed MIA (My Intelligent Assistant), an AI-powered tool that generates structured courses based on users' interests and expertise. The system initiates an interactive survey to assess learning goals, preferred content formats, and difficulty levels. Leveraging OpenAI's API, MIA generates modular content in Markdown, integrating theoretical concepts, exercises, and real-world projects. I was responsible for designing the AI system architecture, integrating OpenAI with Azure for cloud deployment, and optimizing prompt engineering and content generation strategies.
        </p>
        <p className={TYPO.body}>
          <strong>Results:</strong> The MVP was successfully tested with real users, validating its effectiveness in creating personalized learning paths. The project demonstrated the potential of AI in adaptive education, providing a scalable and structured solution for content generation.
        </p>
        <p className={TYPO.body}>
          <strong>Future Plans:</strong> The next step involves refining MIA's adaptability, improving real-time feedback integration, and enhancing multi-platform compatibility to expand its educational impact.
        </p>
        <p className={TYPO.body}>
          <strong>Expertise:</strong> My expertise in AI architecture, data science, and cloud computing was crucial in ensuring MIA's performance, scalability, and seamless integration, making personalized education more accessible and dynamic.
        </p>
      </div>
    ),
  },
];

const SOCIALS = [
  { id: "li", label: "LinkedIn", href: "https://www.linkedin.com/in/rendonluis", Icon: Linkedin },
  { id: "gh", label: "GitHub", href: "https://github.com/huambra", Icon: Github },
];

const SKILLS = {
  hard_skills: [
    { name: "SQL", level: "100%" },
    { name: "Data Visualization", level: "100%" },
    { name: "Python", level: "100%" },
  ],
  soft_skills: [
    { name: "Problem Solving", level: "100%" },
    { name: "Communication", level: "100%" },
    { name: "Leadership", level: "100%" },
  ],
  fun_facts: [
    { label: "Speak different Languages", value: 4 },
    { label: "Lived in different Continents", value: 3 },
    { label: "Traveled to different Countries", value: "20+" },
  ],
};

const FILE_TREE = [
  { id: "readme", name: "README.md", type: "file", icon: FileText, section: "home" },
  {
    id: "about-folder",
    name: "about",
    type: "folder",
    children: [
      { id: "about-md", name: "About.md", type: "file", icon: FileText, section: "about" },
      { id: "skills-json", name: "skills.json", type: "file", icon: FileJson, section: "skills" },
    ],
  },
  {
    id: "portfolio-folder",
    name: "portfolio",
    type: "folder",
    children: [
      { id: "portfolio-json", name: "portfolio.json", type: "file", icon: FileJson, section: "portfolio" },
      {
        id: "projects-folder",
        name: "projects",
        type: "folder",
        children: [
          { id: "proj1", name: "events-report.md", type: "file", icon: FileText, section: "project", projectId: "proj1" },
          { id: "proj2", name: "sales-dashboard.md", type: "file", icon: FileText, section: "project", projectId: "proj2" },
          { id: "proj3", name: "olist-ml.md", type: "file", icon: FileText, section: "project", projectId: "proj3" },
          { id: "proj4", name: "shrimp-forecasting.md", type: "file", icon: FileText, section: "project", projectId: "proj4" },
          { id: "proj5", name: "mia-platzi.md", type: "file", icon: FileText, section: "project", projectId: "proj5" },
        ],
      },
    ],
  },
];

function classNames(...arr) { return arr.filter(Boolean).join(" "); }

function useNow() {
  const [now, setNow] = useState(new Date());
  useEffect(() => { const id = setInterval(() => setNow(new Date()), 1000); return () => clearInterval(id); }, []);
  return now;
}

function useTypewriter(text, speed = 50) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return { displayText, isComplete };
}

function useLogoToggle() {
  const [showLogo, setShowLogo] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setShowLogo(prev => !prev);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  return showLogo;
}

function TypewriterText({ text, speed = 20, delay = 0 }) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [shouldStart, setShouldStart] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setShouldStart(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!shouldStart) return;
    
    let i = 0;
    setDisplayText('');
    setIsComplete(false);
    
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed, shouldStart]);

  return (
    <span>
      {displayText}
      {shouldStart && !isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="text-sky-400"
        >
          |
        </motion.span>
      )}
    </span>
  );
}

function fileColors(name, dark) {
  const ext = (name.split(".").pop() || "").toLowerCase();
  const map = {
    md: dark ? { icon: "text-sky-300", text: "text-sky-300" } : { icon: "text-sky-700", text: "text-sky-700" },
    json: dark ? { icon: "text-amber-300", text: "text-amber-300" } : { icon: "text-amber-700", text: "text-amber-700" },
    jsx: dark ? { icon: "text-cyan-300", text: "text-cyan-300" } : { icon: "text-cyan-700", text: "text-cyan-700" },
    tsx: dark ? { icon: "text-blue-300", text: "text-blue-300" } : { icon: "text-blue-700", text: "text-blue-700" },
  };
  return map[ext] || (dark ? { icon: "text-slate-300", text: "text-slate-200" } : { icon: "text-slate-700", text: "text-slate-800" });
}

export default function VSCodeStylePersonalSite() {
  const [dark, setDark] = useState(true);
  const [expanded, setExpanded] = useState({ about: true, portfolio: true, projects: true });
  const [openTabs, setOpenTabs] = useState(["readme"]);
  const [activeId, setActiveId] = useState("readme");
  const [quickOpen, setQuickOpen] = useState(false);
  const [q, setQ] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const now = useNow();

  const [filter, setFilter] = useState("All");
  useMemo(() => ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))], []);

  const flatFiles = useMemo(() => {
    const out = [];
    const walk = (nodes, prefix = "") => {
      nodes.forEach((n) => {
        const full = prefix ? `${prefix}/${n.name}` : n.name;
        if (n.type === "file") out.push({ id: n.id, name: n.name, path: full, section: n.section, projectId: n.projectId });
        if (n.children) walk(n.children, full);
      });
    };
    walk(FILE_TREE);
    return out;
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
      if ((isMac ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setQuickOpen((v) => !v);
        setQ("");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openFile = (id) => { 
    setOpenTabs((tabs) => (tabs.includes(id) ? tabs : [...tabs, id])); 
    setActiveId(id);
    setMobileMenuOpen(false); // Close mobile menu when file is opened
  };
  const closeTab = (id) => {
    setOpenTabs((tabs) => tabs.filter((t) => t !== id));
    if (activeId === id) { const remain = openTabs.filter((t) => t !== id); setActiveId(remain[remain.length - 1] || "readme"); }
  };

  const activeFile = useMemo(() => flatFiles.find((f) => f.id === activeId), [activeId, flatFiles]);

  const renderEditor = () => {
    if (!activeFile) return null;
    switch (activeFile.section) {
      case "home": return <HomeSection dark={dark} />;
      case "about": return <AboutSection dark={dark} />;
      case "skills": return <SkillsSection dark={dark} />;
      case "portfolio": return <PortfolioSection filter={filter} setFilter={setFilter} dark={dark} />;
      case "project": {
        const proj = PROJECTS.find((p) => p.id === activeFile.projectId);
        return <ProjectSection project={proj} dark={dark} />;
      }
      default: return null;
    }
  };

  return (
    <div className={classNames("h-screen w-full overflow-hidden font-sans", dark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-800")}>
      <div className={classNames("h-10 flex items-center px-3 text-sm border-b", dark ? "border-slate-800 bg-slate-900/70" : "border-slate-200 bg-white")}>
        <div className="font-medium">Rendon Luis - ㄹㅇㅅ</div>
        <div className="mx-3 opacity-40">|</div>
        <div className="truncate text-xs sm:text-sm">{activeFile ? activeFile.path : ""}</div>
        <div className="ml-auto flex items-center gap-2">
          <button onClick={() => setDark((d) => !d)} className={classNames("rounded-md p-1.5", dark ? "hover:bg-slate-800" : "hover:bg-slate-100")} aria-label="Toggle theme">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setQuickOpen(true)} className={classNames("rounded-md p-1.5 flex items-center gap-1 text-xs", dark ? "hover:bg-slate-800" : "hover:bg-slate-100")} title="Quick Open (Ctrl/Cmd+K)">
            <Search size={16} />
            <span className="hidden sm:block">Quick Open</span>
          </button>
        </div>
      </div>

      <div className="flex h-[calc(100vh-40px-24px)]">
        <div className={classNames("w-12 flex flex-col items-center py-2", dark ? "bg-slate-900/70 border-r border-slate-800" : "bg-slate-100 border-r border-slate-200")}>
          <div className="flex flex-col items-center gap-3">
            <div className="opacity-60 text-[10px] uppercase tracking-wider">Nav</div>
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="w-8 h-8 rounded-xl grid place-items-center hover:scale-105 transition md:pointer-events-none md:cursor-default" 
              title="Explorer"
            >
              <Layers size={18} />
            </button>
            <div className="mt-2 opacity-60 text-[10px] uppercase tracking-wider">Links</div>
            {SOCIALS.map(({ id, href, Icon, label }) => (
              <a key={id} href={href} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-xl grid place-items-center hover:scale-105 transition" title={label}>
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className={classNames("w-72 hidden md:block overflow-auto", dark ? "bg-slate-900/40 border-r border-slate-800" : "bg-white border-r border-slate-200")}>
          <div className="px-3 py-2 text-xs uppercase tracking-wider opacity-70">Explorer</div>
          <div className="px-2 pb-4">
            <Tree nodes={FILE_TREE} expanded={expanded} setExpanded={setExpanded} onOpen={openFile} activeId={activeId} dark={dark} />
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className={classNames("h-9 flex items-center overflow-x-auto", dark ? "bg-slate-900/50 border-b border-slate-800" : "bg-white border-b border-slate-200")}>
            {openTabs.map((id) => {
              const f = flatFiles.find((x) => x.id === id);
              if (!f) return null;
              const isActive = id === activeId;
              const colors = fileColors(f.name, dark);
              return (
                <button key={id} onClick={() => setActiveId(id)} className={classNames("group flex items-center gap-2 px-3 h-9 border-r text-xs", isActive ? (dark ? "bg-slate-800/70" : "bg-slate-100") : "", dark ? "border-slate-800" : "border-slate-200")}>
                  <FileText size={14} className={classNames("opacity-80", colors.icon)} />
                  <span className={classNames("truncate max-w-[180px]", colors.text)}>{f.name}</span>
                  <X size={14} className={classNames("ml-1 opacity-60 hover:opacity-100", isActive ? "" : "hidden group-hover:block")} onClick={(e) => { e.stopPropagation(); closeTab(id); }} />
                </button>
              );
            })}
          </div>

          <div className="flex-1 overflow-auto">
            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.div key={activeId} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }}>
                  {renderEditor()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className={classNames("h-6 text-[11px] flex items-center gap-4 px-3", dark ? "bg-slate-900/70 border-t border-slate-800" : "bg-white border-t border-slate-200")}>
        <div className="flex items-center gap-2 opacity-80"><Terminal size={12} /> <span>RendonLuis</span></div>
        <div className="opacity-50">UTF-8</div>
        <div className="opacity-50">Spaces: 2</div>
        <div className="ml-auto flex items-center gap-2 opacity-80"><Clock now={now} /></div>
      </div>

      <AnimatePresence>
        {quickOpen && (
          <motion.div className="fixed inset-0 bg-black/40 backdrop-blur-sm grid place-items-start pt-24 px-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setQuickOpen(false)}>
            <motion.div className={classNames("w-full max-w-2xl rounded-xl overflow-hidden", dark ? "bg-slate-900 border border-slate-800" : "bg-white border border-slate-200")} initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 16, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-700/40">
                <Search size={16} className="opacity-70" />
                <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Type a file name…" className={classNames("w-full bg-transparent outline-none text-sm", dark ? "placeholder:text-slate-500" : "placeholder:text-slate-400")} />
                <button className="opacity-60 hover:opacity-100" onClick={() => setQuickOpen(false)}><X size={16} /></button>
              </div>
              <div className="max-h-80 overflow-auto">
                {flatFiles.filter((f) => f.path.toLowerCase().includes(q.toLowerCase())).slice(0, 30).map((f) => (
                  <button key={f.id} onClick={() => { openFile(f.id); setQuickOpen(false); }} className="w-full text-left px-3 py-2 text-sm hover:bg-slate-700/30 flex items-center gap-2">
                    <FileText size={14} className="opacity-70" />
                    <span className="truncate">{f.path}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-50" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div 
              className={classNames("w-80 h-full overflow-auto", dark ? "bg-slate-900 border-r border-slate-800" : "bg-white border-r border-slate-200")}
              initial={{ x: -320 }} 
              animate={{ x: 0 }} 
              exit={{ x: -320 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={classNames("h-10 flex items-center justify-between px-3 text-sm border-b", dark ? "border-slate-800 bg-slate-900/70" : "border-slate-200 bg-white")}>
                <div className="font-medium">Navigation</div>
                <button onClick={() => setMobileMenuOpen(false)} className={classNames("rounded-md p-1.5", dark ? "hover:bg-slate-800" : "hover:bg-slate-100")} aria-label="Close menu">
                  <X size={16} />
                </button>
              </div>
              <div className="px-3 py-4">
                <div className="text-xs uppercase tracking-wider opacity-70 mb-3">Explorer</div>
                <Tree nodes={FILE_TREE} expanded={expanded} setExpanded={setExpanded} onOpen={openFile} activeId={activeId} dark={dark} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Tree({ nodes, expanded, setExpanded, onOpen, activeId, dark, depth = 0 }) {
  return (
    <div>
      {nodes.map((node) => {
        if (node.type === "folder") {
          const isOpen = (node.id === "about-folder" && expanded.about) || (node.id === "portfolio-folder" && expanded.portfolio) || (node.id === "projects-folder" && expanded.projects);
          const toggle = () => {
            if (node.id === "about-folder") setExpanded({ ...expanded, about: !expanded.about });
            if (node.id === "portfolio-folder") setExpanded({ ...expanded, portfolio: !expanded.portfolio });
            if (node.id === "projects-folder") setExpanded({ ...expanded, projects: !expanded.projects });
          };
          return (
            <div key={node.id} className="select-none">
              <button onClick={toggle} className="w-full flex items-center gap-1.5 px-2 py-1 rounded hover:bg-slate-700/20">
                {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                {isOpen ? <FolderOpen size={14} /> : <Folder size={14} />}
                <span className="text-sm">{node.name}</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pl-5">
                    <Tree nodes={node.children} expanded={expanded} setExpanded={setExpanded} onOpen={onOpen} activeId={activeId} dark={dark} depth={depth + 1} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        }
        const Icon = node.icon || FileText;
        const isActive = activeId === node.id;
        const colors = fileColors(node.name, dark);
        return (
          <button key={node.id} data-open-id={node.id} onClick={() => onOpen(node.id)} className={classNames("w-full flex items-center gap-1.5 px-2 py-1 rounded hover:bg-slate-700/20", isActive && "bg-slate-700/30")}>
            <Icon size={14} className={colors.icon} />
            <span className={classNames("text-sm truncate", colors.text)}>{node.name}</span>
          </button>
        );
      })}
    </div>
  );
}

function HomeSection({ dark }) {
  const linkClass = dark ? "text-sky-300 hover:text-sky-200" : "text-sky-700 hover:text-sky-900";
  const showLogo = useLogoToggle();
  
  const description = "Freelance Data Scientist & AI Consultant with expertise in predictive analytics, data automation, and business intelligence. I help businesses make smarter decisions by transforming data into actionable insights.";
  
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src="/src/assets/profile_pic.JPG" 
              alt="Rendon Luis" 
              className="w-20 h-20 rounded-full object-cover border-2 border-slate-600"
              onError={(e) => {e.target.style.display = 'none'}}
            />
            <h1 className={classNames(TYPO.h1, "tracking-tight")}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={showLogo ? 'logo' : 'name'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <TypewriterText text={showLogo ? 'ㄹㅇㅅ' : 'Rendon Luis'} speed={100} />
                </motion.span>
              </AnimatePresence>
            </h1>
          </div>
          <p className={classNames(TYPO.body, "max-w-2xl opacity-90")}>
            <TypewriterText text={description} speed={15} delay={1000} />
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {SOCIALS.map(({ id, href, Icon, label }) => (
              <a key={id} href={href} target="_blank" rel="noreferrer" className={classNames(TYPO.linkBase, linkClass, "inline-flex items-center gap-1 text-xs sm:text-sm rounded-md px-2 py-1 border", dark ? "border-slate-700/40" : "border-slate-300 hover:bg-slate-50") }>
                <Icon size={14} /> {label} <ExternalLink size={12} className="opacity-60" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={classNames("rounded-2xl border p-4", dark ? "bg-slate-900/40 border-slate-700/40" : "bg-white/80 border-slate-200 shadow-sm")}>
        <div className={classNames(TYPO.caption, "uppercase tracking-wider opacity-60 mb-2")}>
          <TypewriterText text="README.md" speed={80} delay={1000} />
        </div>
        <ul className={classNames(TYPO.body, "list-disc pl-6 space-y-1.5")}>
          <li><TypewriterText text="Open about/About.md to learn more about me." speed={15} delay={1700} /></li>
          <li><TypewriterText text="Open about/skills.json to peek at my skills." speed={15} delay={2700} /></li>
          <li><TypewriterText text="Open portfolio/portfolio.json or any file in portfolio/projects/ to explore selected work." speed={15} delay={3700} /></li>
          <li><TypewriterText text="Press Ctrl/Cmd+K to Quick Open files." speed={15} delay={4700} /></li>
        </ul>
      </div>
    </div>
  );
}

function AboutSection({ dark }) {
  const linkClass = dark ? "text-sky-300 hover:text-sky-200" : "text-sky-700 hover:text-sky-900";
  return (
    <div className="max-w-none space-y-6">
      {/* Header */}
      <div className="text-xs uppercase tracking-wider opacity-60 mb-3">
        <TypewriterText text="about/About.md" speed={50} delay={0} />
      </div>

      {/* Title */}
      <div className="border-b border-slate-700/30 pb-4 mb-6">
        <h2 className={classNames(TYPO.h3, "mb-3")}>
          <TypewriterText text="Data Analyst | AI & Data Science Freelancer" speed={20} delay={0} />
        </h2>
        <div className={classNames(TYPO.caption, "opacity-60")}>
          <TypewriterText text="Market Intelligence, Predictive Analytics & Business Automation" speed={15} delay={0} />
        </div>
      </div>

      {/* Overview Card */}
      <div className={classNames("rounded-xl border p-5 mb-6", dark ? "border-slate-700/40 bg-slate-900/30" : "border-slate-200 bg-white/60 shadow-sm")}>
        <div className={classNames(TYPO.caption, "uppercase tracking-wider mb-3", dark ? "text-sky-400" : "text-sky-600")}>
          <TypewriterText text="# Overview" speed={30} delay={0} />
        </div>
        <p className={TYPO.body}>
          <TypewriterText 
            text="I help businesses and executives harness the power of Data Science and AI-driven automation to transform raw data into strategic insights, optimize decision-making, and implement intelligent solutions that drive growth and efficiency." 
            speed={12} 
            delay={0} 
          />
        </p>
      </div>

      {/* Experience Card */}
      <div className={classNames("rounded-xl border p-5 mb-6", dark ? "border-slate-700/40 bg-slate-900/30" : "border-slate-200 bg-white/60 shadow-sm")}>
        <div className={classNames(TYPO.caption, "uppercase tracking-wider mb-3", dark ? "text-emerald-400" : "text-emerald-600")}>
          <TypewriterText text="## Experience" speed={30} delay={0} />
        </div>
        <p className={TYPO.body}>
          <TypewriterText 
            text="With years of experience in Market Intelligence, Data Analytics, and Business Intelligence, I've had the opportunity to apply my expertise across global industries, working with multinational companies like Vitapro and AB InBev. My specialty lies in bridging the gap between business strategy and data science, ensuring that data-driven insights lead to real business impact." 
            speed={12} 
            delay={0} 
          />
        </p>
      </div>

      {/* Services Card */}
      <div className={classNames("rounded-xl border p-5 mb-6", dark ? "border-slate-700/40 bg-slate-900/30" : "border-slate-200 bg-white/60 shadow-sm")}>
        <div className={classNames(TYPO.caption, "uppercase tracking-wider mb-3", dark ? "text-orange-400" : "text-orange-600")}>
          <TypewriterText text="### Services" speed={30} delay={0} />
        </div>
        <div className="space-y-2">
          <div className={classNames(TYPO.body, "flex items-start gap-2")}>
            <span className="text-slate-500 mt-2">•</span>
            <TypewriterText text="Data automation & workflow optimization to improve efficiency" speed={15} delay={0} />
          </div>
          <div className={classNames(TYPO.body, "flex items-start gap-2")}>
            <span className="text-slate-500 mt-2">•</span>
            <TypewriterText text="Predictive modeling & analytics to drive data-informed business decisions" speed={15} delay={0} />
          </div>
          <div className={classNames(TYPO.body, "flex items-start gap-2")}>
            <span className="text-slate-500 mt-2">•</span>
            <TypewriterText text="Building AI-powered chatbots and automation workflows to streamline business operations" speed={15} delay={0} />
          </div>
        </div>
      </div>

      {/* Current Focus Card */}
      <div className={classNames("rounded-xl border p-5 mb-6", dark ? "border-slate-700/40 bg-slate-900/30" : "border-slate-200 bg-white/60 shadow-sm")}>
        <div className={classNames(TYPO.caption, "uppercase tracking-wider mb-3", dark ? "text-purple-400" : "text-purple-600")}>
          <TypewriterText text="#### Current Focus" speed={30} delay={0} />
        </div>
        <div className="space-y-3">
          <p className={TYPO.body}>
            <TypewriterText 
              text="Currently, I am excited to be scaling up my AI & Data Science consulting services to help businesses future-proof their operations with custom AI integrations and data-driven strategies." 
              speed={12} 
              delay={0} 
            />
          </p>
          <p className={TYPO.body}>
            <TypewriterText 
              text="My goal is to accelerate business adoption of AI-driven automation through rapid Proof of Concepts (PoCs) and scalable AI-powered solutions." 
              speed={12} 
              delay={0} 
            />
          </p>
        </div>
      </div>

      {/* Contact Card */}
      <div className={classNames("rounded-xl border p-5", dark ? "border-slate-700/40 bg-slate-900/30" : "border-slate-200 bg-white/60 shadow-sm")}>
        <div className={classNames(TYPO.caption, "uppercase tracking-wider mb-3", dark ? "text-pink-400" : "text-pink-600")}>
          <TypewriterText text="##### Contact" speed={30} delay={0} />
        </div>
        <div className="space-y-2">
          <div className={classNames(TYPO.body, "flex items-center gap-2")}>
            <span className="text-slate-500">📍</span>
            <TypewriterText text="Remote, Eastern Standard Time (EST)" speed={15} delay={0} />
          </div>
          <div className={classNames(TYPO.body, "flex items-center gap-2")}>
            <Mail size={14} className="text-slate-500" />
            <a href="mailto:info@rendonluis.com" className={classNames(linkClass)}>
              <TypewriterText text="info@rendonluis.com" speed={20} delay={0} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillsSection({ dark }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider opacity-60 mb-3">
        <TypewriterText text="skills.json" speed={50} delay={0} />
      </div>
      <div className={classNames("rounded-xl border overflow-auto shadow-sm", dark ? "bg-slate-900/50 border-slate-700/50" : "bg-white border-slate-200") }>
        <pre className="text-[13px] leading-6 p-4"><code><JsonCodeTyped data={SKILLS} delay={500} /></code></pre>
      </div>
    </div>
  );
}

function PortfolioSection({ filter, setFilter, dark }) {
  const cats = ["All", "Data Analysis", "Data Visualization", "Data Science", "AI"];
  const filtered = PROJECTS.filter((p) => (filter === "All" ? true : p.category === filter));
  return (
    <div className="space-y-6">
      <div className="text-xs uppercase tracking-wider opacity-60">portfolio.json</div>
      <div className="flex flex-wrap gap-2">
        {cats.map((c) => (
          <button key={c} onClick={() => setFilter(c)} className={classNames("px-3 py-1.5 rounded-full text-xs border", filter === c ? "bg-slate-700/60 border-slate-600" : "border-slate-700/50 hover:bg-slate-800/30")}>
            {c}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <motion.article 
            key={p.id} 
            className={classNames("group rounded-2xl border overflow-hidden cursor-pointer", dark ? "bg-slate-900/40 border-slate-700/50" : "bg-white border-slate-200 shadow-lg")}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => { 
              e.preventDefault(); 
              const btn = document.querySelector(`[data-open-id='${p.id}']`); 
              btn?.dispatchEvent(new Event("click", { bubbles: true })); 
            }}
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <motion.img 
                src={p.image} 
                alt={p.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                onError={(e) => {e.target.style.display = 'none'}}
              />
              <div className={classNames("absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300", dark ? "from-slate-900/60" : "from-black/40")} />
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={classNames("backdrop-blur-sm rounded-full p-2", dark ? "bg-slate-900/80" : "bg-white/80")}>
                  <ExternalLink size={14} className={dark ? "text-sky-300" : "text-sky-600"} />
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <span className={classNames("text-xs px-2 py-1 rounded-full border", dark ? "bg-slate-800/60 text-slate-300 border-slate-700/50" : "bg-slate-100 text-slate-700 border-slate-300")}>
                  {p.category}
                </span>
              </div>
              
              <h3 className={classNames(TYPO.h6, "mb-3 transition-colors duration-200", dark ? "group-hover:text-sky-300" : "group-hover:text-sky-600")}>
                {p.title}
              </h3>
              
              <p className={classNames(TYPO.caption, "mb-4 line-clamp-3", dark ? "text-slate-400" : "text-slate-600")}>
                {p.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className={classNames(TYPO.caption, "transition-colors duration-200", dark ? "text-sky-400 group-hover:text-sky-300" : "text-sky-600 group-hover:text-sky-700")}>
                  {p.slug}
                </span>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="opacity-60 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <ExternalLink size={12} className={classNames("transition-colors duration-200", dark ? "text-slate-400 group-hover:text-sky-300" : "text-slate-500 group-hover:text-sky-600")} />
                </motion.div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function ProjectSection({ project, dark }) {
  if (!project) return null;
  
  // Extract text content safely
  const challengeText = project.content.props.children[0]?.props.children[1] || "";
  const approachText = project.content.props.children[1]?.props.children[1] || "";
  const resultsText = project.content.props.children[2]?.props.children[1] || "";
  const futureText = project.content.props.children[3]?.props.children[1] || "";
  const expertiseText = project.content.props.children[4]?.props.children[1] || "";
  
  return (
    <div className="max-w-none space-y-6">
      {/* Header */}
      <div className="text-xs uppercase tracking-wider opacity-60 mb-3">
        <TypewriterText text={`portfolio/projects/${project.slug}`} speed={50} delay={0} />
      </div>

      {/* Project Image & Title */}
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        <div className="lg:w-1/3">
          <div className={classNames("rounded-xl overflow-hidden border", dark ? "border-slate-700/40" : "border-slate-200")}>
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 lg:h-64 object-cover"
              onError={(e) => {e.target.style.display = 'none'}}
            />
          </div>
        </div>
        <div className="lg:w-2/3">
          <div className="border-b border-slate-700/30 pb-4 mb-4">
            <h2 className={classNames(TYPO.h2, "mb-3")}>
              <TypewriterText text={project.title} speed={20} delay={0} />
            </h2>
            <div className={classNames(TYPO.body, dark ? "text-slate-400" : "text-slate-600")}>
              <TypewriterText text={project.description} speed={15} delay={0} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className={classNames("text-xs px-2 py-1 rounded-full border", dark ? "bg-slate-800/60 text-slate-300 border-slate-700/50" : "bg-slate-100 text-slate-700 border-slate-300")}>
              <TypewriterText text={project.category} speed={30} delay={0} />
            </span>
          </div>
        </div>
      </div>

      {/* Challenge Card */}
      <div className={classNames("rounded-xl border p-5 mb-6", dark ? "border-slate-700/40 bg-slate-900/30" : "border-slate-200 bg-white/60 shadow-sm")}>
        <div className={classNames(TYPO.caption, "uppercase tracking-wider mb-3", dark ? "text-red-400" : "text-red-600")}>
          <TypewriterText text="## Challenge" speed={30} delay={0} />
        </div>
        <div className={TYPO.body}>
          <TypewriterText text={challengeText} speed={12} delay={0} />
        </div>
      </div>

      {/* Approach Card */}
      <div className={classNames("rounded-xl border p-5 mb-6", dark ? "border-slate-700/40 bg-slate-900/30" : "border-slate-200 bg-white/60 shadow-sm")}>
        <div className={classNames(TYPO.caption, "uppercase tracking-wider mb-3", dark ? "text-blue-400" : "text-blue-600")}>
          <TypewriterText text="## Our Approach" speed={30} delay={0} />
        </div>
        <div className={TYPO.body}>
          <TypewriterText text={approachText} speed={12} delay={0} />
        </div>
      </div>

      {/* Results Card */}
      <div className={classNames("rounded-xl border p-5 mb-6", dark ? "border-slate-700/40 bg-slate-900/30" : "border-slate-200 bg-white/60 shadow-sm")}>
        <div className={classNames(TYPO.caption, "uppercase tracking-wider mb-3", dark ? "text-green-400" : "text-green-600")}>
          <TypewriterText text="## Results" speed={30} delay={0} />
        </div>
        <div className={TYPO.body}>
          <TypewriterText text={resultsText} speed={12} delay={0} />
        </div>
      </div>

      {/* Future Plans Card */}
      {futureText && (
        <div className={classNames("rounded-xl border p-5 mb-6", dark ? "border-slate-700/40 bg-slate-900/30" : "border-slate-200 bg-white/60 shadow-sm")}>
          <div className={classNames(TYPO.caption, "uppercase tracking-wider mb-3", dark ? "text-purple-400" : "text-purple-600")}>
            <TypewriterText text="## Future Plans" speed={30} delay={0} />
          </div>
          <div className={TYPO.body}>
            <TypewriterText text={futureText} speed={12} delay={0} />
          </div>
        </div>
      )}

      {/* Expertise Card */}
      {expertiseText && (
        <div className={classNames("rounded-xl border p-5", dark ? "border-slate-700/40 bg-slate-900/30" : "border-slate-200 bg-white/60 shadow-sm")}>
          <div className={classNames(TYPO.caption, "uppercase tracking-wider mb-3", dark ? "text-orange-400" : "text-orange-600")}>
            <TypewriterText text="## Expertise" speed={30} delay={0} />
          </div>
          <div className={TYPO.body}>
            <TypewriterText text={expertiseText} speed={12} delay={0} />
          </div>
        </div>
      )}
    </div>
  );
}

function Badge({ icon: Icon, text }) { return <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/50 px-3 py-1 text-xs"><Icon size={12} /> {text}</div>; }
function Clock({ now }) { const hh = String(now.getHours()).padStart(2, "0"); const mm = String(now.getMinutes()).padStart(2, "0"); const ss = String(now.getSeconds()).padStart(2, "0"); return <div>{hh}:{mm}:{ss}</div>; }

function JsonCode({ data, indent = 0 }) {
  const pad = (n) => " ".repeat(n * 2);
  if (Array.isArray(data)) {
    return (<>
      <span className="text-slate-400">[</span>
      {data.map((v, i) => (<div key={i}>{pad(indent + 1)}<JsonCode data={v} indent={indent + 1} />{i < data.length - 1 ? <span className="text-slate-400">,</span> : null}</div>))}
      <div>{pad(indent)}<span className="text-slate-400">]</span></div>
    </>);
  }
  if (typeof data === "object" && data !== null) {
    const entries = Object.entries(data);
    return (
      <>
        <span className="text-slate-400">{'{'}</span>
        {entries.map(([k, v], i) => (
          <div key={k}>
            {pad(indent + 1)}
            <span className="text-sky-400">"{k}"</span>
            <span className="text-slate-400">: </span>
            <JsonValue value={v} indent={indent + 1} />
            {i < entries.length - 1 ? <span className="text-slate-400">,</span> : null}
          </div>
        ))}
        <div>
          {pad(indent)}
          <span className="text-slate-400">{'}'}</span>
        </div>
      </>
    );
  }
  return <JsonValue value={data} indent={indent} />;  
}

function JsonValue({ value, indent }) {
  if (typeof value === "string") return <span className="text-emerald-400">"{value}"</span>;
  if (typeof value === "number") return <span className="text-orange-300">{String(value)}</span>;
  if (typeof value === "boolean") return <span className="text-purple-300">{String(value)}</span>;
  if (value === null) return <span className="text-pink-300">null</span>;
  return <JsonCode data={value} indent={indent} />;
}

function JsonCodeTyped({ data, delay = 0 }) {
  const jsonString = JSON.stringify(data, null, 2);
  const { displayText, isComplete } = useTypewriter(jsonString, 8);
  const [shouldStart, setShouldStart] = useState(delay === 0);

  useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => setShouldStart(true), delay);
      return () => clearTimeout(timer);
    }
  }, [delay]);

  const highlightJson = (text) => {
    return text
      .replace(/"([^"]+)":/g, '<span class="text-sky-400">"$1"</span>:')
      .replace(/: "([^"]+)"/g, ': <span class="text-emerald-400">"$1"</span>')
      .replace(/: (\d+)/g, ': <span class="text-orange-300">$1</span>')
      .replace(/: (true|false)/g, ': <span class="text-purple-300">$1</span>');
  };

  return (
    <div className="font-mono whitespace-pre-wrap">
      {shouldStart && (
        <>
          <span dangerouslySetInnerHTML={{ __html: highlightJson(displayText) }} />
          {!isComplete && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
              className="text-sky-400"
            >
              |
            </motion.span>
          )}
        </>
      )}
    </div>
  );
}
