
function isDoable(num, empty){
    console.log("IsDoable?");
    //console.log(num);
    console.log(empty);
    switch(empty.toString()){
        case 0:      
                 console.log("it's 0");
        return false;
        case '1':
                 console.log("it's 1");
            if (num === '2' || num === '4'){
                return true;
            } else {
                return false;
            }
        case '2':
                 console.log("it's 2");
            if (num === '1' || num === '3' || num === '5'){
                return true;
            } else {
                return false;
            }
        case '3':
                 console.log("it's 3");
            if (num === '2' || num === '6'){
                return true;
            } else {
                return false;
            }
         case '4':
            console.log("it's 4");
             if (num === '1' || num === '7' || num === '5'){
                return true;
            } else {
                 return false;
            }
        case '5':
                 console.log("it's 5");
            if (num === '4' || num === '6' || num === '2' || num === '8'){
                return true;
            } else {
               return false;
           }
           case '6':
            console.log("it's 6");
            if (num === '3' || num === '5' || num === '9'){
               return true;
           } else {
               return false;
           }
           case '7':
            console.log("it's 7");
            if (num === '4' || num === '8'){
               return true;
           } else {
               return false;
           }
           case '8':
            console.log("it's 8");
             if (num === '7' || num === '9' || num === '5'){        
                return true;
            } else {
                return false;
            }
            case '9':
                 console.log("it's 9");
             if (num === '8' || num === '6'){
                return true;
            } else {
                return false;
            }
            default:
                console.log(empty);
                 console.log("it'default");
                return false;
    }
    

    }
    export default isDoable;
