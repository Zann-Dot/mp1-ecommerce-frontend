import useNavbarContext from "../../../../../contexts/NavbarContext";
import ChangeLocationButton from "./ChangeLocationButton";

export default function UpperNavSection() {
   const { setDarkMode } = useNavbarContext();

   return (
      <div className="w-full px-4 py-2 bg-background-1 dark:bg-[#202020]">
         <section className="max-w-340 w-full mx-auto flex items-center justify-between">
            <div className="flex items-center">
               <ChangeLocationButton />
            </div>
            <div>
               <ol className="flex items-center whitespace-nowrap">
                  <li className="inline-flex items-center">
                     <a
                        className="flex items-center text-xs text-muted-foreground-1 hover:text-foreground focus:outline-hidden focus:text-primary-focus"
                        href="#"
                     >
                        <img
                           className="inline-block object-cover size-4 me-2 rounded-full"
                           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAqFBMVEX/aCAEajj/////ah/3+vkAXBsAaDVFhWAHA40AAIwAAIgAAIYAAIMAAH8AAH0GAI3MzOP39/tcW6lhYKvy8vhOTaMAAHjr6/RubbHW1uiLir/19frOzuSoqM/Fxd/i4u91dLWamsijo8yUk8Tm5vIhH5W7u9lGRaB9fbivr9MzMZloZ6+VlMVRUKTd3O2nps5AP50qKJeDgrsYFZM5OJy4t9knJZVZWKqZKfqeAAAITklEQVR4nO2baXPiOhZAM5rN2ryDsTG2MWC2xElIaP7/P5t7ZcJ0RzWvaqrek/rDPammvXVKPi3dq42nJ4IgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgiP+TvxPfeWLEd8iJze/gJI/76pym6bnq49x3Ydhv4KS+7KQUgiNCSLm7xL6L5NfJ8jmSgkfBf4m4kNFm6bVUPp0kFyW40cADqeAn4EYQF+ri04pHJyshsIYIOVvPwoEVbAjhSAqsLUK8+iuYNyf5XnJ4dy77ZMmSmjEII3XClqyXHFxxufcWbn05ibHVcHlY7BhrzJWr+YTj3eIg8abwFWw9OTkqeGsxK81JY2pEjx/55GecQQvi6uincH6c9ApaB1+wosCzwrx7hx/H6ULBFhxaluq9lM6Lk5WCWvChq3vlYGf82D+O8GqlP6Am+akpPpzEWEtOCbaY7QovpAl8QGBhSYqnqy185MmngJriI6Z4cJJDeOWn7XSyQDNrrA4c/hzXeH8x3dqe4DnhIft4cPIGrxolbGoWBTaZegZVREJlmUFOZnsTU+B+EsGTb+4L6N7Jq4RgouG9L9hi2BlycDJPWK5z8ze7mpiSXMCXhpAi3XfenDtJZBSI7hkPZ9guCg0eoisrwoJdI7iPulj+gg88dxBSZOK6iM6dHETAX6bDJGjhs7tBVJmxMRzZDCLJDXNyG9xFvPBAHFwX0bWTXEaRGu8BtpAQP4r5wF51Uus60a9smEM1qeUUUth2VFEkXYdZ1042Av/j837qwY4hRJNOJqW+xrq+6pJJqCZXqDLmbp9jtRIbx2V07QRTSQZ/XzPz3vH8GSJKxlTa6CZVLIVosp6bTsmY4QgowyTluIyOncSQdOQHHiXZDKPJMexYp+OZKHUpZrHu2GGOWbp9yUxI+cB/4Ljj5tgJNoWv/nqjbmBlo9Nc7RsNTnSzV3mqoam0qWruTx3hX1zcFtKxE2gIP+XWbn4b2UEv4vkoa/gZ5/ECakqbzhePZyB388BtId06yVXAZ0k8tPfzONLptgqPl65qTk3VXY5htc109NVY2iFeznig3GYet04aGQgY0iRD91YNJt8etD42YfkWd/sufivD5qi06ZAUTbVfDFCn1iKQzR//2j8Zt0566LC9TdPPzVmrl02TjOcwaz/XinOu1p9tFp5H1jzflM4G89wShkeid1pKt04uIgjC8uusWUit3o/j5n0tzUKGXL9vxuO70mrxqBllGLgOsm6dLPi3dhAfdhpirJyWeCJZd1rvul8egfbGF8wlbp3cIF7e006SF2PdDMemLJtK3Fe8RIWnx6GJxyL/ehDi8s1pKd06gSGdKsphfbh9RlLpMNSAfIfUMsFvJ4GX8IaK3l+652tZqMeg0RHe6gmwzNuyHMt4WDycnAeoKGXZ5svHY1hPUqeldOukgxyy+um8WL0pzdflI56Ua67V26r46ZlXyFWd01K6dYKBI/zqkBX9p9Yijctsv8LlnoCr1T4t4wyaz6n/0hJj3qmcltKtk5WYRsUo5D08Xa4tG07zTXk6cgE/x/d6Mz8NbDtcPsMf60lL9q1u/fW4dQLDYvw/b9fZ4mjmCvKZFnUftruymlXlrg37UmgzJ8naY5etW1O3HA+M3TpZKuzHNuVXAF0pVS2zsMmqrvnRdFXWhGlSKfWoF2WM/VjldueF43HxDxgXP14wfwurJbvp6hiOqlalGsNjpW8sqcLPR5Rdwrj4h9tCOnZS4VTifZTb6wrqyyK8FDq9mvmTa6qLSwid1qTS/fRQjpOVbkOsayelgiwi8Gj7afYibcI1y/T4ycEJ/xx1xvoQFSSXk5lQEJCpVPlHv/LPx/V87O6+OPE87c46zgfW6gODQZ9uFoodNGQiM/nIlhdcBMKlj53jMrp2grMFZ9a+Tu2nwUFyGrFaN7WuG12zKMWh8DQIXL627Ox8psC9k0RAGonvYbYUW8i585r1itVhzVTP6jk0ma24t5ZlDIlKuF4IdL4OCDGTn6bDYoduUui4nzPWhi3LztD9x7HNcnfPOyfufnnHwxo6h9fERVCWmxmAUeK1geVhzgbcbyFNZ+6GjWsxA4HceQndOxlwk5LKId+a0xn0UfMQqoaGSgNeWDwz1yFP5zgKUoPzEnrYf5KJIOLFfZ/jiDsrmvS+/yTF4HqeVkavrOBRIDL3BfSxdyvA9c7pxZl55Q3WBWwjw+ZxDXThOqrjpR2DDyetRClbzC2lybpmGm33OBrMnS0qke3/+iV/IV72PZpNfkJB323ahGSmjGaPI7x6wK34frb4edof20D0jHjGtqajUpjQYla6riYHL7csg1jCldu1ri887aOucfe42E05pTGdMlNlkslCs8N91Lhjxwe+9ttvP8zu8Ze9StjUQKY8FLNE7V/MzvOPraey+fuuSocvzrmo2qXZXV6aneXLthIcbyi361w/4/H7O/EOG1AgVLA46b4t216fFoHC9S8udx6/Aef1u28rbqxw7O5LKYU5QiPc7aT0Nzx/R/K6V6apPIDGpPZXv4Xy/r3RYpVyJcWEVDz9ZcHLC96dINtmta4u1XrV+Eo1v/BbOPnNePoH8Z2nfxLfefob8R1yYkNObMiJDTmxISc25MSGnNiQExtyYkNObMiJDTmxISc25MSGnNiQExtyYkNObMiJDTmxISc25MSGnNiQExtyYkNObMiJDTmxISc25MSGnNiQExtyYkNObMiJDTmxISc25MSGnNiQExtyYkNObMiJDTmxISc25MSGnNiQExtyYkNObMiJDTmxISc25MSGnNiQExtyYvP0L+I7T/8mvvMf/5JjunweIHoAAAAASUVORK5CYII="
                           alt="national flag"
                        />
                        English · INR
                     </a>
                     <svg
                        className="shrink-0 mx-2 size-5 text-muted-foreground"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                     >
                        <path
                           d="M6 13L10 3"
                           stroke="currentColor"
                           stroke-linecap="round"
                        />
                     </svg>
                  </li>

                  <li className="hidden md:inline-flex items-center ">
                     <a
                        className="flex items-center text-xs text-muted-foreground-1 hover:text-foreground focus:outline-hidden focus:text-primary-focus"
                        href="#"
                     >
                        Help
                        <svg
                           className="shrink-0 mx-2 size-5 text-muted-foreground"
                           width="16"
                           height="16"
                           viewBox="0 0 16 16"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                           aria-hidden="true"
                        >
                           <path
                              d="M6 13L10 3"
                              stroke="currentColor"
                              stroke-linecap="round"
                           />
                        </svg>
                     </a>
                  </li>

                  <li className="hidden md:inline-flex items-center ">
                     <a
                        className="flex items-center text-xs text-muted-foreground-1 hover:text-foreground focus:outline-hidden focus:text-primary-focus"
                        href="#"
                     >
                        Mobile App
                        <svg
                           className="shrink-0 mx-2 size-5 text-muted-foreground"
                           width="16"
                           height="16"
                           viewBox="0 0 16 16"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                           aria-hidden="true"
                        >
                           <path
                              d="M6 13L10 3"
                              stroke="currentColor"
                              stroke-linecap="round"
                           />
                        </svg>
                     </a>
                  </li>

                  <li>
                     <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input
                           type="checkbox"
                           className="checkbox invisible"
                           onChange={(e) => setDarkMode(e.target.checked)}
                        />

                        {/* sun icon */}
                        <svg
                           className="swap-on h-5 w-5 fill-line-5"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24"
                        >
                           <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                           className="swap-off h-5 w-5 fill-line-4"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24"
                        >
                           <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                     </label>
                  </li>
               </ol>
            </div>
         </section>
      </div>
   );
}
