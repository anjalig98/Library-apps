const express=require('express');
const authorsRouter = express.Router();
function router(nav){
    var authors=[
        {
            title:'Tom and Jerry',
            author:'Joseph Barbera',
            genre:'cartoon',
            img:'tom.jpg'
        },
        {
            title:'Harry Potter',
            author:'J.K.Rowling',
            genre:'Fantasy',
            img:'harrypotter.jpg'
        },
        {
            title:'Ink and Bone',
            author:'Rachel Caine',
            genre:'Fantasy',
            img:'download.jpg'
        }
    ]
    authorsRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
            title:'Library',
            authors
        });
    });



    authorsRouter.get('/:id',function(req,res){
        var id=req.params.id;
        res.render('author',{
            nav,
            title:'Library',
            author : authors[id]
        });
    });
    return authorsRouter;
}

module.exports=router;