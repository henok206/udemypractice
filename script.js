'use strict';//strict mode it will help us to identify the bugs
// Java script Fundamental one
// about value
// console.log("hello world");
// console.log("ABEBE");
// console.log(45);
// // declear variable and assigned value
// const firstName="Aster";
// console.log(firstName);
// // assignement about variable and value
// const country="Ethiopia";
// const continiet="Africa";
// const population=120;
// console.log(country);
// console.log(continiet);
// console.log(population);

// about Data type
//  const JavascriptIsFun=true;
//  console.log(typeof JavascriptIsFun);
//  console.log(typeof true);
//  console.log(typeof JavascriptIsFun);
//  console.log(typeof 34);
//  console.log(typeof "Hello");
 //Daynamic typing means varible can hold the new value
//  JavascriptIsFun="kebede"
//  console.log(typeof JavascriptIsFun);
 //undefined data type
//  const year;
// //  console.log(year);
//  console.log(typeof year);
//  //daynamic typing if i assigned value for year 
//  year=2022;
//  console.log(typeof year);  

// const ,const and var const see the different
//  const age=30;
//  age=31;//since age is muteble can be changed
//  const birthyear=1978;
//   birthyear=1898// birthdate can not be muitet
//   const job; //const declaration must be intialized
//  lastName="kebede";// without declearning
//  console.log(lastName);

// Basik operator
//  const now=2022;
// const ageAbe=now-1999;
// const ageASter=now-2010;
// console.log(ageAbe*2,ageASter/2);
//concatination
// const firstName="Abera";
// const lastName="Kifile";
// console.log(firstName +' ' + lastName);
//Assignment operator
// const x=10+5;//x=15
// x+=10;//x=x+10=>15+10=25
// x*=4//x=x*4=25*4=100
// x++;//x=x+1=101
// x--;//x=x-1=100
// console.log(x);

// //comparison operator
// console.log(ageAbe>ageASter); //>,<,<=,>=
//code challenge
// const markWeight=78;
// const markHeight=1.69;
// const johnWeight=95;
// const johnHeight=1.95;
// const markWeight=95;
// const markHeight=1.88;
// const johnWeight=85;
// const johnHeight=1.76;

// const markbmi=markWeight/(markHeight*markHeight);
// const johnbmi=johnWeight/(johnHeight*johnHeight);
// console.log(markbmi,johnbmi);
// const markHigherBmi= markbmi>johnbmi;
// console.log(markbmi,johnbmi,markHigherBmi);

// literal Template 
// const firstName="Biniyam";
// const job="teacher";
// const birthyear=1999;
// const year=2022;

//  const Biniyam="i'm "+ firstName +',a '+(year-birthyear) + ' year old '+job+'!';
//  console.log(Biniyam);
// const newBiniyam=`I'm ${firstName},a ${year-birthyear}year old ${job}!`;
// console.log(newBiniyam);
// console.log(`Hello world!`);//we can use bacticks
// //Multiple line string with\n and without \n just use 
// //bacticks
// console.log("abebe\n kebede\n Hiwot");//with \n
// console.log(`Kebede
// Aster
// Girma`);

// conditions
// const age=14;
// if(age>=18){
//     console.log("Elisa can start her driving lisence😂");
// }else{
//     const yearLeft=18-age;
//     console.log(`Elisa is too young.waet another ${yearLeft} year!`)
// }

// const markMass=78;
// const markHeight=1.69;
// const johnMass=95;
// const johnHeight=1.95;
// const markbmi=markMass/(markHeight**2);
// const johnbmi=johnMass/(johnHeight*johnHeight);

// if(markbmi>johnbmi){
//     console.log(`Mark's BMI(${markbmi})  is higher than John's BMI (${johnbmi})!`)
// } else{
//     console.log(`John's BMI(${johnbmi} ) is higher than Mark's Bmi ${markbmi}!`)
// }

//Type converstion
// const inputYear='1998';
// console.log(inputYear+18);// just it concatinate 
// console.log(Number(inputYear));
// console.log(Number(inputYear)+18);

//Type coercion mean more than one data type
// console.log("23"-"10"-3);// string can be changed to number
// console.log('3'*'2');//string can be changed to number
// console.log('10'/'2');//string can be changed to number
// console.log("23"+"10"+3);// string can not be changed to number

//5 falsey value :0,undefined,null,'',nan

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean(null));

//example1
// const money=0;
// if(money){
//     console.log("Don't spend it all");
//     }else{
//         console.log("please get a job")
//     }

// //Example 2
// let height;
// if(height){
//     console.log("Height is Defined");
// }else{
//     console.log("height is not defined yet");
// // }

// // const fevourite=Number(prompt("what is your fevourite Number?"));

// // if(fevourite===23){
// //     console.log(fevourite);
// //     console.log("cool! 23 is amazing number!");
// // }
// // console.log(typeof fevourite);

// // code challenge 3
// let numbeOfcompeate=3;
// let dolphinsScore =(96+108+89);

// let averageDol=dolphinsScore/numbeOfcompeate;
// let koalasScore=(88+91+110);

// let averagekoa=koalasScore/numbeOfcompeate;
// console.log(averageDol);
// console.log(averagekoa);

// if(averageDol>averagekoa)
// {
//     console.log("Team Dolphin a winer!");
// } 
// elseif(averageDol<averagekoa)
// {   
      //console.log("Team Koa a winer!");
//     
// } 
// elseif(averageDol===averagekoa)
// {
//     console.log("They have the  same average score");
// }

//bonues 1
// let dolphinsScore =(97+112+101);
// let koalasScore=(109+95+123);

// if((dolphinsScore>koalasScore)&&(dolphinsScore>=100)){
//    console.log("Team Dolphi is winer🏆!");
// } 
// else if((koalasScore>dolphinsScore)&&(koalasScore>=100))
// {
//     console.log("Team Koa is winer!🏆");
// }
 
//bonus 2
// let dolphinsScore =(97+112+101);
// let koalasScore=(109+95+106);

// if((dolphinsScore==koalasScore)&&(dolphinsScore>=100 && koalasScore>=100)){
//    console.log("Both Team win 🏆!");
// } 
// else 
// {
//     console.log("No Teame a winer!");
// }

// switch stetment
//  const day="sunday";
//  switch(day){
//     case "Monaday":
//         console.log("Study code practice!");
//         break;
//     case "Tuesday":
//         console.log("Reading project manegment");
//         break;
//     case "wednesday":
//     case "saturday":
//         console.log(" having class for project manegment ");
//         break; 

//     case "thursday":
//         console.log("having group meeting ");
//         break;

//     case "Friday":
//     case "sunday":
//         console.log("Having class  for BI&&dataminig");
//         break;
//     default:
//         console.log("Invalid day!");
//  }

//  conditional (Ternary Operator)
//  const age=11;
//  age>=18? console.log("I like to drink wine🍷"):
//  console.log("I like to drink water🥤");

//   const age=34;
//  const drink= age>=18?'wine🍷':'water🥤' ;
//  console.log(drink);

// code for fundemental-1 challeng 4
// const billValue=430;
// const tip=(billValue>=50&& billValue<=300)? (billValue*(15/100)): (billValue*(20/100));
//  console.log(tip);
//  console.log(`The bill was${billValue},the tip was ${tip},and the total value ${billValue+tip}`);

//fundamentals-part2
//Functions
// function logger(){
//    console.log(`My name is alemu`);
// }
// //calling/running/invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apple,orange){
//   // console.log(apple,orange);
//    const juice= `juice with ${apple} apple and ${orange} orange`;
//    return juice;
// }

//  //fruitProcessor(5,0);//calling function
//  const appleJuice=fruitProcessor(5,0);//capturing the value at varible appleJuice 
//  console.log(appleJuice);
//  //console.log(fruitProcessor(5,0));// not capture the value in variable simply display 
//  const appleOrangeJuice=fruitProcessor(3,4);//capturing the value at varible appleJuice 
//  console.log(appleOrangeJuice);

//  const orangeJuice=fruitProcessor(0,4);//capturing the value at varible appleJuice 
//  console.log(orangeJuice);
 
//function Declaration Example
//birthyear is parameter as input
// //
//   function calAge1(birthYear){
//    //const age=2022-birthYear;
//    //return age;
//    //or
//    return 2022-birthYear;
//  }
//   const age1=calAge1(1998)//1998 is an argument
//   console.log(age1);

  //Function Expression
  //has no fun Name we call it Anonimes
//   const calAge2=function(birthYear){
//     return 2022-birthYear;
   
//   }
//   const age2=calAge2(1999);
//   console.log(age2);
/*so what the different b/n function declaration and
 Exprression ? in declaration u can call function before the declaration where as in the Experrsion u will get Error let us see example below*/ 
 // During Function Declaration it work
   
//   const age1=calAge1(1998);
//   console.log(age1);
//   function calAge1(birthYear){
//     return 2022-birthYear;
//  }
   
 //during Function Expression  Cannot access 'calAge2' before initialization
//  const age2=calAge2(1999);
//  console.log(age2);
//  const calAge2=function(birthYear){
//    return 2022-birthYear;
//   }

//Arrow function
// no need curly brace and if we have one line code not wright explicitly return key word
//Arrow function with single line code
// const calAge3=birthYear=>2022-birthYear;
// const age3=calAge3(2000);
// console.log(age3);
// Arrow function multiple line code
//  const calRetirment=birthYear=>{
//    const age=2022-birthYear;
//    const retirment=65-age;
//    return retirment;
//  }
//  const yearLeftUntilRetirment=calRetirment(2000);
//   console.log(yearLeftUntilRetirment);
// having multiple parameter we need to wrap with bracket
// const calRetirment=(birthYear,firstName)=>{
//    const age=2022-birthYear;
//    const retirment=65-age;
//    return `${firstName} has left ${retirment}  years for retirment`;
//  }
//  const yearLeftUntilRetirment=calRetirment(1986,"Abebe");
//  console.log(yearLeftUntilRetirment);
//let us use with out capturing just display in consol
//  console.log(calRetirment(1985,"Bedilu"));
//  console.log(calRetirment(1976,"Kebede"));
//  console.log(calRetirment(1996,"Almaz"));
//  console.log(calRetirment(2000,"Aster"));

//Function calling aother Function Example1
//  const cutPieces=function(fruit){
//    return fruit*4;
//  }

// function fruitProcessor(apple,orange){
//     const applePieces=cutPieces(apple);
//     const orangePieces=cutPieces(orange);
//    const juice= `juice with ${applePieces} pieces of apple and ${orangePieces} pieces  orange`;
//    return juice;
// }
// const appleOrangeJuice=fruitProcessor(2,3);
// console.log(appleOrangeJuice);

//Function calling aother Function Example2
// const calAge=function(birthYear){
//    return 2022-birthYear;
// }

// const calRetirment=function(birthYear,firstName){
//       const age=calAge(birthYear);
//       const retirment=65-age;
//        if(retirment>0){
//          return retirment;
//          console.log(`${firstName} has left ${retirment} years for retirment`);
//        }else{
//          return -1;
//          console.log(`${firstName} already has retired🎉!`);
//        }
      
//     }
//     const yearLeftUntilRetirment=calRetirment(1989,"Markos");
//     console.log(yearLeftUntilRetirment);


