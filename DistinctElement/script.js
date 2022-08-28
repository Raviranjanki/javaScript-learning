findDistinctElement = (arg) => {
  arg.sort();
  let x;
  for (let i = 0; i < arg.length; i++) {
    if (arg[i] == arg[i + 1]) {
      x = arg[i];
    }
    if (x != arg[i]) console.log(arg[i]);
  }
};
findDistinctElement([8, 5, 1, 2, 1, 7, 5, 9]);
