<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="row">
        <div class="col-xl-4">
          <div class="card">
            <div
              class="card-body profile-card pt-4 d-flex flex-column align-items-center"
            >
              <img
                src="../../../dashboard_css/assets/img/profile-img.jpg"
                alt="Profile"
                class="rounded-circle"
              />
              <h2>Kevin Anderson</h2>
              <h3>Web Designer</h3>
              <div class="social-links mt-2">
                <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                <a href="#" class="instagram"
                  ><i class="bi bi-instagram"></i
                ></a>
                <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-8">
          <b-overlay
            id="overlay-background"
            :show="show"
            rounded="sm"
            class="col-lg-12"
            spinner-type="grow"
          >
            <div class="card">
              <div class="card-body pt-3">
                <!-- Bordered Tabs -->
                <ul class="nav nav-tabs nav-tabs-bordered">
                  <li class="nav-item">
                    <button
                      class="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-overview"
                      @click.stop="profileOverview"
                    >
                      Overview
                    </button>
                  </li>

                  <li class="nav-item">
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-teacher"
                      @click.stop="teacherProfile"
                    >
                      Teachers
                    </button>
                  </li>

                  <li class="nav-item">
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-discussion"
                      @click.stop="groupDiscussion"
                    >
                      Discussion
                    </button>
                  </li>

                  <li class="nav-item">
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-classes"
                      @click.stop="allClasses"
                    >
                      Classes
                    </button>
                  </li>

                  <li class="nav-item">
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-change-password"
                      @click.stop="changePassword"
                    >
                      Change Password
                    </button>
                  </li>
                </ul>
                <div class="tab-content pt-2">
                  <div
                    class="tab-pane fade show active profile-overview"
                    id="profile-overview"
                  >
                    <h5 class="card-title">Profile Details</h5>

                    <div class="row">
                      <div class="col-lg-3 col-md-4 label">Full Name</div>
                      <div class="col-lg-9 col-md-8">Kevin Anderson</div>
                    </div>

                    <div class="row">
                      <div class="col-lg-3 col-md-4 label">Subjects</div>
                      <div class="col-lg-9 col-md-8">
                        Lueilwitz, Wisoky and Leuschke
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-3 col-md-4 label">Parents</div>
                      <div class="col-lg-9 col-md-8">Web Designer</div>
                    </div>

                    <div class="row">
                      <div class="col-lg-3 col-md-4 label">Classes</div>
                      <div class="col-lg-9 col-md-8">USA</div>
                    </div>

                    <div class="row">
                      <div class="col-lg-3 col-md-4 label">Email</div>
                      <div class="col-lg-9 col-md-8">
                        A108 Adam Street, New York, NY 535022
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-3 col-md-4 label">Phone</div>
                      <div class="col-lg-9 col-md-8">(436) 486-3538 x29071</div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade profile-teacher pt-3"
                    id="profile-teacher"
                  >
                    <!-- Profile Edit Form -->
                    <form>
                      <div class="row mb-3">
                        <!-- Accordion without outline borders -->
                        <div
                          class="accordion accordion-flush"
                          id="accordionFlushExample"
                        >
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                              <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne"
                                aria-expanded="false"
                                aria-controls="flush-collapseOne"
                              >
                                Accordion Item #1
                              </button>
                            </h2>
                            <div
                              id="flush-collapseOne"
                              class="accordion-collapse collapse"
                              aria-labelledby="flush-headingOne"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div class="accordion-body">
                                <div class="row">
                                  <div class="col-lg-3 col-md-4 label">
                                    Subjects
                                  </div>
                                  <div class="col-lg-9 col-md-8">
                                    <span
                                      class="badge rounded-pill bg-warning text-dark"
                                      >Math</span
                                    >
                                  </div>
                                </div>

                                <div class="row">
                                  <div class="col-lg-3 col-md-4 label">
                                    Send Message
                                  </div>
                                  <div class="col-lg-9 col-md-8">
                                    Web Designer
                                  </div>
                                </div>

                                <div class="row">
                                  <div class="col-lg-3 col-md-4 label">
                                    Email
                                  </div>
                                  <div class="col-lg-9 col-md-8">USA</div>
                                </div>

                                <div class="row">
                                  <div class="col-lg-3 col-md-4 label">
                                    Phone
                                  </div>
                                  <div class="col-lg-9 col-md-8">
                                    (436) 486-3538 x29071
                                  </div>
                                </div>

                                <div class="row">
                                  <div class="col-lg-3 col-md-4 label">
                                    Classes
                                  </div>
                                  <div class="col-lg-9 col-md-8">
                                    <slot-calendar></slot-calendar>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- End Accordion without outline borders -->
                      </div>
                    </form>
                    <!-- End Profile Edit Form -->
                  </div>

                  <div class="tab-pane fade pt-3" id="profile-discussion">
                    <!-- Settings Form -->
                    <form>
                      <div class="row mb-3">
                        <label
                          for="fullName"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Email Notifications</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="changesMade"
                              checked
                            />
                            <label class="form-check-label" for="changesMade">
                              Changes made to your account
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="newProducts"
                              checked
                            />
                            <label class="form-check-label" for="newProducts">
                              Information on new products and services
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="proOffers"
                            />
                            <label class="form-check-label" for="proOffers">
                              Marketing and promo offers
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="securityNotify"
                              checked
                              disabled
                            />
                            <label
                              class="form-check-label"
                              for="securityNotify"
                            >
                              Security alerts
                            </label>
                          </div>
                        </div>
                      </div>

                      <div class="text-center">
                        <button type="submit" class="btn btn-primary">
                          Save Changes
                        </button>
                      </div>
                    </form>
                    <!-- End settings Form -->
                  </div>

                  <div class="tab-pane fade pt-3" id="profile-classes">
                    <!-- Settings Form -->
                    <form>
                      <div class="row mb-3">
                        <slot-calendar></slot-calendar>
                      </div>
                    </form>
                    <!-- End settings Form -->
                  </div>

                  <div class="tab-pane fade pt-3" id="profile-change-password">
                    <!-- Change Password Form -->
                    <form>
                      <div class="row mb-3">
                        <label
                          for="currentPassword"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Current Password</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            name="password"
                            type="password"
                            class="form-control"
                            id="currentPassword"
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="newPassword"
                          class="col-md-4 col-lg-3 col-form-label"
                          >New Password</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            name="newpassword"
                            type="password"
                            class="form-control"
                            id="newPassword"
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="renewPassword"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Re-enter New Password</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            name="renewpassword"
                            type="password"
                            class="form-control"
                            id="renewPassword"
                          />
                        </div>
                      </div>

                      <div class="text-center">
                        <button type="submit" class="btn btn-primary">
                          Change Password
                        </button>
                      </div>
                    </form>
                    <!-- End Change Password Form -->
                  </div>
                </div>
                <!-- End Bordered Tabs -->
              </div>
            </div>
          </b-overlay>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    async profileOverview() {
      let id = 1;
      let formData = {};
      let urlText = "teacher/" + id + "/profileOverview";

      let getResponse = await this.get(urlText, formData);
    },
    async teacherProfile() {
      let id = 1;
      let formData = {};
      let urlText = "teacher/" + id + "/students";

      let getResponse = await this.get(urlText, formData);
    },
    async groupDiscussion() {
      let id = 1;
      let formData = {};
      let urlText = "teacher/" + id + "/groupDiscussion";

      let getResponse = await this.get(urlText, formData);
    },
    async allClasses() {
      let id = 1;
      let formData = {};
      let urlText = "teacher/" + id + "/Classes";

      let getResponse = await this.get(urlText, formData);
    },
    async changePassword() {
      let id = 1;
      let formData = {};
      let urlText = "teacher/" + id + "/changePassword";

      let putResponse = await this.put(urlText, formData);
    },
  },
};
</script>
