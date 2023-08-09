const Course = require('../models/Courses');
// const newController = require('./CourseController');

class CourseController{
    
    //[GET] /courses/:slug
    async show(req, res){
        const data = await Course.findOne({slug :req.params.slug}).lean();//query with para
        res.render('courses/show', { data });
    }

    //[POST] /courses/store
    //Dữ liệu submit từ form được xử lý tại đây
    async store(req, res, next){
        req.body.image = `http://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const small = new Course(req.body);
        await small.save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
        // res.json(req.body);
    }
    //[GET] /courses/create
    async create(req, res){
        const data = await Course.findOne({slug :req.params.slug}).lean();//query with para
        res.render('courses/create', { data });
    }
    
    //[GET] /courses/:id/edit
    async edit(req, res){
        const data = await Course.findById(req.params.id).lean();//query with para
        res.render('courses/edit', { data });
    }
    
    //[PUT] /courses/:id //data will be submitted to courses/:id then apply update method in controller
    async update(req, res,next){
        const data = await Course.updateOne( {_id: req.params.id}, req.body)//query with para
            .then(() => res.redirect('/me/stored/courses')).catch(next);
        // res.render('courses/edit', { data });
        // res.json(req.body);
    }
    
    //[PATCH] /courses/:id/restore 
    async restore(req, res,next){
        Course.restore({_id : req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
    
    //[DELETE] /courses/:id
    destroy(req, res, next){
        Course.delete({_id : req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
    
    //[DELETE] /courses/:id/force
    forceDestroy(req, res, next){
        Course.deleteOne({_id : req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    
    
}

module.exports = new CourseController;