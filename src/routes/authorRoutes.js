const express=require('express');
const authorsRouter = express.Router();
function router(nav){
    var authors=[
        {
            title:'Joseph Barbera(1911-2006)',
            description:'Joseph Roland Barbera was an American animator, director, producer, storyboard artist, and cartoon artist, whose film and television cartoon characters entertained millions of fans worldwide for much of the 20th century.',
            genre:'',
            img:'jBarbera.jpg'
        },
        {
            title:'J.K.Rowling(1965-Present)',
            description:'J. K. Rowling, is a British author and philanthropist. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies, becoming the best-selling book series in history.',
            genre:'',
            img:'JKRowling.jpg'
        },
        {
            title:'Rachel Caine(1962-2020)',
            description:'Rachel Caine was the pen name of Roxanne Longstreet Conrad  who was an American writer of science fiction, fantasy, mystery, suspense, and horror novels.',
            genre:'',
            img:'RachelCaine.jpg'
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