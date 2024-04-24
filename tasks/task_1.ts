function myParseInt(str: string): number {
	let result = 0
	for (const element of str) {
		const digit = parseInt(element)
		if (isNaN(digit)) {
			break
		} else {
			result = result * 10 + digit
		}
	}

	return result
}
