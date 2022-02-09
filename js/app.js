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

	// remove tooltip if selection is empty
	if (selection.type != "Range") {
		selection = null;
		tooltipActive = false;
		removeTooltip();
		return;
	}

	// remove tooltip if selection is not within a single element
	if (selection.focusNode != selection.anchorNode) {
		selection = null;
		tooltipActive = false;
		removeTooltip();
		return;
	}
});
