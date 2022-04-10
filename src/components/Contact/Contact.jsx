import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-md-7 d-flex align-items-stretch">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4">Liên hệ chúng tôi</h3>
                      <div id="form-message-warning" className="mb-4"></div>
                      <div id="form-message-success" className="mb-4">
                        Cảm ơn bạn đã liên hệ với chúng tôi. 
                        Chúng tôi sẽ phản hồi sớm nhất.
                      </div>
                      <form method="POST" id="contactForm" name="contactForm">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input type="text" className="form-control" name="name" id="name" placeholder="Tên của bạn" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input type="email" className="form-control" name="email" id="email" placeholder="Email của bạn" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="tel" className="form-control" name="subject" id="subject" placeholder="Số điện thoại" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="text" className="form-control" name="subject" id="subject" placeholder="Tiêu đề" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea name="message" className="form-control" id="message" cols="30" rows="7" placeholder="Nội dung"></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group d-flex justify-content-center">
                              <input type="submit" value="Gửi" className="btn btn-primary" />
                              <div className="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-stretch">
                    <div className="info-wrap bg-primary w-100 p-lg-5 p-4">
                      <h3 className="mb-4 mt-md-4">Thông tin liên hệ</h3>
                      <div className="dbox w-100 d-flex align-items-start">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-map-marker"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Địa chỉ:</span>
                            <span> 22 Tạ Quang Bửu-Phường Bách Khoa-Hai Bà Trưng-Hà Nội</span></p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-phone"></span>
                        </div>
                        <div className="text pl-3">
                          <p><span>Phone:</span> <a className="text-decoration-none" href="tel://0917448833">0917.44.88.33</a></p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-globe"></span>
                        </div>
                        <div className="text pl-3">
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
