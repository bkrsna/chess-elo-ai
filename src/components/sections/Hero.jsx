import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-black min-h-[90vh] flex items-center">

            {/* Checkered Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `
          linear-gradient(45deg, #333 25%, transparent 25%), 
          linear-gradient(-45deg, #333 25%, transparent 25%), 
          linear-gradient(45deg, transparent 75%, #333 75%), 
          linear-gradient(-45deg, transparent 75%, #333 75%)
        `,
                backgroundSize: '40px 40px',
                backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
            }}></div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white text-sm font-bold mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                            Grandmaster Strategy
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6"
                        >
                            Skyrocket Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Chess ELO</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl"
                        >
                            Master the board with our advanced analysis and training tools. Reach your peak rating faster than ever.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                        >
                            <Button href="#pricing" variant="primary" size="xl" className="border-2 border-white text-black bg-white hover:bg-gray-200">Start Training</Button>
                            <Button href="#features" variant="ghost" size="xl" className="border-2 border-white/20 text-white hover:bg-white/10">Learn More</Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mt-12 flex items-center gap-8"
                        >
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center overflow-hidden ring-2 ring-black">
                                        <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <div className="flex text-yellow-400 text-sm font-bold gap-1">
                                    ★★★★★
                                </div>
                                <p className="text-sm text-gray-400 font-bold">Rated 5/5 by GMs</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual Column - Animated Chessboard GIF */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2 relative z-10"
                    >
                        {/* Board Container */}
                        <div className="relative shadow-2xl rounded-sm overflow-hidden border-8 border-[#333]">
                            <img
                                src="https://assets-configurator.chess.com/image/configurator/chessboard_1768166350728.gif"
                                alt="Animated Chessboard"
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
