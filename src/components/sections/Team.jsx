import React from 'react';
import { motion } from 'framer-motion';

const team = [
    {
        name: "Magnus Carlsen-ish",
        title: "GM",
        image: "https://i.pravatar.cc/300?img=68",
        rating: "2882",
        specialty: "Endgames"
    },
    {
        name: "Judit Polgar-ish",
        title: "GM",
        image: "https://i.pravatar.cc/300?img=44",
        rating: "2735",
        specialty: "Attacking Chess"
    },
    {
        name: "Hikaru Nakamura-ish",
        title: "GM",
        image: "https://i.pravatar.cc/300?img=33",
        rating: "2816",
        specialty: "Speed Chess"
    },
    {
        name: "Vishy Anand-ish",
        title: "GM",
        image: "https://i.pravatar.cc/300?img=11",
        rating: "2817",
        specialty: "Deep Preparation"
    }
];

const Team = () => {
    return (
        <section className="py-20 bg-black border-t border-white/10" id="team">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Meet the Grandmasters</h2>
                        <p className="text-xl text-neutral-text_secondary max-w-xl">
                            Learn from the best. Our curriculum is designed by world-class players.
                        </p>
                    </motion.div>
                    <motion.a
                        href="#"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="hidden md:inline-block text-white hover:text-gray-300 font-medium underline underline-offset-4"
                    >
                        View all coaches
                    </motion.a>
                </div>

                {/* Horizontal Scroll Snap on Mobile, Grid on Desktop */}
                <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:grid md:grid-cols-4 md:gap-8 md:overflow-visible md:p-0 snap-x snap-mandatory hide-scrollbar">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex-shrink-0 w-72 md:w-auto snap-center mr-4 md:mr-0 group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                                <div className="absolute top-4 right-4 bg-white text-black text-xs font-bold px-2 py-1 rounded shadow-lg">
                                    {member.title}
                                </div>

                                <div className="absolute bottom-4 left-4">
                                    <p className="text-yellow-400 font-mono text-sm mb-1">Rating: {member.rating}</p>
                                    <p className="text-white text-xs opacity-80 uppercase tracking-widest">{member.specialty}</p>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">{member.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
