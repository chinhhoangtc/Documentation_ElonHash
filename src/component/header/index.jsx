import React, { useState } from 'react';
import './index.css';

import logo from '../../assets/image/logoElonHashNgang.png';
import menu from '../../assets/image/menu.png';
import close from '../../assets/image/close.png';

export function Header() {
    const [isOpenmenu, setisOpenmenu] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState(0);

    const handleOpenmenu = () => {
        setisOpenmenu(prevState => !prevState);
    };

    const handleMenuItemClick = (index, hashLink) => {
        setActiveMenuItem(index);

        const element = document.querySelector(hashLink);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const menuItems = [
        { label: 'Earn Tokens Through Mining', hashLink: '#earntokens' },
        { label: 'Your Task is Simple', hashLink: '#task' },
        { label: 'Mining Principles Similar to Bitcoin', hashLink: '#mining' },
        { label: 'Limited Token Supply', hashLink: '#supply' },
        { label: 'Community-Focused', hashLink: '#community' },
        { label: 'Device Performance Considerations', hashLink: '#performance' },
        { label: 'Limitations', hashLink: '#limitations' },
        { label: 'How can I purchase Stars (★)?', hashLink: '#purchase' },
        { label: 'How does the maximum power upgrade system work?', hashLink: '#upgrade' },
        { label: 'What are hashes?', hashLink: '#hashes' },
        { label: 'What are shares?', hashLink: '#shares' },
        { label: 'Why don\'t I always receive a block reward?', hashLink: '#block-reward' },
        { label: 'Why doesn\'t the Total Mined % match the number of blocks in Stats?', hashLink: '#total-mined' },
        { label: 'How many accounts, devices, and IP addresses can I use?', hashLink: '#devices' },
        { label: 'Can I rent a server for mining?', hashLink: '#rent' },
        { label: 'For what reasons could I be banned?', hashLink: '#ban' },
        { label: 'Why can my energy sometimes exceed the maximum?', hashLink: '#energy' },
        { label: 'I have another question.', hashLink: '#question' },
    ];

    return (
        <div>
            <div className="d-flex gap-4 align-items-center py-2 div-header">
                <div className="div-button-menu">
                    <button
                        className="border-0"
                        onClick={handleOpenmenu}
                        style={{ backgroundColor: 'transparent' }}
                    >
                        <img src={menu} alt="" />
                    </button>
                </div>
                <div className="d-flex gap-5 div-header-right w-100 align-items-center py-2">
                    <div className="overflow-hidden div-img">
                        <img className="w-100 h-100" src={logo} alt="" />
                    </div>
                    <div className="line">|</div>
                    <div className='div-span '>
                        <span className='pe-4'>DOCUMENTATION</span>
                    </div>
                </div>
            </div>

            <div className={`div-menu ${isOpenmenu ? 'open' : 'closed'}`}>
                <div className="d-flex justify-content-end p-3">
                    <button
                        className="border-0"
                        onClick={handleOpenmenu}
                        style={{ backgroundColor: 'transparent' }}
                    >
                        <img width={'25px'} src={close} alt="" />
                    </button>
                </div>

                <div className='div-ul'>
                    <ul>
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className={`list-unstyled ${activeMenuItem === index ? 'active' : ''}`}
                                onClick={() => handleMenuItemClick(index, item.hashLink)}
                            >
                                <a href={item.hashLink} className="text-decoration-none">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
