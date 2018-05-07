//imports code from other file
const importTask = require("./task.js");
const Task = new importTask();

//this function allows us to vary how much we prioritize value and time.
//These should be represented as decimals from 0 to 1
// 0.55 ---means---> 55%

function sortImpactCustom(list,pv,pt){
  //pv = percent value
  //pt = percent time
  
  //check to make sure pv and pt add to 1, if not, return null.
  
  
  //define customImpact
  function customImpact(task){
  
  
  }
  
  return list.sort(/**fill this with comparison function/);
  
}

function mainTest(n){
  let importanTasks = Task.factory(n);
  
  console.log("====== Important Tasks ======");
  console.log(importanTasks);
  
  let custom1 = sortImpactCustom(importanTasks,0.80,0.20);
  console.log("====== Custom 1 sort 80:20 ======");
  console.log(custom1);
  
  let custom2 = sortImpactCustom(importanTasks,0.30,0.70);
  console.log("====== Custom 2 sort 30:70 ======");
  console.log(custom2);
  
  let custom3 = sortImpactCustom(importanTasks,0.80,0.80);
  console.log("====== Custom 3 sort 80:80 ======");
  console.log(custom3);
}

mainTest(20);
