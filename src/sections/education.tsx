
const Education = () => {
const education = [
    {
      degree: 'Full Stack Development',
      institution: 'Sammi Education',
      duration: '2023 - Present',
      description: 'Intensive training in React, Node.js, MongoDB, and modern web technologies.',
      icon: '💾',
    },
    {
      degree: 'Frontend Development',
      institution: 'Astrum IT Academy',
      duration: '2023 - 2024',
      description: 'Specialized in building responsive and dynamic user interfaces using HTML, CSS, JavaScript, and React.',
      icon: '🎓',
    },
    {
      degree: 'Red Team Pentester',
      institution: 'Haad Academy',
      duration: '2025 - Present',
      description: 'Mastered penetration testing and ethical hacking techniques using tools like Metasploit and Burp Suite.',
      icon: '🔒',
    },
  ];


  return (
    <section id="education" className="min-h-[90vh] bg-gradient-to-tl from-black via-gray-900 to-teal-950 flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent opacity-20 pointer-events-none animate-scanline"
      ></div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="font-mono text-3xl md:text-4xl text-green-500 uppercase tracking-wider text-center mb-12">
          Education
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative bg-black/50 backdrop-blur-md p-6 rounded-lg border border-green-500/30 hover:border-green-500 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse-slow"></div>
              <div className="flex items-start gap-4">
                <div className="text-4xl">{edu.icon}</div>
                <div>
                  <h3 className="font-mono text-xl text-white uppercase tracking-wide mb-1">
                    {edu.degree}
                  </h3>
                  <p className="font-mono text-gray-300">{edu.institution}</p>
                  <p className="font-mono text-gray-400 text-sm mb-2">{edu.duration}</p>
                  <p className="font-mono text-gray-300">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Animation Keyframes */}
      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.2; }
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(2px, -2px); }
          60% { transform: translate(-2px, 0); }
          80% { transform: translate(2px, 2px); }
          100% { transform: translate(0); }
        }
        .animate-scanline {
          animation: scanline 6s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-glitch {
          animation: glitch 0.3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Education;