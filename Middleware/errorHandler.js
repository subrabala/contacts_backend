const errorHandler=(err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode :500;
    // 500 is server-side error
    switch(statusCode){
        case 400:
            res.json({ title:"Not Found" ,message : err.message, stackTrace: err.stack});
            break;
        case 404:
            res.json({ title:"Validation Failed" ,message : err.message, stackTrace: err.stack});
            break;
        case 401:
            req.json({title:"UnAuthorized" ,message : err.message, stackTrace: err.stack})
        case 404:
            req.json({title:"Not Found" ,message : err.message, stackTrace: err.stack})
            break;
        case 403:
            req.json({title:"Forbidden" ,message : err.message, stackTrace: err.stack})
            break;
        case 500:
            req.json({title:"SERVER Error" ,message : err.message, stackTrace: err.stack})
            break;
        default:
            console.log("No error");
            break;
    }

};

module.exports =errorHandler;