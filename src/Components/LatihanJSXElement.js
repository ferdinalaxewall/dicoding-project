import React from "react";
import DicodingLogo from "../assets/dicoding-logo.png";

// JSX Element
const contentWrapper = (
    <div className="content-wrapper">
        <h1>Biodata Perusahaans</h1>
        <ul>
            <li>Nama: Dicoding Indonesia</li>
            <li>BIdang: Education</li>
            <li>Tagline: Decode Ideas, Discover Potential.</li>
        </ul>

        {/* Normal Sytanx */}
        {/* <img src="img/dicoding-logo.png" alt="Dicoding Logo" /> */}

        {/* Modularisasi Sytanx */}
        <img src={DicodingLogo} alt="Dicoding Logo" height="100" />
    </div>
)

export default function LatihanJSXElement() {
  return (
    <div className="content-wrapper">
        <h1>Biodata Perusahaans</h1>
        <ul>
            <li>Nama: Dicoding Indonesia</li>
            <li>BIdang: Education</li>
            <li>Tagline: Decode Ideas, Discover Potential.</li>
        </ul>

        {/* Normal Sytanx */}
        {/* <img src="img/dicoding-logo.png" alt="Dicoding Logo" /> */}

        {/* Modularisasi Sytanx */}
        <img src={DicodingLogo} alt="Dicoding Logo" height="100" />
    </div>
  )
}


// export default contentWrapper;