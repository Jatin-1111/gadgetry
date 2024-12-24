import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { ShoppingBag, ChevronDown } from 'lucide-react';


const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.02
            }
        })
    };

    const products = [
        { id: 1, fileName: "Prod1", name: "EVOFOX MOUSE", description: "EvoFox Ultra Value Series Blaze Programmable Gaming Mouse | 8 Fully Programmable Buttons | Ultra-responsive 7000fps | Gaming Grade Sensitive DPI Upto 12800 | RGB Lights with Music sync Mode | Windows Software", extension: "png" },
        { id: 2, fileName: "Prod2", name: "ANT-ESPORTS KEYBOARD", description: "Ant Esports MK3400 V3 Pro Mechanical Gaming Keyboard, RGB 104 Keys Ultra-Slim LED Backlit USB Wired Keyboard with Blue Switch, Durable Keycaps/Anti-Ghosting/Spill-Resistant Mechanical Keyboard for PC", extension: "png" },
        { id: 3, fileName: "Prod3", name: "ANT-ESPORTS CONTROLLER", description: "Ant Esports GP365 Pro Wireless Controller with Hall Effect Magnetic Triggers for PC/PS3/Android, 2.4G Connectivity", extension: "png" },
    ];

    const text = "Find the latest gadgets, smart devices, and accessories to elevate your life.";
    const words = text.split(" ");


    return (
        <>
            <div className="flex justify-center h-auto items-center bg-gradient-to-b from-[#1E1E2F] to-[#000000] backdrop-blur-lg bg-opacity-95 px-4 py-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 animate-gradient-text text-center"
                >
                    Discover the Future of Tech
                </motion.h1>
            </div>

            <div className="relative lg:h-screen">
                <div className="absolute inset-0">
                    <Image
                        src="/images/img2.webp"
                        alt="Modern tech devices"
                        fill
                        style={{ objectFit: "cover" }}
                        quality={100}
                        priority
                        className="w-full h-full object-cover"
                        onLoadingComplete={() => setIsLoaded(true)}
                    />
                </div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 min-h-screen lg:h-screen flex items-center justify-center bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-sm py-12 lg:py-0"
                >
                    <div className="absolute inset-0">
                        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent animate-pulse" />
                    </div>

                    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div className="text-center space-y-6 lg:space-y-8">
                            <motion.h2
                                initial="hidden"
                                animate="visible"
                                className="text-xl sm:text-2xl md:text-5xl text-white font-bold leading-tight px-2"
                            >
                                {words.map((word, i) => (
                                    <motion.span
                                        key={i}
                                        custom={i}
                                        variants={fadeInUp}
                                        className="inline-block mr-2"
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </motion.h2>

                            <motion.div
                                variants={fadeInUp}
                                className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-6 lg:mt-8 px-4"
                            >
                                <motion.button
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    className="group relative px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700"
                                        initial={{ x: "100%" }}
                                        animate={{ x: isHovered ? "0%" : "100%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <span className="relative flex items-center justify-center gap-2">
                                        <ShoppingBag className="w-4 sm:w-5 h-4 sm:h-5" />
                                        Shop Now
                                    </span>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
                                >
                                    Browse Categories
                                </motion.button>
                            </motion.div>

                            <motion.div
                                variants={fadeInUp}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[auto-fit] xl:minmax-[280px,1fr] gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-10 lg:mt-14 px-4 sm:px-6 lg:px-8"
                            >
                                {products.map((product) => (
                                    <motion.div
                                        key={product.id}
                                        whileHover={{ y: -10 }}
                                        className="bg-white/10 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                                    >
                                        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden rounded-lg">
                                            <Image
                                                src={`/images/${product.fileName}.${product.extension}`}
                                                alt={product.fileName}
                                                width={400}
                                                height={300}
                                                className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-3 sm:mt-4 lg:mt-6 mb-2 lg:mb-3 text-white">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm sm:text-base md:text-lg text-gray-300">{product.description}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Hero;

