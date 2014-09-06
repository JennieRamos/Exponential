//define functions and global variables here...
var siteloc = "http://localhost/Exponential";
var scriptloc = "/scripts/"


function fetchExpo()
{
  $.ajax({
      url: siteloc + scriptloc + "make_exponentiater.py",

      data: {
				 result:$("#inputno").val()
				
	    } 
      success: function (res) {
                  $("p").append(res);
                  
              }
    });
}

function fetchExpo1()
{
  $.ajax({
      url: siteloc + scriptloc + "make_exponentiater1.py",
      data: {
				 result:$("#inputno").val()  
				
	    } 
      success: function (res) {
                  $("p").append(res);
                  

    });
}
