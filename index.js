// console.log('Hey wpx16 whuzzzuuuuup!');

// const myH1 = document.getElementsByTagName('h1');
// console.log(myH1);
// myH1[0].style.color = 'red';

let count = 0;
const mySpanTag = document.getElementById('count');
mySpanTag.innerText = count;

function incrementor() {
    mySpanTag.innerText = ++count;
}

function decrementor() {
    mySpanTag.innerText = --count;
}

function setUsername() {
    // Get the input with an ID of username
    const usernameInput = document.getElementById('username');
    // Get target h1 inside the class array by selecting index 0
    const targetH1 = document.getElementsByClassName('username')[0];
    // Set innerText of h1 element to the value of the username input
    targetH1.innerText = usernameInput.value;
    // Clear text box after entering data
    usernameInput.value = '';
}

function updatePTags() {
    const allPTags = document.getElementsByTagName('p');
    for (let i = 0; i < allPTags.length; i++){
        allPTags[i].className = 'p-tag-color';
    }
}