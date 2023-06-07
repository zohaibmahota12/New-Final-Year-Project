import React from "react";

function UserForm() {
  return (
    <>
      
          <div className="col-md-6">
            <section class="py-1 my-1">
              <div class="container">
                <h1 class="mb-2"></h1>
                <div class="bg-white shadow rounded-lg d-block d-sm-flex">
                  <div class="tab-content p-4 p-md-5" id="v-pills-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="account"
                      role="tabpanel"
                      aria-labelledby="account-tab"
                    >
                      <h3 class="mb-4">Update Profile</h3>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>First Name</label>
                            <input
                              type="text"
                              class="form-control"
                              value="Muhammad"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Last Name</label>
                            <input
                              type="text"
                              class="form-control"
                              value="Haris"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Email</label>
                            <input
                              type="text"
                              class="form-control"
                              value="haris@gmail.com"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Phone number</label>
                            <input
                              type="text"
                              class="form-control"
                              value="+923035190106"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Company</label>
                            <input
                              type="text"
                              class="form-control"
                              value="Teacher.com"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Designation</label>
                            <input
                              type="text"
                              class="form-control"
                              value="react js Developer"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <label>Bio</label>
                            <textarea class="form-control" rows="4">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Labore vero enim error similique quia
                              numquam ullam corporis officia odio repellendus
                              aperiam consequatur laudantium porro voluptatibus,
                              itaque laboriosam veritatis voluptatum distinctio!
                            </textarea>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button class="btn btn-cust text-white">Update</button>
                        <button class="btn btn-light">Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        
    </>
  );
}

export default UserForm;
