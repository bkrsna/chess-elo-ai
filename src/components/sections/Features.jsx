import React from 'react';
import { Brain, BookOpen, Target, Trophy, Clock, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Brain className="w-8 h-8 text-white" />,
        title: "AI Game Analysis",
        description: "Deep dive into your games with our proprietary AI engine that spots mistakes even Stockfish misses."
    },
    {
        icon: <BookOpen className="w-8 h-8 text-white" />,
        title: "Opening Repertoire",
        description: "Build a bulletproof opening repertoire tailored to your style, memorized in minutes using spaced repetition."
    },
    {
        icon: <Target className="w-8 h-8 text-white" />,
        title: "Endgame Drills",
        description: "Master theoretical endgames and improve your conversion rate with 500+ interactive practical drills."
    },
    {
        icon: <Trophy className="w-8 h-8 text-white" />,
        title: "Tournament Prep",
        description: "Psychological and strategic preparation guides to ensure you perform at your peak during OTB tournaments."
    },
    {
        icon: <Clock className="w-8 h-8 text-white" />,
        title: "Time Management",
        description: "Learn professional clock handling techniques to avoid time trouble and pressure your opponents."
    },
    {
        icon: <Zap className="w-8 h-8 text-white" />,
        title: "Tactics Trainer",
        description: "Pattern recognition exercises curated by Grandmasters to sharpen your tactical vision."
    }
];

const Features = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-20 bg-neutral-background" id="features">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Grandmaster Training
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-neutral-text_secondary max-w-2xl mx-auto"
                    >
                        Everything you need to take your chess from Club Player to Master Candidate.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group p-8 rounded-2xl bg-[#111] border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-neutral-text_secondary leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
