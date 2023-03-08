
import {getDiceRoll, getDicePlaceholderHtml, getPercentage} from "./utils.js"
// function Character(data){
//     Object.assign(this,data)
//     this.diceHTML = getDicePlaceholderHtml(this.dice_Count)

//     this.setDiceHTML = function(){
//       this.currentDiceScore = getDiceRoll(this.dice_Count)
//       this.diceHTML = this.currentDiceScore.map(num=>
//         `<div class="attck-score"><div class="score">${[num]}</div></div>`
//       ).join('')
//     }
//     this.MaxHealth = this.health
//     this.getCharacterHtml = function(){
//       const {  name, avatar, health, dice_Count, diceHTML } = this
//       const healthBar = this.getHealthBarHTML()
//       // const diceHtml = this.setDiceHTML(dice_Count)
//       return `<div class="card">
//         <h1 class="character-name">${name}</h1>
//           <div class="img-char">
//             <img id ="avatart"src="${avatar}" alt="" />
//           </div>
//           <div class="health-container">
//             <p class="label-health">health : <span class="health"> <b>${health}</b></span></p>
//             ${healthBar}
//             </div>
//           <div class="attck-container">
//             ${diceHTML}
//           </div>
//       </div>`
//     }
//     this.takeDamage = function(attackScoreArray){
//      const totalAttackScore = attackScoreArray.reduce((total,currentElement)=>
//       total + currentElement
//      )
//      this.health -= totalAttackScore
//      if (this.health <= 0 ){
//       this.health = 0
//       this.isDead = true
//      }
//     }
//     this.getHealthBarHTML = () => {
//       const percent = getPercentage(this.health, this.MaxHealth)
//       return `<div class = "health-Bar-Outer">
//       <div class =  "health-Bar-Inner ${percent <= 25? "danger" : "" }" style=" width : ${percent}%; ">
//                 </div>
//               </div>` 
//     }
// }
class Character{
  constructor(data){
    Object.assign(this,data)
    this.MaxHealth = this.health
    this.diceHTML =  getDicePlaceholderHtml(this.dice_Count)
  }
  setDiceHTML(){
    this.currentDiceScore = getDiceRoll(this.dice_Count)
      this.diceHTML = this.currentDiceScore.map(num=>
        `<div class="attck-score"><div class="score">${[num]}</div></div>`
      ).join('')
  }
  getCharacterHtml(){
    const {  name, avatar, health, dice_Count, diceHTML} = this
    const healthBar = this.getHealthBarHTML()
    // const diceHtml = this.setDiceHTML(dice_Count)
    return `<div class="card">
      <h1 class="character-name">${name}</h1>
        <div class="img-char">
          <img id ="avatart"src="${avatar}" alt="" />
        </div>
        <div class="health-container">
          <p class="label-health">health : <span class="health"> <b>${health}</b></span></p>
          ${healthBar}
          </div>
        <div class="attck-container">
          ${diceHTML}
        </div>
    </div>`
  }
  takeDamage(attackScoreArray){
    const totalAttackScore = attackScoreArray.reduce((total,currentElement)=>
      total + currentElement
     )
     this.health -= totalAttackScore
     if (this.health <= 0 ){
      this.health = 0
      this.isDead = true
     }
  }
  getHealthBarHTML(){
    const percent = getPercentage(this.health, this.MaxHealth)
    return `<div class = "health-Bar-Outer">
    <div class =  "health-Bar-Inner ${percent <= 25? "danger" : "" }" style=" width : ${percent}%; ">
              </div>
            </div>` 
  }
}
export default Character 