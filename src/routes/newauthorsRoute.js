const express = require('express');
const newauthorsRouter = express.Router();
function router(nav){

newauthorsRouter.get('/',function(req,res){
    res.render("newauthors",
    {
        nav,
        title:'Library'
    });
});

return newauthorsRouter;
}
module.exports = router;