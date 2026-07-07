import { useEffect, useRef } from "react";
import { Link } from "react-router";

export default function MobileSideDashboard() {
   const overlayRef = useRef(null);
   useEffect(() => {
      return () => {
         const backdrops = document.querySelectorAll("[data-hs-overlay-backdrop-template]");
         backdrops.forEach((el) => el.remove());
         document.body.classList.remove("hs-overlay-body-open");
         document.body.style.overflow = "";
      };
   }, []);

   return (
      <div className="flex sm:hidden me-3 mt-1">
         {/* Sidebar */}
         <div
            ref={overlayRef}
            id="hs-sidebar-offcanvas"
            className="hs-overlay [--auto-close:lg] lg:block lg:translate-x-0 lg:inset-e-auto lg:bottom-0 w-64
hs-overlay-open:translate-x-0
-translate-x-full transition-all duration-300 transform
h-full
hidden

fixed top-0 inset-s-0 bottom-0 z-60
bg-sidebar border-e border-sidebar-line"
            role="dialog"
            tabIndex="-1"
            aria-label="Sidebar"
         >
            <div className="relative flex flex-col h-full max-h-full ">
               {/* Header */}
               <header className=" p-4 flex justify-between items-center gap-x-2">
                  <a
                     className="flex-none font-semibold text-xl text-layer-foreground focus:outline-hidden focus:opacity-80 "
                     href="#"
                     aria-label="Brand"
                  >
                     ShopperStore
                  </a>

                  <div className="lg:hidden -me-2">
                     {/* Close Button */}
                     <button
                        type="button"
                        className="flex justify-center items-center gap-x-3 size-6 bg-layer border border-layer-line text-sm text-muted-foreground-2 hover:bg-layer-hover rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-layer-focus"
                        data-hs-overlay="#hs-sidebar-offcanvas"
                     >
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
                           <path d="M18 6 6 18" />
                           <path d="m6 6 12 12" />
                        </svg>
                        <span className="sr-only">Close</span>
                     </button>
                     {/* End Close Button */}
                  </div>
               </header>
               {/* End Header */}

               {/* Body */}
               <nav className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb">
                  <div
                     className="hs-accordion-group pb-0 px-2  w-full flex flex-col flex-wrap"
                     data-hs-accordion-always-open
                  >
                     <ul className="space-y-1">
                        <li>
                           <Link
                              className=" flex items-center gap-x-3.5 py-2 px-2.5 bg-sidebar-nav text-sm text-sidebar-nav-foreground rounded-lg hover:bg-sidebar-nav-hover focus:outline-hidden focus:bg-sidebar-nav-focus"
                              to="/"
                           >
                              <svg
                                 className="size-4"
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
                                 <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                 <polyline points="9 22 9 12 15 12 15 22" />
                              </svg>
                              Home
                           </Link>
                        </li>

                        <li className="hs-accordion" id="users-accordion">
                           <button
                              type="button"
                              className=" hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-sidebar-nav-foreground rounded-lg hover:bg-sidebar-nav-hover focus:outline-hidden focus:bg-sidebar-nav-focus"
                              aria-expanded="true"
                              aria-controls="users-accordion-collapse-1"
                           >
                              <svg
                                 className="size-4"
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
                                 <circle cx="18" cy="15" r="3" />
                                 <circle cx="9" cy="7" r="4" />
                                 <path d="M10 15H6a4 4 0 0 0-4 4v2" />
                                 <path d="m21.7 16.4-.9-.3" />
                                 <path d="m15.2 13.9-.9-.3" />
                                 <path d="m16.6 18.7.3-.9" />
                                 <path d="m19.1 12.2.3-.9" />
                                 <path d="m19.6 18.7-.4-1" />
                                 <path d="m16.8 12.3-.4-1" />
                                 <path d="m14.3 16.6 1-.4" />
                                 <path d="m20.7 13.8 1-.4" />
                              </svg>
                              Account
                              <svg
                                 className="hs-accordion-active:block ms-auto hidden size-4"
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
                                 <path d="m18 15-6-6-6 6" />
                              </svg>
                              <svg
                                 className="hs-accordion-active:hidden ms-auto block size-4"
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
                                 <path d="m6 9 6 6 6-6" />
                              </svg>
                           </button>

                           <div
                              id="users-accordion-collapse-1"
                              className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                              role="region"
                              aria-labelledby="users-accordion"
                           >
                              <ul
                                 className="hs-accordion-group pt-1 ps-7 space-y-1"
                                 data-hs-accordion-always-open
                              >
                                 <li className="hs-accordion" id="users-accordion-sub-2">
                                    <Link
                                       to="/user/account/personal-information"
                                       className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-sidebar-nav-foreground rounded-lg hover:bg-sidebar-nav-hover focus:outline-hidden focus:bg-sidebar-nav-focus"
                                       aria-expanded="true"
                                       aria-controls="users-accordion-sub-2-collapse-1"
                                    >
                                       Profile
                                    </Link>
                                 </li>

                                 <li className="hs-accordion" id="users-accordion-sub-1">
                                    <Link
                                       to="/user/account/myorders"
                                       className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-sidebar-nav-foreground rounded-lg hover:bg-sidebar-nav-hover focus:outline-hidden focus:bg-sidebar-nav-focus"
                                       aria-expanded="true"
                                       aria-controls="users-accordion-sub-1-collapse-1"
                                    >
                                       My Orders
                                    </Link>
                                 </li>

                                 <li className="hs-accordion" id="users-accordion-sub-2">
                                    <Link
                                       to="/user/account/addresses"
                                       className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-sidebar-nav-foreground rounded-lg hover:bg-sidebar-nav-hover focus:outline-hidden focus:bg-sidebar-nav-focus"
                                       aria-expanded="true"
                                       aria-controls="users-accordion-sub-2-collapse-1"
                                    >
                                       My Addresses
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </li>
                     </ul>
                  </div>
               </nav>
            </div>
         </div>
      </div>
   );
}
