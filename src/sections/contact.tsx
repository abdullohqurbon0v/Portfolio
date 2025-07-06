import  { useState, useEffect } from 'react';

const Contact = () => {
  const contactInfo = {
    phone: '+998 91 600 83 00',
    email: 'abdullohqurnobov@gmail.com',
    telegram: '@the_X_ploit',
  };

  const socials = [
    {
      platform: 'GitHub',
      username: '@abdullohqurbon0v',
      url: 'https://github.com/abdullohqurbon0v',
      icon: '📁',
    },
    {
      platform: 'LinkedIn',
      username: '@abdulloh-qurbonov',
      url: 'https://www.linkedin.com/in/abdulloh-qurbonov-030bb7357/',
      icon: '💼',
    },
  ];

  const [displayedContact, setDisplayedContact] = useState('');
  const [contactIndex, setContactIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const contactItems = [
    `Phone: ${contactInfo.phone}`,
    `Email: ${contactInfo.email}`,
    `Telegram: ${contactInfo.telegram}`,
  ];

  useEffect(() => {
    const currentContact = contactItems[contactIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 1000;

    const type = () => {
      if (!isDeleting && charIndex < currentContact.length) {
        setDisplayedContact(currentContact.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedContact(currentContact.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentContact.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setContactIndex((prev) => (prev + 1) % contactItems.length);
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, contactIndex]);

  return (
    <section id='contact' className="min-h-[90vh] bg-gradient-to-tl from-black via-gray-900 to-teal-950 flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent opacity-20 pointer-events-none animate-scanline"
      ></div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="font-mono text-3xl md:text-4xl text-green-500 uppercase tracking-wider text-center mb-12 hover:scale-105 transition-transform duration-300">
          Contact
        </h2>
        <div className="mb-8">
          <div className="relative bg-black/50 backdrop-blur-md p-6 rounded-lg border border-green-500/30 hover:border-green-500 hover:scale-105 transition-all duration-300 group">
            <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse-slow"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-4xl">📧</div>
              <h3 className="font-mono text-xl text-white uppercase tracking-wide">
                Get in Touch
              </h3>
              <p className="font-mono text-gray-300">
                <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-green-500 animate-blink">
                  {displayedContact}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-black/50 backdrop-blur-md p-6 rounded-lg border border-green-500/30 hover:border-green-500 hover:scale-105 transition-all duration-300 group opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse-slow"></div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-4xl">{social.icon}</div>
                <h3 className="font-mono text-xl text-white uppercase tracking-wide">
                  {social.platform}
                </h3>
                <p className="font-mono text-gray-300">{social.username}</p>
              </div>
            </a>
          ))}
        </div>
        <p className="font-mono text-gray-300 text-center mt-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Connect with me to discuss projects, cybersecurity, or collaboration opportunities.
        </p>
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
        @keyframes blink {
          50% { border-color: transparent; }
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-scanline {
          animation: scanline 6s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-blink {
          animation: blink 0.5s step-end infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Contact;