"use strict";

let TableauNames=[];

TableauNames.push('Vincent');
TableauNames.push('Paul');
TableauNames.push('Arthur');

for(let i=0;i<names.length;i++){ 
    names[i]+= "va a la peche"
}


//correction//

let names=[];
names.push('Vincent',"Paul",'Arthur');

names.forEach(name =>{ //for each c pour chaque element du tableau//
    name += 'va a la peche ';
    console.log(name)
});