var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
	return {
		get_all: function(req, res){
			User.find({}, function (err, data){
				if (err){
					res.json({error: err})
				} else {
					res.json(data);
				}
			})
		},
		add: function (req, res){
			var new_user = new User({name: req.body.info.name, created_at: req.body.info.created_at});
			new_user.save(function (err, data){
				if(err){
					console.log("We have errors adding the new person: " + req.body.info.name)
				}else{
					console.log("We added the new customer!")
					console.log(data)
				}
			})
		}
	}
})();