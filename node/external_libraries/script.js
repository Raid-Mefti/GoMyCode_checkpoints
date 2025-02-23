const _=require('lodash')

const listOfNodes = [13, 24, 54, 675, 761]

const clearList = _.without(listOfNodes, 675, 54)

console.log(clearList);