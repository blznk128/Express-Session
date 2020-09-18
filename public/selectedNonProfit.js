let url = window.location.search;
  let employeeId;

if (url.indexOf("?nonProfit_id=") !== -1) {
    employeeId = url.split("=")[1];
    getEmployeeInfo(employeeId);
  };


function getEmployeeInfo(id) {
    $.get("/api/employees/" + id, function(data) {
        console.log(data)
    //   if (data) {
    //     firstName.val(data.first_Name);
    //     lastName.val(data.last_Name);
    //     wage.val(data.wage);
    //     department.val(data.department)
    //     updating = true;
    //     }
      });
  }

//   getEmployeeInfo()