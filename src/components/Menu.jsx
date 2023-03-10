import { Fragment } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "About", href: "/about", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Menu({ children, url }) {
  return (
    <Disclosure as="nav" className="min-h-[10vh] bg-slate-200 dark:bg-gray-800">
      {({ open }) => (
        <div className={open ? "fixed h-screen w-full bg-gray-800 " : null}>
          <div className="mx-auto max-w-6xl py-8 px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between ">
                <div className=" flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="flex flex-shrink-0 items-center">
                  <a href="/" className="block text-lg lg:hidden">
                    ZW
                  </a>
                  <a href="/" className="hidden text-lg lg:block">
                    ZW
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 rounded-xl bg-slate-300 p-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.href === url
                            ? "bg-slate-900 text-white"
                            : "text-gray-800 hover:bg-gray-700 hover:text-white dark:text-gray-100",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}>
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {children}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}>
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
