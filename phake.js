// special functions for dealing with legavy Tai Phake stuff
var banchob = function(string) {
	string = string.replace(/A/g, "ā");
	string = string.replace(/B/g, "β");
	string = string.replace(/C/g, "ç");
	string = string.replace(/D/g, "ð");
	string = string.replace(/E/g, "ē");
	string = string.replace(/F/g, "ɣ");
	string = string.replace(/G/g, "ɢ");
	string = string.replace(/H/g, "ʜ");
	string = string.replace(/I/g, "ī");
	string = string.replace(/J/g, "ɛ̄");
	string = string.replace(/K/g, "ɬ");
	string = string.replace(/L/g, "ʟ");
	string = string.replace(/M/g, "ñ");
	string = string.replace(/N/g, "ŋ");
	string = string.replace(/O/g, "ō");
	string = string.replace(/P/g, "ɸ");
	string = string.replace(/Q/g, "ɔ̄");
	string = string.replace(/R/g, "ʀ");
	string = string.replace(/S/g, "ʃ");
	string = string.replace(/T/g, "θ");
	string = string.replace(/U/g, "ū");
	string = string.replace(/V/g, "ǖ");
	string = string.replace(/W/g, "ʍ");
	string = string.replace(/X/g, "χ");
	string = string.replace(/Y/g, "ʒ");
	string = string.replace(/Z/g, "ə̄");
	string = string.replace(/j/g, "ɛ");
	string = string.replace(/q/g, "ɔ");
	string = string.replace(/v/g, "ü");
	string = string.replace(/z/g, "ə");
	string = string.replace(/\!/g, "ı");
	string = string.replace(/\"/g, "ˌ");
	string = string.replace(/\#/g, "ɛ̄");
	string = string.replace(/\ɶ$/g, "");
	string = string.replace(/\%ɤ/g, "");
	string = string.replace(/\*/g, "ɯ");
	string = string.replace(/\+/g, "°");
	string = string.replace(/\:/g, "ˑ");
	string = string.replace(/\;/g, "ː");
	string = string.replace(/\=/g, "̥");
	string = string.replace(/\>/g, "̇");
	string = string.replace(/\?/g, "ʔ");
	string = string.replace(/\@/g, "ø");
	string = string.replace(/1/g, "₁");
	string = string.replace(/2/g, "₂");
	string = string.replace(/3/g, "₃");
	string = string.replace(/4/g, "₄");
	string = string.replace(/5/g, "₅");
	string = string.replace(/6/g, "₆");
	string = string.replace(/7/g, "₇");
	string = string.replace(/8/g, "₈");
	string = string.replace(/9/g, "₉");
	string = string.replace(/0/g, "₀");
	string = string.replace(/\^/g, "ʌ");
	string = string.replace(/\`/g, "̰");
	string = string.replace(/\{/g, "ˌ");
	string = string.replace(/\}/g, "ˈ");
	//string = string.replace(//g, "");
	return string;
}
module.exports = banchob;