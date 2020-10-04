export const requiredField=(value)=>{
    if(value){
       return undefined 
    }
    return 'error message' 
}

export const maxLength=(length)=>(value)=>{
    if(value.length>length ){
        return 'max length: 30' 
    }
    return undefined 
}