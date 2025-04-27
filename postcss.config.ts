
// postcss.config.ts

import tailwindConfig from './tailwind.config.cts'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'

export default {
  plugins: [tailwind(tailwindConfig), autoprefixer],
}
