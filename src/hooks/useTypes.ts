export type Types =
  "normal" |
  "fighting" |
  "flying" |
  "poison" |
  "ground" |
  "rock" |
  "bug" |
  "ghost" |
  "steel" |
  "fire" |
  "water" |
  "grass" |
  "electric" |
  "psychic" |
  "ice" |
  "dragon" |
  "dark" |
  "fairy" |
  "unknown" |
  "shadow" 
  ;

export const useTypes = () => {
  const getColorByType = (type: Types): string => {
    const obj: Record<Types, string> = {
      normal: "gray",
      fighting: "red",
      flying: "cyan",
      poison: "purple",
      ground: "brown",
      rock: "blackAlpha.400",
      bug: "green.200",
      ghost: "gray.200",
      steel: "gray.300",
      fire: "orange",
      water: "blue",
      grass: "green",
      electric: "yellow",
      psychic: "pink",
      ice: "blue.200",
      dragon: "orange.800",
      dark: "black",
      fairy: "pink.200",
      unknown: "purple.200",
      shadow: "blackAlpha.100"
    };

    return obj[type]
  }

  return {getColorByType}
};