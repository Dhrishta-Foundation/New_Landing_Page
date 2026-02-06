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
                    DEFAULT: "#0f172a", // Slate 900
                    light: "#1e293b", // Slate 800
                    dark: "#020617", // Slate 950
                },
                secondary: {
                    DEFAULT: "#f1f5f9", // Slate 100
                    dark: "#e2e8f0", // Slate 200
                },
                accent: {
                    DEFAULT: "#f59e0b", // Amber 500
                    hover: "#d97706", // Amber 600
                    light: "#fbbf24", // Amber 400
                },
                surface: {
                    DEFAULT: "#ffffff",
                    alt: "#f8fafc", // Slate 50
                },
                text: {
                    DEFAULT: "#334155", // Slate 700
                    light: "#64748b", // Slate 500
                    dark: "#0f172a", // Slate 900
                },
                border: {
                    light: "#e2e8f0", // Slate 200
                    DEFAULT: "#cbd5e1", // Slate 300
                }
            },
            fontFamily: {
                lato: ["Lato", "sans-serif"], // Keeping existing font, consider switching to Inter/Outfit later if needed
            },
            boxShadow: {
                'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                'hard': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                'glow': '0 0 15px rgba(245, 158, 11, 0.5)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
