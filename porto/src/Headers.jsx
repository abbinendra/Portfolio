import { useEffect, useState } from "react";

export default function Headers() {
    const [collapsed, setCollapsed] = useState(false);
    const [uncollapsed, setUncollapsed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setCollapsed(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = (section) => {
        const element = document.querySelector(`.${section}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            className={`Headers ${collapsed ? 'collapsed' : ''} ${uncollapsed ? 'uncollapsed' : ''}`}
            onMouseEnter={() => setUncollapsed(true)}
            onMouseLeave={() => setUncollapsed(false)}
        >
            <button onClick={() => handleScroll("firstpage")}>Home</button>
            <button onClick={() => handleScroll("aboutme")}>About me</button>
            <button onClick={() => handleScroll("projects")}>Projects</button>
            <button onClick={() => handleScroll("contactme")}>Contact me</button>
        </div>
    );
}