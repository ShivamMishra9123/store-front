import React, { useState } from 'react';


const MenuItem = ({ label, items }: { label: any, items: any }) => {

    const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
    const [isSubMenuItemVisible, setIsSubMenuItemVisible] = useState(false)

    const toggleSubMenu = () => {
        setIsSubMenuVisible(!isSubMenuVisible);
        setIsSubMenuItemVisible(false)
    };


    return (
        <li className="relative">
            <span onMouseEnter={() => setIsSubMenuVisible(!isSubMenuVisible)} onClick={toggleSubMenu} className="cursor-pointer m-2 font-bold text-lg">
                {label}
            </span>

            {isSubMenuVisible && (
                <div className="absolute w-screen z-10 h-80 left-full top-10 bg-gray-400 text-white p-4">
                    {items.map((item: any, index: any) => (
                        <ul key={index}>

                            <li onMouseEnter={() => setIsSubMenuItemVisible(!isSubMenuItemVisible)} className='cursor-pointer relative'>{item.label}</li>

                        </ul>))}
                </div>

            )}
            {isSubMenuItemVisible && (
                <div className="absolute w-screen z-10 h-80 left-full top-14 bg-gray-800 text-white p-4">
                    <ul >
                        {items.map((item: any, index: any) => (
                            <div key={index}>{item.items.map((items: any, index: any) => (
                                <li onClick={() => setIsSubMenuItemVisible(false)} key={index}>{items.label}</li>
                            ))}
                            </div>
                        ))}
                    </ul>
                </div>
            )}
        </li>
    );
};

const MegaMenu = () => {
    const menuData = [
        {
            "label": "Menu 1",
            "items": [
                {
                    "label": "Submenu 1.1",
                    "items": [
                        { "label": "Item 1.1.1" },
                        { "label": "Item 1.1.2" },
                        { "label": "Item 1.1.3" },
                        { "label": "Item 1.1.4" }
                    ]
                },
                {
                    "label": "Submenu 1.2",
                    "items": [
                        { "label": "Item 1.2.1" },
                        { "label": "Item 1.2.2" },
                        { "label": "Item 1.2.3" },
                        { "label": "Item 1.2.4" }
                    ]
                }
            ]
        },
        {
            "label": "Menu 2",
            "items": [
                {
                    "label": "Submenu 2.1",
                    "items": [
                        { "label": "Item 2.1.1" },
                        { "label": "Item 2.1.2" },
                        { "label": "Item 2.1.3" },
                        { "label": "Item 2.1.4" }
                    ]
                },
                {
                    "label": "Submenu 2.2",
                    "items": [
                        { "label": "Item 2.2.1" },
                        { "label": "Item 2.2.2" },
                        { "label": "Item 2.2.3" },
                        { "label": "Item 2.2.4" }
                    ]
                }
            ]
        },
        {
            "label": "Menu 3",
            "items": [
                {
                    "label": "Submenu 3.1",
                    "items": [
                        { "label": "Item 3.1.1" },
                        { "label": "Item 3.1.2" },
                        { "label": "Item 3.1.3" },
                        { "label": "Item 3.1.4" }
                    ]
                },
                {
                    "label": "Submenu 3.2",
                    "items": [
                        { "label": "Item 3.2.1" },
                        { "label": "Item 3.2.2" },
                        { "label": "Item 3.2.3" },
                        { "label": "Item 3.2.4" }
                    ]
                }
            ]
        },
        {
            "label": "Menu 4",
            "items": [
                {
                    "label": "Submenu 4.1",
                    "items": [
                        { "label": "Item 4.1.1" },
                        { "label": "Item 4.1.2" },
                        { "label": "Item 4.1.3" },
                        { "label": "Item 4.1.4" }
                    ]
                },
                {
                    "label": "Submenu 4.2",
                    "items": [
                        { "label": "Item 4.2.1" },
                        { "label": "Item 4.2.2" },
                        { "label": "Item 4.2.3" },
                        { "label": "Item 4.2.4" }
                    ]
                }
            ]
        }
    ]
    return (
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
            <ul className="flex items-center md:order-2 ">
                {menuData.map((menu, index) => (
                    <MenuItem key={index} label={menu.label} items={menu.items} />
                ))}
            </ul>
        </div>
    );
};

export default MegaMenu;