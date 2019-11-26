import React from 'react'

let SRSImport = () => {

	function handleFileChosen(){
		console.log("Inside handleFileChosen")
		var file = document.getElementById('fileInput').files[0]
		console.log("File name: %s", file.name)
		var fileReader = new FileReader()
		fileReader.onload = readContent(fileReader.result)
		fileReader.readAsText(file)
	}

	function readContent(content)
	{
		console.log("Inside readContent")
		if(content){
			var lines = content.split(/[\r\n\t]+/)
			console.log("Number of lines in file: %d", lines.length)
			for(var line of lines)
				console.log("New Line: %s", line)
		// if (lines.length < 5)
		}
		else
			console.log("content is NULL")
	}

	return <div className='SRSImport'>
		<hr />
		<h3>Import From SRS</h3>
		<form method='POST' enctype="multipart/form-data" onSubmit={e => { 
			console.log("Inside onSubmit")
			handleFileChosen()
		}}>
			<input id='fileInput'
				name='fileInput'
				type='file'
				accept='.srsnote'
			/>
			<input type='submit'/>
		</form>
		<hr />
	</div>
}

export default SRSImport