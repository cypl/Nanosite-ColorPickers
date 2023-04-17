/**
 * Fonction pour convertir la valeur d'une couleur héxadécimale, en tableau RGB
 * @param {*} h
 * @returns
 */
function hexToRgb(h) {
  return [
    ('0x' + h[1] + h[2]) | 0,
    ('0x' + h[3] + h[4]) | 0,
    ('0x' + h[5] + h[6]) | 0,
  ]
}

/**
 * Fonction qui transforme la valeur héxadécimale en échelle de luminosité (de 0 à 100)
 * HEX › [R,G,B] › R+G+B
 * @param {*} colorHex
 * @returns
 */
export function lightScale(colorHex) {
  const light = 765 // = blanc (255 + 255 + 255)
  const hexLight = hexToRgb(colorHex).reduce((a, b) => a + b) // = la somme de chacune des couches RVB
  return Math.round((hexLight / light) * 100) // = ratio de 0 à 100 (noir à blanc)
}
