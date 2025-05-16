import Anagrama from "./anagrama.js";

export default function anagramaListChecker(json) {
  return json.map((ana) => {
    return Anagrama(ana.anagrama[0], ana.anagrama[1]);
  });
}
