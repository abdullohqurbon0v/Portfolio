import { useState, useEffect } from 'react';

const Main = () => {
  const titles = ['Full Stack Developer', 'Pentester', 'Ethical Hacker'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 1000; // 1 second pause when fully typed

    const type = () => {
      if (!isDeleting && charIndex < currentTitle.length) {
        // Typing
        setDisplayedText(currentTitle.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        setDisplayedText(currentTitle.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentTitle.length) {
        // Pause after typing
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && charIndex === 0) {
        // Switch to next title
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentTitleIndex]);

  return (
    <main id='home' className="min-h-[90vh] bg-gradient-to-tl from-black via-gray-900 to-teal-950 flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent opacity-20 pointer-events-none animate-scanline"
      ></div>

      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 py-12">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 bg-green-500/20 animate-pulse-slow rounded-full blur-md"></div>
          <img
            src="https://imgs.search.brave.com/FwxoEv7sRTKI47UUZ1mjS5FIN-WN4vzUWa9h7HZcaLE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzIxLzQzLzA3/LzM2MF9GXzMyMTQz/MDc2MV9xUWkwQ1U5/dHpJNXcxazF2Smdk/QTAyTE10WHRzWHZK/RS5qcGc"
            alt="Profile"
            className="relative w-full h-full object-cover rounded-full border-2 border-green-500 shadow-[0_0_15px_rgba(0,255,0,0.5)]"
          />
        </div>

        <div className="text-center md:text-left">
          <h1 className="font-mono text-4xl md:text-5xl text-green-500 uppercase tracking-wider">
            Abdulloh Qurbonov
          </h1>
          <p className="font-mono text-xl md:text-2xl text-white mb-6">
            <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-green-500">
              {displayedText}
            </span>
          </p>
          <p className="font-mono text-gray-300 max-w-md mx-auto md:mx-0">
            Crafting secure, scalable solutions and uncovering vulnerabilities with
            a hacker's mindset. Passionate about code and cybersecurity.
          </p>
        </div>
      </div>

    </main>
  );
};

export default Main;