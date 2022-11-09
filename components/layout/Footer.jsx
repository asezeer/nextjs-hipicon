import React from "react";
import Title from "../ui/Title";

const Footer = () => {
  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6 ">
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Contact Us</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <i className="fa fa-map-marker"></i>
                <span className="inline-block ml-2">
                  Eğitim Mah. Uğurelli Sok. Sadıkoğlu İş Merkezi 1 Bina No: 10
                  Kapı No: 1A Kadıköy İstanbul
                </span>
              </div>
              <div>
                <i className="fa fa-phone"></i>
                <span className="inline-block ml-2">+90 506 629 23 59</span>
              </div>
              <div>
                <i className="fa fa-envelope"></i>
                <span className="inline-block ml-2">a.sezeer@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[38px]">Hipicon</Title>
            <p className="mt-3">
              Biz iyi tasarım ile daha iyi bir yaşam hedefliyoruz. Bunu
              başaracak tüm tasarımcılar için bir dünya yaratıyoruz.
              Tasarımcıların düşüncelerinin hayat bulduğu ev, sanat, takı,
              kadın, erkek, yaşam kategorilerinden birçok özgün tasarım sizin
              keşfetmeniz için seçilir ve tüm dünyaya gönderilir.
            </p>
            <div className="flex items-center justify-center mt-5 gap-x-2">
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full "
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <i className="fa fa-pinterest"></i>
              </a>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Opening Hours</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <span className="inline-block ml-2">Everyday</span>
              </div>
              <div>
                <span className="inline-block ml-2">
                  GMT+2 10:00-18:00 saatleri arasında iletişim kurabilirsiniz.
                </span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-10">
          © 2022 All Rights Reserved By Free Html Templates
        </p>
      </div>
    </div>
  );
};

export default Footer;
