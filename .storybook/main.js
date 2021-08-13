module.exports = {
  "stories": [
    "../.storybook/**/*.stories.mdx",
    "../.storybook/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "storybook-addon-material-ui"
  ]
}