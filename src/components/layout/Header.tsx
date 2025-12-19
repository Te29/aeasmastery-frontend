import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

const NAV_LINK_CLASS =
  'text-sm font-medium hover:text-yellow-500 transition-colors';

const EXERCISE_LINKS = [
  { to: '/exercise-generator', label: 'Vocabulary' },
  { to: '/exercise/listening', label: 'Listening' },
  { to: '/exercise/reading', label: 'Reading' },
  { to: '/exercise/speaking', label: 'Speaking' },
  { to: '/exercise/writing', label: 'Writing' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="AEASy" className="h-8" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={NAV_LINK_CLASS}>
              Home
            </Link>

            {/* Dropdown */}
            <Menu as="div" className="relative">
              {({ open }) => (
                <>
                  <MenuButton
                    className={`${NAV_LINK_CLASS} flex items-center gap-1`}
                  >
                    Teacher Tools
                    <ChevronDownIcon
                      className={`w-4 h-4 transition-transform ${
                        open ? 'rotate-180' : ''
                      }`}
                    />
                  </MenuButton>

                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute left-0 mt-2 w-48 origin-top-left rounded-lg bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {EXERCISE_LINKS.map((link) => (
                        <MenuItem key={link.to}>
                          {({ active }) => (
                            <Link
                              to={link.to}
                              className={`block px-4 py-2 text-sm ${
                                active
                                  ? 'bg-yellow-50 text-yellow-600'
                                  : 'text-gray-700'
                              }`}
                            >
                              {link.label}
                            </Link>
                          )}
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Transition>
                </>
              )}
            </Menu>

            <Link to="/course-plan" className={NAV_LINK_CLASS}>
              Lesson Plans
            </Link>
            <Link to="/resources" className={NAV_LINK_CLASS}>
              Resources
            </Link>
            <Link to="/about" className={NAV_LINK_CLASS}>
              About AEASy
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="secondary" className="border-none">
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={NAV_LINK_CLASS}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <div className="space-y-2 pl-4">
                <p className="font-semibold text-gray-900">Teacher Tools</p>
                {EXERCISE_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block text-sm text-gray-600 hover:text-yellow-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <Link
                to="/course-plan"
                className={NAV_LINK_CLASS}
                onClick={() => setMobileMenuOpen(false)}
              >
                Lesson Plans
              </Link>
              <Link
                to="/resources"
                className={NAV_LINK_CLASS}
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                to="/about"
                className={NAV_LINK_CLASS}
                onClick={() => setMobileMenuOpen(false)}
              >
                About AEASy
              </Link>

              <Button
                variant="secondary"
                className="border-none w-full mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
