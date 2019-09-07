import {
  overallQuality,
  politicalBias,
  colorBoxes,
  colorMap
} from "./sources.js";

/**
 * Find the political bias of a news source
 *
 * @param source
 */
export function findBias(source) {
  const rank = source.horizontalRank;
  return politicalBias.find(bias => {
    return bias.range[0] <= rank && rank <= bias.range[1];
  });
}

/**
 * Find the overall quality of a news source
 *
 * @param source
 */
export function findQuality(source) {
  const rank = source.verticalRank;
  const quality = overallQuality.find(quality => {
    return quality.range[0] <= rank && rank <= quality.range[1];
  });

  return quality;
}

/**
 * Find the color box(es) a news source falls into
 *
 * @param source
 */
export function findColorBoxes(source) {
  const boxes = colorBoxes.filter(box => {
    const isInHorizontalRange =
      box.horizontalRange[0] <= source.horizontalRank &&
      source.horizontalRank <= box.horizontalRange[1];

    const isInVerticalRange =
      box.verticalRange[0] <= source.verticalRank &&
      source.verticalRank <= box.verticalRange[1];

    return isInHorizontalRange && isInVerticalRange;
  });

  return boxes.length ? boxes : undefined;
}

/**
 * Find the color class for a news source
 *
 * @param source
 */
export function findColorName(source) {
  const colorBoxes = findColorBoxes(source) || [];
  const colors = colorBoxes.map(colorBox => {
    return colorBox.color;
  });

  // Make sure any duplicates are removed before joining
  return [...new Set(colors)].join("_");
}

/**
 * Find the color code for a news source
 *
 * @param source
 */
export function findColorCode(source) {
  return colorMap[findColorName(source)];
}

/**
 * Find the description corresponding to a news source's color key(s)
 *
 * @param source
 */
export function findColorDescription(source) {
  const colorBoxes = findColorBoxes(source);
  const categories = colorBoxes.map(colorBox => {
    return colorBox.description;
  });

  // Make sure any duplicates are removed before joining
  return [...new Set(categories)].join(" / ");
}

/**
 * Create a media bias summary for a news source
 *
 * @param source
 */
export function createMediaBiasSummary(source) {
  const colorClass = findColorName(source) || "COLOR_MISSING";
  const colorKey = colorClass.toUpperCase().replace("_", " / ");
  const quality = findQuality(source);
  const bias = findBias(source);
  const colorDescription = findColorDescription(source);
  const mediaBiasSummary = [
    `SOURCE\n${source.names[0]}\n\n`,
    `${colorKey}\n${colorDescription}\n\n`,
    `POLITICAL BIAS\n${bias.description}\n\n`,
    `OVERALL QUALITY\n${quality.description}`
  ].join("");

  return mediaBiasSummary;
}
