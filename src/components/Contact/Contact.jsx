import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <>
      <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10 col-md-12">
              <div class="wrapper">
                <div class="row no-gutters">
                  <div class="col-md-7 d-flex align-items-stretch">
                    <div class="contact-wrap w-100 p-md-5 p-4">
                      <h3 class="mb-4">Liên hệ chúng tôi</h3>
                      <div id="form-message-warning" class="mb-4"></div>
                      <div id="form-message-success" class="mb-4">
                        Cảm ơn bạn đã liên hệ với chúng tôi. 
                        Chúng tôi sẽ phản hồi sớm nhất.
                      </div>
                      <form method="POST" id="contactForm" name="contactForm">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <input type="text" class="form-control" name="name" id="name" placeholder="Tên của bạn" />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <input type="email" class="form-control" name="email" id="email" placeholder="Email của bạn" />
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <input type="tel" class="form-control" name="subject" id="subject" placeholder="Số điện thoại" />
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <input type="text" class="form-control" name="subject" id="subject" placeholder="Tiêu đề" />
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <textarea name="message" class="form-control" id="message" cols="30" rows="7" placeholder="Nội dung"></textarea>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group d-flex justify-content-center">
                              <input type="submit" value="Gửi" class="btn btn-primary" />
                              <div class="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-md-5 d-flex align-items-stretch">
                    <div class="info-wrap bg-primary w-100 p-lg-5 p-4">
                      <h3 class="mb-4 mt-md-4">Thông tin liên hệ</h3>
                      <div class="dbox w-100 d-flex align-items-start">
                        <div class="icon d-flex align-items-center justify-content-center">
                          <span class="fa fa-map-marker"></span>
                        </div>
                        <div class="text pl-3">
                          <p>
                            <span>Địa chỉ:</span>
                            <span> 22 Tạ Quang Bửu-Phường Bách Khoa-Hai Bà Trưng-Hà Nội</span></p>
                        </div>
                      </div>
                      <div class="dbox w-100 d-flex align-items-center">
                        <div class="icon d-flex align-items-center justify-content-center">
                          <span class="fa fa-phone"></span>
                        </div>
                        <div class="text pl-3">
                          <p><span>Phone:</span> <a className="text-decoration-none" href="tel://0917448833">0917.44.88.33</a></p>
                        </div>
                      </div>
                      <div class="dbox w-100 d-flex align-items-center">
                        <div class="icon d-flex align-items-center justify-content-center">
                          <span class="fa fa-globe"></span>
                        </div>
                        <div class="text pl-3">
                          <p><span>Website</span> <a href="https://bachkhoa.org/">bachkhoa.org</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
