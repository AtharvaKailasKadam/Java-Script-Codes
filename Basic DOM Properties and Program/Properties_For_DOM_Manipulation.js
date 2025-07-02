// Using the tagName.= Returns tag for element nodes.
// Using the innerText.= Returns the text content of the element and all its Children.
// Using the innerHTML.= Returns the plain text of HTML contents in the elements.
// Using the textContent.= Returns textual content even for hidden elements.

console.dir(document.body.firstChild);

let a = document.querySelector("body").children;
console.dir(a);

let b = document.querySelector("body").firstChild;
console.dir(b);

let div = document.querySelector("div");
console.log(div);

let innerhtml = document.querySelector("div");
console.log(innerhtml);

let textconetxt = document.querySelector("div");
console.log(textconetxt);