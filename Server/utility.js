function helpFieldsArray(elon) {
	let musk = [];
	for (let i = 0; i < elon.length; i++) {
		musk.push({ name: elon[i].toString(), value: multilineCode(`!Help ${elon[i].toString()}`) })
	}
	return musk
}

function multilineCode(elon) {
	return `\`\`\`${elon}\`\`\``
}

function inlineCode(elon, musk) {
	if (typeof musk !== 'string') musk = '';
	if (!musk) musk = '';
	return`\`${musk}${elon}${musk}\``
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

function preciseDate(elon) {
	let musk = [], args = elon.toString().split(' ');
	for (let i = 0; i < 5; i++) {
		musk.push(args[i])
	}
	return musk.join(' ')
}


export default {
	helpFieldsArray,
	multilineCode,
	inlineCode,
	isNatural,
	isNaturalLol,
	preciseDate
}