const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const btn = document.querySelector(".btn");
let play = false;
let newWord = "";
let randWord = "";
let sWord = ["javascript", "c++", "java", "html", "reactjs", "swift", "sql"];


function CreateNewWord() {
    let ranNum = Math.floor(Math.random() * sWord.length);
    // console.log(ranNum);
    let newTempSword = sWord[ranNum];
    // console.log(newTempSword);
    return newTempSword;
}

function scrambleWord(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        // console.log(temp);
        let j = Math.floor(Math.random() * (i + 1));
        // console.log(i);
        // console.log(j);
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
btn.addEventListener("click", function () {
    if (!play) {
        play = true;
        btn.innerHTML = "Guess"
        guess.classList.toggle('hidden');
        newWord = CreateNewWord();
        randWord = scrambleWord(newWord.split("")).join("");
        // console.log(randWord);
        msg.innerHTML = ` Guess the Word:${randWord}`;
    }
    else {
        let UserWord = guess.value;
        if (UserWord === newWord) {
            // console.log("corect");\
            play = false;
            msg.innerHTML = `AweSome It's Correct. It is ${newWord} `
            btn.innerHTML = `Start Again`
            guess.classList.toggle('hidden');
            guess.value = "";


        } else {
            // console.log("Incorect");
            msg.innerHTML = `Sorry Boss It's Incorrect. Plz Try Again ${randWord}`

        }
    }
})
