import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Button } from '../../components/ui/Button';
export function HeroSection() {
  return (
    <section className="bg-linear-to-r from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="flex items-center justify-between gap-12">
          {/* Left: Text content */}
          <div className="flex-2 ml-20">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              AI-Powered Tools for
              <br />
              AEAS Teachers
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Intelligent AI tools that simplify AEAS lesson preparation and
              feedback.
            </p>
            <Button>Try Teacher Tools</Button>
          </div>

          {/* Right: Illustration */}
          <div className="flex-4 flex justify-center">
            <DotLottieReact
              src="welcome.lottie"
              aria-hidden="true"
              loop
              autoplay
            />
          </div>
        </div>
      </div>
    </section>
  );
}
