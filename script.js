const rtlLanguages = ["ar", "he", "fa", "ur"];

function updateDirection() {
	// Use the first language code to support values like "ar-SA".
	const languageCode = document.documentElement.lang.toLowerCase().split("-")[0];
	document.documentElement.dir = rtlLanguages.includes(languageCode) ? "rtl" : "ltr";
}

updateDirection();

const languageObserver = new MutationObserver(updateDirection);
languageObserver.observe(document.documentElement, {
	attributes: true,
	attributeFilter: ["lang"]
});