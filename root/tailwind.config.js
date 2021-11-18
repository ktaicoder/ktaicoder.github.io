module.exports = {
    future: 'all',
    experimental: 'all',
    purge: ['./pages/**/*.tsx', './src/**/*.tsx'],
    variants: {},
    theme: {
        fontFamily: {
            'sans': ['"Noto Sans KR"', 'system-ui'],
            'mono': ['"Nanum Gothic Coding"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
            'body': ['"Noto Sans KR"', 'Roboto'],
            'display': ['"Noto Sans KR"', 'Roboto'],
        },
    },
    plugins: [require('@tailwindcss/typography')]
};
