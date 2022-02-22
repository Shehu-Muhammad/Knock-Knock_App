var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var p3 = document.getElementById('p3');
var p4 = document.getElementById('p4');
var p5 = document.getElementById('p5');
let buttonId = document.getElementById("start");
var number = 0;

function tellJoke()
{
        var jokes = [
        {name: 'Dozen', answer: 'anybody want to let me in?'},
        {name: 'Avenue', answer: 'knocked on this door before?'},
        {name: 'Ice Cream', answer: 'if you don\'t let me in!'},
        {name: 'Adore', answer: 'is between us. Open up!'},
        {name: 'Lettuce', answer: 'in. It\'s cold out here!'},
        {name: 'Bed', answer: 'you can not guess who I am.'},
        {name: 'Al', answer: 'give you a kiss if you open the door.'},
        {name: 'Olive', answer: 'you!'},
        {name: 'Abby', answer: 'birthday to you!'},
        {name: 'Rufus', answer: 'the most important part of your house.'},
        {name: 'Cheese', answer: 'a cute girl.'}
    ]
    
    if(number === 0)
    {
        //do nothing because it is the first joke in the jokes object
    }
    else if(number === jokes.length)
    {
        number = 0;
    }
       
    let joke = jokes[number];
    let name = joke.name;
    p1.innerHTML = "Knock Knock!";
    p2.innerHTML = "Who's there?";
    p3.innerHTML = `Person 1: ${name}.`;
    p4.innerHTML = `Person 2:'${name}' who?`;
    p5.innerHTML = `Person 1: ${name} ${joke.answer}.`
    
    number++;
    
}

function clearJokes() 
{
    p1.innerHTML = "";
    p2.innerHTML = "";
    p3.innerHTML = "";
    p4.innerHTML = "";
    p5.innerHTML = "";
}
document.getElementById("start").addEventListener("click", tellJoke);
document.getElementById("clear").addEventListener("click", clearJokes);
