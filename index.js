import _ from "lodash"
export default function solution(content) {
  // BEGIN
  //console.log(content)
  
    // BEGIN
    const rows = content.split('\n');
    const data = rows.slice(2).map((row) => 
    row.split('|').slice(1 , 8).map(el => el.trim())
  )
  
  console.log(`Количество цветочков: ${data.length}`);
  
//2
let plants =  data.map((rows) => rows[0])
const dangerPlants = data.map((rows) => rows[4])

plants.forEach(function(item, index){
  plants[index] = _.capitalize(item);
}) ;
const sortPlants = plants.sort()
console.log(String(sortPlants))
//3

const totalPlants = dangerPlants.length;
const safePlants = dangerPlants.filter(plant => plant === 'Нет').length;
const dangerousPlants = totalPlants - safePlants;

const safePercentage = (safePlants / totalPlants) * 100;
const dangerousPercentage = (dangerousPlants / totalPlants) * 100;

console.log(`Безопасные растения: ${safePlants} (${safePercentage.toFixed(2)}%)`);
console.log(`Опасные растения: ${dangerousPlants} (${dangerousPercentage.toFixed(2)}%)`);


//END
}


