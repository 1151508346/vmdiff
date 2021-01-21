export default function createElement(type,props,...children){
    let key;
    if(props.key){
        key = props.key;
        delete props.key;
    }
    return vnode(type,key,props,children)
}
function vnode(type,key,props,childen,text){
    return {
        type, key, props, childen, text
    }
}