// #region Global Imports
import { DefaultTheme } from 'styled-components';
// #endregion Global Imports

interface Theme extends DefaultTheme {
    colors: {
        background: string;
        textBg: string;
        textColor: string;
        accentColor: string;
        titlebarBg: string;
        sidebarBg: string;
        sidebarHoverBg: string;
        explorerBg: string;
        explorerHoverBg: string;
        explorerBorder: string;
        tabsBg: string;
        tabBg: string;
        tabActiveBg: string;
        tabBorder: string;
        bottombarBg: string;
        bottombarBorder: string;
        buttonBg: string;
        buttonText: string;
        bottombarHoverBg: string;
        scrollbarTrackBg: string;
        scrollbarThumbBg: string;
        articleBg: string;
    };
}

const light: Theme = {
    colors: {
        background: '#24292e',
        textBg: 'rgba(56, 58, 61, 0.35)',
        textColor: '#efefef',
        accentColor: '#f9826c',
        titlebarBg: '#3c3c3c',
        sidebarBg: '#333333',
        sidebarHoverBg: '#1f2428',
        explorerBg: '#1f2428',
        explorerHoverBg: '#24292e',
        explorerBorder: '#161a1d',
        tabsBg: '#1f2428',
        tabBg: '#1f2428',
        tabActiveBg: '#24292e',
        tabBorder: '#24292e',
        bottombarBg: '#24292e',
        bottombarBorder: '#1b1f23',
        buttonBg: '#176f2c',
        buttonText: '#dcffe4',
        bottombarHoverBg: '#4f4f52',
        scrollbarTrackBg: '#24292e',
        scrollbarThumbBg: '#333536',
        articleBg: '#1f2428',
    },
};

export { light };
