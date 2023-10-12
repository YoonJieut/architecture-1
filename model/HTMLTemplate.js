const _pokemonKorName = require('./pokemonArr');
const setTagMakerPokemonList = require('./makeLiTag');

const HTMLTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pokemon List</title>
</head>
<body>
  <h1>Pokemon List</h1>
  <ul>
    ${setTagMakerPokemonList(_pokemonKorName, "li")}
  </ul>
</body>
</html>
`;
// console.log(HTMLTemplate);
module.exports = HTMLTemplate;