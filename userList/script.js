$("document").ready(function () {
  // page 1

  $.ajax({
    type: "GET",
    url: `https://reqres.in/api/users?page=1`,
    success: function (arr) {
      console.log(arr.data);
      console.log(arr);

      for (let i = 0; i < arr.data.length; i++) {
        $("#userList").append(`
        <div id="card${i + 1}" class="col-12 col-sm-6 col-md-4 p-2">
            <div class="card">
                <img src=${arr.data[i].avatar} id="img${
          i + 1
        }" class="card-img-top" alt="...">
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
                    <img id="imgSecend${i + 1}" src=${
          arr.data[i].avatar
        } class="img-thumbnail col-5 float-end mb-0" alt="...">
                    <div class="mb-1 col-6 me-2">
                        <label for="fn${
                          i + 1
                        }" class="form-label">First Name:</label>
                        <input type="text" class="form-control" id="fn${
                          i + 1
                        }" placeholder="${arr.data[i].first_name}">
                    </div>
                    <div class="mb-1 mt-3 col-6">
                        <label for="ln${
                          i + 1
                        }" class="form-label">Last Name:</label>
                        <input type="text" class="form-control" id="ln${
                          i + 1
                        }" placeholder="${arr.data[i].last_name}">
                    </div>
                    <div class="mb-1 mt-3 col-12">
                        <label for="email${
                          i + 1
                        }" class="form-label">email:</label>
                        <input type="text" class="form-control" id="email${
                          i + 1
                        }" placeholder="${arr.data[i].email}">
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
      //remove
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
          $(`#img${i + 1}`).attr("src", "test.jpg");
          $(`#imgSecend${i + 1}`).attr("src", "test.jpg");
        });
      }
    },
  });
});
