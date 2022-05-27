const theCountEle = document.getElementById("theCount");
let theCount = parseInt(theCountEle.textContent);

const modifyCounter = (num) => {
  if (num !== 0) {
    theCount = theCount + num;
    theCountEle.textContent = theCount;
  } else {
    theCount = 0;
    theCountEle.textContent = theCount;
  }
};

const changeCounter = (e) => {
  const method = e.currentTarget.textContent;
  switch (method) {
    case "decrease":
      modifyCounter(-1);
      break;
    case "increase":
      modifyCounter(1);
      break;
    default:
      modifyCounter(0);
  }
};

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    changeCounter(e);
  });
});
