/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        primary: {
          main: "#ffffff",
          light: "#e5e5e5",
          dark: "#ffffff",
          contrast: "#000000"
        },
        secondary: {
          main: "#a3a3a3",
          light: "#d4d4d4",
          dark: "#737373"
        },
        neutral: {
          background: "#000000",
          surface: "#171717",
          border: "#333333",
          text_primary: "#ffffff",
          text_secondary: "#a3a3a3"
        },
        accent: {
          success: "#22c55e",
          warning: "#f97316",
          error: "#ef4444",
          info: "#3b82f6"
        }
      },
      fontFamily: {
        heading: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
