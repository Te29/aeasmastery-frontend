import { Link } from 'react-router-dom';

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/lesson-plans', label: 'Lesson Plans' },
  { to: '/resources', label: 'Resources' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const TEACHER_TOOLS = [
  { to: '/exercise-generator', label: 'Exercise Generator' },
  { to: '/writing-analysis', label: 'Writing Feedback' },
  { to: '/lesson-plans', label: 'Lesson Plans' },
];

export function Footer() {
  return (
    <footer className="bg-yellow-400">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py12 md:py-16">
        <div className="flex flex-wrap justify-center gap-40">
          {/* brand */}
          <div className="max-w-40">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">AEASy.</h2>
            <p className="text-sm text-gray-800">
              Streamline your AEAS teaching with intelligent AI assistance —
              save time and enhance student outcomes effortlessly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-800 hover:text-gray-900 hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* What We Offer */}
          {/* What We Offer */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">What We Offer</h3>
            <ul className="space-y-2">
              {TEACHER_TOOLS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-800 hover:text-gray-900 hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-sm text-gray-800">
              <li>hello@aeasy.com.au</li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 0h-3.554v11.452h3.554V7.433zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.644c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.208 0 22.225 0z" />
                </svg>
                <a
                  href="https://www.linkedin.com/in/shengfeng-terence-peng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-800 hover:text-gray-900 hover:underline transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-yellow-500">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <p className="text-center text-sm text-gray-800">
            AEASy © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
