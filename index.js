/*2 tojás
7 dkg szalonna
1 csipet só
1 kis fej hagyma */
function validate()
{
	// emberek száma
	let mult = parseInt(document.getElementById("szam").value);
	// mennyiségek egy emberre
	let arr = [2, 7, 1, 1];
	// kitöltendő, readonly beviteli mezők
	let out = document.getElementsByClassName("alapanyag");
	//console.assert(arr.length === out.length, "input and output length is not equal");
	// readonly beviteli mezők kitöltése
	for (const [k, v] of Object.entries(arr))
	{
		out[k].value = v * mult;
	}
}
