export const config = [
  {
    imgSrc:
      "https://ohmylook.ua/files/products/42504.290x484.JPG?ce7d3c50d2e66b146f8711dd9eb7af35",
    imgAlt: "my picture",
    callback: () => console.log("hi from Block 1"),
    ui: "2124e434"
  },
  {
    content: "Magdalena",
    callback: () => console.log("hi from Block 2"),
    ui: "2334s343"
  },
  {
    userData: { country: "USA", street: "Maskavas" },
    callback: () => console.log("hi from Block 3"),
    ui: "12332dd343"
  }
];
