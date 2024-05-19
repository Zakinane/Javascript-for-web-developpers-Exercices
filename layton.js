/*1-  Write a function that takes an array of numbers and returns the average of all the even numbers. 
Use the filter() and reduce() array methods in your implementation.*/

function avrageOfEvens(array) {
  let filteredArray = array.filter((n) => n % 2 === 0);

  let sum = filteredArray.reduce((sum, current) => sum + current, 0);

  let avrage = sum / filteredArray.length;

  return avrage;
}

/*2-  Write a function that takes an array of words and returns the longest word. 
Use the reduce() array method in your implementation.*/

function longuestString(array){
    return array.reduce((longuest,word) => longuest.length < word.length ? word : longuest,'');
}

/*3-  Write a function that takes an array of objects representing books, with each object containing 
properties such as title, author, and pages. The function should return the average number of pages 
across all the books. Use the map() and reduce() array methods in your implementation.*/

function avragePagesAllBooks(array){
    let sum = array.reduce((sum,book)=> sum+book.pages,0);
    let average = sum/array.length;
    return average;
}

/*4-Write a function that takes an array of strings and returns an object containing the frequency of 
each string. For example, if the input is ["hello", "world", "hello"], 
the output should be { hello: 2, world: 1 }. Use the reduce() array method in your implementation.*/

function frequencyOfWords(array){
    let uniqArray = [...new Set(array)];
    let Frequency = {};
    for(let i=0 ; i < uniqArray.length ; i++){
        let word = uniqArray[i];
        let count = array.reduce((occurences,currWord) => currWord === word ? occurences + 1 : occurences, 0);
        Frequency[word] = count;
    }
    return Frequency;
}

/*5-Write a function that takes an array of objects representing people, with each object containing
properties such as name, age, and city. The function should return an object containing the count 
of people by city. For example, if the input is [{ name: "Alice", age: 30, city: "New York" }, 
{ name: "Bob", age: 40, city: "Chicago" }, { name: "Charlie", age: 50, city: "New York" }], 
the output should be { "New York": 2, "Chicago": 1 }. Use the reduce() array method in your 
implementation.*/

function numPeopleInCity(array){
    let uniqArray = [...new Set(array.map(array => array.city))]
    let NumberInCity = {};
    for(let i=0 ; i <uniqArray.length ; i++){
        let city = uniqArray[i];
        let count = array.reduce((occurences,person) => person.city === city ? occurences + 1 : occurences, 0);
        NumberInCity[city] = count;
    }
    return NumberInCity;
}