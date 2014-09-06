//define functions and global variables here...
var siteloc = "http://localhost/Exponential";
var scriptloc = "/scripts/"


function fetchExpo()
{
  $.ajax({
      url: siteloc + scriptloc + "make_exponentiater.py",
<<<<<<< HEAD
      data: {
				 result:$("#inputno.").val()
				
	    } 
      success: function (res) {
                  console.log(res);
                  
              }
    });
}

function fetchExpo1()
{
  $.ajax({
      url: siteloc + scriptloc + "make_exponentiater1.py",
      data: {
				 result:$("#inputno.").val()  
				
	    } 
      success: function (res) {
                  console.log(res);
                  
=======
      data: {e:e,
             },
      dataType: 'json',
      success: function (res) {
                  console.log(res);
                  if(res[0][0] != "None")
                  {
					  table = '<table border="1">';
					  for (i = 0; i < res.length; i++)
					  {
						  row = res[i];
						  table += "<tr>";
						  for (j = 0; j < row.length; j++)
						  {
							  table += "<td>" + row[j] + "</td>";
						  }
						  table += "</tr>";
					  }
					  table += "</table>";
					  $("#target").html(table); 
				  } // end if
>>>>>>> 92f1bb2e2b3b97c1825c36e1595f55672d015be8
              }
    });
}
