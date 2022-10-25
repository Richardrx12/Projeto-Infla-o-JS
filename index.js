	import inflacaoJs from 'readline-sync';
	
	let salarioMinimo = [
		
		{salario: 510, inflacao: 5.91, ano: 2010 },
		{salario: 545, inflacao: 6.50, ano: 2011 },
		{salario: 622, inflacao: 5.84, ano: 2012 },
		{salario: 678, inflacao: 5.91, ano: 2013 },
		{salario: 724, inflacao: 6.41, ano:  2014 },
		{salario: 788, inflacao: 10.67, ano: 2015 },
		{salario: 880, inflacao: 6.29, ano: 2016 },
		{salario: 937, inflacao: 2.95, ano: 2017 },
		{salario: 954, inflacao: 3.75, ano: 2018 },
		{salario: 998, inflacao: 4.31, ano: 2019 },
		{salario: 1045, inflacao: 4.52,ano: 2020 }
		
	];
	
	let label_ano = "Ano:";
	let label_salarioM = "Salário Mínimo:";
	let label_inflacao = "Inflação IPCA:";
	let label_crescimentoS = "Crescimento Salarial:";
	let cont = 1;


	
	
	
	while ( cont != 0){
		console.log("\n Escolha uma das alternativas: ");
		console.log("\n 1 - Listar os salários mínimos de 2010 á 2020 ");
		console.log(" 2 - Listar o índice IPCA de 2010 á 2020 ");
		console.log(" 3 - Comparação entre o percentual de aumento salarial e o IPCA ");
		console.log("\n        Digite 0 para encerrar ")
		let opcaoEscolhida = inflacaoJs.question("\n Digite o numero de sua escolha: ");
		
		cont = opcaoEscolhida;
		
		switch(opcaoEscolhida) {
			
			case '1': 
			
				for ( let aux of salarioMinimo) {
				
					let salario = aux.salario;
					let ano = aux.ano;
				
					console.log( "\n" +label_ano.padEnd(40, ' ') +ano);
					console.log( label_salarioM.padEnd(40, ' ') + "R$ " +salario+ ",00 " + "\n");
				
				}
					break;
			
			case '2': 
			
				for ( let aux of salarioMinimo) {
				
					let inflacao = aux.inflacao;
					let ano = aux.ano;
					
					console.log( "\n" +label_ano.padEnd(40, ' ') +ano);
					console.log( label_inflacao.padEnd(40, ' ') +inflacao+ "% " + "\n");
				
				}
					break;
			
			case '3': 

			console.log( "\n" +label_ano.padEnd(40, ' ') +salarioMinimo[0].ano);
					console.log( label_salarioM.padEnd(40, ' ') + "R$ " +salarioMinimo[0].salario+ ",00 ");
					console.log( label_crescimentoS.padEnd(40, ' ') + " -- ");
					console.log( label_inflacao.padEnd(40, ' ') +salarioMinimo[0].inflacao+ "% ");

			for (let i=1; i < salarioMinimo.length; i++){
				

				let salarioAnterior = salarioMinimo[i-1].salario;
				let salarioAno = salarioMinimo[i].salario;

				let diferença = salarioAno - salarioAnterior;
				var percent = ( diferença / salarioAnterior ) * 100;
				
					let salario = salarioMinimo[i].salario;
					let ano = salarioMinimo[i].ano;
					let inflacao = salarioMinimo[i].inflacao;
			
					console.log( "\n" +label_ano.padEnd(40, ' ') +ano);
					console.log( label_salarioM.padEnd(40, ' ') + "R$ " +salario+ ",00 ");
					console.log( label_crescimentoS.padEnd(40, ' ') +percent.toFixed(2)+ "%");
					console.log( label_inflacao.padEnd(40, ' ') +inflacao+ "% "); 
				
			}
					break;

			case '0': 
				console.log("\n\n       Programa encerrado com sucesso!!!\n\n");
				break;

			default: 

				console.log("\n\n    Número inválido!!!! \n\n");
				break;
		} 

		
	}
	
	
	
	