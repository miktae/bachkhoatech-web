import React from 'react'

function AboutUs() {
  const Image = [
{
  url: 'https://bachkhoa.org/wp-content/uploads/2018/05/Biến_tần_abb-300x300.jpg',
  alt: 'Biến tần ABB'
},
{
  url: 'https://bachkhoa.org/wp-content/uploads/2018/05/khởi_động_mềm-300x300.jpg',
  alt: 'Khởi động mềm'
},
{
  url: 'https://bachkhoa.org/wp-content/uploads/2018/05/mccb12-300x300.jpg',
  alt: 'MCCB'
}
  ]

  return (
    < div className="container-fluid m-2" >
      <p>Chúng tôi với những đội ngũ kỹ sư bách khoa có năng lực và kinh nghiệm trải qua nhiều dự án trong và ngoài nước, với sự giúp đỡ cố vấn của các thầy cô giáo
        trong viện Điện đại học Bách Khoa Hà Nội.
        <strong> BachKhoatech Company</strong> luôn tháo gỡ,
        giải quyết các vấn đề của khách hàng và doanh nghiệp
        đang gặp phải trong lĩnh vực cải tiến dây truyền sản xuất,
        hệ thống điện.</p>
      <p>Hiện tại, <strong>BachKhoatech Company</strong>&nbsp;đa
        ng phát triển trong lĩnh vực điều khiển tự động hóa,
        cải tiến dây truyền sản xuất, tư vấn thiết kế tủ điện công nghiệp,
        như tủ bù công suất phản kháng, tủ điều khiển, tủ Ats,
        tủ điện chiếu sáng, tủ RMU, phân phối thiết bị điện của các hãng
        <strong>LS, ABB, SIEMEN, CHINT</strong>, <strong>OMRON,
          SCHNEIDER,</strong> các mặt hàng phổ biến như, biến tần,
        khởi động mềm, thiết bị đóng cắt ABC, khởi động từ.</p>
      <strong>Với thiết bị điện công nghiệp&nbsp;</strong>
      <p>Các mặt hàng thiết bị điện công nghiệp của các hãng,
        khi khách hàng mua tại <strong>BachKhoaTech</strong>&nbsp;
        sẽ kèm theo hóa đơn bán hàng kiêm phiếu bảo hàng của công ty.
        Ngoài ra, tất cả các sản phẩm điều có tem bảo hành của hãng,
        chúng tôi hỗ trợ các bạn xuyên suốt quá trình sử dụng sản phẩm,
        mọi thắc mắc xin vui lòng gọi điện tới số: <strong>0917.44.88.33</strong></p>
        <strong>Một số sản phẩm</strong>
      <div className="d-flex flex-wrap justify-content-center">
      { 
      Image.map((item, index) => {
        return (    
          <div className="col-md-3 col-sm-6 col-6" key={index}>
            <img src={item.url} alt={item.alt} className="img-fluid" />
            <p className="text-center">{item.alt}</p>
          </div>
        )
      })
      }
      </div>
    </div>
  )
}

export default AboutUs