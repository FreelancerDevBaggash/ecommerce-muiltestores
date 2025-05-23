'use client';
import { ThemeProvider } from "next-themes";
import React from "react";
import { Toaster } from "react-hot-toast";
import {NextSSRPlugin} from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "../app/api/uploadthing/core";
import { Provider} from "react-redux";
import { store } from "@/redux/store";
import {SessionProvider} from "next-auth/react";
export default function Providers({ children }){
    return (
    <ThemeProvider attribute="class" defaultTheme="dark" >
         <NextSSRPlugin    routerConfig={extractRouterConfig(ourFileRouter)}/>
         {/**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
*/}
        <Toaster position="top-center" reverseOrder={false}/>
        
        <SessionProvider>
        <Provider store={store}>  {children} </Provider>
        </SessionProvider>       
       
    </ThemeProvider>
    )
}