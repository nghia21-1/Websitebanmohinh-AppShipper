import React from 'react';

function Footer(props) {
  return (
    <div>
      <footer className="footer-area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Thông tin liên hệ</h4>
              <ul>
              <li><a href="#">Địa chỉ</a></li>
                <li><a href="#">Điện thoại: 0365242679</a></li>
                <li><a href="#">Email: levanthien0811@gmail.com</a></li>
                
              </ul>
                
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Danh mục</h4>
              <ul>
                <li><a href="#">Trang chủ</a></li>
                <li><a href="#">Gioi thiệu</a></li>
                <li><a href="#">Cẩm nang</a></li>
                <li><a href="#">Sản phẩm</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Điều khoảng</h4>
              <ul>
                <li><a href="#">Điều khoảng sử dụng</a></li>
                <li><a href="#">Điều khoảng bảo mật</a></li>        
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Kết nối với chúng tôi</h4>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
            
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <div><img src="/resources/img/cam-nang-figurer-2.jpeg"  width={400} alt="" />
              </div>
            </div>

          </div>
          <div className="footer-bottom row align-items-center">
            <p className="footer-text m-0 col-lg-8 col-md-12">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
               Đồ án tốt nghiệp   <a href="https://colorlib.com" target="_blank"></a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>

          </div>
        </div>
      </footer>

    </div>
  );
}

export default Footer;