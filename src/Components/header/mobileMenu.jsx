/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
// import { NavLink } from "react-router-dom";
import { navigations, navigationsAr } from "./navigations";
import SwitchLang from "./switchLang";
import ScrollTo from "react-scroll-into-view";

const MobileMenu = ({ open, setOpen, isArabic, switchLangAr }) => {
  return (
    <>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-textBlack bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex bg-black bg-opacity-50 text-white">
            {/* Transition from left site */}
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                onClick={() => setOpen(false)}
                className="relative flex max-w-xs flex-col overflow-y-auto bg-textBlack text-textWhite bg-opacity-90 pb-12 shadow-xl bg-black bg-opacity"
              >
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6 text-center">
                  {isArabic
                    ? navigations?.map((page) => (
                        <div key={page.name} className="flow-root">
                          <ScrollTo selector={`#${page.name}`}>
                            <button
                              onClick={() => setOpen(false)}
                              className="-m-2 block p-2 font-medium text-textWhite w-60 hover:bg-teal-950 transition "
                            >
                              {page.name}
                            </button>
                          </ScrollTo>
                        </div>
                      ))
                    : navigationsAr?.map((page) => (
                      <div key={page.name} className="flow-root">
                      <ScrollTo selector={`#${page.scroll}`}>
                        <button
                          onClick={() => setOpen(false)}
                          className="-m-2 block p-2 font-medium text-textWhite w-60 hover:bg-teal-950 transition "
                        >
                          {page.name}
                        </button>
                      </ScrollTo>
                    </div>
                      ))}
                  <div className="flex items-center justify-center">
                    <SwitchLang isArabic={isArabic} onClick={switchLangAr} />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default MobileMenu;
