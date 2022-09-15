let memberOne = document.querySelector("#member-1");
let memberTwo = document.querySelector("#member-2");
let memberThree = document.querySelector("#member-3");
let roll = document.querySelector("#roll");
let winner = document.querySelector("#winner");


roll.addEventListener("click", function () {
    memberOne.style.backgroundColor = "white";
    memberTwo.style.backgroundColor = "white";
    memberThree.style.backgroundColor = "white";
    winner.innerText = "";


    let memOne = Math.floor((Math.random() * 6) + 1);
    let memTwo = Math.floor((Math.random() * 6) + 1);
    let memThree = Math.floor((Math.random() * 6) + 1);

    memberOne.innerText = "Member One:- " + memOne;
    memberTwo.innerText = "Member Two:- " + memTwo;
    memberThree.innerText = "Member Three:- " + memThree;

    if (memOne === memTwo || memOne === memThree || memTwo === memThree) {
        if (memOne === memTwo && memOne === memThree) {
            memberOne.style.backgroundColor = "blue";
            memberTwo.style.backgroundColor = "blue";
            memberThree.style.backgroundColor = "blue";
            winner.innerText = "Result: DRAW!!";
            console.log(1)
        }


        if (memOne === memTwo && memOne < memThree) {
            memberOne.style.backgroundColor = "blue";
            memberTwo.style.backgroundColor = "blue";
            memberThree.style.backgroundColor = "green";
            winner.innerText = "🥇 Winner: Member 3";
            console.log(2)
        } else if (memOne === memTwo && memOne > memThree) {
            memberOne.style.backgroundColor = "blue";
            memberTwo.style.backgroundColor = "blue";
            memberThree.style.backgroundColor = "red";
            winner.innerText = "🥇 Winner: Member One and Two";
            console.log(3)
        }


        if (memTwo === memThree && memOne < memThree) {
            memberOne.style.backgroundColor = "red";
            memberTwo.style.backgroundColor = "blue";
            memberThree.style.backgroundColor = "blue";
            winner.innerText = "🥇 Winner: Member Two and Three";
            console.log(4)
        } else if (memTwo === memThree && memOne > memThree) {
            memberOne.style.backgroundColor = "green";
            memberTwo.style.backgroundColor = "blue";
            memberThree.style.backgroundColor = "blue";
            winner.innerText = "🥇 Winner: Member One";
            console.log(5)
        }


        if (memOne === memThree && memOne < memTwo) {
            memberOne.style.backgroundColor = "blue";
            memberTwo.style.backgroundColor = "green";
            memberThree.style.backgroundColor = "blue";
            winner.innerText = "🥇 Winner: Member Two";
            console.log(6)
        } else if (memOne === memThree && memOne > memTwo) {
            memberOne.style.backgroundColor = "blue";
            memberTwo.style.backgroundColor = "red";
            memberThree.style.backgroundColor = "blue";
            winner.innerText = "🥇 Winner: Member One and Three";
            console.log(7)
        }


    } else {

        let min = Math.min(memOne, memTwo, memThree);
        let max = Math.max(memOne, memTwo, memThree);

        if (min === memOne) {
            memberOne.style.backgroundColor = "red";

        } else if (max === memOne) {
            memberOne.style.backgroundColor = "green";
            winner.innerText = "🥇 Winner: Member One";
        } else {
            memberOne.style.backgroundColor = "yellow";
        }


        if (min === memTwo) {
            memberTwo.style.backgroundColor = "red";
        } else if (max === memTwo) {
            memberTwo.style.backgroundColor = "green";
            winner.innerText = "🥇 Winner: Member Two";
        } else {
            memberTwo.style.backgroundColor = "yellow";
        }


        if (min === memThree) {
            memberThree.style.backgroundColor = "red";
        } else if (max === memThree) {
            memberThree.style.backgroundColor = "green";
            winner.innerText = "🥇 Winner: Member Three";
        } else {
            memberThree.style.backgroundColor = "yellow";
        }

    }
});


