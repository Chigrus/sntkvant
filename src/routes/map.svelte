<script>
	let map_data = [
		{id: 1, transform: 'translate(261.54,858.341)', d: 'M 0,0 -13.68,19.92 6.54,32.64 20.04,12.72 Z', planeId: '4', matrix: [268,872], gas: 53000},
		{id: 2, transform: 'translate(274.14,837.881)', d: 'M 0,0 -12.6,20.46 7.5,33.18 20.34,13.38 Z', planeId: '5', matrix: [282,849], gas: 3000},
		{id: 3, transform: 'translate(585.48,454.301)', d: 'M 0,0 -12.84,19.62 7.2,32.58 19.92,12.66 Z', planeId: '89', matrix: [593,466], gas: 0},
		{id: 4, transform: 'translate(279.24,669.641)', d: 'M 0,0 37.56,13.5 44.58,-2.64 29.88,-7.38 6.96,-15.12 Z', planeId: '940', matrix: [305,660], gas: 53000},
		{id: 5, transform: 'translate(309.12,662.261)', d: 'M 0,0 14.7,4.74 27.78,8.52 38.4,-9.12 10.98,-18.36 Z', planeId: '943', matrix: [333,650], gas: 53000},
		{id: 6, transform: 'translate(223.38,819.881)', d: 'm 0,0 -8.76,14.16 5.64,2.64 24.24,13.26 8.16,4.74 9.54,-14.28 z', planeId: '911', matrix: [242,829], gas: 53000},
		{id: 7, transform: 'translate(205.62,849.341)', d: 'm 0,0 23.88,12.6 4.56,2.46 9.48,5.04 L 47.04,5.34 38.88,0.6 14.64,-12.66 9,-15.3 Z', planeId: '910', matrix: [230,843], gas: 53000},
		{id: 8, transform: 'translate(294.48,851.261)', d: 'M 0,0 -12.84,19.8 7.68,33.42 20.64,13.32 Z', planeId: '58', matrix: [302,863], gas: 0},
		{id: 9, transform: 'translate(281.64,871.061)', d: 'm 0,0 -13.56,19.92 21,13.26 13.02,-19.56 z', planeId: '59', matrix: [290,881], gas: 0},
		{id: 10, transform: 'translate(247.8,878.141)', d: 'M 0,0 -12.54,20.4 7.86,33.12 20.28,12.84 Z', planeId: '3', matrix: [256,893], gas: 53000},
		{id: 11, transform: 'translate(268.02,890.981)', d: 'M 0,0 -12.36,20.28 8.28,33.06 20.82,13.38 Z', planeId: '60', matrix: [276,903], gas: 0},
		{id: 12, transform: 'translate(235.26,898.541)', d: 'M 0,0 -9.48,15.54 15.36,30.66 30.84,40.74 41.04,25.5 20.4,12.72 Z', planeId: '2', matrix: [255,918], gas: 0},
		{id: 13, transform: 'translate(225.78,914.081)', d: 'm 0,0 -15.42,24.96 2.34,2.1 22.32,14.4 15.6,-26.34 z', planeId: '1', matrix: [235,930], gas: 0},
		{id: 14, transform: 'translate(561.24,1175.081)', d: 'M 0,0 -12.36,19.8 6.06,32.58 19.98,12.48 Z', planeId: '463', matrix: [568,1183], gas: 53000},
		{id: 15, transform: 'translate(629.52,1210.541)', d: 'M 0,0 19.02,12 21.12,11.1 33.96,-8.82 13.02,-20.7 Z', planeId: '554', matrix: [650,1200], gas: 53000},
		{id: 16, transform: 'translate(541.98,1304.081)', d: 'M 0,0 -12.78,20.58 7.98,34.02 20.46,13.56 Z', planeId: '508', matrix: [551,1312], gas: 53000},
		{id: 17, transform: 'translate(324.72,1050.701)', d: 'm 0,0 -4.8,7.32 -1.98,3 -5.94,9.18 L 7.2,32.7 20.34,12.66 Z', planeId: '197', matrix: [333,1057], gas: 53000},
		{id: 18, transform: 'translate(243.78,791.621)', d: 'M 0,0 -1.14,1.44 -9.9,14.4 28.08,33.84 38.1,18.12 Z', planeId: '913', matrix: [263,800], gas: 53000},
		{id: 19, transform: 'translate(828.96,1197.761)', d: 'M 0,0 -20.76,30.24 -0.6,43.5 20.04,13.02 Z', planeId: '717', matrix: [833,1210], gas: 53000},
		{id: 20, transform: 'translate(401.88,1128.641)', d: 'M 0,0 20.34,13.26 32.88,-7.38 13.26,-20.4 Z', planeId: '322', matrix: [423,1116], gas: 53000},
		{id: 21, transform: 'translate(295.56,716.621)', d: 'm 0,0 -1.8,1.5 -7.26,11.34 34.2,18.3 9.6,-15.24 z', planeId: '918', matrix: [317,726], gas: 53000},
		{id: 22, transform: 'translate(764.7,1447.901)', d: 'm 0,0 -12.6,20.7 28.5,18.72 5.34,3.78 8.28,4.8 12.3,-20.94 z', planeId: '791', matrix: [785,1465], gas: 53000},
		{id: 23, transform: 'translate(275.94,745.061)', d: 'M 0,0 -2.04,2.7 -10.74,15.12 24.9,34.26 34.86,18.6 Z', planeId: '916', matrix: [295,755], gas: 53000},
		{id: 24, transform: 'translate(391.14,1093.001)', d: 'M 0,0 19.86,12.78 32.34,-7.56 12.48,-20.64 Z', planeId: '316', matrix: [410,1080], gas: 53000},
		{id: 25, transform: 'translate(567.12,1263.461)', d: 'M 0,0 -12.72,20.16 8.28,33.54 20.76,13.5 Z', planeId: '510', matrix: [575,1273], gas: 53000},
		{id: 26, transform: 'translate(332.82,617.561)', d: 'M 0,0 -11.52,21.24 16.56,31.02 29.04,12.48 Z', planeId: '946', matrix: [347,625], gas: 50000},
		{id: 27, transform: 'translate(152.58,822.641)', d: 'M 0,0 -7.62,12.72 43.32,39.78 53.04,26.7 Z', planeId: '932', matrix: [185,837], gas: 53000},
		{id: 28, transform: 'translate(809.1,1184.861)', d: 'M 0,0 -20.58,30.3 -0.9,43.14 19.86,12.9 Z', planeId: '685', matrix: [810,1200], gas: 53000},
		{id: 29, transform: 'translate(554.4,1283.621)', d: 'M 0,0 -12.36,20.46 8.04,33.96 21,13.38 Z', planeId: '509', matrix: [564,1292], gas: 53000},
		{id: 30, transform: 'translate(389.04,1148.681)', d: 'M 0,0 -12.78,20.04 3.3,38.46 20.16,12.54 Z', planeId: '320', matrix: [395,1158], gas: 53000},
		{id: 31, transform: 'translate(471.3,1115.981)', d: 'M 0,0 -12.84,20.28 7.38,33.54 20.04,12.96 Z', planeId: '370', matrix: [480,1125], gas: 53000},
		{id: 32, transform: 'translate(586.08,1333.541)', d: 'M 0,0 19.86,12.6 7.32,32.58 -12.36,19.92 Z', planeId: '563', matrix: [593,1343], gas: 53000},
		{id: 33, transform: 'translate(529.2,1324.661)', d: 'm 0,0 -9.96,15.84 -1.14,8.76 27.12,29.94 h 4.56 l 6.3,-8.22 13.32,-20.34 z', planeId: '561', matrix: [550,1348], gas: 53000},
		{id: 34, transform: 'translate(194.64,754.181)', d: 'M 0,0 -7.68,13.68 48,38.88 49.14,37.44 57.96,21.24 1.74,0.78 Z', planeId: '927', matrix: [230,767], gas: 53000},
		{id: 35, transform: 'translate(573.72,1353.521)', d: 'M 0,0 -21.6,33.84 -5.82,50.58 19.68,12.6 Z', planeId: '562', matrix: [575,1367], gas: 53000},
		{id: 36, transform: 'translate(265.2,760.181)', d: 'M 0,0 -1.44,1.68 -12.6,15.24 26.04,34.5 35.64,19.14 Z', planeId: '915', matrix: [285,772], gas: 53000},
		{id: 37, transform: 'translate(669.24,1499.261)', d: 'm 0,0 36.66,28.86 3.72,-1.8 12.6,-19.5 -41.64,-25.2 z', planeId: '786', matrix: [703,1499], gas: 53000},
		{id: 38, transform: 'translate(185.7,877.481)', d: 'M 0,0 -0.3,0.42 -4.62,-1.44 -14.16,12 -9.84,13.8 29.88,36.9 38.94,22.02 Z', planeId: '907', matrix: [205,887], gas: 53000},
		{id: 39, transform: 'translate(420.96,611.621)', d: 'M 0,0 -13.2,19.98 6.96,33.3 20.16,13.26 Z', planeId: '16', matrix: [430,622], gas: 53000},
		{id: 40, transform: 'translate(294.48,851.261)', d: 'm 0,0 -20.34,-13.38 13.2,-20.16 20.04,13.68 z', planeId: '6', matrix: [295,833], gas: 3000},
		{id: 41, transform: 'translate(313.32,777.881)', d: 'M 0,0 -13.08,20.4 7.26,33.42 20.4,13.2 Z', planeId: '8', matrix: [323,790], gas: 0},
		{id: 42, transform: 'translate(313.32,777.881)', d: 'M 0,0 20.16,12.9 33,-7.26 13.8,-19.44 11.46,-18.9 Z', planeId: '9', matrix: [335,770], gas: 0},
		{id: 43, transform: 'translate(420.72,1046.801)', d: 'M 0,0 -13.2,19.62 5.64,32.46 8.28,31.14 19.86,12.96 Z', planeId: '315', matrix: [430,1056], gas: 3000},
		{id: 44, transform: 'translate(582.84,1086.701)', d: 'M 0,0 -8.28,12.6 -16.62,25.26 3.6,38.46 22.2,9.42 Z', planeId: '450', matrix: [592,1096], gas: 3000},
		{id: 45, transform: 'translate(315.36,599.381)', d: 'M 0,0 -19.98,31.32 5.94,39.42 19.86,13.74 Z', planeId: '947', matrix: [320,615], gas: 3000},
		{id: 46, transform: 'translate(734.46,1343.501)', d: 'M 0,0 -12.66,20.46 7.86,33.48 20.22,13.02 Z', planeId: '724', matrix: [744,1353], gas: 3000},
		{id: 47, transform: 'translate(878.82,1174.001)', d: 'M 0,0 3.6,2.46 9.18,6 20.76,13.14 33.3,-7.2 12.6,-20.04 Z', planeId: '745', matrix: [898,1164], gas: 3000},
		{id: 48, transform: 'translate(721.8,1363.961)', d: 'M 0,0 -12.06,20.1 7.92,32.88 20.52,13.02 Z', planeId: '725', matrix: [731,1373], gas: 3000},
		{id: 49, transform: 'translate(751.8,1468.661)', d: 'M 0,0 -12.06,20.34 7.98,30.96 18.96,12.78 Z', planeId: '789', matrix: [761,1475], gas: 3000},
		{id: 50, transform: 'translate(368.04,983.681)', d: 'M 0,0 -13.26,20.28 6.9,33.66 19.92,13.44 Z', planeId: '200', matrix: [378,993], gas: 3000},
		{id: 51, transform: 'translate(800.1,1292.201)', d: 'm 0,0 -12.06,18.78 -0.18,1.8 19.38,12.6 12.96,-22.56 z', planeId: '738', matrix: [810,1300], gas: 3000},
		{id: 52, transform: 'translate(361.92,580.901)', d: 'M 0,0 -1.38,1.38 -10.44,17.16 14.82,27.96 26.34,9.6 Z', planeId: '953', matrix: [375,586], gas: 3000},
		{id: 53, transform: 'translate(842.82,1178.381)', d: 'M 0,0 -13.86,19.38 6.18,32.4 19.56,12.48 Z', planeId: '716', matrix: [852,1185], gas: 3000},
		{id: 54, transform: 'translate(612.72,943.481)', d: 'M 0,0 -13.2,20.76 6.9,33.78 18.6,14.64 18.3,12.06 Z', planeId: '398', matrix: [622,950], gas: 3000},
		{id: 55, transform: 'translate(434.28,828.221)', d: 'M 0,0 -12.9,19.62 6.84,32.64 20.04,13.02 Z', planeId: '184', matrix: [444,835], gas: 3000},
		{id: 56, transform: 'translate(727.5,1452.641)', d: 'M 0,0 -13.32,20.58 7.92,34.02 20.88,13.62 Z', planeId: '784', matrix: [737,1462], gas: 3000},
		{id: 57, transform: 'translate(599.52,964.241)', d: 'M 0,0 13.2,-20.76 -5.46,-33 l -1.68,-0.06 -12.6,20.22 z', planeId: '379', matrix: [599,940], gas: 3000},
		{id: 58, transform: 'translate(170.7,1011.821)', d: 'M 0,0 14.1,16.14 33.3,-2.04 18,-19.74 Z', planeId: '870', matrix: [190,1000], gas: 3000},
		{id: 59, transform: 'translate(714.18,1330.481)', d: 'M 0,0 -12.54,20.1 7.62,33.48 20.28,13.02 Z', planeId: '678', matrix: [722,1340], gas: 3000},
		{id: 60, transform: 'translate(233.88,806.021)', d: 'M 0,0 -10.5,13.86 28.32,34.38 37.98,19.44 Z', planeId: '912', matrix: [255,816], gas: 3000},
		{id: 61, transform: 'translate(279.78,617.381)', d: 'M 0,0 19.02,-30.3 35.34,-17.7 15.6,13.32 5.88,9.42 2.94,7.68 1.26,5.88 Z', planeId: '949', matrix: [300,600], gas: 3000},
		{id: 62, transform: 'translate(852.96,1212.881)', d: 'm 0,0 -13.92,20.64 22.2,13.44 12,-20.94 z', planeId: '742', matrix: [862,1222], gas: 3000},
		{id: 63, transform: 'translate(448.32,1250.801)', d: 'm 0,0 -6.6,11.76 0.12,1.8 0.72,1.44 1.8,2.46 26.46,28.8 3.06,-1.56 2.34,-2.16 14.58,-20.4 -19.8,-13.02 -3.48,3.06 z', planeId: '457A', matrix: [475,1265], gas: 3000},
		{id: 64, transform: 'translate(400.92,1033.961)', d: 'M 0,0 19.8,12.84 32.94,-7.14 13.02,-19.92 Z', planeId: '265', matrix: [420,1020], gas: 3000},
		{id: 65, transform: 'translate(649.44,1233.221)', d: 'M 0,0 -15.24,23.1 -24.84,38.82 -4.92,51.84 7.44,31.5 19.68,11.22 2.22,-0.42 Z', planeId: '567', matrix: [653,1250], gas: 3000},
		{id: 66, transform: 'translate(144.96,835.361)', d: 'M 0,0 50.94,27 40.44,42.54 -11.52,19.92 Z', planeId: '933', matrix: [174,852], gas: 3000},
	]

	map_data = showAll(map_data);

	function clickPlane(id){
        console.log(id);
    }

	function showGasBtn(){
		map_data = showHasGas(map_data);
    }

	function showGasPrBtn(){
		map_data = showHasGasPr(map_data);
    }

	function showAllBtn(){
		map_data = showAll(map_data);
    }

	function showHasGas(mass){
		for (const item of mass){
			if(item.gas > 3000){
				item['fill'] = '#91ff96';
			}else{
				item['fill'] = '#e2e2e2';
			}
		}
		return mass
    }

	function showHasGasPr(mass){
		for (const item of mass){
			if(item.gas > 0){
				item['fill'] = '#91ff96';
			}else{
				item['fill'] = '#e2e2e2';
			}
		}
		return mass
    }

	function showAll(mas){
		for (const item of mas){
			item['fill'] = '#e2e2e2';
		}
		return mas
    }
</script>

<svelte:head>
	<title>Карта</title>
</svelte:head>

<div class="map">

	<div class="filterPlans">
		<div class="filterPlansBtn" title="Показать все учатки" on:click={showAllBtn}>Все участки</div>
		<div class="filterPlansBtn" title="Показать участки, оплатившие за газопровод" on:click={showGasBtn}>Газификация</div>
		<div class="filterPlansBtn" title="Показать участки, оплатившие за газопровод" on:click={showGasPrBtn}>Газ проект</div>
	</div>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 2245.3333 1588"
	height="1588"
	width="2245.3333"
	xml:space="preserve"
	id="svg2"
	version="1.1"
>

	<g class="maing">

		{#each map_data as plane}
			<g
				id="{plane.id}"
				class="plane"
				transform="{plane.transform}"
				style="fill: {plane.fill}"
				on:click={() => clickPlane(plane.planeId)}
			>
				<path
					d="{plane.d}" 
				/>
			</g>
			<text 
				class="textPlane" 
				transform="matrix(0,1,1,0,{plane.matrix[0]},{plane.matrix[1]})"
				on:click={() => clickPlane(plane.planeId)}
			>
				{plane.planeId}
			</text>
		{/each}
	
		<g
		transform="translate(472.02,1305.041)"
		id="g94"><path
		id="path96"
		style="fill:none;stroke:#ff00ff;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
		d="m 0,0 88.44,-135.24 45.42,29.46 132.72,86.52 -116.94,183.72 z" /></g>
		
		<g
		transform="translate(739.14,1613.801)"
		id="g138"><path
		id="path140"
		style="fill:none;stroke:#ff00ff;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
		d="m 0,0 8.52,-19.74 11.46,-26.76 112.98,-196.32 23.58,-46.86 23.22,-47.52 57.66,-100.5 1.68,-6.18 21.12,-36.3 -17.16,-8.82 9.72,-15.84 83.58,-136.26 -48.6,164.76 L 171.36,-221.4 87.9,20.94 Z" /></g>
		
		<g
		transform="translate(983.22,812.861)"
		id="g358"><path
		id="path360"
		style="fill:none;stroke:#ff00ff;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
		d="m 0,0 30.18,17.28 88.5,101.04 -26.4,41.52 -83.58,136.26 -9.72,15.84 17.16,8.82 -21.12,36.3 -1.68,6.18 L -169.26,257.1 -8.7,11.7 Z" /></g>
		
		<g
		transform="translate(727.62,1013.561)"
		id="g602"><path
		id="path604"
		style="fill:none;stroke:#ff00ff;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
		d="m 0,0 248.94,162.54 -57.66,100.5 -23.22,47.52 -23.58,46.86 -133.5,-85.2 -132.72,-86.52 z" /></g>
		
		<g
		transform="translate(504.12,868.721)"
		id="g646"><path
		id="path648"
		style="fill:none;stroke:#ff00ff;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
		d="M 0,0 177.54,114.78 223.5,144.84 101.76,330.54 56.34,301.08 -121.02,186.3 Z" /></g>
		
		<g
		transform="translate(803.94,793.241)"
		id="g674"><path
		id="path676"
		style="fill:none;stroke:#ff00ff;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
		d="m 0,0 -4.56,-8.58 -5.88,-10.92 97.56,-13.62 92.16,52.74 -8.7,11.7 -160.56,245.4 -86.34,-56.4 -45.96,-30.06 z" /></g>
		
		<g
		transform="translate(173.82,970.721)"
		id="g726"><path
		id="path728"
		style="fill:none;stroke:#ff00ff;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
		d="m 0,0 298.2,334.32 149.64,164.46 107.76,81.48 29.7,16.32 -11.46,26.76 -8.52,19.74 -164.4,-39.66 -28.26,-38.7 -29.04,-32.7 -25.26,-28.5 L 289.2,472.98 251.88,427.74 229.92,401.52 187.5,349.74 131.22,283.56 89.28,233.7 73.56,214.08 8.64,136.14 -29.46,90.12 -72,40.08 -49.38,30.42 Z" />
			<g
			transform="translate(29.94,-31.56)"
			id="g730"><path
			id="path732"
			style="fill:none;stroke:#ff00ff;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
			d="M 0,0 179.34,115.86 356.7,230.64 268.26,365.88 -29.94,31.56 Z" />
				<g
				transform="translate(120.72,-186.54)"
				id="g734"><path
				id="path736"
				style="fill:none;stroke:#ff00ff;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
				d="M 0,0 179.64,116.1 58.62,302.4 -120.72,186.54 Z" /></g>
			</g>
		</g>
		
		<g
		transform="translate(341.76,500.741)"
		id="g794"><path
		id="path796"
		style="fill:none;stroke:#ff00ff;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
		d="m 0,0 117.42,41.28 -15,23.94 -119.7,186.66 -120.72,186.54 -29.94,31.56 -49.38,30.42 -22.62,9.66 -24.54,-28.86 -11.58,-13.92 -11.1,-12.24 10.92,-11.34 45.48,-70.62 68.58,-106.2 42.54,-66.84 101.76,-171.6 z" /></g>
		
		<g
		transform="translate(444.18,565.961)"
		id="g834"><path
		id="path836"
		style="fill:none;stroke:#ff00ff;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
		d="M 0,0 91.02,58.5 179.76,116.7 59.94,302.76 -119.7,186.66 Z" /></g>	

		<g
		transform="translate(752.88,280.121)"
		id="g866"><path
		id="path868"
		style="fill:none;stroke:#ff00ff;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
		d="m 0,0 11.7,45 10.5,28.02 36,128.1 -76.02,258.9 58.44,33.6 5.88,10.92 4.56,8.58 -49.44,-28.38 -40.5,-23.82 -90.06,-58.38 -88.74,-58.2 L -23.52,39.6 Z" /></g>	
		
		<g
		transform="translate(687.3,188.921)"
		id="g890"><path
		id="path892"
		style="fill:none;stroke:#ff00ff;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
		d="m 0,0 25.98,-31.32 39.6,122.52 -23.52,39.6 -194.16,304.74 -91.02,-58.5 15,-23.94 199.2,-305.76 z" /></g>
		
		<g
		transform="translate(711.84,47.321)"
		id="g938"><path
		id="path940"
		style="fill:none;stroke:#ff00ff;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
		d="m 0,0 40.68,61.02 -39.24,49.26 -25.98,31.32 -28.92,47.34 -199.2,305.76 -117.42,-41.28 25.92,-42.9 39.3,-61.38 58.8,-96.66 51.84,-78.36 43.98,-63.42 51.3,-34.08 z" /></g>
	
	</g>
</svg>

</div>

<style lang="scss">
.map{
	position: relative;
	width: 100%;
	height: auto;
	overflow: auto;
}

.filterPlans{
	position: fixed;
	z-index: 10;
	top: 120px;
	left: 20px;
	width: 200px;
	box-sizing: border-box;
	padding: 10px;
	background-color: #fff;
	border: 1px solid rgba(0,0,0,0.1);
}

.filterPlansBtn{
	display: block;
	text-align: center;
	color: #fff;
	padding: 5px;
	font-size: 12px;
	margin: 5px 0;
	cursor: pointer;
	background-color: #6aaf08;
	border-radius: 5px;
}

.maing{
	transform: matrix(0,1.3333333,1.3333333,0,0,0);
}

.plane{
	cursor: pointer;
}

.plane path{
	stroke: #000000;
	stroke-width: 0.25;
}

.plane:hover path{
	fill: #ff8a4a;
}

.textPlane{
	font-size: 10px; 
	font-family: Arial;
	cursor: pointer;
}
</style>