var john={
  name:'John',
  age:24,
  job:'driver',
 presentation:function(style,timeOfDay){
    if (style==='formal'){
      console.log('Good morning ladies and germs I am  ' + this.name+ ' i am a '+
      this.job +' and i am ' +this.age +
      ' years old,hope everyone is having a nice ' + timeOfDay);
    }else if(style==='casual'){
      console.log('Hi! everyone, i am ' + this.name+ 'I am a '
      +this.job+' I am ' +this.age+ ' years old'+', have a great '+timeOfDay);
    }
  }
}

var emma={
  name:'Emma',
  age:29,
  job:'cleaner'
}

john.presentation.call(emma,'formal','evening');
var johnFormal=john.presentation.bind(john,'formal');
johnFormal('evening');
var emmaFormal=john.presentation.bind(emma,'formal');
emmaFormal('night');





//
years=[2002,1992,1999];
function calcAge(arr,fn){
  var resArr=[];
  for (var i=0;i<arr.length;i++){

     resArr.push(fn(arr[i]));
  }return resArr;
  }


var ageCalculator=function(el){
  return 2018-el;
}
var fullAge=function(limit,el){
  return el>=limit;
}

var ages=calcAge(years,ageCalculator);
console.log(ages);
var legalAgeJapan=calcAge(ages,fullAge.bind(this,20));
console.log(legalAgeJapan);
