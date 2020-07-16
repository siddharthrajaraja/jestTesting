var axios=require('axios')

exports.postData=async(objectData)=>{
    //var objectData={userId:11,id:201,title:'Random'}
    var result =await axios.post('https://jsonplaceholder.typicode.com/posts',objectData)
    return result.status
    //console.log(result.status)
}

