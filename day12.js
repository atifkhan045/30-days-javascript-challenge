function changeContent(){
    document.getElementById('content').innerHTML = 'I want to become a Full Stack Developer'
}
function changeBg() {
    const elements = document.getElementsByClassName('bg');
    elements[0].style.backgroundColor = 'lightgreen'; // Change the background color to light green
}

// <!-- task 3 : create a new div element with some text content and append it to the body -->

const existingDiv = document.getElementById('existingDiv')
const divElement = document.createElement('div');
divElement.textContent = 'I am a new div'
existingDiv.appendChild(divElement)

// <!-- task 4 : create a new li element and add it to the existing ul list -->
const unorderedList = document.getElementById('unorderedList');
const newzListItem = document.createElement('li');
newzListItem.textContent = 'i am list item';
unorderedList.appendChild(newzListItem) 

// task 5 : Select an Html element and remove it from the dom
function deleteH2(){
    const h2Element = document.getElementsByClassName('h2');
h2Element[0].remove()
}

// Task 6 : Remove a last child of specific element
function RemoveLastChild(){
    const parentElement = document.getElementById('parent');
    parentElement.removeChild(parentElement.lastElementChild)
}

// task 7 : Selct an html element and change one of it's attributes
function changeImage(){
    const imgElement = document.getElementsByClassName('img1');
    imgElement[0].setAttribute('src','img2.png')
}

// task 8 : Add and remove css class to/from an Html element
function addClass(){
    const h3Element2 = document.getElementById('h3');
    h3Element2.classList.add('yellow')
}
function removeClass(){
    const h3Element2 = document.getElementById('h3');
    h3Element2.classList.remove('yellow')
}