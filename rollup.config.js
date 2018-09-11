import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

const pkg = require('./package.json')

const banner = `/*!
 * Name: ${pkg.name}
 * Description: ${pkg.description}
 * Author: ${pkg.author.name}
 * Version: v${pkg.version}
 */
`

export default {
  input: 'src/index.js',
  output: {
    file: `dist/${pkg.name}.js`,
    format: 'esm',
    banner,
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
