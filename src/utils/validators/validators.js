export const requiredField=(value)=>{
    if(value){
       return undefined 
    }
    return 'error message' 
}

export const maxLength=(length)=>(value)=>{
    if(value.length>length ){
        return 'error message' 
    }
    return undefined 
}