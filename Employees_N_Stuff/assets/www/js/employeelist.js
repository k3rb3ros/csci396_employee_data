var serviceURL = "";
var employees;

$('#employeeListPage').bind('pageinit', function(event) {
    getIP();
});

function getIP()//Enter the path to the sql server since I don't own a domain name
{
    setTimeout(function()
  { if(serviceURL=="") //fix timeout waiting for user choice problem
    {
	serviceURL = "http://"+prompt("Please enter the path to the sql server","54.245.102.59/directory/services/");
    	getEmployeeList();
    }
  }, 100)
}

function getEmployeeList() 
{
	$.getJSON(serviceURL + 'getemployees.php', function(data) {
		$('#employeeList li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#employeeList').append('<li><a href="employeedetails.html?id=' + employee.id + '">' +
					'<img src="pics/' + employee.picture + '"/>' +
					'<h4>' + employee.firstName + ' ' + employee.lastName + '</h4>' +
					'<p>' + employee.title + '</p>' +
					'<span class="ui-li-count">' + employee.reportCount + '</span></a></li>');
		});
		$('#employeeList').listview('refresh');
	});
}
