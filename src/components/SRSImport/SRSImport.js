import React from 'react'

const SRSImport = () => {
	let fileReader

	const handleFileRead = (e) => {
		const content = fileReader.result
		console.log(content)
		// parse text into header and body
	}

	const handleFileChosen = (file) => {
		fileReader = new FileReader();
		fileReader.onloadend = handleFileRead
		fileReader.readAsText(file)
	}

	return <div className='SRSImport'>
		<label for='fileInput'>Import From SRS</label>
		<input type='file'
			id='fileInput'
			accept='.srsnote'
			onChange={e => handleFileChosen(e.target.files[0])}
		/>
	</div>
}

export default SRSImport