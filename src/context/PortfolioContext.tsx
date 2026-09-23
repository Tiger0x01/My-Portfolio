import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project, Language, Theme } from '../types/portfolio';
import { initialProjects } from '../data/initialData';

const LOCAL_STORAGE_PROJECTS_KEY = 'portfolio_projects_v1';
const LOCAL_STORAGE_LANG_KEY = 'portfolio_lang_v1';
const LOCAL_STORAGE_THEME_KEY = 'portfolio_theme_v1';
const LOCAL_STORAGE_CURSOR_KEY = 'portfolio_cursor_v1';

export type CursorVariant = 'default' | 'hover' | 'project' | 'hidden';

interface PortfolioContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRtl: boolean;

  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;

  cursorEnabled: boolean;
  toggleCursor: () => void;
  cursorVariant: CursorVariant;
  setCursorVariant: (variant: CursorVariant) => void;
  cursorText: string;
  setCursorText: (text: string) => void;

  projects: Project[];
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;

  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: string, updated: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  duplicateProject: (id: string) => void;
  reorderProjects: (startIndex: number, endIndex: number) => void;
  togglePublishProject: (id: string) => void;
  resetProjectsToDefault: () => void;
  exportProjectsJSON: () => string;
  importProjectsJSON: (jsonStr: string) => boolean;

  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  isAdminAuthenticated: boolean;
  adminLogin: (password: string) => boolean;
  adminLogout: () => void;

  isConsultationModalOpen: boolean;
  setIsConsultationModalOpen: (open: boolean) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Language state
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_LANG_KEY);
    return saved === 'en' || saved === 'ar' ? saved : 'ar'; // Arabic as default per reference direction
  });

  const isRtl = language === 'ar';

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(LOCAL_STORAGE_LANG_KEY, lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [language, isRtl]);

  // 2. Theme state
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
    return saved === 'light' || saved === 'dark' ? saved : 'dark';
  });

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, t);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.body.className = 'bg-[#050505] text-[#FAFAFA] antialiased selection:bg-white selection:text-black min-h-screen transition-colors duration-300';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.body.className = 'bg-[#F9F9F8] text-[#111111] antialiased selection:bg-black selection:text-white min-h-screen transition-colors duration-300';
    }
  }, [theme]);

  // 3. Custom cursor state
  const [cursorEnabled, setCursorEnabled] = useState<boolean>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_CURSOR_KEY);
    return saved !== null ? saved === 'true' : true;
  });
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default');
  const [cursorText, setCursorText] = useState<string>('');

  const toggleCursor = () => {
    setCursorEnabled((prev) => {
      const next = !prev;
      localStorage.setItem(LOCAL_STORAGE_CURSOR_KEY, String(next));
      return next;
    });
  };

  // 4. Projects state
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to parse cached projects from localStorage', e);
    }
    return initialProjects;
  });

  const saveProjects = (newProjects: Project[]) => {
    setProjects(newProjects);
    try {
      localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(newProjects));
    } catch (e) {
      console.error('Failed to save projects to localStorage', e);
    }
  };

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const addProject = (projectData: Omit<Project, 'id'>) => {
    const newProject: Project = {
      ...projectData,
      id: `proj-${Date.now()}`
    };
    const updated = [newProject, ...projects];
    saveProjects(updated);
  };

  const updateProject = (id: string, updatedFields: Partial<Project>) => {
    const updated = projects.map((p) => (p.id === id ? { ...p, ...updatedFields } : p));
    saveProjects(updated);
    if (selectedProject?.id === id) {
      setSelectedProject((prev) => (prev ? { ...prev, ...updatedFields } : null));
    }
  };

  const deleteProject = (id: string) => {
    const updated = projects.filter((p) => p.id !== id);
    saveProjects(updated);
    if (selectedProject?.id === id) {
      setSelectedProject(null);
    }
  };

  const duplicateProject = (id: string) => {
    const existing = projects.find((p) => p.id === id);
    if (!existing) return;

    const duplicated: Project = {
      ...existing,
      id: `proj-${Date.now()}`,
      title: {
        en: `${existing.title.en} (Copy)`,
        ar: `${existing.title.ar} (نسخة)`
      },
      order: projects.length + 1
    };

    const updated = [duplicated, ...projects];
    saveProjects(updated);
  };

  const reorderProjects = (startIndex: number, endIndex: number) => {
    const result = Array.from(projects);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    const reindexed = result.map((item, idx) => ({ ...item, order: idx + 1 }));
    saveProjects(reindexed);
  };

  const togglePublishProject = (id: string) => {
    const updated = projects.map((p) => (p.id === id ? { ...p, published: !p.published } : p));
    saveProjects(updated);
  };

  const resetProjectsToDefault = () => {
    saveProjects(initialProjects);
  };

  const exportProjectsJSON = () => {
    return JSON.stringify(projects, null, 2);
  };

  const importProjectsJSON = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (Array.isArray(parsed) && parsed.length > 0) {
        saveProjects(parsed);
        return true;
      }
    } catch (e) {
      console.error('Failed to import JSON', e);
    }
    return false;
  };

  // 5. Admin modal & auth
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('portfolio_admin_auth') === 'true';
  });

  const adminLogin = (pass: string) => {
    // Default PIN: admin or 1234
    if (pass.trim() === 'admin' || pass.trim() === '1234' || pass.trim() === 'mohamed') {
      setIsAdminAuthenticated(true);
      sessionStorage.setItem('portfolio_admin_auth', 'true');
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setIsAdminAuthenticated(false);
    sessionStorage.removeItem('portfolio_admin_auth');
  };

  // 6. Consultation modal
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  return (
    <PortfolioContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        isRtl,
        theme,
        setTheme,
        toggleTheme,
        cursorEnabled,
        toggleCursor,
        cursorVariant,
        setCursorVariant,
        cursorText,
        setCursorText,
        projects,
        selectedProject,
        setSelectedProject,
        addProject,
        updateProject,
        deleteProject,
        duplicateProject,
        reorderProjects,
        togglePublishProject,
        resetProjectsToDefault,
        exportProjectsJSON,
        importProjectsJSON,
        isAdminOpen,
        setIsAdminOpen,
        isAdminAuthenticated,
        adminLogin,
        adminLogout,
        isConsultationModalOpen,
        setIsConsultationModalOpen
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
