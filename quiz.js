let questions = [
    {
        'que': "Tsunami is a word in which language?",
        'a': "Hindi",
        'b': "Urdu",
        'c': "Japanese",
        'd': "French",
        'correct': 'c'
    },
 {
        'que': " Who was India’s first President?",
        'a': " Dr. Rajendra Prasad",
        'b': " Sarvepalli Radhakrishnan",
        'c': " Varahagiri Venkata Giri",
        'd': " Varahagiri Venkata Giri?",
        'correct': 'a'
    },
     
    {
        'que': "Which is smallest planet in our solar system?",
        'a': "Saturn",
        'b': "Earth",
        'c': "Mercury",
        'd': "Mars",
        'correct': 'c'
    },
    {
        'que': "Which is hottest continent on Earth?",
        'a': " SouthAsia",
        'b': "Africa",
        'c': "North America",
        'd': "Australia",
        'correct': 'b'
    },
    {
        'que': "Which is the highest dam of India?",
        'a': "Rihand dam",
        'b': "Tehri dam",
        'c': "Mettur dam",
        'd': "Sardar Sarovar Dam",
        'correct': 'b'
    },
   
]
let index=0;
let h=document.getElementById('heading');
let options=document.querySelectorAll('.r');
const loadques=()=>{
    if(index==questions.length)
    {
        let res=document.getElementById('b2')
        res.innerHTML=`<h3>Thanks for submitting quiz</h3>
       <h2>Your score:  ${right}/${right+wrong} </h2>`
       document.getElementById("b2").style.height = '200px';
       document.getElementById("b2").style.textAlign = 'center';
       document.getElementById("b2").style.paddingTop = '78px';
   }
    let q=questions[index]
    h.innerText=`${index+1} ) ${q.que}`
    options[0].nextElementSibling.innerText=q.a;
    options[1].nextElementSibling.innerText=q.b;
    options[2].nextElementSibling.innerText=q.c;
    options[3].nextElementSibling.innerText=q.d;
}
loadques();
let right=0,wrong=0;
const check=()=>{
    let options=document.querySelectorAll('.r')
     let q=questions[index];
    options.forEach(
        (input)=>{
             if(input.checked)
             {
                if(input.value==q.correct)
                {
                    right++;
                }
                else{
                    wrong++;
                }
             }
             
        }
    )

}
const submit=()=>{
    check();
    index++;
    loadques();
   reset();
  

}
const reset=(input)=>{
    options.forEach((input)=>{
        if(input.checked)
        {
            input.checked=false;
        }
    }
    )

}
