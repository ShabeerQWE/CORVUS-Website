'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
    { href: '/login', label: 'Login' },
  ]

  return (
    <motion.nav
      className="bg-black border-b border-border-gray sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ position: 'sticky', top: 0, zIndex: 9999 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <motion.img
                className="h-8 w-auto"
                src="/corvus-logo.svg"
                alt="Corvus Labs"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="relative text-text-primary hover:text-accent-blue px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 group"
                  >
                    <span className="relative">
                      {link.label}
                      {pathname === link.href && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-blue"
                          layoutId="navbar-indicator"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-blue opacity-0 group-hover:opacity-100"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-primary hover:text-accent-blue hover:bg-bg-gray focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-blue"
              aria-expanded={isMenuOpen}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                {/* Hamburger icon */}
                <motion.span
                  className="absolute block h-0.5 w-6 bg-current transform"
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    translateY: isMenuOpen ? 0 : -8,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute block h-0.5 w-6 bg-current transform"
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ top: '50%', transform: 'translateY(-50%)' }}
                />
                <motion.span
                  className="absolute block h-0.5 w-6 bg-current transform"
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    translateY: isMenuOpen ? 0 : 8,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ bottom: 0 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`text-text-primary hover:text-accent-blue hover:bg-bg-gray block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                      pathname === link.href ? 'bg-bg-gray text-accent-blue' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navigation