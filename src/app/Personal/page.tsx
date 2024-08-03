import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="h-auto rounded-md bg-neutral-900 flex flex-col relative w-full">
      {/* Ali Gurur Yaman Section */}
      <div className="p-20 flex flex-row gap-10 ">
        <div className="flex-shrink-0">
          <Image
            src={"/images/ali.jpg"}
            alt={"Ali Gurur Yaman"}
            width={400}
            height={600}
            className="rounded-2xl border-2 border-gray-500"
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-3xl md:text-5xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white tracking-tight">
            Ali Gurur Yaman
          </h2>
          <p className="mt-4 text-white text-lg">
            Merhaba! Ben Ali Gurur, 5 Ekim 1991'de Mersin'de doğdum ve şu anda
            Osmaniye, Kadirli'de yaşıyorum. Son bir yıldır kendimi geliştiren
            bir frontend yazılımcısıyım. Bu süreçte çeşitli modern web
            teknolojileri ve araçları kullanarak kullanıcı dostu ve etkileyici
            web arayüzleri oluşturma konusunda yetkinlik kazandım. React ve
            React Native ile web ve mobil uygulamalar geliştirme konusunda
            deneyimliyim. Özellikle React, Next.js, Tailwind CSS ve Redux gibi
            kütüphaneler ve frameworklerle projeler geliştiriyorum. Bu sayede
            hem web hem de mobil platformlarda kullanıcı deneyimini ön planda
            tutarak, işlevsel ve estetik açıdan başarılı uygulamalar
            yaratabiliyorum. Amacım, kullanıcı deneyimini en üst seviyede
            tutarak, modern ve yenilikçi çözümler sunmak. Yeni teknolojilere ve
            sürekli öğrenmeye olan tutkum sayesinde, her geçen gün bilgi ve
            becerilerimi artırıyorum.
          </p>
        </div>
      </div>

      {/* Mert Yaman Section */}
      <div className="p-20 flex flex-row gap-10">
        <div className="flex-shrink-0">
          <Image
            src={"/images/mert.jpg"}
            alt={"Mert Yaman"}
            width={400}
            height={600}
            className="rounded-2xl border-2 border-gray-500"
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-3xl md:text-5xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white tracking-tight">
            Mert Yaman
          </h2>
          <p className="mt-4 text-white text-lg">
            Merhaba! Ben Mert Yaman, video düzenleme konusunda uzmanlaşmış bir
            video editörüyüm. Profesyonel olarak Adobe Premiere Pro, After
            Effects ve DaVinci Resolve gibi popüler video düzenleme
            yazılımlarını kullanarak yaratıcı ve etkileyici videolar
            hazırlıyorum. Video prodüksiyon süreçlerinin her aşamasında deneyim
            sahibiyim; senaryo yazımı, çekim, kurgu, renk düzeltme ve özel
            efektler gibi birçok alanda yetkinlik kazandım. Amacım, izleyicilere
            görsel olarak zengin ve etkileyici hikayeler sunmak. Yeni
            teknolojilere ve sürekli öğrenmeye olan tutkum sayesinde, her geçen
            gün bilgi ve becerilerimi artırıyorum.
          </p>
        </div>
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}

export default Page;
