import { Fragment, useEffect, useRef, useState } from "react";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { AiOutlineSearch } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Header = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const divRefs = useRef<HTMLAnchorElement[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pages] = useState([
    "პოლიტიკა",
    "საზოგადოება",
    "სამართალი",
    "ბიზნესი & ეკონომიკა",
    "მეცნიერება",
    "რელიგია",
    "ფიზიკა & ქიმია",
    "სპორტი",
    "ბიზნესი & ეკონომიკ",
    "ბოლო პოლიტიკა",
  ]);
  const [count, setCount] = useState(0);
  const [isProductHovered, setIsProductHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      let wrapperWidth = 0;
      if (wrapperRef.current) {
        wrapperWidth = wrapperRef.current.getBoundingClientRect().width;
      }

      if (divRefs.current.length > 0) {
        let itemsWidth = 0;
        for (let i = 0; i < divRefs.current.length; i++) {
          itemsWidth += divRefs.current[i].getBoundingClientRect().width;
          if (itemsWidth <= wrapperWidth) {
            setCount(i);
          }
        }
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <>
      <div className="flex max-w-[1312px] mx-auto h-[112px] items-center justify-between lg:justify-normal  px-8 xl:px-0">
        <Link to="/" className="p-1.5 mr-10 shrink-0">
          <img className="h-8 w-auto" src={Logo} alt="" />
        </Link>
        <div
          ref={wrapperRef}
          className="bg-interfaceWhite overflow-hidden flex-1 hidden lg:block"
        >
          <div className="max-w-full">
            <div className="flex flex-nowrap">
              {pages.map((item, index) => {
                return (
                  <Link
                    to={`/${item}`}
                    key={index}
                    className={`
                      whitespace-nowrap relative font-notoSans pr-[32px]
                      ${index > count ? "opacity-0" : ""}
                    `}
                    ref={(el) => {
                      if (el) {
                        divRefs.current[index] = el;
                      }
                    }}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pr-[80px] hidden lg:block">
          <Popover.Group>
            <Popover className="relative">
              <Popover.Button
                className="flex items-center gap-x-1 font-notoSans leading-6"
                onMouseEnter={() => setIsProductHovered(true)}
                onMouseLeave={() => setIsProductHovered(false)}
              >
                <p>სხვა</p>
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                show={isProductHovered}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel
                  className="absolute -left-8 top-full z-10 mt-3 pr-[100px] w-screen max-w-[fit-content] overflow-hidden rounded-3xl bg-interfaceWhite shadow-lg "
                  onMouseEnter={() => setIsProductHovered(true)}
                  onMouseLeave={() => setIsProductHovered(false)}
                >
                  <div className="p-4">
                    {pages.slice(count + 1, pages.length).map((item, i) => (
                      <div
                        key={i}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 whitespace-nowrap"
                      >
                        <div className="flex-auto">
                          <Link to={`/${item}`} className="font-notoSans">
                            {item}
                            <span className="absolute inset-0" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>
        </div>

        <div className="flex justify-end">
          <button className="right-1 p-4 bg-slate-900 rounded-full  bg-primaryLight mr-4 hidden md:block">
            <RiInstagramFill className="h-6 w-6" />
          </button>
          <button className="right-1 p-4 bg-slate-900 rounded-full  bg-primaryLight mr-4 hidden md:block">
            <FaFacebookF className="h-6 w-6" />
          </button>
          {/* <button className="right-1 p-4 bg-slate-900 rounded-full  bg-primaryLight mr-4 block md:hidden">
            <AiOutlineSearch className="h-6 w-6" />
          </button> */}
          <div className="relative">
            <input
              type="text"
              placeholder="ძიება"
              className="w-224 p-4 text-interfaceBlack200 rounded-full bg-primaryLight"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-900 rounded-full">
              <AiOutlineSearch className="h-6 w-6" />
            </button>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center text-gray-700 p-4 bg-slate-900 rounded-full  bg-primaryLight flex-shrink-0 ml-4"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 top-[112px] z-10 w-full overflow-y-auto bg-interfaceWhite px-6 py-6 sm:max-w-auto ">
          {pages.map((o, i) => (
            <p key={i} className="text-lg mb-8">
              {o}
            </p>
          ))}
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default Header;
