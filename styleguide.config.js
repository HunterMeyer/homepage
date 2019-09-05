// https://github.com/styleguidist/react-styleguidist/blob/master/src/client/styles/theme.js
// https://github.com/vue-styleguidist/buefy-styleguide-example/blob/master/docs-styleguidist/styles.js
// https://vue-styleguidist.github.io/docs/Cookbook.html#how-to-change-the-layout-of-a-style-guide
const path = require('path')

module.exports = {
  title: 'Hunter Meyer',
  defaultExample: false,
  require: [
    path.join(__dirname, './src/assets/css/tailwind.css'),
  ],
  template: {
    favicon: process.env.BASE_URL + 'favicon.ico'
  },
  theme: {
    color: {
      base: '#525252',
      baseBackground: '#f7fafc',
      border: '#4c5566',
      link: '#95dcd3',
      linkHover: '#269284',
      sidebarBackground: '#4c5566'
    }
  },
  styles: {
    Logo: {
      logo: {
        borderBottom: 'none',
        color: '#fff',
        fontSize: 20
      }
    },
    TableOfContents: {
      input: {
        backgroundColor: '#3b4454',
        border: 'none',
        color: '#fff',
        '&:focus': {
          border: 'none'
        }
      }
    },
    Playground: {
      preview: {
        border: '1px solid #e0e0e0 !important'
      }
    },
    ComponentsList: {
      item: {
        '& a': {
          color: '#95dcd3',
          cursor: 'pointer !important',
          '&:hover': {
            color: '#fff'
          }
        }
      },
      isSelected: {
        '& a': {
          color: '#fff !important'
        }
      }
    }
  },
  sections: [
    {
      name: 'UI Components',
      components: 'src/components/**/[A-Za-z]*.vue'
    }
  ],
  renderRootJsx: path.join(__dirname, 'config/styleguide.root.js'),
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  }
}
