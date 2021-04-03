// import {hoge} from "./hoge"

// const num = 1
// console.log(hoge)
// console.log(num)

import World from './world';

const root = document.getElementById("root")
const world = new World("Hello World!");
world.sayHello(root);