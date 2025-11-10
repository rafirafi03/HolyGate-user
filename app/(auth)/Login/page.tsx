import Image from "next/image";
import AuthCard from "@/components/userComponents/AuthCard";

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-background overflow-x-hidden flex flex-col justify-between relative">
      {/* Logo */}
      <div className="fixed top-8 left-8 z-20">
        <Image
          src="/logo1.png"
          alt="Logo"
          width={100}
          height={100}
          priority
        />
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between flex-grow px-8 lg:px-16 pt-24 lg:pt-0">
        {/* Left - Auth Card */}
        <div className="flex justify-center lg:justify-start w-full lg:w-1/2 z-10">
          <AuthCard />
        </div>

        {/* Right - Background Image */}
        <div className=" lg:block relative w-1/2 xl:w-3/5 h-[90vh]">
          <img
            src="/spiritual-image.png"
            alt="Spiritual imagery"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/30"></div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="py-12 text-center">
        <h1 className="text-2xl md:text-3xl font-serif text-muted-foreground/60 tracking-wider">
          THE DOOR WAYS TO LIVING FAITH
        </h1>
      </div>
    </div>
  );
};

export default Page;
