const express = require('express');
const newbooksRouter = express.Router();
function router(nav){

newbooksRouter.get('/',function(req,res){
    res.render("newbooks",
    {
        nav,
        title:'Authors'
    });
});
return newbooksRouter;
}
module.exports = router;