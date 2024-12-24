"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, easeIn } from 'framer-motion';
import { Search, ShoppingCart, User, Heart, Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { animate } from '@tsparticles/engine';

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const mobileMenuRef = useRef(null);
    const menuButtonRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target) &&
                menuButtonRef.current &&
                !menuButtonRef.current.contains(event.target)
            ) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);


    const navItems = [
        {
            name: 'New Arrivals',
            href: '/new',
            highlight: 'NEW'
        },
        {
            name: 'Categories',
            href: '/categories',
            subCategories: [
                'Smartphones',
                'Laptops',
                'Accessories',
                'Smart Home',
                'Gaming'
            ]
        },
        { name: 'Deals', href: '/deals' },
        { name: 'Brands', href: '/brands' }
    ];

    const containerVariants = {
        hidden: {
            opacity: 0,
            y: -50,
            rotate: -5
        },
        visible: {
            opacity: 1,
            y: 0,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
                duration: 0.7
            }
        },
        hover: {
            scale: 1.05,
            rotate: 2,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    const textVariants = {
        hover: {
            letterSpacing: "0.05em",
            transition: {
                type: "tween",
                duration: 0.3
            }
        }
    };

    const searchVariants = {
        hidden: { opacity: 0, width: 0 },
        visible: {
            opacity: 1,
            width: '300px',
            transition: { duration: 0.3 }
        }
    };

    return (
        <>
            <motion.header
                className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/50 to-black/30"
            >
                {/* Announcement Bar with Gradient Animation */}
                <div
                    className="gradient-animation bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-[length:200%_100%] text-white text-sm py-2 text-center hidden md:block"
                >
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        🎉 Free Shipping on Orders Over ₹499 | Fast Delivery 🚚
                    </motion.p>
                </div>


                <div className="bg-gradient-to-b from-[#1E1E2F] to-[#000000] backdrop-blur-lg bg-opacity-95">
                    <div className="px-4 lg:px-8 py-4 max-w-7xl mx-auto">
                        <div className="flex items-center justify-between">
                            {/* Mobile menu button with glow effect */}
                            <motion.button
                                ref={menuButtonRef}
                                whileTap={{ scale: 0.95 }}
                                className="lg:hidden text-white hover:text-purple-400 transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation();  // Prevents event from propagating to window
                                    setIsMobileMenuOpen(!isMobileMenuOpen);
                                }}
                            >
                                {isMobileMenuOpen ? (
                                    <X size={24} className="hover:rotate-90 transition-transform duration-300" />
                                ) : (
                                    <Menu size={24} />
                                )}
                            </motion.button>

                            {/* Logo with gradient text */}
                            <motion.h1
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                variants={containerVariants}
                                className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                            >
                                <Link href="/">
                                    <motion.span variants={textVariants}>
                                        Gadgetry
                                    </motion.span>
                                </Link>
                            </motion.h1>

                            {/* Desktop Navigation with hover effects */}
                            <nav className="hidden lg:block">
                                <ul className="flex gap-8">
                                    {navItems.map((item) => (
                                        <motion.li
                                            key={item.name}
                                            className="relative group"
                                            onHoverStart={() => setHoveredCategory(item.name)}
                                            onHoverEnd={() => setHoveredCategory(null)}
                                        >
                                            <Link
                                                href={item.href}
                                                className="flex items-center gap-1 text-[#B0B0B0] hover:text-white transition-colors duration-200"
                                            >
                                                {item.name}
                                                {item.subCategories && <ChevronDown size={16} />}
                                                {item.highlight && (
                                                    <span className="ml-1 px-1.5 py-0.5 text-xs font-semibold bg-purple-500 text-white rounded-full">
                                                        {item.highlight}
                                                    </span>
                                                )}
                                            </Link>

                                            {/* Dropdown Menu */}
                                            {item.subCategories && hoveredCategory === item.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    className="absolute top-full left-0 mt-2 w-48 bg-[#1E1E2F] rounded-lg shadow-lg overflow-hidden"
                                                >
                                                    <ul className="py-2">
                                                        {item.subCategories.map((subCategory) => (
                                                            <li key={subCategory}>
                                                                <Link
                                                                    href={`/categories/${subCategory.toLowerCase()}`}
                                                                    className="block px-4 py-2 text-[#B0B0B0] hover:text-white hover:bg-purple-500/20 transition-colors duration-200"
                                                                >
                                                                    {subCategory}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </motion.div>
                                            )}
                                        </motion.li>
                                    ))}
                                </ul>
                            </nav>

                            {/* Right side icons with hover effects */}
                            <div className="flex items-center gap-6">
                                {/* Search with animated input */}
                                <div className="hidden md:flex items-center">
                                    <AnimatePresence>
                                        {isSearchOpen && (
                                            <motion.input
                                                variants={searchVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                type="text"
                                                placeholder="Search products..."
                                                className="bg-[#2A2A3F] text-white border-none rounded-lg px-4 py-2 mr-2 focus:ring-2 focus:ring-purple-500 transition-all"
                                            />
                                        )}
                                    </AnimatePresence>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="text-[#B0B0B0] hover:text-white transition-colors duration-200"
                                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                                    >
                                        <Search size={24} />
                                    </motion.button>
                                </div>

                                {/* Wishlist with notification */}
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="hidden md:block relative"
                                >
                                    <Link href="/wishlist" className="text-[#B0B0B0] hover:text-white transition-colors duration-200">
                                        <Heart size={24} />
                                        {wishlistCount > 0 && (
                                            <motion.span
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                                            >
                                                {wishlistCount}
                                            </motion.span>
                                        )}
                                    </Link>
                                </motion.div>

                                {/* User Account with hover effect */}
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link href="/account" className="text-[#B0B0B0] hover:text-white transition-colors duration-200">
                                        <User size={24} />
                                    </Link>
                                </motion.div>

                                {/* Cart with notification */}
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative"
                                >
                                    <Link href="/cart" className="text-[#B0B0B0] hover:text-white transition-colors duration-200">
                                        <ShoppingCart size={24} />
                                        {cartCount > 0 && (
                                            <motion.span
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                                            >
                                                {cartCount}
                                            </motion.span>
                                        )}
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            ref={mobileMenuRef}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-[#1E1E2F] border-t border-gray-800"
                        >
                            <nav className="px-4 py-2">
                                <ul className="space-y-2">
                                    {navItems.map((item) => (
                                        <motion.li
                                            key={item.name}
                                            whileHover={{ x: 10 }}
                                            className="py-2"
                                        >
                                            <Link
                                                href={item.href}
                                                className="text-[#B0B0B0] hover:text-white transition-colors duration-200 flex items-center gap-2"
                                            >
                                                {item.name}
                                                {item.highlight && (
                                                    <span className="px-1.5 py-0.5 text-xs font-semibold bg-purple-500 text-white rounded-full">
                                                        {item.highlight}
                                                    </span>
                                                )}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                                {/* Mobile Search with gradient border */}
                                <div className="mt-4 relative">
                                    <input
                                        type="text"
                                        placeholder="Search products..."
                                        className="w-full bg-[#2A2A3F] text-white border-none rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 transition-all"
                                    />
                                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                </div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header >
            {/* Spacer for fixed header */}
            < div className="h-[64px] md:h-[80px]" ></div >
        </>
    );
};

export default Header;