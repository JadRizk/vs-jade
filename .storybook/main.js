module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-controls',
        '@storybook/addon-knobs',
        'storybook-addon-styled-component-theme/dist/register',
    ],
    webpackFinal: async config => {
        return config;
    },
};
