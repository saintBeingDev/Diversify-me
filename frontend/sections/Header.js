import React, { useState, useEffect } from "react";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import Button  from '../components/Button'
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

const navigations = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);
  const router = useRouter();


  useEffect(()=>{
    setMounted(true)
  },[])

  const renderThemeChanger = ()=>{
    if(!mounted)return null;

    const currentTheme = theme === 'system'? systemTheme : theme; // when user visits first time our website the theme of our website will be default theme of users browsers

    if(currentTheme === 'dark'){
      return(
        <Button className="bg-gray-100 dark:bg-gray-600"
          onClick={()=>setTheme('light')}
        >
          {/* Sun icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </Button>
      )
    }else{
      return (
        <Button className="bg-gray-100 " onClick={()=>setTheme('dark')}>
          {/* Moon icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="bg-blue-500">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </Button>
      )
    }

    
  }

  return (
    <div>
      {/* previously used color for dark theme [#041C32] */}
      <Navbar fluid={true} rounded={true} className="dark:bg-darkSecondary">
        <Navbar.Brand href="/" className="dark:bg-darkSecondary">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Diversify Me
          </span>
        </Navbar.Brand>
        <div>
        {renderThemeChanger()}
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {navigations.map((nav) => (
            <Navbar.Link  href={nav.path} key={nav.label}>
              <p className={`${router.pathname == nav.path ? "nav-active":""}`}>{nav.label}</p>
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
