const fs = require('fs')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	 fs.writeFile(fileName, fileContent, (err)=>{
		if(err)
		console.log(err);
	})
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.readFile(fileName, {encoding:"utf-8"},(err,data)=>{
		if(err)
		console.log(err)
		else
		console.log(data)
	} )
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName, fileContent, (err)=>{
		if(err)
		console.log(err)
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName, (err)=>{
		if(err)
		console.log(err)
	})
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }