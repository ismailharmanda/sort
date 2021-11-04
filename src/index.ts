import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([10, 3, -5, 0, -8]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(sorter.collection);
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("İsmail");
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
