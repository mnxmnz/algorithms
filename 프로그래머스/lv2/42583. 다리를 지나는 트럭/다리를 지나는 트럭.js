function solution(bridge_length, weight, truck_weights) {
  const bridge = Array.from({ length: bridge_length }, _ => 0);
  let currentTime = 0;

  while (truck_weights.length) {
    const currentWeight = bridge.reduce((acc, cur) => acc + cur, 0) - bridge.shift();

    if (currentWeight + truck_weights[0] <= weight) {
      bridge.push(truck_weights.shift());
    } else {
      bridge.push(0);
    }

    currentTime++;
  }

  return currentTime + bridge_length;
}