exports.findNearest = function(items, target, low = 0, high = items.length - 1) {
  while(low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    const midValue = items[mid];
    if (target === midValue) {
      return mid;
    } else if (midValue > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  if (low < 0 || low >= items.length) {
    return high;
  } else if (high < 0 || high >= items.length) {
    return low;
  }

  const lowDiff = Math.abs(target - items[low]),
        highDiff = Math.abs(items[high] - target);

  const result = lowDiff < highDiff ? low : high;
  return result;
}
