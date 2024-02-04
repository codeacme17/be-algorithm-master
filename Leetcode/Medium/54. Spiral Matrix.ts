/**
 *  54. Spiral Matrix
 *  https://leetcode.com/problems/spiral-matrix/description/
 *
 */

function spiralOrder(matrix: number[][]): number[] {
  let leftLimit = 0
  let rightLimit = 0
  let topLimit = 0
  let bottomLimit = 0

  let currentDesition = 'right'
  let x = 0
  let y = 0

  const res: number[] = []

  for (let i = 0; i < matrix.length * matrix[0].length; i++) {
    res.push(matrix[y][x])

    switch (currentDesition) {
      case 'right':
        x++

        if (x >= matrix[0].length - rightLimit) {
          currentDesition = 'down'
          x--
          y++
          topLimit++
        }
        break

      case 'down':
        y++

        if (y >= matrix.length - bottomLimit) {
          currentDesition = 'left'
          x--
          y--
          rightLimit++
        }
        break

      case 'left':
        x--

        if (x < leftLimit) {
          currentDesition = 'up'
          x++
          y--
          bottomLimit++
        }
        break

      case 'up':
        y--

        if (y < topLimit) {
          currentDesition = 'right'
          x++
          y++
          leftLimit++
        }
        break

      default:
        break
    }
  }

  return res
}
