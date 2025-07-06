
const Expertise = () => {
  const skills = [
    {
      title: 'Full Stack Development',
      description: 'Building robust, scalable web applications with modern frameworks and technologies like React, Node.js, and MongoDB.',
      icon: '💻',
    },
    {
      title: 'Penetration Testing',
      description: 'Identifying vulnerabilities and securing systems through ethical hacking techniques and tools like Metasploit and Burp Suite.',
      icon: '🔍',
    },
    {
      title: 'Ethical Hacking',
      description: 'Protecting organizations by simulating cyberattacks, ensuring robust defenses against real-world threats.',
      icon: '🛡️',
    },
  ];

  return (
    <section id='expertise' className="min-h-[90vh] bg-gradient-to-tl from-black via-gray-900 to-teal-950 flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent opacity-20 pointer-events-none animate-scanline"
      ></div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="font-mono text-3xl md:text-4xl text-green-500 uppercase tracking-wider text-center mb-12">
          Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative bg-black/50 backdrop-blur-md p-6 rounded-lg border border-green-500/30 hover:border-green-500 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse-slow"></div>
              <div className="text-4xl mb-4 text-center">{skill.icon}</div>
              <h3 className="font-mono text-xl text-white uppercase tracking-wide text-center mb-2">
                {skill.title}
              </h3>
              <p className="font-mono text-gray-300 text-center">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
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

export default Expertise;