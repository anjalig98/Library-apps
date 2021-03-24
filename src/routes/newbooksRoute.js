const express = require('express');
const newbooksRouter = express.Router();
function router(nav){

newbooksRouter.get('/',function(req,res){
    res.render("newbook",
    {
        nav,
        title:'Authors'
    });
});
return newbooksRouter;
}
module.exports = router;