import { useState } from "react";
import { MdPeopleAlt } from "react-icons/md";
const tabData = [
  { name: "Popular", isActive: true },
  { name: "Albums", isActive: false },
  { name: "Songs", isActive: false },
  { name: "Fans also like", isActive: false },
  { name: "About", isActive: false },
];
const Tab = () => {
  const [tab, setTab] = useState(tabData);
  const changeTab = (tabIndex) => {
    const newTab = tab.map((el, index) => {
      if (index === tabIndex) {
        el.isActive = true;
        return el;
      }
      el.isActive = false;
      return el;
    });
    setTab(newTab);
  };
  return (
    <section className="relative z-10 px-4 pr-8 light-text capitalize bg-spotify-300 backdrop-blur flex items-center justify-between">
      <ul className="flex">
        {tab.map(({ name, isActive }, index) => (
          <li key={index}>
            <TabButton
              name={name}
              id={index}
              isActive={isActive}
              changeTab={changeTab}
            />
          </li>
        ))}
      </ul>
      <p className="text-xs flex items-center gap-1">
        <MdPeopleAlt className="text-lg" />
        279.1M
        <span>Followers</span>
      </p>
    </section>
  );
};
export default Tab;

const TabButton = ({ isActive, name, id, changeTab }) => (
  <button
    onClick={() => changeTab(id)}
    className={`relative p-4 transition-all duration-500 opacity-50 ${
      isActive ? "opacity-100" : " "
    }  `}>
    {name}
    {isActive ? (
      <div className="absolute h-1 w-[40%] left-1/2 -translate-x-1/2 bg-white -z-10  bottom-0"></div>
    ) : null}
  </button>
);
