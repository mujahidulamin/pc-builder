import image from "../assets/error.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const ErrorPage = () => {

    const router = useRouter();
    setTimeout(()=>{
        router.push("/")
    },3000)

  return (



    <div className="hero h-full lg:h-[80vh] bg-base-100">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold">WE ARE SORRY,PAGE NOT FOUND!</h1>
          <p className="py-4 lg:max-w-2xl">
            THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME
            CHANGED OR IS TEMPORARILY UNAVAILABLE
          </p>
          <Link href="/">
            <button
              className="btn btn-primary text-uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
            >
              BACK TO HOMEPAGE
            </button>
          </Link>
        </div>
        <Image src={image} className="lg:max-w-lg rounded-lg" alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
