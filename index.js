function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun("bathe my dog");

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}
mondayWork("work from home");

function wrapAdjective(action="a hard worker"){
    const encouragingPromptFunction = wrapAdjective('*')
    return `You are ${action}`;
}

// function wrapAdjective(action="*"){
//      const emphatic = "a hard worker"
//     return function(single="special") {
//         const wrapped = "|| a dedicated worker ||"
//           return `You are ${action}${emphatic}${action}!` 

//     }
//   }

function wrapAdjective(flare="*"){
    return function(def="special"){
        return `You are ${flare}${def}${flare}!`
    }
}

wrapAdjective("%")("a dedicated programmer");




    
//     let encouragingPromptFunction = wrapAdjective(emphatic="special") {
//         return `You are ${wrap}${emphatic}${wrap}!`
//     }
// }

// function wrapAdjective() {
//     let result = wrapAdjective(emphatic = '*a hard worker*');
//     return result(`You are ${emphatic}!`);    
// }



// || `*${emphatic}*`;