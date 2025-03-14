const Menu = [
  {
    id: 1,
    name: "Tracking Package",
    link: "/#",
  },
  {
    id: 2,
    name: "FAQ",
    link: "/#faq",
  },
  {
    id: 3,
    name: "About Us",
    link: "/#about us",
  },
  {
    id: 4,
    name: "Contact Us",
    link: "/#contact us",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="flex gap-10  text-gray-600 ">
              <a href="#" className="">
                English
              </a>
              <a href="#" className="">
                Dollar
              </a>
            </div>
            <div className="flex items-center justify-between gap-4">
              <ul className="items-center text-gray-600 gap-4 hidden sm:flex">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-primary duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
