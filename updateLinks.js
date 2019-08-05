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
  const $link = $(link);

  // Bail if no source found
  if (!source) {
    $link.attr("title", "Media bias unknown");
    return;
  }

  // Add color and summary to link
  $link.addClass(findColorClass(source));
  $link.attr("title", createMediaBiasSummary(source));
}

// Inject media bias styles (link colors, etc.)
$("head")
  .append(createMediaBiasCss())
  .append(
    '<script script-src-elem type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>'
  );

// Gather all links on page
const links = [...document.body.getElementsByTagName("a")];

// Add color classes to links
links.forEach(link => {
  updateLink(link);
});

// Listen for dynamically loaded links
document.addEventListener(
  "DOMNodeInserted",
  e => {
    // Do nothing if inserted node isn't an element
    const insertedNode = e.target;
    const isElement = insertedNode.nodeType === 1;
    if (!isElement) {
      return;
    }

    // Grab all links inside inserted element
    const links = [...insertedNode.getElementsByTagName("a")];

    // Add in the inserted node if it's a link
    if (insertedNode.tagName === "A") {
      links.push(insertedNode);
    }

    // Update links
    links.forEach(link => {
      updateLink(link);
    });
  },
  false
);
