const set = (obj, key, value) => {
    if(!obj.hasOwnProperty(key)) {
        obj[key] = value
    }
    return obj
}

export default set