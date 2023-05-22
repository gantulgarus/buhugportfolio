import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/video.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Бидний тухай
          </p>
          <h2 className="py-4">Бөхөг ХК</h2>
          <ul className=" text-gray-600 list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Монгол Улсын анхны шувууны аж ахуй болох “Бөхөг” ХК нь анх шувуун
              фабрик нэртэйгээр 1963 онд байгуулагдсан.
            </li>
            <li>
            Анх 1964 онд 30,000 толгой шувуу өсгөн бойжуулж, жилд 2-2.5 сая ширхэг өндөг болон 60-70 тн тахианы мах үйлдвэрлэж байжээ. 1973 онд үйл ажиллагаагаа өргөтгөн ЗХУ-ын ТЭЗҮ-ээр 100,000 өндөглөгчтэй болж, жилд 22.6 сая ширхэг өндөг, 250тн тахианы мах үйлдвэрлэх хүчин чадалтай болсон.
            </li>
            <li>
            “Бөхөг” ХК нь 1992 онд хувьчлагдах үед өдөрт дунджаар 100,000 ширхэг өндөг үйлдвэрлэн, жилд 36.0 сая ширхэг өндөг хүнсний хэрэгцээнд нийлүүлж байсан. 
            </li>
            <li>
            Одоогийн байдлаар бүрэн хүчин чадлаараа  ажиллавал нийтдээ өндөглөгчийн тоог 270,000 хүргэхэд хүрэлцэхүйц байртай, 40,000 дэгдээхэй бойжуулах 2 байр, нэг ээлжиндээ 66,8 мянган өндөг дарах хүчин чадал бүхий 4 инкубатор, 10 сая өндөг хадгалах склад, эргэлтэндээ 250-300 тонн мах хөлдөөн хадгалах хөргүүр, ээлжиндээ хоёр мянган толгой шувуу нядлах бага оврын нядалгааны цехийн тоног төхөөрөмжийн хүчин чадалтай.
            </li>
          </ul>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
