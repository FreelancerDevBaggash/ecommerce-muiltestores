import LoginCustomerForm from "../../../components/frontend/LoginCustomerForm";
import { getData } from '../../../lib/getData';
import Image from "next/image";
export default  async function Login({ params:{slugDomain}}) {

   const store = await getData(`/stores/store/${slugDomain}`);
  //  console.log('Fetched store data:', store);
  // return <h1> Store Slug :{slugDomain} </h1>;
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
        <img
            className="w-10 h-10 mr-4 rounded-3xl "
            src={store?.profileImageUrl || "/default-logo.png"}
            alt="logo"
          />
           <h1 className="text-lg font-bold text-gray-800 mr-2 dark:text-white">
                {store?.businessName || "اسم المتجر"}
              </h1>
        </a>
        <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
            Login to Account
            </h1>
            <LoginCustomerForm  slugDomain={slugDomain}/>
          </div>
        </div>
      </div>
    </section>
  );
}