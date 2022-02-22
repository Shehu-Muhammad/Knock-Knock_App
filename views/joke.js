let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');
let p5 = document.getElementById('p5');
let buttonId = document.getElementById("button")

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

function getJoke(){
    p1.innerHTML = "Knock, Knock!"
    p2.innerHTML = "Who's There?"
}

buttonId.addEventListener("click", getJoke);


// function formatJoke(jokes){
//     setTimeout(,1000)
// }

// function formatJoke(joke) {
//     return [
//       'Knock, knock.',
//       'Who’s there?',
//       joke.name + '.',
//       joke.name + ' who?',
//       joke.name + ' ' + joke.answer
//     ].join('\n')
//   }

