function printSpiral(matrix: number[][]) {
	const rows = matrix.length
	const cols = matrix[0].length
	let top = 0
	let bottom = rows - 1
	let left = 0
	let right = cols - 1
	let dir = 0

	while (top <= bottom && left <= right) {
		if (dir === 0) {
			for (let i = left; i <= right; i++) {
				console.log(matrix[top][i])
			}
			top++
		} else if (dir === 1) {
			for (let i = top; i <= bottom; i++) {
				console.log(matrix[i][right])
			}
			right--
		} else if (dir === 2) {
			for (let i = right; i >= left; i--) {
				console.log(matrix[bottom][i])
			}
			bottom--
		} else {
			for (let i = bottom; i >= top; i--) {
				console.log(matrix[i][left])
			}
			left++
		}

		dir = (dir + 1) % 4
	}
}
