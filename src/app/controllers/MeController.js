const Course = require('../models/Courses');

class MeController{
    
    // [GET] /me/stored/coures
    async storedCourses(req, res, next){

        Promise.all([
            Course.find().lean(),
            Course.countDocumentsDeleted()
        ]).then(([data, deletedCount]) => 
            res.render('me/stored-courses', {
                deletedCount,
                data })).catch(next);

        // Course.countDocumentsDeleted()
        //     .then((deletedCount) => {
        //         console.log(deletedCount)})
        //     .catch(()=>{});

        // const data = await Course.find().lean();
        // res.render('me/stored-courses', { data });
    
    }
    // [GET] /me/trash/coures
    async trashCourses(req, res){
        const data = await Course.findWithDeleted({deleted:true}).lean();
        res.render('me/trash-courses', { data })
    }

}

module.exports = new MeController;
// const newController = require('./SiteController');