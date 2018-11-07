// Take the user on a short text adventure of your own composition. Use `window.alert()` to describe to them a situation, and `window.prompt()` to collect input from them to see what they will do. For example:
//
// - Window: `What direction do you travel in? (N, S, E, W)`
// - User: `N`
// - Window: `You see a babbling brook.`


alert(`Oh no! You've gone too deep into the internet and have wound up in Webnia...`)

let input = prompt(`Please choose a cardinal direction (N, S, E, W) to start your journey`).toUpperCase()

if(input === 'N'){alert(`You've wandered in to the territory of the Incels. Fair maidens beware! Men fall not for their ideaologies.`)}
if(input === 'S'){alert(`You've gone into the Dark Web... You're really into that? :face_vomiting: Ugh, you need religion.`)}
if(input === 'E'){alert(`You've found the Silk Road. You can barter fo near anything you like, maybe even a way home.`)}
if(input === 'W'){alert(`You've fallen into a WikiHole... ne'er to return again.`)}
