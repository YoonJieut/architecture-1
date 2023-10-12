// 포켓몬스터 한글 배열을 html li 태그로 만들어주는 함수
function setTagMakerPokemonList(pokemonKorName, tagName){
  if(Array.isArray(pokemonKorName)===true){
    let arrayLiTagPokemonList  = [];
    for (let i=0; i <pokemonKorName.length; i++){
      arrayLiTagPokemonList.push(`<${tagName}>${pokemonKorName[i]}</${tagName}>`)
    }
    return arrayLiTagPokemonList.join("");
  }else{
    return new Error(" 배열이 아님당 ");
  }
}

module.exports = setTagMakerPokemonList;