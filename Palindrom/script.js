function palindrome() {
  let value = document.getElementById("palindrom").value;
  let check = "";
  for (let i = value.length - 1; i >= 0; i--) {
    check += value[i];
  }
  if (check == value) {
    return value + " is plindrome";
  } else {
    return value + " is not plindrome";
  }
}
