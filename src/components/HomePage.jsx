import React from 'react'
import { motion } from 'framer-motion'
import { HiShieldCheck, HiLockClosed, HiLightningBolt, HiCheckCircle, HiFingerPrint, HiDatabase } from 'react-icons/hi'
import { FaShieldAlt, FaKey, FaClock } from 'react-icons/fa'
import Credentials from './Credentials'
import Credits from './Credits'

const FeatureCard = ({ icon: Icon, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
    >
        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 text-2xl">
            <Icon />
        </div>
        <h3 className="font-bold text-lg text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
)

const StatItem = ({ label, value, icon: Icon }) => (
    <div className="flex items-center gap-3">
        <div className="text-blue-500 text-xl"><Icon /></div>
        <div>
            <div className="text-2xl font-bold text-gray-900">{value}</div>
            <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">{label}</div>
        </div>
    </div>
)

const HomePage = () => {
    return (
        <main className="min-h-screen bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <section className="relative mb-16 overflow-hidden bg-gray-900 rounded-[2.5rem] p-8 md:p-16 text-white">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20 mb-6">
                                <HiShieldCheck /> Military-Grade Encryption
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                                Securing Your Digital <span className="text-blue-500">Universe</span>
                            </h1>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Experience a complete peace of mind with our state-of-the-art password management solution. Generate strong passwords, store them securely, and access them across all your devices instantly.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/20">
                                    Get Started Free
                                </button>
                                <button className="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-semibold transition-all backdrop-blur-sm">
                                    Learn More
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="hidden lg:block relative"
                        >
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                                <img
                                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000"
                                    alt="Advanced Security Interface"
                                    className="w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                            </div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600 rounded-full blur-[80px] opacity-50"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400 rounded-full blur-[80px] opacity-30"></div>
                        </motion.div>
                    </div>

                    <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#3b82f6_0,transparent_50%)]"></div>
                    </div>
                </section>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 px-4">
                    <StatItem icon={HiLockClosed} label="Passwords Secured" value="1.2M+" />
                    <StatItem icon={HiLightningBolt} label="Avg Save Time" value="0.2s" />
                    <StatItem icon={HiCheckCircle} label="Success Rate" value="99.9%" />
                    <StatItem icon={HiDatabase} label="Data Centers" value="24/7" />
                </div>

                <section className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Why Choose Guardly?</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Our architecture is designed from the ground up to ensure that only you can access your data. We use zero-knowledge architecture for ultimate privacy.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <FeatureCard
                            icon={HiFingerPrint}
                            title="Biometric Security"
                            desc="Access your vault using fingerprint or facial recognition on compatible devices."
                            delay={0.1}
                        />
                        <FeatureCard
                            icon={HiLockClosed}
                            title="Zero-Knowledge"
                            desc="Your master password is never stored on our servers. Even we can't access your data."
                            delay={0.2}
                        />
                        <FeatureCard
                            icon={HiLightningBolt}
                            title="Smart Autofill"
                            desc="Magically log into websites and apps without typing a single character."
                            delay={0.3}
                        />
                    </div>
                </section>

                <section className="mb-24 space-y-20">
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 font-serif">Your Credentials</h2>
                                <div className="h-1.5 w-20 bg-blue-500 rounded-full mt-2"></div>
                            </div>
                            <div className="hidden sm:flex items-center gap-2 text-sm text-gray-400 font-medium">
                                <FaShieldAlt className="text-green-500" /> System Secure
                            </div>
                        </div>
                        <Credentials />
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 font-serif">Stored Wallets</h2>
                                <div className="h-1.5 w-20 bg-blue-500 rounded-full mt-2"></div>
                            </div>
                            <div className="hidden sm:flex items-center gap-2 text-sm text-gray-400 font-medium">
                                <FaClock className="text-blue-500" /> Last sync: just now
                            </div>
                        </div>
                        <Credits />
                    </div>
                </section>

            </div>
        </main>
    )
}

export default HomePage