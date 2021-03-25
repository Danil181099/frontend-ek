btn.addEventListener("click",fnc);
function fnc(){
    n = a.value;
  let  m = 2;
    if (n <= 2) {
        alert("n не подходит");
    }

    for (let i = 2; i < n; i++){
        if (n % m ==0){
            answer.innerHTML="Делитель : "+m;
        }
        else
        {
            answer.innerHTML="Делитель: "+n;
        }
    }
}