import { useState } from 'react';
import { bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9 } from './assets/images/';
import phrases from './phrases.json';
import './App.css';

const images = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9];

function randomIndex(max) {
	return Math.floor(Math.random() * max);
}

function App() {
	const [phrase, setPhrase] = useState(phrases[randomIndex(phrases.length)]);
	const [img, setImg] = useState(images[randomIndex(images.length)]);

	function changePhrase() {
		setPhrase(phrases[randomIndex(phrases.length)]);
		setImg(images[randomIndex(images.length)]);
	}

	return (
		<div className="wrapper" style={{ backgroundImage: `url('${img}')` }}>
			<div className="container">
				{/* Encabezado */}
				<h1 className="heading">
					_____________Frases de Batman:_____________
					<br />
				</h1>

				{/* Contenido */}
				<div className="card">
					<div className="card__body">
						<q className="phrase">
							<b>{phrase.phrase} </b>
						</q>{' '}
						<br />
						<cite className="author">
							- <b>{phrase.author}</b> -
						</cite>
					</div>
				</div>

				{/* Boton */}
				<button onClick={changePhrase} className="btn">
					Siguiente{' '}
				</button>
				{/* <pre>{JSON.stringify(phrases[0], null, 2)}</pre> */}
			</div>
		</div>
	);
}

export default App;
