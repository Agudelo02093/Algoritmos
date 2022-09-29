    var num = 4
    var i
	var total = 1; 
	for (i=1; i<=num; i++) {
		total = total * i; 
	}


test('Factorizar', () => {
    expect(total).toEqual(24);
    console.log(total)
})