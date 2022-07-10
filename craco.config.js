const path = require('path')

module.exports = {
    webpack: {
        alias: {
            '~': path.resolve(__dirname),
            '@': path.resolve(__dirname, 'src'),
            '@src': path.resolve(__dirname, 'src'),
            '@styles': path.resolve(__dirname, 'src', 'styles'),
            '@reducers': path.resolve(__dirname, 'src', 'reducers'),
            '@components': path.resolve(__dirname, 'src', 'components'),
            '@hooks': path.resolve(__dirname, 'src', 'hooks'),
            '@context': path.resolve(__dirname, 'src', 'context'),
            '@theme': path.resolve(__dirname, 'src', 'theme'),
        },
    },
}
