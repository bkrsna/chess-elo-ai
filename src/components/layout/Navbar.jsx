import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Features', href: '#features' },
        { name: 'Success Stories', href: '#testimonials' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Coaches', href: '#team' },
    ];

    return (
        <motion.nav
            initial={{ y: -100, x: '-50%' }}
            animate={{ y: 0, x: '-50%' }}
            transition={{ duration: 0.5 }}
            className="fixed top-6 left-1/2 w-11/12 max-w-5xl z-50 bg-black/50 backdrop-blur-md rounded-full border border-white/10 px-6 py-4 shadow-2xl"
        >
            <div className="flex justify-between items-center">

                {/* Logo matching Footer style */}
                <a href="#" className="text-xl font-bold text-white tracking-tighter">
                    ELO<span className="text-neutral-text_secondary">Boost</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-neutral-text_secondary hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <a href="#" className="text-sm font-medium text-white hover:text-gray-300">Log in</a>
                    <Button variant="primary" size="sm" className="bg-white text-black hover:bg-gray-200 border-none shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-shadow">
                        Get Started
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className="md:hidden overflow-hidden bg-black/90 rounded-2xl border border-white/10"
                    >
                        <div className="px-4 py-6 flex flex-col gap-6">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-neutral-text_secondary hover:text-white"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex flex-col gap-4 mt-4">
                                <Button variant="outline" className="w-full justify-center">Log in</Button>
                                <Button variant="primary" className="w-full justify-center bg-white text-black">Get Started</Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
