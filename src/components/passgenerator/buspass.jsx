import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Link} from "react-router-dom";
import "./buspass.css";

// export function Passgenerate(){
//     return(
//         <div className='hello'>
//             <h1>Generate pass here</h1>
//             <form>

//             </form>

//         </div>
//     )
// }

import QRCode from 'qrcode'
//import { useState } from 'react'

export function Passgenerate() {
	const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')

	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 500,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
		})
	}

	return (
		<div className="app">
			<h1>QR Generator</h1>
			<input 
				type="text"
				placeholder="e.g. https://google.com"
				value={url}
				onChange={e => setUrl(e.target.value)} />
			<button onClick={GenerateQRCode}>Generate</button>
			{qr && <>
				<img src={qr} />
				<a href={qr} download="qrcode.png">Download</a>
			</>}
		</div>
	)
}

