const Course = require('../models/Courses');

class SiteController{
    // [GET] /
    async index(req, res){
        try {
            const data = await Course.find({}).lean();
            res.render('home', { data: data });
            // res.json(data);
        }  catch (err) {
            res.status(400).json({error: err});

        }
        
        // res.render('home')
    }
    //[GET] /search
    search(req, res){
        res.render('search');
    }

}

module.exports = new SiteController;
// const newController = require('./SiteController');