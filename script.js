const bioName = document.getElementsByClassName('bioName')
const ayoBerteman = document.getElementsByClassName('ayoBerteman')[0]
const button = document.getElementsByClassName('button')[0]

console.log(button);

button.onclick = () => {
    ayoBerteman.innerHTML = 'Ayo Berteman!';
}