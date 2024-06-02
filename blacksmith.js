// Variables

let fireStatus = false
let gold = 0
let wood = 0
let ore = 0
let swords = 0
let axes = 0
let item

// Functions

/**
 * fire
 * To start a fire:
 *    The fire must be out
 *    There must be at least 1 piece of wood
 * To stop a fire:
 *    The fire must be going
 */

 function fire(){
    if(fireStatus === false && wood >= 1){
      fireStatus = true
      wood -= 1
      return "You have set the fire."
    } else if(fireStatus === true){
      fireStatus = false
      return "You have put out the fire."
    } else {
      return "You do not have enough wood to start a fire."
    }
  }  

/**
 * buy
 * To buy an item:
 *   The item must be available
 *   The player must have enough gold
 *   The player must have enough space in their inventory
 */

function buy(item){
  if(item === "wood" && gold >= 1){
    gold -= 1
    wood += 1
    return `You have purchased 1 wood for 1 gold. You now have ${wood} wood and ${gold} gold.`
  } else if(item === "ore" && gold >= 3){
    gold -= 3
    ore += 1
    return `You have purchased 1 ore for 3 gold. You now have ${ore} ore and ${gold} gold.`
  } else {
    return "You do not have enough gold to purchase this item."
  }

}

/**
 * make
 * To make an item:
 *  The player must have enough resources
 * The player must have a fire going
 */

function make(item){
  if(item === "sword" && ore >= 2 && wood >= 1 && fireStatus === true){
    ore -= 2
    wood -= 1
    swords += 1
    console.log("You have made a sword for 2 ore and 1 wood.")
    return showsResources() 
  } else if(item === "axe" && ore >= 1 && wood >= 2 && fireStatus === true){
    ore -= 1
    wood -= 1
    axes += 1
    console.log("You have made an axe for 1 ore and 2 wood.")
    return showsResources() 
  } else {
    return "You do not have enough resources to make this item (check your inventory). Or you do not have a fire going to make the item (check the fire status)."
  }
}

/**
 * sell
 * To sell an item:
 * The player must have the item
 * The player must have a fire going
 */

function sell(item){
  if(item === "sword" && swords >= 1 && fireStatus === true){
    swords -= 1
    gold += 5
    console.log("You have sold a sword for 5 gold.")
    return showsResources() 
  } else if(item === "axe" && axes >= 1 && fireStatus === true){
    axes -= 1
    gold += 3
    console.log("You have sold an axe for 3 gold.")
    return showsResources() 
  } else {
    return "You do not have enough swords or axes to sell (check your inventory). Or you do not have a fire going to sell the item (check the fire status)."
  }
}

/**
 * inventory
 * Shows the players current inventory
 */

function inventory(){
  console.log(`\nYou currently have:
  Gold: ${gold}
  Wood: ${wood}
  Ore: ${ore}
  Swords: ${swords}
  Axes: ${axes}\n\n`)

  return 'I have a cheat code for you to get some gold. Type getGold().'
}

/**
 * Help Command
 * Returns the instruction on how to play the game.
 */
function help () {
  console.log(`INSTRUCTIONS:
  Blacksmith is a simple text base game. 
  
  As a blacksmith you convert ore and wood into swords and axes. You buy your resources using gold and sell your weapons for gold.
  
  COMMANDS:
  - buy(item)
  - make(item)
  - sell(item)
  - fire()
  - inventory()
  - help() \n\n`)

  return "Start by checking your inventory using the inventory() command. Then, you can start a fire using the fire() command. Once you have a fire going, you can buy resources using the buy('item') command. Use the make('item') command to make weapons. Finally, you can sell your weapons using the sell('item') command."
}

// Log the help() function
console.log(help())


/**
 * Cheat Command
 * This command will help you get gold
 * */

function getGold(){
  gold += 100

  return `You have ${gold} gold. Now, you can purchase resources to make weapons and sell them for more gold`
}



/**
 * Resourse Command
 * Shows the list of updated resources
 */

function showsResources(){
  console.log(`\nNow you have:
  Gold: ${gold}
  Wood: ${wood}
  Ore: ${ore}
  Swords: ${swords}
  Axes: ${axes}\n\n`)

  return "You can now make more weapons or sell them for gold."
}


