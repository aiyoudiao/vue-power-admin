// module.exports = file => () => {
//     return import ('@/' + file)
// }



module.exports = file => (resolve) => require([`@/views/${file}`], resolve)