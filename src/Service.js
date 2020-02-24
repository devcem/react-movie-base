import axios from 'axios'

var Service = {
	config : {
		OMDBKey : 'b10e8819'
	},
	getMovie : function(term, callback, error){
		this.getFromOMDB(term, function(response){
			if(response){
				callback(response.data.Search);
			}
		}, function(response){
			if(response.status != 200){
				error();
			}
		});	
	},
	getFromOMDB : function(term, callback, error){
		axios.get('http://www.omdbapi.com/' , {
	        params: {
	            apikey : this.config.OMDBKey,
	            s      : term
	        }
	    }).then(callback);
	}
};

export default Service;