export const generateStars = function() {
  let firstLayer = document.getElementById("first-layer-stars");
  let secondLayer = document.getElementById("second-layer-stars");
  let thirdLayer = document.getElementById("third-layer-stars");

  let iterator = 0;
  while (iterator <= 500) {
    let xpositionStar1 = Math.random();
    let ypositionStar1 = Math.random();
    let xpositionStar2 = Math.random();
    let ypositionStar2 = Math.random();
    let xpositionStar3 = Math.random();
    let ypositionStar3 = Math.random();

    var positionForStar1 = {
      x: window.innerWidth * xpositionStar1,
      y: window.innerHeight * ypositionStar1
    };
    var positionForStar2 = {
      x: window.innerWidth * xpositionStar2,
      y: window.innerHeight * ypositionStar2
    };
    var positionForStar3 = {
      x: window.innerWidth * xpositionStar3,
      y: window.innerHeight * ypositionStar3
    };

    let starType1 = document.createElement("div");
    starType1.classList.add("star");
    starType1.classList.add("animated");
    starType1.classList.add(iterator);
    starType1.style.cssText =
      "top:" +
      positionForStar1.y +
      "px;left:" +
      positionForStar1.x +
      "px;background: whitesmoke;";
    firstLayer.appendChild(starType1);

    let starType2 = document.createElement("div");
    starType2.classList.add("star");
    starType2.classList.add(iterator);
    starType2.style.cssText =
      "top:" +
      positionForStar2.y +
      "px;left:" +
      positionForStar2.x +
      "px;background: white;";
    secondLayer.appendChild(starType2);

    let starType3 = document.createElement("div");
    starType3.classList.add("star");
    starType3.classList.add(iterator);
    starType3.style.cssText =
      "top:" +
      positionForStar3.y +
      "px;left:" +
      positionForStar3.x +
      "px;background: yellow;";
    thirdLayer.appendChild(starType3);

    iterator++;
  }
};

export const animateStars = function(numberOfStarsToAnimate, numberOfLayer) {};
