/// GET URL https://api.jsonbin.io/b/618ec0ff4a56fb3dee0e16af
/// GET URL https://reqres.in/api/users?page=2

/// POST URL https://reqres.in/api/users

// {
//   "a": "b",
// },

$(document).ready(function () {
  //on click submit
  $("#btnSub").click(function (e) {
    if ($("#method").val() === "GET") {
      e.preventDefault();
      $.ajax({
        type: "GET",
        url: `${$(".inputControl").val()}`,
        success: function (response, status, xhr) {
          alert(status);
          $("#APItextarea").text(JSON.stringify(response, null, "\t"));
          $(".lead").text(`PlanText: JSON, Status: ${xhr.status}`);
        },
        error: function () {
          alert(`erro ${xhr.status} ‼`);
          $("#APItextarea").text(`${xhr.status} erro ‼`);
        },
      });
    } else {
      //validation for request input

      if (IsJsonString($("#APItextareaRequest").val())) {
        $.ajax({
          type: "post",
          data: `${$("#APItextareaRequest").val()}`,
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          url: `${$("#URLInput").val()}`,
          success: function (response, status, xhr) {
            alert(status);
            $("#APItextarea").val(JSON.stringify(response, null, "\t"));
            $("#statuse").val(`${xhr.status}`);
          },
          error: function () {
            alert(`${xhr.status} erroe ‼`);
          },
        });
      } else {
        alert("Failed! Make sure that your JSON is valid");
      }
    }
  });
});
//validation function
function IsJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
