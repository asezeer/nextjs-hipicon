import Image from "next/image";
import { RiShoppingCart2Fill } from "react-icons/ri";
import Link from "next/link";

const TakiItem = ({ product }) => {
  return (
    <div className="bg-secondary rounded-3xl">
      <div className="w-full  bg-[#f1f2f3] h-[210px] grid place-content-center rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl">
        <div className="relative w-36 h-36 hover:scale-110 transition-all">
          <li>
            <Link href="/product">
              <Image src="/images/1.png" alt="" layout="fill" />
            </Link>
          </li>
        </div>
      </div>
      <div className="p-[25px] text-white">
        <h4 className="text-xl font-semibold">Lei</h4>
        <p className="text-[15px]">
          Modern, canlı ve eklektik tasarımların peşinden gidenler için
          yaratıldı. Kişiye özel ve el yapımı takılarıyla Lei renklerin enerjisi
          ve varyasyonlarla beslenen herkesi kendisine katılmaya çağırıyor.
        </p>
        <div className="flex justify-between items-center mt-4">
          <span>180.00 TL</span>
          <button className="btn-primary !w-10 !h-10 !rounded-full !p-0 grid place-content-center">
            <RiShoppingCart2Fill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TakiItem;
