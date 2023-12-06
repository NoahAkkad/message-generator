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