module.exports = {
  title: "Hello Tailwind-Press!",
  description: "Blog v0.0.1",
  themeConfig: {
    nav: [
      {
        text: "blogs",
        items: [
          { text: "blog1", link: "/blogs/blog1.md" },
          { text: "blog2", link: "/blogs/blog2.md" }
        ]
      }
    ]
  },
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("./tailwind.config.js")
    ]
  }
};
