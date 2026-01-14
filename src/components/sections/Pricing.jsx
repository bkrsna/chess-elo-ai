import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const pricingPlans = [
    {
        name: "Club Player",
        price: "$29",
        period: "/month",
        description: "Essential tools for casual players aiming for 1500 ELO.",
        features: [
            "Access to Video Library",
            "Basic Tactics Trainer (100/day)",
            "Weekly Group Analysis",
            "Community Access"
        ],
        highlight: false
    },
    {
        name: "Candidate Master",
        price: "$79",
        period: "/month",
        description: "Serious training for players aiming for 2000+ ELO.",
        features: [
            "Everything in Club Player",
            "Unlimited Tactics Trainer",
            "Personalized Opening Repertoire",
            "AI Game Analysis (Unlimited)",
            "Monthly 1-on-1 with Coach"
        ],
        highlight: true // Recommended tier
    },
    {
        name: "Grandmaster",
        price: "$199",
        period: "/month",
        description: "Elite coaching for tournament professionals.",
        features: [
            "Everything in CM Plan",
            "Weekly 1-on-1 with GM",
            "Tournament Prep Support",
            "Direct Line to Coaches",
            "Exclusive Masterclasses"
        ],
        highlight: false
    }
];

const Pricing = () => {
    return (
        <section className="py-20 bg-neutral-background" id="pricing">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Pro Pricing
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-neutral-text_secondary max-w-2xl mx-auto"
                    >
                        Choose the plan that matches your ambition. Cancel anytime.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`rounded-3xl p-8 relative overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${plan.highlight
                                    ? 'bg-neutral-surface border-2 border-yellow-500/50 shadow-[0_0_40px_rgba(234,179,8,0.1)]'
                                    : 'bg-[#111] border border-white/10'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                                    RECOMMENDED
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                            <p className="text-neutral-text_secondary text-sm mb-6 h-10">{plan.description}</p>

                            <div className="flex items-baseline mb-8">
                                <span className="text-4xl font-bold text-white">{plan.price}</span>
                                <span className="text-neutral-text_secondary ml-1">{plan.period}</span>
                            </div>

                            <Button
                                variant={plan.highlight ? 'primary' : 'outline'}
                                className={`w-full justify-center mb-8 ${plan.highlight ? 'bg-white text-black hover:bg-gray-200' : 'border-white/20 text-white hover:bg-white/5'}`}
                            >
                                Get Started
                            </Button>

                            <ul className="space-y-4">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-text_secondary">
                                        <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? 'text-yellow-500' : 'text-white'}`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
