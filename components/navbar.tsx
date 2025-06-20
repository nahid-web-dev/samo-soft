"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, Variants } from "motion/react"
import { Menu, Moon, Sun, Home, Briefcase, Mail, X } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Services", href: "/services", icon: Briefcase },
    { name: "Contact", href: "/contact", icon: Mail },
  ]

  const menuVariants: Variants = {
    closed: {
      scale: 0,
      opacity: 0,
      clipPath: "circle(0% at 95% 10%)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      scale: 1,
      opacity: 1,
      clipPath: "circle(150% at 95% 10%)",
      transition: {
        duration: 0.5,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  }

  const menuOverlayVariants: Variants = {
    closed: {
      scale: 0,
      opacity: 0,
      clipPath: "circle(0% at 95% 10%)",
      transition: {
        duration: 0.3,
        delay: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      scale: 1,
      opacity: 1,
      clipPath: "circle(150% at 95% 10%)",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const itemVariants: Variants = {
    closed: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  const staggerContainer: Variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800"
        : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-black dark:text-white">Samo</span>
              <span className="text-slate-600 dark:text-slate-400">Soft</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative flex items-center space-x-2 text-sm font-medium transition-colors hover:text-black dark:hover:text-white ${pathname === item.href ? "text-black dark:text-white" : "text-slate-600 dark:text-slate-400"
                    }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{item.name}</span>
                  {pathname === item.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black dark:bg-white"
                      layoutId="activeTab"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white"
            >
              <Sun className="absolute h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-0 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Button */}
            <div className="md:hidden relative">
              <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen) }} className="relative z-50">
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.div>
                <span className="sr-only">Toggle menu</span>
              </Button>

              {/* Mobile Menu */}
              <AnimatePresence>
                {isOpen && (
                  <>
                    <motion.div
                      key="overlay"
                      variants={menuOverlayVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="h-dvh w-full bg-black/50 fixed top-0 left-0 -z-10" onClick={() => { setIsOpen(false) }} />
                    <motion.div
                      className="mobile-menu fixed top-0 right-0 bg-white dark:bg-black border border-slate-200 dark:border-slate-800 rounded-bl-2xl shadow-2xl min-w-[280px] overflow-hidden"
                      variants={menuVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <div className="p-6 pt-24">
                        {/* Logo in mobile menu */}
                        <motion.div className="mb-8" variants={itemVariants}>
                          <Link href="/" onClick={() => { setIsOpen(false) }} className="text-2xl font-bold">
                            <span className="text-black dark:text-white">Samo</span>
                            <span className="text-slate-600 dark:text-slate-400">Soft</span>
                          </Link>
                        </motion.div>

                        {/* Navigation Links */}
                        <motion.nav
                          className="flex flex-col space-y-6"
                          variants={staggerContainer}
                          initial="closed"
                          animate="open"
                          exit="closed"
                        >
                          {navItems.map((item) => {
                            const IconComponent = item.icon
                            return (
                              <motion.div key={item.name} variants={itemVariants}>
                                <Link
                                  href={item.href}
                                  onClick={() => { setIsOpen(false) }}
                                  className={`flex items-center space-x-3 text-lg font-medium transition-colors hover:text-black dark:hover:text-white group ${pathname === item.href
                                    ? "text-black dark:text-white"
                                    : "text-slate-600 dark:text-slate-400"
                                    }`}
                                >
                                  <motion.div
                                    className={`p-2 rounded-lg transition-colors ${pathname === item.href
                                      ? "bg-black dark:bg-white text-white dark:text-black"
                                      : "bg-slate-100 dark:bg-slate-800 group-hover:bg-slate-200 dark:group-hover:bg-slate-700"
                                      }`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <IconComponent className="h-5 w-5" />
                                  </motion.div>
                                  <span>{item.name}</span>
                                </Link>
                              </motion.div>
                            )
                          })}
                        </motion.nav>

                        {/* Theme toggle in mobile menu */}
                        <motion.div
                          className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800"
                          variants={itemVariants}
                        >
                          <Button
                            variant="ghost"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="w-full justify-start space-x-3 text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white"
                          >
                            {/* <div className="p-2 rounded-lg bg-slate-400 dark:bg-slate-800">
                                <Sun className=" h-5 w-5 rotate-0 scale-100 transition-all duration-700 dark:-rotate-90 dark:scale-0" />
                                <Moon className=" h-5 w-5 rotate-90 scale-0 transition-all duration-700 dark:rotate-0 dark:scale-100" />
                              </div> */}
                            <AnimatePresence initial={false} mode="wait">
                              {theme === "dark" ? (
                                <motion.div
                                  key="moon"
                                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <Moon className="h-5 w-5" />
                                </motion.div>
                              ) : (
                                <motion.div
                                  key="sun"
                                  initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                  exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <Sun className="h-5 w-5" />
                                </motion.div>
                              )}
                            </AnimatePresence>
                            <span>Toggle Theme</span>
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
