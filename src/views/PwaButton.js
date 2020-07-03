/*
 * @Author: your name
 * @Date: 2020-07-03 12:03:06
 * @LastEditTime: 2020-07-03 12:09:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \CITZ-IMB-Capstone2020\src\views\PwaButton.js
 */ 
import React from "react";
import { useReactPWAInstall } from "react-pwa-install";
import icon192 from "./icon192.png";

function PwaButton(){
    const { pwaInstall, supported, isInstalled } = useReactPWAInstall();

    const handleClick = () => {
        pwaInstall({
        title: "Install Web App",
        logo: icon192,
        features: (
            <ul>
            <li>Capstone 2020</li>
            </ul>
        ),
        description: "Capstone 2020, awesome project",
        })
        .then(() => alert("App installed successfully or instructions for install shown"))
        .catch(() => alert("User opted out from installing"));
    };

    return (
        <div>
      <p>
        If your browser is supported and you haven't already installed the app, you should see the install
        button below:
      </p>
      {supported() && !isInstalled() && (
        <button type="button" onClick={handleClick}>
          Install app
        </button>
      )}
    </div>
      );
}

export default PwaButton;