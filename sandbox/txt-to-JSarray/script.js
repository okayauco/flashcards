function autoMagical() {
  var regEx = /(^.+$)\n(^.+$)\n(^.+$)\n(^.+$)\n/gm;
  var inputText = document.getElementById("rawText").value;
  var subStr = `{English: "$1", Romaji: "$2", Hiragana: "$3", Kanji: "$4"},`;
      // The substituted value will be contained in the result variable
  var convertedText = inputText.replace(regEx, subStr);

  document.getElementById("results").innerHTML = convertedText;
}
