import Image from "next/image";
import Title from "./ui/Title";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 30000,
    appenDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
    ),
  };

  return (
    <div className="h-screen w-full container mx-auto -mt-[10px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="mt-24 relative h-full w-full">
          <Image
            src="/images/hero-bg.png"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className="mt-48  text-white flex flex-col items-start gap-y-10">
            <Title addClass="text-6xl ">Yavaş Moda </Title>
            <p className="text-sm sm:w-2/5 w-full">
              Özellikle pandemiyle birlikte hayatımıza giren ‘’yavaşlama’’
              kavramı şimdilerde modayı da etkisi altına almış durumda. Ünlü
              moda ikonlarının da alışveriş ve tüketim çılgınlığını bir kenara
              bırakıp daha sürdürülebilir ve etik değerlere uygun parçaların
              olduğu kapsül gardıroplar tercih etmeye başladığını gördük ve biz
              de bir ‘’Slow Fashion Guide’’ hazırlamak istedik. Hadi bir göz
              atalım!
            </p>
            <button className="btn-primary">Order Now</button>
          </div>
        </div>
        <div>
          <div className="relative text-white top-48 flex flex-col items-start gap-y-10">
            <Title addClass="text-6xl">Kahve Demleme Yöntemleri</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Yorgun anlarımızın kurtarıcısı, taze demlenmiş kahve kokusu sizi
              de mutlu etmiyor mu? Peki içtiğimiz kahve hakkında ne biliyoruz?
              Tam da kahve festivali haftasında sizin için kahve çekirdekleri ve
              demleme yöntemlerini inceledik. Hadi birlikte bakalım!
            </p>
            <button className="btn-primary">Order Now</button>
          </div>
        </div>
        <div>
          <div className="relative text-white top-48 flex flex-col items-start gap-y-10">
            <Title addClass="text-6xl">
              Gökkuşağının Yeni Tonları: Gökyüzü Mavisi, Turuncu ve Lila
            </Title>
            <p className="text-sm sm:w-2/5 w-full">
              Bahar, kendimizi ve dolabımızı yeniden keşfetme zamanıdır. Soğuk
              tonların ve bulutlu günlerin yerini doğanın renkleri ve çiçeklerin
              mutlu enerjisi almaya başladı bile! Ilık havaları karşılamak için
              yeni tasarımlar ve enerjik tonlar bizleri bekliyor. Moda
              haftalarında da sıkça gördüğümüz İlkbahar/Yaz 2022 podyumları
              ışıltılı bir sezona zemin hazırlıyor. Doğaya karıştığımız
              bugünlerde kazakların yerini ince gömlekler, kalın pantolonların
              yerini tiril tiril kumaşlarıyla etekler ve şortlar alıyor. İnce
              dokulara geçerken, bu sezonun trend renkleri ile mevsim
              gardrobunuzu güncellemenin tam vakti.
            </p>
            <button className="btn-primary">Order Now</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default Carousel;
