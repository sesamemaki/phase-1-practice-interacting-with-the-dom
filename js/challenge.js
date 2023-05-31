//timer increment every
let playing = !0;
timer = function () {
  return setInterval(function () {
    let counter = document.getElementById("counter");
    countNum = parseInt(counter.innerText);
    counter.innerText = countNum + 1;
  }, 1e3);
};
interval = timer();

//increment and decrement the counter using the plus and minus buttons

minus = document.getElementById("minus");
plus = document.getElementById("plus");

minus.addEventListener("click", function () {
  countNum = parseInt(counter.innerText);
  counter.innerText = countNum - 1;
});
plus.addEventListener("click", function () {
  countNum = parseInt(counter.innerText);
  counter.innerText = countNum + 1;
});

//like functionality and  count of the number of 'likes' associated with that number displayed

heart = document.getElementById("heart");

function _toConsumableArray(counter) {
  if (Array.isArray(counter)) {
    for (
      let countNum = 0, likes = Array(counter.length);
      countNum < counter.length;
      countNum++
    )
      likes[countNum] = counter[countNum];
    return likes;
  }
  return Array.from(counter);
}

heart.addEventListener("click", function () {
  let counter = document.getElementById("counter"),
    countNum = parseInt(counter.innerText),
    likes = document.querySelector(".likes"),
    like = 0;
  if (
    []
      .concat(_toConsumableArray(likes.children))
      .map(function (counter) {
        return parseInt(counter.dataset.num);
      })
      .includes(countNum)
  ) {
    like = document.querySelector('[data-num="' + countNum + '"]');
    let likeComment = parseInt(like.children[0].innerText);
    like.innerHTML =
      countNum + " has been liked <span>" + (likeComment + 1) + "</span> times";
  } else (like = document.createElement("li")).setAttribute("data-num", countNum), (like.innerHTML = countNum + " has been liked <span>1</span> time"), likes.appendChild(like);
});

// pause and restart the counter
pause = document.getElementById("pause");

pause.addEventListener("click", function () {
  playing
    ? ((playing = !1), clearInterval(interval), (this.innerText = "resume"))
    : ((playing = !0), (interval = timer()), (this.innerText = "pause")),
    []
      .concat(_toConsumableArray(document.getElementsByTagName("button")))
      .forEach(function (counter) {
        "pause" !== counter.id && (counter.disabled = !playing);
      });
});

//leaving comments
commentForm = document.getElementsByTagName("form")[0];
commentForm.addEventListener("submit", function (counter) {
  counter.preventDefault();
  let countNum = this.children[0],
    likes = countNum.value;
  countNum.value = "";
  let like = document.querySelector(".comments"),
    likeComment = document.createElement("p");
  (likeComment.innerText = likes), like.appendChild(likeComment);
});
