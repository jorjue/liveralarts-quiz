//画像の表示
function answer() {
  var img = document.getElementById("image_place");

  //1問目の変数・定数
  let firstAnswer = document.forms.id_question.id_firstQ.value;
  const first = "リベラルアーツシティ"

  //2問目の変数
  let secondAnswer = document.getElementById("id_secondQ");

  //3問目の変数
  let thirdAnswer = document.getElementById("id_thirdQ").value;

  //正解数による画像の選択
  if (
    firstAnswer == first &&
    secondAnswer.checked &&
    thirdAnswer == "B6"
  ) {
    img.src = "answerImage3.png";
  }
  else if (
    firstAnswer == first && secondAnswer.checked ||
    secondAnswer.checked && thirdAnswer == "B6"  ||
    thirdAnswer == "B6" && firstAnswer == first
  ) {
    img.src = "answerImage2.png";
  }
  else if (
    firstAnswer == first ||
    secondAnswer.checked ||
    thirdAnswer == "B6"
  ) {
    img.src = "answerImage1.png";
  }
  else {
    img.src = ""
  }
}
