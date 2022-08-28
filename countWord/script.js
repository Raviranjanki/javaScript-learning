countWords = () => {
  let sentance = document.getElementById("count_word").value;
  let words = 0;
  for (i = 0; i < sentance.length; i++) {
    if (
      (i > 0 && sentance[i] != " " && sentance[i - 1] == " ") ||
      (sentance[0] != " " && i == 0)
    ) {
      words++;
    }
  }
  return "word counts are " + words;
};
