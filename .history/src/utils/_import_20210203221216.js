// module.exports = file => () => {
//     return import ('@/' + file)
// }
// module.exports = file => () => {
//     return import ('@/' + file)
// }

module.exports =  (view) => { // 路由懒加载
return (resolve) => require([`@/views/${view}`], resolve)
}