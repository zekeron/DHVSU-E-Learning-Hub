const config= {
    darkMode: ['class'],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    '500': '#562424',
                    '400': '#6D3636',
                    '300': '#924444',
                    '200': '#A94C4C',
                    '100': '#C17171',
                    DEFAULT: '#701D0B',
                },
                red: '#FF7474',
                error: '#b80000',
                green: '#3DD9B3',
                blue: '#56B8FF',
                pink: '#EEA8FD',
                orange: '#F9AB72',
                light: {
                    '100': '#333F4E',
                    '200': '#A3B2C7',
                    '300': '#F2F5F9',
                    '400': '#F2F4F8',
                },
                dark: {
                    '100': '#04050C',
                    '200': '#131524',
                },
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
            },
            fontFamily: {
                poppins: ['var(--font-poppins)'],
            },
            boxShadow: {
                'drop-1': '0px 10px 30px 0px rgba(66, 71, 97, 0.1)',
                'drop-2': '0 8px 30px 0 rgba(65, 89, 214, 0.3)',
                'drop-3': '0 8px 30px 0 rgba(65, 89, 214, 0.1)',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'caret-blink': {
                    '0%,70%,100%': {
                        opacity: '1',
                    },
                    '20%,50%': {
                        opacity: '0',
                    },
                },
            },
            animation: {
                'caret-blink': 'caret-blink 1.25s ease-out infinite',
            },
        },
    },
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [require('tailwindcss-animate')],
};


export default config;