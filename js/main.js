let Url = "./data/porul.json";
var input = document.querySelector("#input");
var search_btn = document.querySelector("#search-button");
var contents = document.querySelector(".contents");
var intro = document.querySelector(".intro");
var transliterator = document.getElementById("transliterator");

//chillu breaker only for malayalam
function chilluBreaker(){
    input.value = input.value.replace(/ണ്‍/g, "ണ്");
    input.value = input.value.replace(/ന്‍/g, "ന്");
    input.value = input.value.replace(/ര്‍/g, "ര്");
    input.value = input.value.replace(/ല്‍/g, "ല്");
    input.value = input.value.replace(/ള്‍/g, "ള്");
};
  //chillu corrector only for malayalam
function chilluCorrector(){
   
     contents.innerHTML = contents.innerHTML.replace(/ള്വ/g,'ള്‍വ');
     contents.innerHTML = contents.innerHTML.replace(/ള്വാ/g,'ള്‍വാ');
     contents.innerHTML = contents.innerHTML.replace(/ള്വി/g,'ള്‍വി');
     contents.innerHTML = contents.innerHTML.replace(/ള്വി/g,'ള്‍വി');
     contents.innerHTML = contents.innerHTML.replace(/ള്വീ/g,'ള്‍വീ');
     contents.innerHTML = contents.innerHTML.replace(/ള്വു/g,'ള്‍വു');
     contents.innerHTML = contents.innerHTML.replace(/ള്വൂ/g,'ള്‍വൂ');
     contents.innerHTML = contents.innerHTML.replace(/ള്വെ/g,'ള്‍വെ');
     contents.innerHTML = contents.innerHTML.replace(/ള്വൊ/g,'ള്‍വൊ');
     contents.innerHTML = contents.innerHTML.replace(/ള്വോ/g,'ള്‍വോ');
     contents.innerHTML = contents.innerHTML.replace(/ള്വം/g,'ള്‍വം');
     contents.innerHTML = contents.innerHTML.replace(/ള്വൈ/g,'ള്‍വൈ');
     contents.innerHTML = contents.innerHTML.replace(/ള്വൗ/g,'ള്‍വൗ'); 
};


input.addEventListener('keyup',()=>{
    chilluBreaker();
})




//find words
async function findWords(){
    const res = await fetch(Url);
    const data = await res.json();
    //filter through dictionary.json file
    data.filter(function(item){
        //check if the value user enters is there is the dictionary file
        if(input.value === item.entry){
            intro.style.display = "none";
            var display = document.createElement('div');
            display.classList.add('display');
            contents.appendChild(display);
            //part of speech
            var pos = document.createElement('p');
            pos.classList.add('pos');
            //displaying noun, verb, adj taking their shortcuts
            if(item.type === 'n'){
                pos.innerHTML = "noun";
                display.appendChild(pos);
            }else if(item.type === 'v'){
                pos.innerHTML = 'verb';
                display.appendChild(pos);
            }else if (item.type === 'adj'){
                pos.innerHTML = 'adj.';
                display.appendChild(pos);
            };//continue here...   
             // display the search item.
            var searchItem = document.createElement('p');
            searchItem.classList.add('search-value');
            searchItem.innerHTML = input.value;
            display.appendChild(searchItem);
            //iso
            var iso = document.createElement('p');
            iso.classList.add('iso');
            iso.innerHTML = input.value;
            ch = iso.innerHTML;
            mal_to_iso(ch)
            iso.innerHTML = ch;
            display.appendChild(iso);

             ///ipa transliteration
            var ipa = document.createElement('p');
            ipa.classList.add('ipa');
            ipa.innerHTML = input.value;
            ch = ipa.innerHTML;
            mal_to_ipa(ch)
            ipa.innerHTML = `<span>IPA</span> ` + ch;
            display.appendChild(ipa);



            /**------------------------------------------------ */
                      // origin
             if(item.org.length !=0){
                var origin = document.createElement('p');
                origin.classList.add('span-1');
                if(item.org === "m"){
                    origin.innerHTML = `<span>origin</span> `+ `malayalam`;
                    display.appendChild(origin);
                }else if(item.org === 's'){
                    origin.innerHTML = `<span>origin</span> `+ `sanskrit`;
                    display.appendChild(origin);
                }else if(item.org === 'ms'){
                    origin.innerHTML = `<span>origin</span> `+ `malayalam + sanskrit`;
                    display.appendChild(origin);
                };//continue here...              
            };
            //display etymology
              if(item.etymology.length !=0){
                var etymology = document.createElement('p');
                etymology.classList.add('span-2');
                etymology.innerHTML = `<span>etymology</span> ` + item.etymology;
                display.appendChild(etymology);
            };
            //description
            if(item.exp.length !=0){
                var exp = document.createElement('p');
                exp.classList.add('exp');
                exp.innerHTML = item.exp;
                display.appendChild(exp);
            };
            //display senses/synonymns
             //senses
             if(item.sense.length !=0){
                var senses = document.createElement('p');
                senses.classList.add('span-3');
                const regex = /\,+$/;
                const subst = ``;
                senses.innerHTML = item.sense;
                 senses.innerHTML = senses.innerHTML.replace(regex, subst);
                 senses.innerHTML = `<span>synonyms</span> ` + senses.innerHTML.replace(/,/g,', ');
                 display.appendChild(senses); 
            };

             //display english
             if(item.en.length !=0){
                var en = document.createElement('p');
                en.classList.add('span-3');
                const regex = /\,+$/;
                const subst = ``;
                en.innerHTML = item.en;
                 en.innerHTML = en.innerHTML.replace(regex, subst);
                 en.innerHTML = `<span>english</span> ` + en.innerHTML.replace(/,/g,', ');
                 display.appendChild(en); 
            };

            //display sanskritied
              //sanskritised
              if(item.san.length !=0){
                var sans = document.createElement('p');
                sans.classList.add('span-3');
                const regex = /\,+$/;
                const subst = ``;
                sans.innerHTML = item.san;
                sans.innerHTML = sans.innerHTML.replace(regex, subst);
                sans.innerHTML = `<span>s. malayalam</span> ` + sans.innerHTML.replace(/,/g,', ');
                display.appendChild(sans);
            }; 
            //display sources
            if(item.source.length !=0){
                var sources = document.createElement('p');
                sources.classList.add('sources');
                sources.innerHTML = item.source;
                sources.innerHTML = sources.innerHTML.replace(/DC/,'<a class="source-class" href="sources.html">Dyatuk Corpus</a>');   
                sources.innerHTML = sources.innerHTML.replace(/BB/,'<a class="source-class"  href="sources.html">Benjamin Bailey<a/>'); 
                sources.innerHTML = sources.innerHTML.replace(/PP/,'<a class="source-class"  href="sources.html">Padmanabha Pillai</a>');  
                sources.innerHTML = sources.innerHTML.replace(/G/,'<a class="source-class"  href="sources.html">Herman Gundert<a/>');  
                sources.innerHTML = sources.innerHTML.replace(/TB/,'<a class="source-class"  href="sources.html">T. Burrow<a/>');  
                sources.innerHTML = `<span>Sources</span> ` + `<ol class="source-list" ><li>`+sources.innerHTML.split(',').join('</li><li>')+`</li></ol>`;
                display.appendChild(sources);
            }

            chilluCorrector();
            
        };
        
        //check if sanskritised word that the user search exists
        if(item.san.includes(input.value)){
            console.log(item.entry);
            console.log(item.san);
        };
        //check if english word that the user search exists
        if(item.en.includes(input.value)){
            console.log(item.entry);
            console.log(item.en);
        };
        //check if synonymns exists
        if(item.sense.includes(input.value)){
            console.log(item.sense);
            console.log(item.entry);
        };

    });
    input.value = "";
    if(input.value.length === 0){
      input.value = "എന്തെങ്കിലും തിരയുക..";
    };

    input.addEventListener('input',()=>{
        if(input.value.length < 1){
            contents.innerHTML = "";
        }  
    });
   
   
  
}



// search button and enter key
//enterKey
input.addEventListener("keyup", (e) => {
    if(e.keyCode === 13){
        e.preventDefault();
        findWords();
 if(input.value.length === 0){
      input.value = "എന്തെങ്കിലും തിരയുക..";
    };
    };
} );

search_btn.addEventListener("click", ()=>{
    findWords();
    if(input.value.length === 0){
        input.value = "എന്തെങ്കിലും തിരയുക..";
      };
})

input.addEventListener('keyup',(e)=>{
        if(e.keyCode === 8){
            if(input.value = "എന്തെങ്കിലും തിരയുക.."){
                input.value = "";
                contents.innerHTML = "";
            };
        };
    });

   
