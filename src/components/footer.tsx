import Link from "next/link";
import AnimatedButton from "./animated-button";
import Logo from "./logo";

export default function Footer() {
    return (
      <footer className="w-full bg-black text-gray-300">
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Logo and About */}
                <div className="space-y-4 col-span-1 md:col-span-2 lg:col-span-1">
                     <Link href="/" className="flex items-center gap-2 text-white">
                        <Logo className="h-8 w-8" />
                        <span className="text-2xl font-bold font-headline">Aussie Coat</span>
                    </Link>
                    <p className="text-sm text-gray-400">
                       Delivering premium painting services with unparalleled quality and craftsmanship.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4 font-headline">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><AnimatedButton href="/about" variant="link" className="p-0 h-auto text-gray-300 hover:text-white">About Us</AnimatedButton></li>
                        <li><AnimatedButton href="/#services" variant="link" className="p-0 h-auto text-gray-300 hover:text-white">Services</AnimatedButton></li>
                        <li><AnimatedButton href="/projects" variant="link" className="p-0 h-auto text-gray-300 hover:text-white">Projects</AnimatedButton></li>
                        <li><AnimatedButton href="/#contact" variant="link" className="p-0 h-auto text-gray-300 hover:text-white">Contact</AnimatedButton></li>
                    </ul>
                </div>

                {/* Our Services */}
                 <div>
                    <h3 className="text-lg font-semibold text-white mb-4 font-headline">Our Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li><AnimatedButton href="/#services" variant="link" className="p-0 h-auto text-gray-300 hover:text-white">Residential</AnimatedButton></li>
                        <li><AnimatedButton href="/#services" variant="link" className="p-0 h-auto text-gray-300 hover:text-white">Commercial</AnimatedButton></li>
                        <li><AnimatedButton href="/#services" variant="link" className="p-0 h-auto text-gray-300 hover:text-white">Industrial</AnimatedButton></li>
                        <li><AnimatedButton href="/#services" variant="link" className="p-0 h-auto text-gray-300 hover:text-white">Epoxy Flooring</AnimatedButton></li>
                    </ul>
                </div>

                {/* Get a Quote */}
                 <div>
                    <h3 className="text-lg font-semibold text-white mb-4 font-headline">Contact Us</h3>
                     <ul className="space-y-2 text-sm text-gray-400">
                        <li>Phone: (02) 1234 5678</li>
                        <li>Email: contact@aussiecoat.com.au</li>
                     </ul>
                </div>

            </div>
             <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
                <p>© {new Date().getFullYear()} Aussie Coat. All Rights Reserved. | Designed by Firebase Studio</p>
            </div>
        </div>
      </footer>
    );
  }
  