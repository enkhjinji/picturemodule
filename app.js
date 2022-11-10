// let first = () => {
//   console.log("hello world");

//   setTimeout(second, 1000);
//   console.log("bye bye");
// };
// let second = () => {
//   console.log("whats your name");
// };

// let promise = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(promise);
// promise
//   .then((response) => {
//     let text = response.json();
//     return text;
//   })
//   .then((el) => {
//     el.forEach((element) => {
//       console.log(element.name);
//     });
//   });
// catch
// finally

function search() {
  async function init() {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/search?api_key=8pGsh45WZS5lh8gNO0bYFRGE5ArnEMOe&q=" +
        search1.value
    );
    const body = await response.json();
    console.log(body);
    const imgTag = document.querySelector("#myImg");
    imgTag.src = body.data[1].images.original.url;
  }
  init();
}

// let promise = fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
// promise
//   .then((response) => {
//     let text = response.json();
//     return text;
//   })
//   .then((el) => {
//     el.forEach((element) => {
//       let x = document.createElement("myImg");
//       x.src = element.url;
//       console.log(element);
//     });
//   });

//  albums hrglgcin mdell zurag
