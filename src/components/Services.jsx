import { motion } from "framer-motion";
import {
    Code2,
    Palette,
    ShoppingCart,
    Cloud,
    Smartphone,
    Wrench,
} from "lucide-react";

const services = [
    {
        icon: Code2,
        title: "Custom Web Development",
        description:
            "Bespoke websites and web applications built with cutting-edge technologies tailored to your unique business needs and goals.",
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description:
            "User-centered design solutions that blend aesthetics with functionality, creating intuitive and engaging digital experiences.",
    },
    {
        icon: ShoppingCart,
        title: "E-Commerce Solutions",
        description:
            "Scalable online stores with seamless checkout experiences, inventory management, and conversion-optimized product pages.",
    },
    {
        icon: Cloud,
        title: "SaaS Development",
        description:
            "Full-cycle SaaS product development from MVP to enterprise-scale platforms with robust architecture and seamless integrations.",
    },
    {
        icon: Smartphone,
        title: "Mobile Responsive Design",
        description:
            "Flawless experiences across every device with mobile-first design strategies that prioritize speed and accessibility.",
    },
    {
        icon: Wrench,
        title: "Website Maintenance & Support",
        description:
            "Ongoing technical support, security updates, performance optimization, and content management to keep your site running smoothly.",
    },
];

const Services = () => {
    return (
        <section id="services" className="py-20 md:py-28 bg-background-alt">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Heading */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}>
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                        Our Services
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-gray mb-4">
                        Everything You Need to{" "}
                        <span className="text-primary">Succeed Online</span>
                    </h2>

                    <p className="text-gray max-w-2xl mx-auto text-base md:text-lg">
                        From stunning websites to powerful web applications, we
                        deliver end-to-end digital solutions that drive growth
                        and deliver measurable results.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={index}
                                className="group p-8 rounded-2xl bg-background border border-gray/10 hover:border-primary/30 transition-all duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.1,
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -5,
                                }}>
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                                </div>

                                <h3 className="text-xl font-bold font-heading text-gray-alt mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-gray text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
