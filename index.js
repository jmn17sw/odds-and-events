//use #app exclusively to manipulate html
  //lots of createElement and element.style. property required
//create 3 arrays
const dataBanks = [
   //bank
{
  name: 'bank',
  contents: [num1, num2, num3, num4, num5]
}, 
  //odds

{
  name: 'odds',
  contents: [num1, num2, mun3, num4, num5]
},
  //evens
{
name: 'evens',
contents: [num1, num2, num3, num4, num5]
}
];
//tie them to #app  
const renderAppList = () => {
const appDataBanks = document.querySelector('#app')
appDataBanks.innerHTML = '';
dataBanks.forEach((individualDB) => {
  const h2BankName = document.createElement('h2')
  h2BankName.innerText = individualDB.name;
  const h2EvensName = document.createElement('h2')
  h2EvenssName.innerText = individualDB.name;
  const h2OddsName = document.createElement('h2')
  h2OdssName.innerText = individualDB.name;

  for(const )

});
}




//create seperate fields 
  //prompt + field
  //submit button (add num)
    //entered numbers go to bank [array]
  //sort 1 button
    //grabs first object
    //passes object through boolean (even = true) function
    //pushes object to corresponding array (function)
  //sort all button
    //grabs all objects 
    //passes objects through existing boolean (even = true) function
    //pushes objects to corresponding arrays through existing function