import React, { useState } from "react";
import './index.css';
import Square from './Square';
import isDoable from './helpers.js';

//States would be better lifted up to Game component but left here in the interest of time.
//Buttons should also have been lifted to Game component and functions should be made more abstract
//Instead of two arrays an object could have been used
function Board() {
const [nums, setNums] = useState([1,2,3,4,5,6,7,8,]);
const [styles, setStyles] = useState(['win','win','win','win','win','win','win','win','empty']);
const [empty, setEmpty] = useState('9');

function isTapped(posFirst, posSecond){
    console.log("Restart");
    if (isDoable(posFirst, posSecond)){
        console.log("True");
        let numCopy = [...nums];
        let temp = numCopy[posFirst - 1];
        numCopy[posFirst - 1] = numCopy[posSecond - 1];
        numCopy[posSecond - 1] = temp;
        setNums((nums) => numCopy);
        let win = true;
        for (let i = 0; i < 8; i++){
            if (numCopy[i] !== (i + 1)){
                win = false;
            }
        }
        let stylesCopy = [...styles];
        let temp2 = stylesCopy[posFirst - 1];
        stylesCopy[posFirst - 1] = stylesCopy[posSecond - 1];
        stylesCopy[posSecond - 1] = temp2;
        if (win){
            for(let i = 0; i < 10; i++){
                if (stylesCopy[i] === 'square'){
                    stylesCopy[i] = 'win';
                }
            }
        } else {
            for(let i = 0; i < 10; i++){
                if (stylesCopy[i] === 'win'){
                    stylesCopy[i] = 'square';
                }
            }
        }
        setStyles((styles) => stylesCopy);
        console.log(posFirst);
        setEmpty((empty) => posFirst.toString());
        return true;
    } else {
        //console.log("False");
        //console.log(posFirst);
        //console.log(posSecond);
        return false;
    }
}

function reset(){
    setNums([1,2,3,4,5,6,7,8,]);
    setStyles(['win','win','win','win','win','win','win','win','empty']);
    setEmpty('9');
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function mixer(){
    console.log("empty");
    console.log(empty);
    let curr = empty;
    for (let i = 0; i < 1; i++){
    let j = 0;

    // console.log(curr);
    // console.log("curr");
    while (j < 1){
        let rand = (getRandomInt(9) + 1)
        console.log("rand s");
        console.log(rand);
        console.log("rand e");

   if (isTapped((rand).toString(), curr.toString())){
            j++;
            curr = rand;
            console.log(curr);
    }
    }

    }
    setEmpty((empty) => curr);
    console.log(curr);
}

return(
    <div>
    <div>
         <Square empty = {empty} clicked = {isTapped} pos = '1' styles = {styles[0]} num = {nums[0]}/>
         <Square empty = {empty} clicked = {isTapped} pos = '2' styles = {styles[1]} num = {nums[1]}/>
         <Square  empty = {empty} clicked = {isTapped} pos = '3' styles = {styles[2]} num = {nums[2]}/>
    </div>
    <div>
        <Square empty = {empty} clicked = {isTapped} pos = '4' styles = {styles[3]} num = {nums[3]}/>
        <Square empty = {empty} clicked = {isTapped} pos = '5' styles = {styles[4]} num = {nums[4]}/>
        <Square empty = {empty} clicked = {isTapped} pos = '6' styles = {styles[5]} num = {nums[5]}/>
    </div>
    <div>
         <Square empty = {empty} clicked = {isTapped} pos = '7' styles = {styles[6]} num = {nums[6]}/>
         <Square empty = {empty} clicked = {isTapped} pos = '8' styles = {styles[7]} num = {nums[7]}/>
         <Square empty = {empty} clicked = {isTapped} pos = '9' styles = {styles[8]} num = {nums[8]}/>
    </div>
    <div>
        <button onClick ={() => reset()} className="restart">Reset</button>
        <button onClick ={() => mixer()}className="restart">Mix Up</button>
    </div>
    
    </div>
)
}

export default Board;