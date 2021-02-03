// module.exports = file => () => {
//     return import ('@/' + file)
// }


module.exports = file => () => {
    const result = import ('@/' + file)

    console.log('result', result)

    return result
}