//Practice with JavaScript OOP Concepts
//STEP 1
/*
var Animal || Animal {};
var ANIMAL.Dog = function(){
    
}
var ANIMAL.Cat = function (){  
}


//STEP 2 & 3

var Cat = {   
}
var Dog = function () { 
}
var woof = new Dog ();
*/
//STEP 4
/*
function Animal() {
    window.console.log("The Animal has been created");
}
var roar = new Animal();
window.console.log(roar.constructor);
*/
//STEP 5 
/*
var Animal = function(cat){
    this.cat = cat;
    window.console.log('The Animal has been created' + this.cat);
}
var roar = new Animal("Jaguar");
window.console.log(roar.constructor); 

//STEP 6

var Animal (type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
}
*/
//STEP 7
/*
var Animal= function(type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
}
var myAnimal = new Animal ();
for (var property in myAnimal)
{console.log(property);}

 */
 
//STEP 8
/*
var Animal= function(type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
} 


Animal.prototype.speak = function() {
    if (this._type === "dog") {
        window.console.log("The " + this._color + " dog is barking!");
    }else if (this._type === "cat") { 
        window.console.log("The " + this._color + " cat is meowing");
    }
}

var dog = new Animal("dog", "shepard" , "brown", "45 inches" , "36 inches");
dog.speak();
*/

//STEP 9
/*
var Animal = function(type, breed, color, height, length) {
    
    var _type = type;
    var _breed = breed;
    var _color = color;
    var _height = height;
    var _length = length;
    this.getType = function () {
        return _type;
    }
}
var checkType = function() {
    if (this.getType === "dog") {
        return "dog";
    }else if (this.getType === "cat") {
        return "cat";
    }
};

Animal.prototype.speak = function(){
    window.console.log("The " + this.getType() + " has made a noise");
};

var dog = new Animal("cat", "shepard" , "brown", "45 inches" , "36 inches");
dog.speak();
*/

//STEP 10
/*
String.prototype.findWords = function (paragraph, word) {
   "use strict";
   var wordFound = 0, wordCount = 0;
   while (wordFound !== -1) {
        wordFound = paragraph.indexOf(word, wordFound);
        if (wordFound !== -1) {
           wordCount = wordCount + 1;
            wordFound = wordFound + 1;
        }
    }
    window.alert("There are " + wordCount + " occurrences of the word " + word + ".");
};

String.prototype.findWords("For a moment, nothing happened. Then, after a second or so, nothing continued to happen.", "a"); */

//The Recipe Card
/*
var Recipe = function (title,servings,ingredients) {
    this._title = title;
    this._servings = servings;
    this._ingredients = " ";
    window.console.log(this._title + "\n" + "Serves " + this._servings + "\n" + "Ingredients: \n");
    for (var property in ingredients){
        window.console.log(" " + ingredients[property]);
    }
    
}

var recipeIngredients = new Recipe ("Gucamole", 4, ["3 Avocados" , "1 Lime", "1 Teaspoon Salt", "1/2 cup Onion", "3 Tablesppons Cilantro", "2 Diced Tomatoes", "1 Teaspoon Garlic", "1 pinch Ground Pepper"]);
*/

//The Reading List

var readingList = [];
readingList[0] = {title: "The Nest", author: "Cynthia Deprix", alreadyRead: true};
readingList[1] = {title: "Catcher in the Rye", author: "J.D. Salinger", alreadyRead: true};
readingList[2] = {title: "The Great Gatsby", author: "Scott Fitzgerald", alreadyRead: false};
readingList[3] = {title: "Wuthering Heights", author: "Emily Bronte", alreadyRead: false};
readingList[4] = {title: "Like Water for Chocolate" ,author: "Laura Esquivel", alreadyRead: true};

for (i = 0; i < readingList.length; i++) {
    if (readingList[i]["alreadyRead"] === true) {
        window.console.log("You already read ", readingList[i]["title"] + "by " + readingList[i]["author"]);  
    } else {
        window.console.log("You still need to read " , readingList[i]["title"] + "by " + readingList[i]["author"]);
    }
}