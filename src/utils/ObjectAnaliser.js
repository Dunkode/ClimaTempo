export const isEmpty =  (obj) => {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}

export const transformObjectInList = (obj) => {
    let listObjects = []
    if (!isEmpty(obj)){
        Object.keys(obj).map(chave => {
            obj[chave]["id"] = chave
            listObjects.push(obj[chave])
        })

    }    
    return listObjects

}

export const getObjectInList = (list, value) =>{
    for (var i = 0; i < list.length ; i++){
        var obj = list[i]
        if (obj.id == value){
            return obj
        }
    }
}