var serviceURL = "";
var employees;

$('#employeeListPage').bind('pageinit', function(event) {
    $(document).ready()
    {
        setTimeout(function (){if(serviceURL=="") //fix timeout problem
        {
            getIP();
        }
            }, 5000)
    };
    getEmployeeList()
});

function getIP()//Enter the ip address of the sql server since it is dynamic 
{
    serviceURL = "http://"+prompt("Please enter the sql server ip address","127.0.0.1")+"/services/";
}

function getEmployeeList() 
{
    $document.ready()//fix timeout issue
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
    };
}