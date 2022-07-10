import { Configuration, setup, strict, ThemeConfiguration } from 'twind'

const theme: ThemeConfiguration = {
    extend: {
        fontSize: {
            ttFB: '65px',
        },
        colors: {
            yellow: 'yellow',
        },
    },
}

const config: Configuration = {
    preflight: false,
    mode: strict,
    hash: true,
    darkMode: 'class',
    theme,
}

export const registerTheme = (): void => setup(config)
