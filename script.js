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
         
//          console.log(`${firstName} has left ${retirment} years for retirment`);
//          return retirment;
//        }else{
         
//          console.log(`${firstName} already has retired🎉!`);
//          return -1;
//        }
      
//     }
//     const yearLeftUntilRetirment=calRetirment(1956,'Markos');
//     console.log(yearLeftUntilRetirment);

//fundemental-part2 codechalleng-1
//Test 1
// const calcAverage=(s1,s2,s3)=>(s1+s2+s3)/3;
// let arsenalAVerage=calcAverage(44,23,71);
// console.log(arsenalAVerage);
// let  manchisterlAVerage=calcAverage(65,54,49);
// console.log(manchisterlAVerage);

// const checkWinner=function(arsenalAVerage,manchisterlAVerage){
//   if(arsenalAVerage>=2*manchisterlAVerage){
//     console.log(`Arsenal win Manchister ${arsenalAVerage} vs ${manchisterlAVerage}`);
//   }else if(manchisterlAVerage>=2*arsenalAVerage){
//     console.log(`Manchister win Arsenal ${manchisterlAVerage } vs ${arsenalAVerage}`);
//   }else{
//     console.log("No Team win");
//   }
// }
// console.log(checkWinner(arsenalAVerage,manchisterlAVerage));
// //test 2
// arsenalAVerage=calcAverage(85,54,41);
// manchisterlAVerage=calcAverage(23,34,27);
// console.log(checkWinner(arsenalAVerage,manchisterlAVerage));
                     // Array
/*Numbers, boolean values, and the null and undefined types are primitive. Objects, arrays, and functions are reference types. A primitive type has a fixed size in memory. For example, a number occupies eight bytes of memory, and a boolean value can be represented with only one bit. */
// const friends=['abebe','kebede','Moges','Aster','Almaz'];
// const firstName="Epherem";
// const Myfriends=[friends,firstName,"john","Mick"];
// console.log(Myfriends.length);//4
// console.log(Myfriends);
// console.log(Myfriends[2]);//john
// console.log(Myfriends[1]);//Epherem
// console.log(Myfriends[0]);// ['abebe','kebede','Moges','Aster','Almaz'];
// console.log(Myfriends[Myfriends.length-1]);//Mick
//   //changing one arrray value
//   Myfriends[3]="Vasanta";// is it possible to change value of arr that declear by const? yes
//   console.log(Myfriends[Myfriends.length-1]);
  // array Exercise
  // const ageCal=function(birthYear){
  //   return 2022-birthYear;
  // }
  // const years=[1996,1998,1999,2000,2002];
  //  const age1=ageCal(years[0]);
  //  const age2=ageCal(years[1]);
  //  const age3=ageCal(years[2]);
  //  const age4=ageCal(years[3]);
  //  console.log(age1,age2,age3,age4);
  //  const ages=[ageCal(years[0]),ageCal(years[1]),ageCal(years[2]),ageCal(years[3])];
  // const agesAll=[age1,age2,age3,age4];
  //  console.log(ages);
  //  console.log(agesAll);

  //Array methods example
      //add element at the End by using push method
  // const friends=['abebe','kebede','Moges'];
  //  friends.push('Aster','Almaz');
  //  console.log(friends);//['abebe','kebede','Moges','Aster','Almaz'];add at the End
  //  // add element at the biggnig  by using unshift method
  //  friends.unshift("Mesay");
  //  console.log(friends);//['Mesay',abebe','kebede','Moges','Aster','Almaz']

     //remove elements using pop method it is opposit to push
    //   friends.pop();//remove last element
    //   console.log(friends);//['Mesay',abebe','kebede','Moges','Aster',]
    //   //remove Element fro the bignning by using shift method
    //   friends.shift();
    //   console.log(friends);//['abebe','kebede','Moges','Aster',]

    //   //To know the element at what index it is? by using indexOf method
    //   console.log(friends.lastIndexOf('Moges'));
    //  //Es6 method include
    //  console.log(friends.includes('Moges'));//true
    //  console.log(friends.includes('Elias'));//false
    //  //we can use include method for conditional
    //  if(friends.includes('Aster')){
    //   console.log("you have afriend called Aster");
    //  }else{
    //   console.log("you don't have afriend called Aster ");
    //  }

    //Fundemental part-2 code challeng-2
       //Test1
      //const bill=100;
    // const tipCal=function(bill)
    // {
    //   return (bill>=50&&bill<=300)? bill*0.15:bill*0.20;
    // }
    // console.log(tipCal);
    //tess-2 using array
   // const bills=[125,555,44];
    // const tip1=tipCal(bills[0]);
    // const tip2=tipCal(bills[1]);
    // const tip3=tipCal(bills[2]);
    // console.log(tip1,tip2,tip3);
    // const tips=[tipCal(bills[0]),tipCal(bills[1]),tipCal(bills[2])];
    // //console.log(tips);
    // console.log(bills,tips);
    // // test 3 creat array total value
    // const totals=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
    // console.log(totals);


    //object can accecess the property by dot or squire bracket
    // const kebede={
    //   firstName:"kebede",
    //   lastName:"Alemu",
    //   age:2022-1998,
    //   job:'Instructor',
    //   frends: ['abebe','Dessie','Lema']

    // }
    // //  console.log(kebede.firstName);//kebede
    //  console.log(kebede.frends);//['abebe','Dessie','Lema']
    //  console.log(kebede.lastName);//Alemu
       //now let us acess throgh[''] dont forget to use qotetion
      //  console.log(kebede['firstName']);//kebede
      //  console.log(kebede['lastName']);//Alem
      //  console.log(kebede['age']);//24
    //what the different between dot notation and  bracket watch vidio 43 udemy js
    
    //example
    // const interestedIn= prompt("what would like to know about Kebede? choose between firstName,lastName,age,frends,job ");
     //console.log(kebede.interestedIn);//undifined
         //but
        // if(kebede[interestedIn])
        // {
        //   console.log(kebede[interestedIn]);//if exist the property(key value)
        // }else{
        //    console.log('Wrong request!choose between firstName,lastName,age,frends,job ');
        // }
      //To add new property by using dot and bracket Notation

      // kebede.location="Ethiopia";
      // kebede['twitter']="@kebede";
      // console.log(kebede);
        
      // const yohannes={
      //   firstName:'yohannes',
      //   frindes:['Michel','kasa','Belete']
      // }
      // console.log(`${yohannes.firstName} has${yohannes.frindes.length} frindes,${yohannes.frindes[0]} is best friend`);
      
      // using object methods//vidio 44
      // const kebede={
      //    firstName:"kebede",
      //     lastName:"Alemu",
      //      birthYear:1998,
      //      job:'Instructor',
      //      frends: ['abebe','Dessie','Lema'],
      //      hasDriverLicense:true,
          //  calAge:function(birthYear){
          //     return 2022-birthYear;
          //  }
        //   calAge:function(){
        //     return 2022-this.birthYear;
        //  }
      //   calAge:function(){
      //     this.age=2022-this.birthYear;
      //     return this.age;
      //  },
      //   getSummery:function(){
      //     return `${this.firstName} is a ${this.calAge()}-year old,and he has ${this.hasDriverLicense?'a':'no'} driver license,He has ${this.frends.length} friends their name are as follow  ${this.frends}`
      //   }
      //   }
        //console.log(kebede.calAge());
        //  console.log(kebede.age);
        //  console.log(kebede.age);
         
        //console.log(kebede.calAge(1998));//dot notation
        //console.log(kebede['calAge'](1998));// bracket notation
        // challenge Answer
        // console.log(kebede.getSummery());

        //fundemental part-2 code challenge 3
        // const mark={
        //   fullName:'Mark MIller',
        //   mass:78,
        //   height:1.69,
        //   calcBMI:function(){
        //     this.bmi=this.mass/this.height**2;
        //     return this.bmi;
        //   }
        // }
          
        // const john={
        //    fullName:'John MIller',
        //    mass:92,
        //    height:1.95,
        //    calcBMI:function(){
        //     this.bmi=this.mass/this.height**2;
        //     return this.bmi;
        //   } 
        // }
        // mark.calcBMI();
        // john.calcBMI();
        // console.log(mark.bmi,john.bmi);
        // if(mark.bmi>john.bmi){
        //   console.log(`${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s BMI ${john.bmi} `)
        // } else if(john.bmi>mark.bmi){
        //   console.log(`${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s BMI ${mark.bmi} `)
        // }

        // console.log(`${Mark.firstName + ' ' + Mark.lastName} has  ${Mark.calcBMI()}bmi higher than $ ${John.firstName + ' ' + John.lastName}  bmi ${John.calcBMI()}`);

          // itereation  using for loop
          // const abeArray=[
          //   'Abebe',
          //    'Alemu',
          //    2022-1999,
          //    'Teacher',
          //    ['Belay','Markos','Asegid'],
          // ];
          // const types=[];
          // for(let i=0; i<abeArray.length; i++){
              
          //    //Reading from AbeArray
          //   console.log(abeArray[i],typeof abeArray[i]);
          //   //filling types array
          //   //types[i] =typeof abeArray[i];
          //     //or
          //    // types.push(typeof abeArray[i]);
          // }
          // console.log(types);
          //Exampl 2 array

        //  const birthYear=[1989,1988,1990,1999,2001];
        //  const ages=[];
        //  for(let i=0; i<birthYear.length; i++){
        //    ages.push(2022-birthYear[i]);
        //  }
        //  console.log(ages);

        //continue and break stetment
        // const abeArray=[
        //   'Abebe',
        //    'Alemu',
        //    2022-1999,
        //    'Teacher',
        //    ['Belay','Markos','Asegid'],
        // ];
        // console.log(`=====only string===`);
        // for(let i=0; i<abeArray.length; i++){
           
        //      if(typeof abeArray[i]!=='string') continue;
        //    //Reading from AbeArray
        //   console.log(abeArray[i],typeof abeArray[i]);
          
        // }
         //about break
      //   console.log(`=====break with Number===`);
      //   for(let i=0; i<abeArray.length; i++){
           
      //     if(typeof abeArray[i]=="number") break;
      //   //Reading from AbeArray
      //  console.log(abeArray[i],typeof abeArray[i]);
      //  }
       // back ward iteration
       //4 ,3, 2, 1, 0
      // const abeArray=[
      //   'Abebe',
      //    'Alemu',
      //    2022-1999,
      //    'Teacher',
      //    ['Belay','Markos','Asegid'],
      //    true
      // ];

      // for(let i=abeArray.length-1; i>=0; i--){
      //   //Reading from AbeArray
      //  console.log(i,abeArray[i],typeof abeArray[i]);
      // }
      
      //nested for loop example

      // for(let exercise=1; exercise<4; exercise++){
      //   console.log(`===Starting exercise ${exercise}`);
      //   for(let rep=1; rep<6; rep++){
      //     console.log(` Exercise ${exercise}:lifting weight repetion ${rep}🏋️`);
      //   }
      // }
          //while loop

      // let rep=1;
      // while(rep<6){
      //   console.log(`Lifting weight reption ${rep}`);
      //   rep++
      // }
      // let dice=Math.trunc(Math.random()*6)+1;
      // console.log(dice);
      // while(dice!==6){
      //     console.log(`you rolled a ${dice}`);
      //     dice=Math.trunc(Math.random()*6)+1;
      //     if(dice===6) console.log(`The loop is about to End`);
      //   }

      // fundemental part-2 last code challeng
    //   const tipCal=function(bill)
    //   {
    //     return (bill>=50&&bill<=300)? bill*0.15:bill*0.20;
    //   }
      
    // const bills=[22,295,176,440,37,105,10,1100,86,523];
    //  const tips=[];
    //  const totals=[];
    // for(let i=0;i<bills.length; i++){
     
    //        const tip=tipCal(bills[i]);
    //     tips.push(tip);
    //     totals.push(bills[i]+tip);
        
    //  }
     // console.log(bills,tips,totals);
     


      //Bones challeng
      
    //    const calAve=function(arr){
    //       let sum=0;
    //     for(let i=0; i<arr.length;i++){
    //         sum=sum+arr[i];
    //      }
    //     // console.log(sum);
    //        return sum/arr.length;
          
    //   }
      
    //  console.log(calAve([3,7,2]));
    //  console.log(calAve(tips));
    //  console.log(calAve(totals))
   //
    // calculate temp amplitude
    //what amplitude: Answer max-min
    //
     const temperatures=[3,-2,-6,-1,'error',9,13,17,15,14,9,5];
    const calTemAmp=function(temps){
      let max=temps[0];
      let min=temps[0];

       for(let i=0; i<temps.length; i++){
          const curnTem =temps[i];
          if( typeof curnTem !=='number') continue;
          if(curnTem>max) max=curnTem;
          if(curnTem<min) min=curnTem;

       }
       console.log(max,min);
       return max-min
    }
    //calTemAmp([3,7,9,78]);
     const amplitude=calTemAmp(temperatures);
    console.log(amplitude);
    
