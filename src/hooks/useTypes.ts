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
      normal: "#A1A3A0",
      fighting: "#F37A75",
      flying: "#CAB4F4",
      poison: "#D583C5",
      ground: "#E9C26C",
      rock: "#C3D267",
      bug: "#DAC27E",
      ghost: "#A995BE",
      steel: "#2195A5",
      fire: "#FFAD76",
      water: "#92B8F7",
      grass: "#8DDB8A",
      electric: "#FFD857",
      psychic: "#FF8EB1",
      ice: "#AEE8E8",
      dragon: "#AE7CFC",
      dark: "#A79187",
      fairy: "#FFB1C0",
      unknown: "#gray",
      shadow: "purple"
    };

    return obj[type]
  }

  return {getColorByType}
};