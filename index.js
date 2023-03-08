import characterData from "./data.js"
import Character from "./Character.js"
let monstersArray = ["orc", "demon", "goblin"]
let btnAttack = document.getElementById("btn-attck")
const getNewMonster = () => {
  const nextMonsterData = characterData[monstersArray.shift()]
  return nextMonsterData ? new Character(nextMonsterData) : {}
}


function render(){
  document.getElementById("wizard").innerHTML = wizard.getCharacterHtml()
  document.getElementById("orc").innerHTML = monster.getCharacterHtml()
}

const btnAttck = document.getElementById("btn-attck")
btnAttck.addEventListener("click", attack)
function attack(){
  wizard.setDiceHTML()
  monster.setDiceHTML()
  wizard.takeDamage(monster.currentDiceScore)
  monster.takeDamage(wizard.currentDiceScore)
  render()
  if (monster.isDead){
   btnAttack.disabled =true
    if (monstersArray.length > 0){
      setTimeout(()=>{
        monster = getNewMonster()
        render()
      }
       , 1500)
       setTimeout(()=> btnAttack.disabled = false, 1500)
    }else{
      endGame()
    } 
  }else if(wizard.isDead){
    endGame()
  }
}
function endGame(){
  btnAttack.disabled = false
  const endMessage = wizard.health === 0 && orc.health === 0 ?
                    "No victors - all creatures are dead" :
                    wizard.health > 0 ? "The Wizard Wins" :
                    "The Orc is Victorious"
  const endEmoji = wizard.health > 0 ? `🔮` : `☠️`
  
  setTimeout(()=>{
    document.body.innerHTML = `
        <div class="end-game">
            <h2>Game Over</h2> 
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>
        `
}, 1500)
}
let wizard =new Character(characterData.hero)
let monster = getNewMonster()
render()