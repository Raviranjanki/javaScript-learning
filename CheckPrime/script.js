isPrime = () => {
  let input = Number(document.getElementById("prime_value").value);
  let counter = 0;
  for (let i = 1; i <= Math.sqrt(input); i++) {
    if (input % i == 0) {
      counter++;
    }
  }
  if (counter == 1) {
    return input + " is prime Number";
  } else {
    return input + " is not prime Number";
  }
};
