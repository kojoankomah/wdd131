let scores = [100,72,83,94,88,87];

let names = ['Nancy','Blessing','Jorge','Svetlana'];

let ascore = scores[0];

scores[0] = 99;

// Iterating over an array
for(let i = 0; i < scores.length; i++){
    console.log(scores[i])
}


// iterating over an array
scores.forEach(function(score){
    console.log(score);
});

// lenth property
let numScores = scores.length;

// Array Methods

scores.push(200); // Adds a new element to the end of the array
scores.pop(); // Removes the last element from the array
scores.shift();  // Removes the first element from the array
scores.unshift(100);  // Adds a new element to the beginning of the array
scores.slice(2,3); // Cut out a portion of the array starting at an index for a given length
scores.splice(2,1); // Removes 1 element from the array starting at index 2
scores.join(', '); // Transform the array into a single string with a comma and space delimiter option