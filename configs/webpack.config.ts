import path from 'path'
import webpack from 'webpack'
import webpackMerge from 'webpack-merge'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import MinaWebpackPlugin from './mp-webpack-plugin'
import Sass from 'sass'
import { config as baseConfig } from './webpack.config.base'

export async function getStandardConfig(): Promise<Partial<webpack.Configuration>> {
  return {
    entry: {
      app: resolve('../src/app.ts'),
    },
    plugins: [
      new webpack.WatchIgnorePlugin([/node_modules/]),
      new CopyWebpackPlugin([{
        from: {
          glob: resolve('../src/**/*'),
          follow: true,
        },
        to: '.',
        ignore: [
          '*.ts',
          '_*.scss',
          '_*.sass',
        ],
        context: resolve('../src'),
        transform: (content: string, path: string) => {
          if (path.endsWith('.scss') || path.endsWith('.sass')) {
            return new Promise((resolve, reject) => {
              Sass.render({ file: path }, (err: Error, result: { css: string }) => {
                if (err) {
                  reject(err)
                } else {
                  resolve(result.css)
                }
              })
            })
          }

          return content
        },
        transformPath: (targetPath: string, sourcePath: string) => {
          if (targetPath.endsWith('.scss') || targetPath.endsWith('.sass')) {
            return targetPath.replace(/\.(scss|sass)/, '.wxss')
          }
          return targetPath
        },
      } as any]),
      new MinaWebpackPlugin,
      new CleanWebpackPlugin(resolve('../dist/*'), { allowExternal: true }),
    ],
  }
}

export default async () => webpackMerge(
  baseConfig,
  await getStandardConfig(),
)

function resolve(filePath: string) {
  return path.resolve(__dirname, filePath)
}
