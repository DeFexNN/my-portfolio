export const languageColors = {
  JavaScript: '#f7df1e',
  TypeScript: '#007acc',
  Python: '#3776ab',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  'C#': '#178600',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Swift: '#ffac45',
  Kotlin: '#A97BFF',
  Go: '#00ADD8',
  Rust: '#dea584',
  HTML: '#e34c26',
  CSS: '#563d7c',
  SCSS: '#c6538c',
  Vue: '#41b883',
  React: '#61dafb',
  Angular: '#dd1b16',
  Node: '#339933',
  Docker: '#384d54',
  Shell: '#89e051',
  // Додайте інші мови та їх кольори
};

export const languageIcons = {
  JavaScript: "devicon-javascript-plain",
  TypeScript: "devicon-typescript-plain",
  Python: "devicon-python-plain",
  Java: "devicon-java-plain",
  "C++": "devicon-cplusplus-plain",
  C: "devicon-c-plain",
  "C#": "devicon-csharp-plain",
  PHP: "devicon-php-plain",
  Ruby: "devicon-ruby-plain",
  Swift: "devicon-swift-plain",
  Kotlin: "devicon-kotlin-plain",
  Go: "devicon-go-plain",
  Rust: "devicon-rust-plain",
  HTML: "devicon-html5-plain",
  CSS: "devicon-css3-plain",
  SCSS: "devicon-sass-original",
  Vue: "devicon-vuejs-plain",
  React: "devicon-react-original",
  Angular: "devicon-angularjs-plain",
  Node: "devicon-nodejs-plain",
  Docker: "devicon-docker-plain",
  Shell: "devicon-bash-plain",
  // Додайте інші мови за потребою
};

export const getLanguageIcon = (language) => {
  return languageIcons[language] || "fas fa-code"; // Повертаємо стандартну іконку, якщо немає відповідної
};

export const getLanguageColor = (language) => {
  return languageColors[language] || "#ffffff";
};
