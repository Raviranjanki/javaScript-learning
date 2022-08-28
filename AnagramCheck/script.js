isAnagram = () => {
  let str1 = document.getElementById("Anagram_fWord").value;
  let str2 = document.getElementById("Anagram_sWord").value;
  let bool = false;
  if (str1.length == str2.length) {
    for (let i = 0; i < str1.length; i++) {
      for (let j = 0; j < str2.length; j++) {
        if (str1[i] == str2[j]) {
          bool = true;
          break;
        } else {
          bool = false;
        }
      }

      if (!bool) {
        break;
      }

      for (let j = 0; j < str2.length; j++) {
        if (str2[i] == str1[j]) {
          bool = true;
          break;
        } else {
          bool = false;
        }
      }
    }
  }

  if (bool) {
    return "number is anagram";
  } else {
    return "number is not anagram";
  }
};
