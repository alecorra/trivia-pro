/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */

// logic based on Fisher-Yates algorithm https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

export const shuffle = (array: Array<any>): Array<any> => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
