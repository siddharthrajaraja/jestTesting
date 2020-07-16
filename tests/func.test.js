var {outString,add,sortArray,getObject,isPalindrome,findNthFibo}=require('../functions')

test(('check string'),()=>{
    expect(outString()).toBe('Hello')
})

test(('adding two numbers'),()=>{
    expect(add(1,2)).toBe(3);
})


test(('sorted Array'),()=>{
   expect(sortArray([1,2,4,3])).toStrictEqual([1,2,3,4])
})

test(('check is Object undefined'),()=>{
    expect(getObject({})).toBeDefined()    
})

test(('verify Object'),()=>{
    expect(getObject({})).toEqual({username:'Siddharth',password:'Aman_bhai_hai'})    
})

test(('check Palindrome or not !!'),()=>{
    expect(isPalindrome('NitiN')).toBe('NitiN is a Palindrome.')
})


test(('check Palindrome or not !!'),()=>{
    expect(isPalindrome('reshma')).toBe('reshma is not Palindrome.')
})

test.only(('Find The Nth Fibonacci'),()=>{
    expect(findNthFibo(10)).toBe(55)
})

