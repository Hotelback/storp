const findMostFrequentElement = (arr) => {
    const frequencyMap = new Map();
  
    arr.forEach((element) => {
      if (frequencyMap.has(element)) {
        frequencyMap.set(element, frequencyMap.get(element) + 1);
      } else {
        frequencyMap.set(element, 1);
      }
    });
  
    let mostFrequentElement;
    let maxFrequency = 0;
  
    frequencyMap.forEach((frequency, element) => {
      if (frequency > maxFrequency) {
        maxFrequency = frequency;
        mostFrequentElement = element;
      }
    });
  
    return mostFrequentElement;
  };
  
  const numbers = [1, 3, 5, 3, 2, 1, 3, 5, 3, 4, 2, 1, 4, 3];
  const mostFrequent = findMostFrequentElement(numbers);
  console.log(`Наиболее часто встречающийся элемент в массиве: ${mostFrequent}`);
  