// let allBtn = document.querySelectorAll('button');
let allBtn = document.querySelectorAll("button[name = 'btn-show-in-display']");
console.log(allBtn)

let displayArea = document.getElementById('display-area');
let solutionArea = document.getElementById('solution-area');
let ac = document.getElementById('ac');
let del = document.getElementById('del');
let mPlus = document.getElementById('mplus');
let mMinus = document.getElementById('mminus');
let mAc = document.getElementById('mac');
let equal = document.getElementById('equal')

activity = (v) => {
    console.log(v.target.value);
    displayArea.append(String(v.target.value))
}


// function for clearing display

clearDisplay = () => {

    displayArea.innerHTML='';
    solutionArea.innerHTML ='';

}

backspace = () => {
    solutionArea.innerHTML ='';
    displayArea.innerHTML = displayArea.textContent.substring(0,displayArea.textContent.length - 1);
    // console.log(temp);

}

sessionStorageClear =() => {
    sessionStorage.clear()
};

addMplus = () =>{
    let index = sessionStorage.length;
    solution = solve();
    console.log('yo man')
    console.log(solution);
    sessionStorage.setItem(index,solution);
};

removeMminus = () => {
    let index = sessionStorage.length;
    // console.log(sessionStorage.getItem(index));
    displayArea.append(sessionStorage.getItem(index-1));
    sessionStorage.removeItem(index-1);
};

solve = () => {
    let calcString = displayArea.textContent;
    solutionArea.innerHTML = calcString;
    console.log(calcString);

    function calculateStr(fn) {
        return new Function('return ' + fn)();
    }
    
    let output = calculateStr(calcString);
    console.log(output);

    solutionArea.innerHTML= output;
    
    return output
};

for (btn of allBtn){
    btn.addEventListener('click', activity);
}

ac.addEventListener('click', clearDisplay);
del.addEventListener('click', backspace);

mPlus.addEventListener('click', addMplus)
mMinus.addEventListener('click', removeMminus);
mAc.addEventListener('click', sessionStorageClear)

//

equal.addEventListener('click', solve)
