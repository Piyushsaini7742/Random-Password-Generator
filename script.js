let input = document.querySelector("input");
let button = document.querySelector("button");
button.addEventListener("click", () => {
    let data = "";
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$&!#@";
    for (let i = 0; i < 12; i++) {
        let unique = Math.floor(Math.random() * characters.length);
        data += characters.charAt(unique);
    }
    input.value = data;
});