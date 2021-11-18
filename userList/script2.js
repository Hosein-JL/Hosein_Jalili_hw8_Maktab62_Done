$("document").ready(function () {
  // page 2
  if ($())
    $.ajax({
      type: "GET",
      url: "https://reqres.in/api/users?page=2",
      success: function (arr) {
        console.log(arr.data);
        console.log(arr);

        for (let i = 0; i < arr.data.length; i++) {
          $("#userList").append(`
          <div  id="card${i + 1}" class="col-12 col-sm-6 col-md-4 p-2">
              <div class="card">
                  <img src=${arr.data[i].avatar} class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="id">id:${arr.data[i].id}</h5>
                      <p class="card-text">email:${arr.data[i].email}</p>
                      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#id${
                        i + 1
                      }">user profile</button>
                  </div>
              </div>`);
        }
        for (let i = 0; i < arr.data.length; i++) {
          $("#modal").append(`<div class="modal fade" id="id${
            i + 1
          }" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title-ID" id="exampleModalLabel">User ID:${
                        i + 1
                      } </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      <img id="img${i + 1}" src=${
            arr.data[i].avatar
          } class="img-thumbnail col-5 float-end mb-0" alt="...">
                      <div class="mb-1 col-6 me-2">
                          <label for="formGroupExampleInput" class="form-label">First Name:</label>
                          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="${
                            arr.data[i].first_name
                          }">
                      </div>
                      <div class="mb-1 mt-3 col-6">
                          <label for="formGroupExampleInput2" class="form-label">Last Name:</label>
                          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="${
                            arr.data[i].last_name
                          }">
                      </div>
                      <div class="mb-1 mt-3 col-12">
                          <label for="formGroupExampleInput2" class="form-label">email:</label>
                          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="${
                            arr.data[i].email
                          }">
                      </div>
                      <div class="input-group mt-3">
                          <input id="src${
                            i + 1
                          }" type="file" class="form-control">
                          <label class="input-group-text" for="inputGroupFile02">Upload Avatar</label>
                      </div>
                  </div>
                  <div class="modal-footer">
                  <button id="delete${
                    i + 1
                  }" type="button" class="btn btn-outline-danger">Delete</button>
                  <button id="Update${
                    i + 1
                  }" type="button" class="btn btn-outline-success">Update</button>
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
              </div>
          </div>
      </div>`);
        }
        // delete
        for (let i = 0; i < arr.data.length; i++) {
          $(`#delete${i + 1}`).click(function (e) {
            e.preventDefault();
            $(`#card${i + 1}`).remove();
          });
        }
        //update
        for (let i = 0; i < arr.data.length; i++) {
          $(`#Update${i + 1}`).click(function (e) {
            e.preventDefault();
            $(`#fn${i + 1}`).attr("placeholder", `${$(`#fn${i + 1}`).val()}`);
            $(`#img${i + 1}`).attr(
              "src",
              `${$(`#src${i + 1}`)
                .val()
                .slice(12, $(`#src${i + 1}`).val().length)}`
            );
            $(`#imgSecend${i + 1}`).attr(
              "src",
              `${$(`#src${i + 1}`)
                .val()
                .slice(12, $(`#src${i + 1}`).val().length)}`
            );
          });
        }
        
        // function create(){
        $("#create").click(function (e) {
          e.preventDefault();
          var passw = /[A-Za-z]/;
          var passw1 = /[0-9]/;
          let id = prompt("Enter your ID : ");
          let idTest = Number(id);
          let email = prompt("Enter your email");
          if (
            id == idTest &&
            id.trim() &&
            email.trim() &&
            email.match(passw) &&
            email.match(passw1)
          ) {
            $("#userList").append(`
          <div id="card${id}" class="col-12 col-sm-6 col-md-4 p-2">
              <div class="card">
                  <img src="" id="img${id}" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="id">id:${id}</h5>
                      <p class="card-text">email:${email}</p>
                      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#id${id}">user profile</button>
                  </div>
              </div>`);

            //modal
            $("#modal")
              .append(`<div class="modal fade" id="id${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title-ID" id="exampleModalLabel">User ID:${id} </h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                          <img id="imgSecend${id}" src="" class="img-thumbnail col-5 float-end mb-0" alt="...">
                          <div class="mb-1 col-6 me-2">
                              <label for="fn${id}" class="form-label">First Name:</label>
                              <input type="text" class="form-control" id="fn${id}" placeholder="">
                          </div>
                          <div class="mb-1 mt-3 col-6">
                              <label for="ln${id}" class="form-label">Last Name:</label>
                              <input type="text" class="form-control" id="ln${id}" placeholder="">
                          </div>
                          <div class="mb-1 mt-3 col-12">
                              <label for="email${id}" class="form-label">email:</label>
                              <input type="text" class="form-control" id="email${id}" placeholder="">
                          </div>
                          <div class="input-group mt-3">
                              <input id="src${id}" type="file" class="form-control">
                              <label class="input-group-text" for="inputGroupFile02">Upload Avatar</label>
                          </div>
                      </div>
                      <div class="modal-footer">
                      <button id="delete${id}" type="button" class="btn btn-outline-danger">Delete</button>
                      <button id="Update${id}" type="button" class="btn btn-outline-success">Update</button>
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                  </div>
              </div>
          </div>`);

            //update
            $(`#Update${id}`).click(function (e) {
              e.preventDefault();
              $(`#fn${id}`).attr("placeholder", `${$(`#fn${id}`).val()}`);
              $(`#img${id}`).attr(
                "src",
                `${$("#src7").val().slice(12, $("#src7").val().length)}`
              );
              $(`#imgSecend${id}`).attr(
                "src",
                `${$("#src7").val().slice(12, $("#src7").val().length)}`
              );

              //remove
              $(`#delete${id}`).click(function (e) {
                e.preventDefault();
                $(`#card${id}`).remove();
              });
            });
          } else {
            alert("Invalid Input");
          }
        });
      },
    });
});
