function getSize(width, height, depth) {
    let surfaceArea = 2 * (width * height) + 2 * (height * depth) + 2 * (depth * width)
    let volume = width * height * depth
    return [surfaceArea, volume]
  }
  