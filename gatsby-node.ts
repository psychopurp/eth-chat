import type { GatsbyNode } from 'gatsby'
import webpack from 'webpack'

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] =
  async ({ actions }) => {
    actions.setWebpackConfig({
      plugins: [
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
        }),
      ],
    })
  }
