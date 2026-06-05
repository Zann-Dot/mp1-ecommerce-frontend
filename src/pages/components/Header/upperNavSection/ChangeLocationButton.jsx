import { useState } from "react";

export default function ChangeLocationButton() {
   const data = [
      {
         _id: "2685292070",
         userId: "268983793",
         address: {
            addressLine: "b-51 inderpuri",
            city: "Delhi",
            pincode: "112551",
         },
         isDefault: true,
      },
      {
         _id: "1685292070",
         userId: "138983793",
         address: {
            addressLine: "wz-251 rajendar place",
            city: "Delhi",
            pincode: "112551",
         },
         isDefault: false,
      },
      {
         _id: "168523292070",
         userId: "138983793",
         address: {
            addressLine: "wz-251 rajendar place",
            city: "Delhi",
            pincode: "112551",
         },
         isDefault: false,
      },
   ];

   const defaultAddressData = data.filter(
      (address) => data.indexOf(address) < 3,
   );

   const remainingAddressData = data.filter(
      address => data.indexOf(address) > 2);

   const [selection, setSelection] = useState(data.find((i) => i.isDefault)._id);

   return (
      <>
         <button
            type="button"
            className="flex items-center gap-1 text-sm font-semibold cursor-pointer text-foreground focus:outline-0"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="hs-vertically-centered-scrollable-modal"
            data-hs-overlay="#hs-vertically-centered-scrollable-modal"
         >
            <svg
               className="zeqf6 r390y"
               xmlns="http://www.w3.org/2000/svg"
               width="16"
               height="16"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
            >
               <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
               <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Specify the address
         </button>

         <div
            id="hs-vertically-centered-scrollable-modal"
            className="hs-overlay hidden size-full fixed top-0 inset-s-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none"
            role="dialog"
            tabIndex="-1"
            aria-labelledby="hs-vertically-centered-scrollable-modal-label"
         >
            <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-56px)] min-h-[calc(100%-56px)] flex items-center">
               <div className="w-full max-h-full overflow-hidden flex flex-col bg-overlay border border-overlay-line shadow-2xs rounded-xl pointer-events-auto">
                  <div className="flex justify-between items-center py-4 px-6 border-b border-overlay-header">
                     <h3
                        id="hs-vertically-centered-scrollable-modal-label"
                        className="font-semibold text-foreground"
                     >
                        Choose your location
                     </h3>
                     <button
                        type="button"
                        className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full bg-surface border border-surface-line text-surface-foreground hover:bg-surface-hover focus:outline-hidden focus:bg-surface-focus disabled:opacity-50 disabled:pointer-events-none"
                        aria-label="Close"
                        data-hs-overlay="#hs-vertically-centered-scrollable-modal"
                     >
                        <span className="sr-only">Close</span>
                        <svg
                           className="shrink-0 size-4"
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        >
                           <path d="M18 6 6 18"></path>
                           <path d="m6 6 12 12"></path>
                        </svg>
                     </button>
                  </div>
                  <div className="max-h-87.5 overflow-y-auto ">
                     <div className="p-6 flex flex-col gap-4">
                        <p className="text-sm dark:text-foreground w-100">
                           Delivery options and delivery speeds may vary for different
                           locations
                        </p>
                        <div className="space-y-4">
                           {defaultAddressData?.map((addressData) => {
                              const isSelected = selection === addressData._id;

                              return (
                                 <label
                                    key={addressData._id}
                                    onClick={() => setSelection(addressData._id)}
                                    name="hs-radio-in-form"
                                    className={`flex items-start p-3 w-full bg-layer rounded-xl ring-1 text-sm cursor-pointer transition-all duration-10 ease-in ${isSelected ? "ring-2 ring-primary" : "ring-layer-line "}`}
                                 >
                                    <input
                                       type="radio"
                                       name="addressChange"
                                       className="shrink-0 mt-1 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none"
                                       onChange={() => setSelection(addressData._id)}
                                       checked={isSelected}
                                    />
                                    <span className="ms-3 ">
                                       <span className="flex items-center gap-2">
                                          <h2 className="font-semibold text-foreground">
                                             {addressData.userId}
                                          </h2>
                                          <span
                                             className={`${addressData.isDefault ? "inline-flex" : "hidden"} items-center gap-x-1.5 py-1 px-3 rounded-full text-xs font-medium bg-surface text-surface-foreground`}
                                          >
                                             {addressData.isDefault ? "Default" : ""}
                                          </span>
                                       </span>
                                       <span className="text-sm text-muted-foreground-1">
                                          {addressData.address.addressLine}{" "}
                                          {addressData.address.city}{" "}
                                          {addressData.address.pincode}
                                       </span>
                                    </span>
                                 </label>
                              );
                           })}
                        </div>


                        <div
                           id="hs-show-hide-collapse-heading"
                           className="hs-collapse hidden overflow-hidden transition-[height] duration-300"
                           aria-labelledby="hs-show-hide-collapse"
                           role="region"
                        >
                           <div className="space-y-4">
                              {remainingAddressData?.map((addressData) => {
                                 const isSelected = selection === addressData._id;

                                 return (
                                    <label
                                       key={addressData._id}
                                       onClick={() => setSelection(addressData._id)}
                                       name="hs-radio-in-form"
                                       className={`flex items-start p-3 w-full bg-layer rounded-xl ring-1 text-sm cursor-pointer transition-all duration-10 ease-in ${isSelected ? "ring-2 ring-primary" : "ring-layer-line "}`}
                                    >
                                       <input
                                          type="radio"
                                          name="addressChange"
                                          className="shrink-0 mt-1 size-4 bg-transparent border-line-3 rounded-full shadow-2xs text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary-checked checked:border-primary-checked disabled:opacity-50 disabled:pointer-events-none"
                                          onChange={() => setSelection(addressData._id)}
                                          checked={isSelected}
                                       />
                                       <span className="ms-3 ">
                                          <span className="flex items-center gap-2">
                                             <h2 className="font-semibold text-foreground">
                                                {addressData.userId}
                                             </h2>
                                             <span
                                                className={`${addressData.isDefault ? "inline-flex" : "hidden"} items-center gap-x-1.5 py-1 px-3 rounded-full text-xs font-medium bg-surface text-surface-foreground`}
                                             >
                                                {addressData.isDefault ? "Default" : ""}
                                             </span>
                                          </span>
                                          <span className="text-sm text-muted-foreground-1">
                                             {addressData.address.addressLine}{" "}
                                             {addressData.address.city}{" "}
                                             {addressData.address.pincode}
                                          </span>
                                       </span>
                                    </label>
                                 );
                              })}
                           </div>

                        </div>
                     </div>

                     <div className="px-6 flex items-center gap-2">
                        <button
                           type="button"
                           className="hs-collapse-toggle inline-flex items-center gap-x-2 text-sm font-semibold whitespace-nowrap text-primary hover:text-primary-hover hover:underline hover:underline-offset-4 focus:outline-hidden focus:text-primary-focus cursor-pointer"
                           id="hs-show-hide-collapse"
                           aria-expanded="false"
                           aria-controls="hs-show-hide-collapse-heading"
                           data-hs-collapse="#hs-show-hide-collapse-heading"
                        >
                           <span className="hs-collapse-open:hidden">See all</span>
                           <span className="hs-collapse-open:block hidden">See less</span>
                        </button>
                        <p className="text-line-3 text-xs mb-0.5">|</p>
                        <a
                           className="inline-flex items-center gap-x-2 text-sm font-semibold whitespace-nowrap text-primary hover:text-primary-hover hover:underline hover:underline-offset-4 focus:outline-hidden focus:text-primary-focus"
                           href="#"
                           aria-current="page"
                        >
                           Manage address
                        </a>
                     </div>
                  </div>

                  <div className="flex flex-col justify-end items-center gap-2 p-6">
                     <button
                        type="button"
                        className="cursor-pointer w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-hover disabled:opacity-50 disabled:pointer-events-none"
                     >
                        Done
                     </button>
                     <button
                        type="button"
                        className="cursor-pointer w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-layer border border-layer-line text-layer-foreground shadow-2xs hover:bg-layer-hover focus:outline-hidden focus:bg-layer-hover disabled:opacity-50 disabled:pointer-events-none"
                        data-hs-overlay="#hs-vertically-centered-scrollable-modal"
                     >
                        Cancel
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
