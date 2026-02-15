/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      animation: {
        "fade-up": "fadeInUp 0.6s ease-out both",
        "slide-left": "slideInLeft 0.7s ease-out both",
        "slide-right": "slideInRight 0.7s ease-out both",
      },

      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },

      backdropBlur: {
        xs: "10px",
      },

      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #ec4899, #f43f5e)",
        "gradient-bg": "linear-gradient(135deg, #0f172a 0%, #1a0033 50%, #0f172a 100%)",
      },
    },
  },
  plugins: [],
}


