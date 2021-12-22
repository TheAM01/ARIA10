function helpFieldsArray (elon) {
	let musk = [];
	for (let i = 0; i < elon.length; i++) {
		musk.push({name: elon[i].toString(), value: codeFormat(`!Help ${elon[i].toString()}`)})
	}
	return musk
}

function codeFormat (elon) {
	return `\`\`\`${elon}\`\`\``
}


export default {
	helpFieldsArray,
	codeFormat
}