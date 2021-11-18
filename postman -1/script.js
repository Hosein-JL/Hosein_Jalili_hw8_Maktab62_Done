/// GET URL https://api.jsonbin.io/b/618ec0ff4a56fb3dee0e16af
/// GET URL https://reqres.in/api/users?page=2

/// POST URL https://reqres.in/api/users

// {
//   "a": "b",
// },

$(document).ready(function () {
  $("#display").addClass("d-none");
  $("#reload").click(function (e) {
    e.preventDefault();
    location.reload();
  });
  $("#GET").click(function (e) {
    e.preventDefault();
    $("#display").addClass("d-none");

    $(".btn-success").click(function (e) {
      e.preventDefault();
      if ($("#url-input").val().trim() === "") {
        alert("Invalid URL ❗❗");
      } else {
        $.ajax({
          type: "GET",
          url: $("#url-input").val(),
          dataType: "json",

          success: function (response, status, xhr) {
            $("#responseBody").text(JSON.stringify(response, null, "\t"));
            $("#status").text(xhr.status);
            $("#plaintext").text("JSON");
          },
          error: function (xhr) {
            alert(`erro ${xhr.status} ‼`);
            $("#responseBody").text(`${xhr.status} erro ‼`);
          },
        });
      }
    });
  });
  $("#POST").click(function (e) {
    e.preventDefault();
    $("#display").removeClass("d-none");
    window.onerror = function () {
      alert(`Failed! Make sure that your JSON is valid`);
    };
    $(".btn-success").click(function (e) {
      e.preventDefault();
      if ($("#url-input").val().trim() === "") {
        alert("Invalid URL ❗❗");
      } else {
        $.ajax({
          type: "POST",
          url: $("#url-input").val(),
          data: JSON.parse($("#responseBody").val()),
          dataType: "json",

          success: function (response, status, xhr) {
            $("#requestBody").val(JSON.stringify(response, null, "\t"));
            $("#status").text(xhr.status);
            $("#plaintext").text("JSON");
          },
          error: function (xhr) {
            alert(`${xhr.status} erroe ‼`);
          },
        });
      }
    });
  });
});

