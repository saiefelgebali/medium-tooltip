import { addTooltip, removeTooltip } from "./tooltip.js";

let selection;
let tooltipActive = false;

document.addEventListener("mouseup", (e) => {
	// only add tooltip if selecting text
	// and if not already showing
	if (selection && !tooltipActive) {
		addTooltip(selection);
		tooltipActive = true;
	}
});

document.addEventListener("selectionchange", (e) => {
	selection = document.getSelection();

	if (
		// remove tooltip if selection is empty
		selection.type != "Range" ||
		// remove tooltip if selection is not within a single element
		selection.focusNode != selection.anchorNode
	) {
		selection = null; // reset selection
		tooltipActive = false;
		removeTooltip();
		return;
	}
});
