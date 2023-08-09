

const newsRouter = require('./news');
const coursesRouter = require('./courses');
const siteRouter = require('./site');
const meRouter = require('./me');


function route(app){
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);

    app.use('/', siteRouter);

    
    

    // app.post('/search', (req, res) => {
    // console.log(req.body);
    //   res.render('search');
    // })
}

module.exports = route;