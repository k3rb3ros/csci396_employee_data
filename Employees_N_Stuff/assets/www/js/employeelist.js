var serviceURL = "";
var employees;

$('#employeeListPage').bind('pageinit', function(event) 
{
        getIP();
});

function getIP()//Enter the ip address of the sql server since it is dynamic 
{
  setTimeout(function (){if(serviceURL=="") //fix timeout problem
    {
        serviceURL = "http://"+prompt("Please enter the sql server ip address","127.0.0.1")+"/services/";
        getEmployeeList()
    }
  }, 5000)
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