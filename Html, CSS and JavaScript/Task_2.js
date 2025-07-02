let divisions = document.querySelectorAll(".division");
console.log(divisions[0]);
console.log(divisions[1]);
console.log(divisions[2]);

divisions[0].innerText = "Hii... Atharva.";
divisions[1].innerText = "How are You....Atharva";
divisions[2].innerText = "How is it Going...Atharva";

let idx = 0;
for(div of divisions)
{
    div.innerText = `Hello Atharva Kadam ${idx}`;
    console.log(div.innerText);
    idx++;
}