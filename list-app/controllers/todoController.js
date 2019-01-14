// the app variable passed in will be my express app in app.js
module.exports = (app) => {

    app.get('/todo', function(req, res){
        res.render('todo');
    });

    app.post('/todo', function(req, res){
        
    });

    app.delete('/todo', function(req, res){
        
    });

};