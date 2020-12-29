import answers from "./answers";

/* Returns an array of cards randomly shuffled */
const initAnswers = () => {
  const newAnswers = shuffle(answers);

  return newAnswers;
};

/* Accepts an array of cards and shuffles it */
const shuffle = (array : any) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

/* Returns and  */
const nextCard = () => {};

export { initAnswers, shuffle, nextCard };
