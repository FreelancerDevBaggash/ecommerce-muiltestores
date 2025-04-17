import LoginForm from "../../../components/frontend/LoginForm";
import { getData } from '../../../lib/getData';
import Image from 'next/image';

export default async function Login() {

  // const store = await getData(`/stores/store/${slugDomain}`);
  // console.log('Fetched store data:', slugDomain);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
            width={32}            // 8 * 4px = 32px
            height={32}           // 8 * 4px = 32px
            className="mr-2"
            unoptimized           // يتجاوز تحسين Next.js الافتراضي للدومينات الخارجية
            priority              // تحميل الصورة بأولوية لتحسين LCP
          />
          Multi Commerce
        </a>
        <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Login to Account
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
}