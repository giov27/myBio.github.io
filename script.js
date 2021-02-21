//Declare variable
const bioName = document.getElementsByClassName('bioName')
const ayoBerteman = document.getElementsByClassName('ayoBerteman')[0]
const buttonKlik = document.getElementsByClassName('buttonKlik')[0]
const buttonTop = document.getElementById('buttonTop')
const listGroup = document.getElementById('listGroup')

// console.log(listGroup);

//make button that response onclik at the header
buttonKlik.onclick = () => {
    ayoBerteman.innerHTML = "Let's be friend!";
    buttonKlik.disabled = true;
}

//make top button appear, when user scrool the page 40px
window.onscroll = () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        buttonTop.style.display = "block";
        // ayoBerteman.innerHTML = "<br>";
    } else {
        buttonTop.style.display = "none";
    }

}

//make button Top response, and user will go to the top of the page
buttonTop.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//the list will change color, when mouseover and mouseout it
listGroup.onmouseover = () => {
    listGroup.style.color = "#8e8d11";
}

listGroup.onmouseout = () => {
    listGroup.style.color = "#E4E3B6";
}

$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
        var file = 'views/' + $(this).data('include') + '.html'
        $(this).load(file)
    })
})