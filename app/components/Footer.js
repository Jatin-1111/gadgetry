"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // React Icons
import Link from 'next/link';

const Footer = () => {
    return (
        <motion.footer
            className="bg-gradient-to-t from-[#1E1E2F] via-[#1E1E2F] to-[#000000] py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Quick Links */}
                    <div className="space-y-4 text-white">
                        <h3 className="text-xl font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="hover:text-purple-400 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-purple-400 transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-purple-400 transition-colors">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-purple-400 transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="space-y-4 text-white">
                        <h3 className="text-xl font-semibold">Follow Us</h3>
                        <div className="flex gap-6">
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://www.facebook.com"
                                className="text-[#B0B0B0] hover:text-white transition-colors"
                            >
                                <FaFacebook size={24} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://www.instagram.com"
                                className="text-[#B0B0B0] hover:text-white transition-colors"
                            >
                                <FaInstagram size={24} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://www.twitter.com"
                                className="text-[#B0B0B0] hover:text-white transition-colors"
                            >
                                <FaTwitter size={24} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://www.linkedin.com"
                                className="text-[#B0B0B0] hover:text-white transition-colors"
                            >
                                <FaLinkedin size={24} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://github.com"
                                className="text-[#B0B0B0] hover:text-white transition-colors"
                            >
                                <FaGithub size={24} />
                            </motion.a>
                        </div>
                    </div>

                    {/* Newsletter Subscription */}
                    <div className="space-y-4 text-white">
                        <h3 className="text-xl font-semibold">Subscribe to our Newsletter</h3>
                        <p className="text-sm">Get the latest updates and offers.</p>
                        <div className="flex items-center">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-[#2A2A3F] text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500"
                            />
                            <button
                                className="ml-2 bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-500 transition-colors"
                                type="submit"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="mt-12 border-t border-[#B0B0B0] pt-8 text-center">
                    <h3 className="text-white text-sm mb-4">We Accept</h3>
                    <div className="flex justify-center gap-8">
                        <img src="/visa.svg" alt="Visa" className="h-12 w-12 object-contain" />
                        <img src="/mastercard.svg" alt="MasterCard" className="h-12 w-12 object-contain" />
                        <img src="/paypal.svg" alt="PayPal" className="h-12 w-12 object-contain" />
                        <img src="/upi.svg" alt="UPI" className="h-12 w-12 object-contain" />
                    </div>
                </div>

            </div>
        </motion.footer>
    );
};

export default Footer;