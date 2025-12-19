import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="bg-linear-to-r from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              AI-Powered Tools for
              <br />
              AEAS Teachers
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Intelligent AI tools that simplify AEAS lesson preparation and
              feedback.
            </p>
            <div className="mt-8">
              <Link to="/exercise-generator">
                <Button variant="primary" className="w-full sm:w-auto">
                  Try Teacher Tools
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="flex justify-center lg:justify-end">
            <DotLottieReact
              src="welcome.lottie"
              aria-hidden="true"
              loop
              autoplay
              className="w-full max-w-md lg:max-w-lg"
              style={{ height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
