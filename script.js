function knightMoves(start, end) {
  const directions = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]
  ];

  function isValid([x, y]) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  let queue = [[start, [start]]];
  let visited = new Set([start.toString()]);

  while (queue.length > 0) {
    let [current, path] = queue.shift();

    if (current[0] === end[0] && current[1] === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach(pos => console.log(pos));
      return path;
    }

    for (let [dx, dy] of directions) {
      let next = [current[0] + dx, current[1] + dy];

      if (isValid(next) && !visited.has(next.toString())) {
        queue.push([next, [...path, next]]);
        visited.add(next.toString());
      }
    }
  }
}

knightMoves([3, 3], [4, 3])