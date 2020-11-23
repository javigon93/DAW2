const { create } = require('mathjs')
const {all}= require('mathjs');


const config = { }
const math = create(all, config)


const a= math.complex('2+4i');
const b= math.complex('-5+3i');


 

console.log(math.add(a,b));