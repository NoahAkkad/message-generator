# Message Generator Project

## Objective
Build a message generator program using JavaScript, incorporating randomness to generate new outputs on each run. Utilize Git version control, work on the command line, and develop the project locally on your computer.

## Prerequisites
- JavaScript
- Git and GitHub
- Command line

## Project Details

### Program Structure

The message generator program is designed to output a new, randomized message composed of at least three different pieces of data. For this example, let's create a motivational message generator.

### JavaScript Code

```javascript
// Define arrays with motivational quotes, positive adjectives, and random activities
const motivationalQuotes = [
  "Believe in yourself, and you will be unstoppable.",
  "Your attitude determines your direction.",
  "The only way to do great work is to love what you do.",
  // Add more quotes as needed
];

const positiveAdjectives = [
  "amazing",
  "inspiring",
  "positive",
  "energetic",
  // Add more adjectives as needed
];

const randomActivities = [
  "coding",
  "learning new skills",
  "helping others",
  "exploring new ideas",
  // Add more activities as needed
];

// Function to generate a random message
function generateRandomMessage() {
  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
  const randomAdjective = positiveAdjectives[Math.floor(Math.random() * positiveAdjectives.length)];
  const randomActivity = randomActivities[Math.floor(Math.random() * randomActivities.length)];

  const message = `Today's message: ${randomQuote} Be ${randomAdjective} while ${randomActivity}.`;

  return message;
}

// Display the generated message
console.log(generateRandomMessage());
