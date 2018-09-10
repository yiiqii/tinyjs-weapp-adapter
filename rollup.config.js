import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

const pkg = require('./package.json')

export default {
  input: 'src/index.js',
  output: {
    file: `dist/${pkg.name}.js`,
    format: 'esm',
  },
  plugins: [
    resolve(),
    babel({
      include: ['./src/**/*.js'],
      presets: [
        [
          'env', {
            modules: false,
          },
        ],
        'stage-0',
      ],
      plugins: [
        'external-helpers',
      ],
      comments: false,
    }),
  ],
}
