import React, { useState } from 'react'
import './index.css'
export function Siderbar() {
    const [activeMenuItem, setActiveMenuItem] = useState(0);
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
        <div className="position-relative overflow-hidden">
        <div className='div-siderbar-content '>
            <ul className='mt-4'>
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
    )
}
