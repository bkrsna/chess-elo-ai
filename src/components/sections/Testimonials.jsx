import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Alex Petrov",
        role: "Club Player",
        image: "https://i.pravatar.cc/150?img=11",
        ratingBefore: 1200,
        ratingAfter: 1850,
        quote: "The opening repertoire builder completely changed my game. I went from struggling in the opening to getting advantageous positions every time."
    },
    {
        name: "Sarah Jenkins",
        role: "Turnament Regular",
        image: "https://i.pravatar.cc/150?img=5",
        ratingBefore: 1500,
        ratingAfter: 2100,
        quote: "Strategy lessons with GM analysis helped me understand chess on a deeper level. I finally cracked the 2000 barrier!"
    },
    {
        name: "David Chen",
        role: "Online Blitz Specialist",
        image: "https://i.pravatar.cc/150?img=3",
        ratingBefore: 800,
        ratingAfter: 1600,
        quote: "Doubled my rating in 6 months. The tactics trainer is addictive and incredibly effective. Highly recommended!"
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-black border-y border-white/10 relative overflow-hidden" id="testimonials">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Recent Success Stories
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-neutral-text_secondary max-w-2xl mx-auto"
                    >
                        Real students, real rating gains. Join the community of improving players.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((student, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-neutral-background rounded-2xl p-8 border border-white/10 flex flex-col h-full"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <img src={student.image} alt={student.name} className="w-14 h-14 rounded-full border-2 border-white/20" />
                                <div>
                                    <h4 className="text-white font-bold">{student.name}</h4>
                                    <p className="text-sm text-neutral-text_secondary">{student.role}</p>
                                </div>
                            </div>

                            {/* Rating Progress Card */}
                            <div className="bg-[#111] rounded-xl p-4 mb-6 border border-white/5 flex items-center justify-between">
                                <div className="text-center">
                                    <span className="block text-xs text-neutral-text_secondary uppercase tracking-wider mb-1">Before</span>
                                    <span className="text-xl font-bold text-neutral-text_secondary">{student.ratingBefore}</span>
                                </div>
                                <ArrowRight className="w-5 h-5 text-green-500" />
                                <div className="text-center">
                                    <span className="block text-xs text-green-500 uppercase tracking-wider mb-1 font-bold">After</span>
                                    <span className="text-2xl font-bold text-white">{student.ratingAfter}</span>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>

                            <p className="text-neutral-text_secondary italic">"{student.quote}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
