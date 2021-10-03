const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(chosenImage);

const bgImage = document.createElement("img")
// createElement("img") => img라는 element를 생성
bgImage.src = `images/${chosenImage}`;
// img/ 는 이미지가 들어있는 폴더 이름
// img 경로 = img 폴더 한에 chosenImage

// `img/${chosenImage}` = string
console.log(bgImage);

document.body.appendChild(bgImage);

bgImage.style.width = "100%";
bgImage.style.height = "100vh";
