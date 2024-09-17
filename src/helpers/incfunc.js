export const converDate = (d) => {
    let date = new Date(d)
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
}