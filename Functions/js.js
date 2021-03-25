let question_arr = ["1. Расшифруйте аббревиатуру HTML","2. Существует ли у тега inpyt закрывающий тег в синтаксисе HTML?", "3. Если Вам потребуется " +
"создать ссылку в документе, какой тег Вы будете использовать?", "4. Какой атрибут следует указывать для определения URL-адреса в ссылке?",
    "5. Элемент div является строчным или блочным элементом?", "6. Вам нужен нумерованный список. Какой элемент Вы используете?", "7. Каких тегов в HTML не существует?",
    "8. С помощью какого тега создаются поля формы?"]
let a1_arr = ["HeadText Modulation Language","Да","Тег: p", "Атрибут : alt", "Строчным", "ul", "одиночных","field"]
let a2_arr = ["HyperText Markup Language","Нет", "Тег: link", "Атрибут : href", "Блочным", "ol", "парных","input"]
let a3_arr = ["HeadingText Mode Language","Такого тега в стандартах HTML не существует", "Тег: a", "Атрибут : name", "Является как строчным, так и блочным элементом", "al", "тройных", "a"]
let answer_arr = ["HyperText Markup Language","Такого тега в стандартах HTML не существует", "Тег: a", "Атрибут : href", "Блочным", "ol", "тройных","input"]

let n_right_answer_arr=[2,3,3,2,2,2,3,2];
let n_answer = 7;
let right_answers = 0;
let count = -1;
let count2 = 7;

answers (n_question.value);
// question.innerHTML = question_arr[n_question.value];
// a1.innerHTML = a1_arr[n_question.value];
// a2.innerHTML = a2_arr[n_question.value];
// a3.innerHTML = a3_arr[n_question.value];
// answer.innerHTML = answer_arr[n_question.value];
// n_right_answer = n_right_answer_arr[n_question.value];
btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);
btn2.addEventListener("click", f_out2);
function f_out (){
    console.log(y1.checked);
    console.log(y2.checked);
    console.log(y3.checked);
    if (y1.checked){ n_a = 1;}
    if (y2.checked){ n_a = 2;}
    if (y3.checked){ n_a = 3;}
    console.log(n_a);
    if (n_a == n_right_answer){
        right_answers += 1;
        answer.classList.add("hidden");
        right_div.classList.remove("hidden");
        wrong_div.classList.add("hidden");
        console.log("n_question.value = "+n_question.value);
        console.log("n_answer = "+n_answer);
        console.log("right_answ = "+right_answers);
        if (n_question.value == n_answer){
            btn.classList.add("hidden");
            btn2.classList.add("hidden");
            let el1 = document.createElement("p");
            el1.innerHTML = "<b>"+right_answers+"</b>";
            right_div.appendChild(el1);
            alert("Мое уважение. Ты добрался до конца этого скучного теста!")
            resa.classList.remove("hidden");
        }
    }else{
        right_answers-=1;
        right_div.classList.add("hidden");
        wrong_div.classList.remove("hidden");
    }

    if (right_answers < 0){
        // alert("oshibka");
        right_answers = count;
    }
    if (right_answers > 8){
        right_answers = count2;
        // alert("oshibka2");
    }

    if (n_question.value == 0){
        desc.classList.add("hidden");
        im.classList.add("hidden");
    }
    if ( (right_answers - n_question.value) >=2){
        right_answers-=1;
        console.log("try_count_answ= "+right_answers);
    }

}
function f_out1 (){
    answer.classList.toggle("hidden");
    btn1.classList.toggle("opend");
}
function f_out2 (){
    right_div.classList.add("hidden");
    k = Number(n_question.value);
    k+=1;
    answers(k);
    // n_question.value = k;
    // console.log(n_question);
    // question.innerHTML=question_arr[n_question.value];
    // a1.innerHTML = a1_arr[n_question.value];
    // a2.innerHTML = a2_arr[n_question.value];
    // a3.innerHTML = a3_arr[n_question.value];
    // answer.innerHTML = answer_arr[n_question.value];
    // n_right_answer = n_right_answer_arr[n_question.value];
}

function answers(k) {
    n_question.value = k;
    question.innerHTML=question_arr[n_question.value];
    a1.innerHTML = a1_arr[n_question.value];
    a2.innerHTML = a2_arr[n_question.value];
    a3.innerHTML = a3_arr[n_question.value];
    answer.innerHTML = answer_arr[n_question.value];
    n_right_answer = n_right_answer_arr[n_question.value];
}

