var sortList = function(head){
    let temp = head
    if(!head){
        return null
    }
    let array = []
    while(head){
        array.push(head.val)
        head = head.next
    }
    for(let j=0;j<array.length;j++){
        for(let k=j+1;k<array.length;k++){
            if(array[k]<array[j]){
                let tempVal = array[j]
                array[j]=array[k]
                array[k]=tempVal
            }
        }
    }
    head = temp
    for(let i=0;i<array.length;i++){
        temp.val = array[i]
        temp=temp.next
    }
    return head
}