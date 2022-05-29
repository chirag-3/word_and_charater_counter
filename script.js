let writing_area = document.getElementsByTagName("textarea")[0];
let word_count = document.getElementById("word-count");
let character_count = document.getElementById("character-count");


writing_area.addEventListener('input',updateCounts);

function updateCounts(){
    let current = writing_area.value.length;
    character_count.innerHTML ="CHARACTER COUNT : "+current; 
    let current_value = writing_area.value.split(" ");
    let l = current_value.length;
    let word = 0;
    for(let i=0;i<l;i++)
    {
        if(current_value[i].length>0)
        {
            if(current_value[i]!=',' && current_value[i]!=';' && current_value[i]!='!' && current_value[i]!='?' &&
            current_value[i]!='.')
               word++;
        }
    }
    
    word_count.innerHTML = "WORD COUNT : "+word;
}