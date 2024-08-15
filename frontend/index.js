function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgets = document.querySelectorAll('section>div')
  widgets.forEach(widget => {
    widget.classList.add('widget')
  })

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const randomIdx = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIdx]
  //quote
  const quote = document.createElement('div')
  const quoteText = randomQuote.quote
  quote.textContent = quoteText
  const widget1 = document.querySelector('.quoteoftheday')
  widget1.appendChild(quote)
  //author & date
  const authorDate = document.createElement('div')
  const { author, date } = randomQuote
  authorDate.textContent = `${author} in ${date || "an unknown date"}`
  widget1.appendChild(authorDate)

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  // Using random values from the arrays `adverbs`, `nouns`, and `verbs` contained in `data.js`, add to the DOM inside the corportatespeak div in the following format:

// ```html
// <div class="corporatespeak widget">
//   <h3>Corporate Speak</h3>
//   <p>
//     We need to <!-- random verb --> our <!-- random noun --> <!-- random adverb -->
//     in order to <!-- random verb --> our <!-- random noun --> <!-- random adverb -->.
//   </p>
// </div>
// ```

// The text should change at each page load/refresh.
//verb
const randomVerb1 = verbs[Math.floor(Math.random() * verbs.length)]
const randomVerb2 = verbs[Math.floor(Math.random() * verbs.length)]
//adverb
const randomAdverb1 = adverbs[Math.floor(Math.random() * adverbs.length)]
const randomAdverb2 = adverbs[Math.floor(Math.random() * adverbs.length)]
//noun
const randomNoun1 = nouns[Math.floor(Math.random() * nouns.length)]
const randomNoun2 = nouns[Math.floor(Math.random() * nouns.length)]

const whatWeNeed = `We need to ${randomVerb1} our ${randomNoun1} ${randomAdverb1} in order to ${randomVerb2} our ${randomNoun2} ${randomAdverb2}.`
const paragraph = document.createElement('p')
paragraph.textContent = whatWeNeed
document.querySelector('.corporateSpeak')
 
// 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  //You will need `setInterval` and optionally `clearInterval` (research this!). The countdown div in the DOM after 3000 milliseconds should look like so:
const countdownWidg = document.querySelector('.countdown')
let count = 5
const countdown = document.createElement('p')
countdown.textContent = `T-minus ${count}...`
countdownWidg.appendChild(countdown)

setInterval(() => {
  if (count === 1) {
    countdown.textContent = 'Liftoff! 🚀'
  } else {
  count--
  countdown.textContent = `T-minus ${count}...`
  }
}, 1000)


  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
