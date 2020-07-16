exports.outString=()=>{
    return "Hello"
}

exports.add=(a,b)=>{
    return a+b
}

exports.sortArray=(array)=>{
    return array.sort();
}

exports.getObject=(userObj)=>{
    userObj['username']='Siddharth';
    userObj['password']='Aman_bhai_hai'
    return userObj
}

exports.isPalindrome=(str)=>{
    let i=0;
    let j=str.length-1;
    while(i<=j){
        if(str[i]!=str[j]){
            return str+" is not Palindrome.";
        }
        i++;
        j--;
    }
    return str+" is a Palindrome."
}

exports.findNthFibo=(n)=>{
    var arr=[0,1]
    for(var i=2;i<=n;i++){

        arr.push(arr[i-1]+arr[i-2]);
    }
    return arr[n];

}