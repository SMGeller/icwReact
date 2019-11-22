import React from 'react'

const SRSImport = () => {
	let fileReader

	const handleFileRead = (e) => {
		const content = fileReader.result
		// console.log(content)
		readContent(content)
	}

	const handleFileChosen = (file) => {
		fileReader = new FileReader();
		fileReader.onloadend = handleFileRead
		fileReader.readAsText(file)
	}

	const readContent = (content) => {
		var lines = content.split(/[\r\n]+/)
		console.log(lines[0]);
		for(var line of lines)
			console.log("New Line: %s", line)
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