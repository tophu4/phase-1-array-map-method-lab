const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// Return array using .map method
const titleCased = () => {
  return tutorials.map(title => {
    let newTitle = "";
    newTitle += title[0].toUpperCase();
    for(let i = 1; i < title.length; i++) {
      if(title[i-1] === ' ') {
        newTitle += title[i].toUpperCase();
      }
      else {
        newTitle += title[i];
      }
    }
    return newTitle;
  });
}
