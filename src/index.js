import {h} from "./vdom"
console.log(h)
let vnode = h("div", {
    style: {
        width: "100px"
    }
}, h("span", {
    style: {
        color: "#fff"
    }
}, 'zf'), 'abc')
console.log(vnode)