function helpFieldsArray(elon) {
	let musk = [];
	for (let i = 0; i < elon.length; i++) {
		musk.push({ name: elon[i].toString(), value: codeFormat(`!Help ${elon[i].toString()}`) })
	}
	return musk
}

function codeFormat(elon) {
	return `\`\`\`${elon}\`\`\``
}

function codeFormatSmall(elon) {
	return`\`${elon}\``
}

function isNatural() {
	if (parseInt(this) % 1 != 0 || parseInt(this) < 1) {
		return false
	}
	return true
}

function isNaturalLol(elon) {
	if (parseInt(elon) % 1 != 0 || parseInt(elon) < 1) {
		return true
	}
	return false
}

export default {
	helpFieldsArray,
	codeFormat,
	codeFormatSmall,
	isNatural,
	isNaturalLol
}