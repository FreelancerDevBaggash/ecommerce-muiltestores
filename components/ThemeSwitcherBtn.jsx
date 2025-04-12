// "use client";
// import {useState, useEffect} from "react";
// import {useTheme } from "next-themes";
// import { Moon, Sun} from "lucide-react";
// export default function ThemeSwitcherBtn({ customization = {}}){
//     const primaryColor = customization.primaryColor || '#4CAF50'; // اللون الأساسي
//     const secondaryColor = customization.secondaryColor || '#2C3E50'; // اللون الثانوي
//     const accentColor = customization.accentColor || '#FFC107'; // اللون المميز
//     const backgroundColor = customization.backgroundColor || '#FFFFFF'; // لون الخلفية
//     const fontFamily = customization.fontFamily || 'sans-serif'; // نوع الخط
//     const isActive = customization.isActive ?? true;
//     const [mounted, setMounted] = useState(false);
//     const {theme, setTheme} = useTheme();
//     console.log(theme)
//     useEffect(() => {
//         setMounted(true);
//     }, []);
//     if(!mounted) {
//         return null;
//     }
//     return(
//         <button className="text-lime-700 dark:text-lime-500" style={{ color: backgroundColor }}
//         onClick={()=> setTheme(theme === "dark" ? "light" : "dark")}>
//             {theme === "light" ? <Moon/> :<Sun/>}
//         </button>
//     );

// }
"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcherBtn({ customization = {} }) {
    const primaryColor = customization?.primaryColor || '#4CAF50'; // اللون الأساسي
    const secondaryColor = customization?.secondaryColor || '#2C3E50'; // اللون الثانوي
    const accentColor = customization?.accentColor || '#FFC107'; // اللون المميز
    const darkModeColor = customization?.darkModeColor || '#FACC15'; // لون أيقونة الدارك مود
    const lightModeColor = customization?.lightModeColor || '#F97316'; // لون أيقونة الوضع الفاتح
    const fontFamily = customization?.fontFamily || 'sans-serif'; // نوع الخط
    const isActive = customization?.isActive ?? true;

    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button 
            className="transition-all duration-300 p-2 rounded-full focus:outline-none" 
            style={{ 
                color: theme === "dark" ? darkModeColor : lightModeColor,
                fontFamily 
            }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
        </button>
    );
}
