module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3, // Ensure you install core-js if not already done
      },
    ],
  ],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    // Add any other plugins you need, such as for class properties or decorators
  ],
};
