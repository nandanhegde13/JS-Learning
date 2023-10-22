/*JSON stands for JavaScript Object Notation
JSON is a lightweight data interchange format
JSON is language independent *
JSON is "self-describing" and easy to understand
*/

let x = {
    "employees":[
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ]
    }

console.log(typeof JSON.parse(x));