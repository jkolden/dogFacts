let axios = require("axios");


//gets a dog fact 
function getFact() {
  var config = {
    method: "get",
    url:
      ` http://dog-api.kinduff.com/api/facts`,
  };

  return axios(config)
    .then((response) => {
      let fact = response.data.facts[0];

      return fact;

    })
    .catch(function (error) {
      return error;
    });
}


module.exports = {
  doStuff: async (obj) => {

    let fact = await getFact();
    
    return fact;
  },
};