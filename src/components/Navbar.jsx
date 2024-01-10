import Image from "next/image";
import Link from "next/link";
import Header from "./Sidebar/Sidebar";

const Navbar = () => {

  return (
    <div className="flex items-center justify-between px-4 md:px-24 w-full border shadow-md font-josefin">
      <div>
        <Link href="/">
          <Image src="/blackLogo.png" width={120} height={120} alt="Logo" />
        </Link>
      </div>
      <div>
        <Header />
      </div>
    </div>
  );
};

export default Navbar;
