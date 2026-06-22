import { motion } from "framer-motion";
import { Code2, Mail, Phone, MapPin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const navigationLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
];

const servicesLinks = [
    "Web Development",
    "UI/UX Design",
    "E-Commerce",
    "SaaS Development",
    "Mobile Design",
    "Maintenance",
];

const socialLinks = [
    {
        icon: FaXTwitter,
        href: "#",
        label: "Twitter",
    },
    {
        icon: FaLinkedinIn,
        href: "#",
        label: "LinkedIn",
    },
    {
        icon: FaGithub,
        href: "#",
        label: "GitHub",
    },
    {
        icon: FaInstagram,
        href: "#",
        label: "Instagram",
    },
];

const footerVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20 pb-8">
                <motion.div
                    variants={footerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                                <Code2 className="w-6 h-6 text-white" />
                            </div>

                            <span className="text-xl font-bold font-heading">
                                Codecelix
                            </span>
                        </div>

                        <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
                            We help startups and growing businesses transform
                            their digital presence with modern websites, custom
                            software, and user-focused experiences.
                        </p>

                        <form className="flex flex-col sm:flex-row gap-3 max-w-sm">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="flex-1 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-accent"
                            />

                            <button
                                type="submit"
                                className="px-5 py-2.5 bg-accent hover:bg-accent-alt text-white text-sm font-semibold rounded-full transition-all duration-200">
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4">
                            Navigation
                        </h4>

                        <ul className="space-y-3">
                            {navigationLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-white/50 hover:text-white/80 transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4">Services</h4>

                        <ul className="space-y-3">
                            {servicesLinks.map((service) => (
                                <li key={service}>
                                    <a
                                        href="#services"
                                        className="text-sm text-white/50 hover:text-white/80 transition-colors">
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4">Contact</h4>

                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="mailto:hello@codecelix.com"
                                    className="text-sm text-white/50 hover:text-white/80 transition-colors flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    hello@codecelix.com
                                </a>
                            </li>

                            <li>
                                <a
                                    href="tel:+15551234567"
                                    className="text-sm text-white/50 hover:text-white/80 transition-colors flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    +1 (555) 123-4567
                                </a>
                            </li>

                            <li className="text-sm text-white/50 flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                San Francisco, CA
                            </li>
                        </ul>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 mt-6">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200">
                                        <Icon className="w-4 h-4 text-white/70" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Footer */}
                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-white/40">
                        © 2026 Codecelix. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <a
                            href="#"
                            className="text-sm text-white/40 hover:text-white/60 transition-colors">
                            Privacy Policy
                        </a>

                        <a
                            href="#"
                            className="text-sm text-white/40 hover:text-white/60 transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
