var reverseList = function(head){
    if(head===null){
        return head
    }
    let current = head
    let previous = null

    while(current != null){
        let temp = current.next
        current.next = previous
        previous = current
        current = temp
    }
    return previous
}