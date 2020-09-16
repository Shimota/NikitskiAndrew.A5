$(document).ready(function() {
	const create = $('.js-button-create');
	const replace = $('.js-button-replace')
	const textArea = $('.js-text');
	const jsVar1 = $('.js-var1');
	const jsVar2 = $('.js-var2');
	const jsVar3 = $('.js-var3');
	const jsVar4 = $('.js-var4');
	const jsVar5 = $('.js-var5');
	const jsVar6 = $('.js-var6');
	const jsSpeach = $('.js-speach');
	create.click(function() {
		const createText = {
		"text":["Жили-были {var1} да {var2}",
		"Была у них {var3}",
		"Снесла {var3} {var4}, не простое - золотое",
		"- {var1} бил, бил - не разбил",
		"- {var2} била, била - не разбила",
		"{var5} бежала, {var6} задела, {var4} упало и разбилось.",
		"{var1} плачет, {var2} плачет, а {var3} кудахчет:",
		"{speach}"]
		};
		textArea.html(createText.text);
	});
	replace.click(function() {
		const var1 = jsVar1.val();
		const var2 = jsVar2.val();
		const var3 = jsVar3.val();
		const var4 = jsVar4.val();
		const var5 = jsVar5.val();
		const var6 = jsVar6.val();
		const speach = jsSpeach.val();
		const replaceText = {
		"text":[`Жили-были ${var1} да ${var2}`,
		`Была у них ${var3}`,
		`Снесла ${var3} ${var4}, не простое - золотое`,
		`- ${var1} бил, бил - не разбил`,
		`- ${var2} била, била - не разбила`,
		`${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
		`${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
		`${speach}`,]
		};
		textArea.html(replaceText.text);
	});
});