const tooltipHTML = `
	<div class="tooltip__group">
		<div class="tooltip__button"><i class="fa-solid fa-pen"></i></div>
		<div class="tooltip__button"><i class="fa-solid fa-comment"></i></div>
		<div class="tooltip__button"><i class="fa-brands fa-twitter"></i></div>
	</div>
	<div class="seperator"></div>
	<div class="tooltip__group">
		<div class="tooltip__button"><i class="fa-solid fa-message"></i></div>
	</div>
    `;

/**
 * Add a tooltip above of selected text.
 * @param {Selection} selection
 */
export const addTooltip = (selection) => {
	// create tooltip
	const tooltip = document.createElement("div");
	tooltip.classList.add("tooltip");
	tooltip.id = "tooltip";
	tooltip.tabIndex = 1;
	tooltip.innerHTML = tooltipHTML;

	const range = selection.getRangeAt(0);
	const rects = range.getClientRects();
	const firstRect = rects[0];

	// position of tooltip
	let x, y;

	// multi-line selection
	if (rects.length > 1) {
		// get center of line
		const parent = selection.focusNode.parentElement;
		x = parent.offsetLeft + parent.offsetWidth / 2;
		y = firstRect.top + firstRect.height / 2;
	}

	// single line selection
	else {
		// get center of selection
		x = firstRect.left + firstRect.width / 2;
		y = firstRect.top + firstRect.height / 2;
	}

	tooltip.style.left = `${x}px`;
	tooltip.style.top = `${y}px`;

	document.body.appendChild(tooltip);
};

/**
 * Remove existing tooltip from DOM.
 */
export const removeTooltip = () => {
	const tooltip = document.getElementById("tooltip");
	if (tooltip) {
		tooltip.remove();
	}
};
