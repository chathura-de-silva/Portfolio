const { useState, useEffect, useRef } = React;

// --- Icons (Inline SVG for zero dependencies) ---
const Icons = {
    Github: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    ),
    Linkedin: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    ),
    Mail: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
    ),
    Moon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
    ),
    Sun: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2"></path><path d="M12 21v2"></path><path d="M4.22 4.22l1.42 1.42"></path><path d="M18.36 18.36l1.42 1.42"></path><path d="M1 12h2"></path><path d="M21 12h2"></path><path d="M4.22 19.78l1.42-1.42"></path><path d="M18.36 5.64l1.42-1.42"></path></svg>
    ),
    ExternalLink: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
    ),
    Code: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    ),
    Download: () => (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
    ),
    Briefcase: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
    ),
    GraduationCap: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
    )
};

// --- Components ---

const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!window.matchMedia("(pointer: fine)").matches) return;
        setIsVisible(true);

        let requestRef;
        let mouseX = -100;
        let mouseY = -100;
        let ringX = -100;
        let ringY = -100;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            if (dotRef.current) {
                // We use translate3d to force GPU acceleration
                dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
            }

            const target = e.target;
            const isClickable = target.tagName === 'A' || 
                                target.tagName === 'BUTTON' || 
                                target.closest('a') || 
                                target.closest('button') ||
                                target.classList.contains('cursor-pointer');
            setIsHovering(!!isClickable);
        };

        const animateRing = () => {
            const speed = 0.15;
            ringX += (mouseX - ringX) * speed;
            ringY += (mouseY - ringY) * speed;

            if (ringRef.current) {
                ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
            }
            requestRef = requestAnimationFrame(animateRing);
        };

        window.addEventListener('mousemove', onMouseMove);
        requestRef = requestAnimationFrame(animateRing);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(requestRef);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <React.Fragment>
            <div 
                ref={dotRef} 
                className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] w-2 h-2 bg-slate-800 dark:bg-white transition-opacity duration-200 ${isHovering ? 'opacity-0' : 'opacity-100'}`}
            />
            
            <div 
                ref={ringRef} 
                className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border backdrop-blur-[1px] flex items-center justify-center transition-colors duration-200
                    ${isHovering 
                        ? 'w-12 h-12 bg-slate-500/10 border-slate-400/30 dark:bg-white/10 dark:border-white/30' 
                        : 'w-8 h-8 bg-transparent border-slate-400/50 dark:border-white/30'}
                `}
            />
        </React.Fragment>
    );
};

const GlassCard = ({ children, className = "", hoverEffect = false }) => {

    const baseStyle = "rounded-2xl border backdrop-blur-xl transition-transform transition-colors duration-300 ease-out will-change-transform";
    const themeStyle = "bg-white/40 dark:bg-white/5 border-white/50 dark:border-white/10 shadow-sm";
    const hoverStyle = hoverEffect ? "hover:bg-white/60 dark:hover:bg-white/10 hover:scale-[1.01] hover:shadow-md cursor-pointer" : ""; 

    return (
        <div className={`${baseStyle} ${themeStyle} ${hoverStyle} ${className}`}>
            {children}
        </div>
    );
};

const SkillBadge = ({ skill }) => (
    <span className="px-3 py-1 text-sm font-medium rounded-full bg-slate-200/50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 border border-transparent hover:border-slate-400/30 transition-colors cursor-default hover:scale-105 transform duration-200">
        {skill}
    </span>
);

const NavLink = ({ href, text, active }) => (
        <a 
        href={href} 
        className={`text-sm font-medium transition-colors duration-200 relative group ${active ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'}`}
    >
        {text}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-800 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
    </a>
);

const TimelineItem = ({ year, title, org, desc, type, isLast }) => (
    <div className={`relative pl-8 ${!isLast ? 'pb-10' : ''}`}>
        {!isLast && (
            <div className="absolute left-[11px] top-8 bottom-0 w-px bg-slate-300 dark:bg-slate-700"></div>
        )}
        <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 flex items-center justify-center z-10">
            {type === 'work' ? 
                <span className="text-slate-600 dark:text-slate-300"><Icons.Briefcase /></span> : 
                <span className="text-slate-600 dark:text-slate-300"><Icons.GraduationCap /></span>
            }
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-1">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
            <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 w-fit">
                {year}
            </span>
        </div>
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{org}</p>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-lg">
            {desc}
        </p>
    </div>
);

// --- Main Application ---

const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(systemPrefersDark);
        if (systemPrefersDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const skills = {
        languages: [ "C++", "Python", "Dart","JavaScript", "SQL", "C", "Julia", "VHDL"],
        frontend: ["NextJS", "React", "Tailwind CSS", "Flutter", ],
        backend: ["NodeJS", "Express", "Flask", "NestJS"],
        tools: ["Git", "Linux", "AWS", "Postman", "Figma"]
    };

    const projects = [
        {
            title: "ShutterSnap",
            desc: "An on device, privacy friendly solution to instantly retrieve the mechanical shutter actuation count of professional cameras up to a provided exposure.",
            stack: ["Svelte", "dcraw", "Tailwind CSS"],
            link: "https://github.com/chathura-de-silva/Shuttersnap"
        },
        {
            title: "FireSense",
            desc: "Embedded Node Network that relies on a specialized node-to-node communication protocol and internet to alert on wildfires.",
            stack: ["PlatformIO", "LoRa", "C++"],
            link: "https://github.com/chathura-de-silva/Firesense"
        },
        {
            title: "Smart Medibox",
            desc: "A smart IoT device with intuitive UI/UX that reminds users to take their medicine on time.",
            stack: ["PlatformIO", "Node-Red", "C++"],
            link: "https://github.com/chathura-de-silva/Smart-Medibox"
        },
            {
            title: "Project Verdex",
            desc: "Mobile first solution for Rice plant Disease Detection (Closed Source)",
            stack: ["Flutter", "Firebase"],
            link: "https://github.com/Project-Verdex"
        }
    ];

    const timelineData = [
        {
            year: "2021 - Present",
            title: "Computer Engineering Undergraduate",
            org: "Faculty of Engineering, University of Moratuwa",
            desc: "Specialising in Integrated Computer Engineering",
            type: "education"
        },
        {
            year: "2007 - 2020",
            title: "Grade 5 Scholarship, GCE Ordinary and Advanced Level",
            org: "Ananda College, Colombo",
            desc: "Advanced Level Physical Science Stream",
            type: "education"
        },
          
    ];

    return (
        <div className="min-h-screen selection:bg-slate-300 dark:selection:bg-slate-700">
            <CustomCursor />
            
            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/70 dark:bg-black/70 backdrop-blur-lg border-b border-slate-200/50 dark:border-white/5' : 'bg-transparent'}`}>
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="font-bold text-lg tracking-normal text-slate-900 dark:text-white flex items-center gap-2">
                        <span className="w-8 h-8 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center shadow-inner">
                            <span className="font-mono text-sm">CD</span>
                        </span>
                    </div>
                    
                    <div className="hidden md:flex items-center gap-8">
                        <NavLink href="#about" text="About" />
                        <NavLink href="#timeline" text="Timeline" />
                        <NavLink href="#skills" text="Skills" />
                        <NavLink href="#projects" text="Projects" />
                    </div>

                    <button 
                        onClick={toggleTheme} 
                        className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {darkMode ? <Icons.Sun /> : <Icons.Moon />}
                    </button>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
                
                {/* Hero Section */}
                <section id="about" className="mb-28 fade-in-up flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                            Chathura De Silva
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                            Building <span className="text-slate-400 dark:text-slate-600">systems</span> that matter.
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400  leading-relaxed max-w-xl mx-auto md:mx-0">
                            Developer | Embedded Systems & Machine Vision Enthusiast
                        </p>
                         <p className="text-md  mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
                            Colombo, Sri Lanka
                        </p>
                        
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <a href="#contact" className="px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium transition hover:opacity-90 shadow-lg shadow-slate-200 dark:shadow-none  transform hover:scale-105">
                                Email Me
                            </a>
                            <a href="https://www.linkedin.com/in/chathuradsilva" target="_blank" className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center gap-2  transform hover:scale-105">
                                <Icons.Linkedin /> LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Profile Image with Glow */}
            <div className="relative shrink-0">
  <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>

  <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/50 dark:border-slate-800/50 shadow-2xl ring-1 ring-slate-900/5">
    
    {/* Light mode image */}
    <img
      src="/assets/profile-light.jpg"
      alt="Profile light"
      className="w-full h-full object-cover block dark:hidden"
    />

    {/* Dark mode image */}
    <img
      src="/assets/profile-dark.jpg"
      alt="Profile dark"
      className="w-full h-full object-cover hidden dark:block"
    />

  </div>
</div>

                </section>

                {/* Timeline Section */}
                <section id="timeline" className="mb-24 fade-in-up delay-100">
                        <h2 className="text-2xl font-bold mb-10 flex items-center gap-2 text-slate-900 dark:text-white">
                        <span className="text-slate-400">01.</span> Education
                    </h2>
                    <div className="ml-2 md:ml-4">
                        {timelineData.map((item, index) => (
                            <TimelineItem 
                                key={index} 
                                {...item} 
                                isLast={index === timelineData.length - 1} 
                            />
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="mb-24 fade-in-up delay-200">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-slate-900 dark:text-white">
                        <span className="text-slate-400">02.</span> Technical Arsenal
                    </h2>
                    
                    <GlassCard className="p-8">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-4 font-bold">Languages</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.languages.map(s => <SkillBadge key={s} skill={s} />)}
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-200/50 dark:bg-white/10"></div>
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-4 font-bold">Frameworks & Libraries</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.frontend.concat(skills.backend).map(s => <SkillBadge key={s} skill={s} />)}
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-200/50 dark:bg-white/10"></div>
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-4 font-bold">Tools & Cloud</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.tools.map(s => <SkillBadge key={s} skill={s} />)}
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </section>

                {/* Projects Section - GRID */}
                <section id="projects" className="mb-24 fade-in-up delay-300">
                    <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
                        <span className="text-slate-400">03.</span> Selected Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((proj, idx) => (
                            <GlassCard key={idx} className="p-6 flex flex-col h-full" hoverEffect={true}>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                        <Icons.Code />
                                    </div>
                                    <a href={proj.link} target="_blank" className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition p-1">
                                        <Icons.ExternalLink />
                                    </a>
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">{proj.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed flex-grow">
                                    {proj.desc}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {proj.stack.map(tech => (
                                        <span key={tech} className="text-[10px] uppercase font-bold tracking-wide text-slate-500 dark:text-slate-500">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="fade-in-up delay-400">
                    <GlassCard className="p-12 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Let's work together</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
                                Currently open for opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>
                            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 text-xl font-medium text-blue-600 dark:text-blue-400 hover:underline transform hover:scale-105 transition-transform">
                                <Icons.Mail /> ac.chathura@gmail.com
                            </a>

                            <div className="mt-10 flex justify-center gap-6">
                                <a href="#" className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-white hover:shadow-md dark:hover:bg-black hover:text-slate-900 dark:hover:text-white transition-all  transform hover:scale-105">
                                    <Icons.Github />
                                </a>
                                <a href="#" className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-white hover:shadow-md dark:hover:bg-black hover:text-blue-700 dark:hover:text-blue-400 transition-all transform hover:scale-105">
                                    <Icons.Linkedin />
                                </a>
                            </div>
                        </div>
                    </GlassCard>
                </section>

            </main>

            <footer className="text-center py-8 text-sm text-slate-400 dark:text-slate-600">
                <p>© {new Date().getFullYear()} - Chathura De Silva</p>
            </footer>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);