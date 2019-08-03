import {
  findSource,
  findColorClass,
  createMediaBiasCss,
  createMediaBiasSummary
} from "./sources.js";

/**
 * Update link with media bias info
 *
 * @param {HTMLAnchorElement} link
 */
function updateLink(link) {
  const source = findSource(link);

  // Bail if no source found
  if (!source) {
    $(link).attr("title", "No media bias info available");
    return;
  }

  $(link)
    .addClass(findColorClass(source))
    .attr("title", createMediaBiasSummary(source));
}

// Inject media bias styles (link colors, etc.)
$("head").append(createMediaBiasCss());

// Gather all links on page
const links = [...document.body.getElementsByTagName("a")];

// Add color classes to links
links.forEach(link => {
  updateLink(link);
});
