var {postData}=require('../asyncAwait')
test('This is for posting over the Server',async()=>{
    var objectData={userId:11,id:201,title:'Random'};
    var result=await postData();
    expect(result).toBe(201)
})