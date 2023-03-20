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
		{id: 66, transform: 'translate(144.96,835.361)', d: 'M 0,0 50.94,27 40.44,42.54 -11.52,19.92 Z', planeId: '933', matrix: [174,852], gas: 53000},
		{id: 67, transform: 'translate(175.86,891.281)', d: 'm 0,0 -9.54,14.82 39.36,24 9.9,-15.72 z', planeId: '905', matrix: [200,906], gas: 0},
		{id: 68, transform: 'translate(195.9,862.421)', d: 'M 0,0 -10.2,15.06 28.74,37.08 38.58,22.02 21.72,12.18 Z', planeId: '908', matrix: [215,872], gas: 50000},
		{id: 69, transform: 'translate(205.62,849.341)', d: 'M 0,0 -9.72,13.08 12,25.26 28.86,35.1 37.92,20.1 28.44,15.06 23.88,12.6 Z', planeId: '909', matrix: [225,860], gas: 0},
		{id: 70, transform: 'translate(252.6,775.421)', d: 'm 0,0 -8.82,16.2 38.1,18.12 9.36,-15.06 z', planeId: '914', matrix: [272,785], gas: 0},
		{id: 71, transform: 'translate(286.5,729.521)', d: 'M 0,0 -3.06,4.02 -10.62,15.54 24.24,34.14 34.2,18.3 Z', planeId: '917', matrix: [300,737], gas: 0},
		{id: 72, transform: 'translate(303.48,701.561)', d: 'm 0,0 -1.2,2.28 -6.72,12.78 34.74,15.9 10.44,-15.9 z', planeId: '919', matrix: [323,709], gas: 0},
		{id: 73, transform: 'translate(311.76,685.901)', d: 'M 0,0 -8.28,15.66 28.98,30.72 39.18,14.88 37.5,12.9 Z', planeId: '920', matrix: [332,693], gas: 0},
		{id: 74, transform: 'translate(144.72,911.741)', d: 'm 0,0 -7.98,13.2 -12.96,21.48 0.84,0.9 6.24,7.08 L -1.32,23.58 7.8,33.42 26.58,14.58 12.72,7.68 Z', planeId: '937', matrix: [154,919], gas: 0},
		{id: 75, transform: 'translate(103.32,904.841)', d: 'M 0,0 -6.66,11.16 20.46,41.58 33.42,20.1 Z', planeId: '938', matrix: [125,920], gas: 0},
		{id: 76, transform: 'translate(84.96,935.561)', d: 'm 0,0 -8.04,15.18 31.86,36 6.06,3.54 7.2,-16.44 z', planeId: '937A', matrix: [107,955], gas: 0},
		{id: 77, transform: 'translate(115.68,883.601)', d: 'm 0,0 -3.72,6.42 -0.66,1.5 -7.98,13.32 33.42,20.1 7.98,-13.2 12.72,7.68 2.4,-3.3 6.48,-10.02 z', planeId: '936', matrix: [135,897], gas: 0},
		{id: 78, transform: 'translate(115.68,883.601)', d: 'M 0,0 50.64,22.5 60.18,7.68 26.28,-6.3 8.64,-13.92 Z', planeId: '935', matrix: [155,881], gas: 0},
		{id: 79, transform: 'translate(152.58,822.641)', d: 'M 0,0 -7.62,12.72 43.32,39.78 53.04,26.7 Z', planeId: '932', matrix: [182,835], gas: 0},
		{id: 80, transform: 'translate(133.44,855.281)', d: 'M 0,0 -9.12,14.4 8.52,22.02 38.1,34.2 47.64,20.76 Z', planeId: '934', matrix: [155,863], gas: 0},
		{id: 81, transform: 'translate(160.92,809.321)', d: 'm 0,0 -8.34,13.32 52.98,26.7 9.06,-15.3 z', planeId: '931', matrix: [190,821], gas: 0},
		{id: 82, transform: 'translate(168.9,797.261)', d: 'm 0,0 -7.98,12.06 53.7,24.72 8.76,-14.16 z', planeId: '930', matrix: [200,808], gas: 0},
		{id: 83, transform: 'translate(178.02,781.961)', d: 'M 0,0 -9.3,15.18 45.36,37.92 55.86,24.06 Z', planeId: '929', matrix: [205,793], gas: 0},
		{id: 84, transform: 'translate(186.96,767.861)', d: 'M 0,0 -8.94,14.1 46.86,38.16 55.68,25.2 Z', planeId: '928', matrix: [215,779], gas: 0},
		{id: 85, transform: 'translate(204.72,741.821)', d: 'M 0,0 -8.34,13.14 47.88,33.6 59.04,20.04 Z', planeId: '926', matrix: [224,746], gas: 0},
		{id: 86, transform: 'translate(210.96,726.161)', d: 'm 0,0 -8.22,14.34 1.98,1.32 59.04,20.04 1.44,-1.68 8.7,-12.42 z', planeId: '925', matrix: [250,738], gas: 0},
		{id: 87, transform: 'translate(221.82,708.881)', d: 'm 0,0 -10.86,17.28 62.94,21.6 2.04,-2.7 7.5,-11.52 z', planeId: '924', matrix: [245,718], gas: 0},
		{id: 88, transform: 'translate(231.12,694.541)', d: 'M 0,0 -9.3,14.34 52.32,39 55.38,34.92 62.64,23.58 Z', planeId: '923', matrix: [260,705], gas: 0},
		{id: 89, transform: 'translate(242.34,679.421)', d: 'M 0,0 -1.02,-0.54 -11.22,15.12 51.42,38.7 53.22,37.2 59.94,24.42 31.86,12.96 Z', planeId: '922', matrix: [270,690], gas: 0},
		{id: 90, transform: 'translate(281.34,675.941)', d: 'M 0,0 -7.14,16.44 20.94,27.9 22.14,25.62 30.42,9.96 22.86,8.82 Z', planeId: '921', matrix: [295,681], gas: 0},
		{id: 91, transform: 'translate(242.34,679.421)', d: 'm 0,0 9.54,-13.62 8.34,1.98 21.12,8.16 -7.2,16.44 z', planeId: '921A', matrix: [262,665], gas: 0},
		{id: 92, transform: 'translate(323.82,667.001)', d: 'M 0,0 -6.78,16.14 31.5,28.86 40.86,12.96 13.08,3.78 Z', planeId: '939A', matrix: [350,675], gas: 0},
		{id: 93, transform: 'translate(347.46,653.141)', d: 'M 0,0 -10.56,17.64 17.22,26.82 27.18,9.18 Z', planeId: '944', matrix: [360,657], gas: 0},
		{id: 94, transform: 'translate(271.92,628.901)', d: 'm 0,0 -16.86,28.98 3.72,4.2 17.22,6.48 6.54,-15.3 -0.54,-0.6 9.9,-18.18 z', planeId: '941', matrix: [278,640], gas: 0},
		{id: 95, transform: 'translate(291.9,634.481)', d: 'm 0,0 -9.9,18.18 0.54,0.6 3.66,1.26 22.92,7.74 L 28.2,9.42 Z', planeId: '942', matrix: [305,640], gas: 0},
		{id: 96, transform: 'translate(361.86,630.041)', d: 'M 0,0 -12.48,18.54 15.36,27.96 26.58,10.68 Z', planeId: '945', matrix: [375,637], gas: 0},
		{id: 97, transform: 'translate(373.32,613.061)', d: 'M 0,0 -11.46,16.98 15.12,27.66 26.82,10.44 Z', planeId: '951', matrix: [385,619], gas: 0},
		{id: 98, transform: 'translate(388.26,590.501)', d: 'M 0,0 -11.52,18.36 14.64,29.1 28.32,9.96 Z', planeId: '952', matrix: [400,597], gas: 0},
		{id: 99, transform: 'translate(340.38,605.081)', d: 'M 0,0 -5.16,8.04 -7.56,12.48 21.48,24.96 32.94,7.98 8.4,-3.12 4.44,3.06 Z', planeId: '950', matrix: [360,607], gas: 0},
		{id: 100, transform: 'translate(324.96,546.821)', d: 'M 0,0 -4.08,2.46 -24.72,36.24 -6.84,49.26 -3.96,44.88 9.96,23.64 19.92,6.42 Z', planeId: '955', matrix: [324,560], gas: 0},
		{id: 101, transform: 'translate(344.88,553.241)', d: 'm 0,0 -9.96,17.22 25.62,11.82 1.38,-1.32 11.1,-18.3 z', planeId: '956', matrix: [360,560], gas: 0},
		{id: 102, transform: 'translate(334.92,570.461)', d: 'm 0,0 -13.92,21.24 19.38,13.38 4.44,3.06 3.96,-6.18 2.7,-3.9 9.06,-15.78 z', planeId: '954', matrix: [344,580], gas: 0},
		{id: 103, transform: 'translate(348.36,505.241)', d: 'm 0,0 -20.46,32.82 0.96,2.4 18.6,8.1 13.2,-18.6 11.28,-17.04 z', planeId: '962', matrix: [355,515], gas: 0},
		{id: 104, transform: 'translate(371.94,512.921)', d: 'M 0,0 -11.28,17.04 15.36,27.6 27.48,9.42 Z', planeId: '963', matrix: [385,518], gas: 0},
		{id: 105, transform: 'translate(399.42,522.341)', d: 'M 0,0 -12.12,18.18 15.6,28.26 27.18,10.2 Z', planeId: '964', matrix: [410,527], gas: 0},
		{id: 106, transform: 'translate(426.6,532.541)', d: 'm 0,0 -11.58,18.06 26.94,9.48 10.02,-16.08 -3,-2.88 z', planeId: '965', matrix: [438,538], gas: 0},
		{id: 107, transform: 'translate(415.02,550.601)', d: 'm 0,0 -12.06,17.28 22.44,7.8 3.54,0.78 h 2.76 L 26.94,9.48 Z', planeId: '959', matrix: [430,557], gas: 0},
		{id: 108, transform: 'translate(387.3,540.521)', d: 'm 0,0 -11.22,17.64 27.24,9.78 11.7,-17.34 z', planeId: '960', matrix: [400,545], gas: 0},
		{id: 109, transform: 'translate(399.72,572.021)', d: 'M 0,0 -11.46,18.48 16.86,28.44 27.9,11.34 23.82,8.28 Z', planeId: '958', matrix: [415,578], gas: 0},
		{id: 110, transform: 'translate(373.02,562.661)', d: 'M 0,0 -11.1,18.24 15.24,27.84 26.7,9.36 Z', planeId: '957', matrix: [385,567], gas: 0},
		{id: 111, transform: 'translate(249.84,973.061)', d: 'M 0,0 -13.14,19.92 7.26,32.7 19.68,12.48 Z', planeId: '64', matrix: [258,984], gas: 0},
		{id: 112, transform: 'translate(236.7,992.981)', d: 'M 0,0 -15.72,24.12 1.2,43.26 7.98,33.96 20.4,12.78 Z', planeId: '63', matrix: [243,1005], gas: 0},
		{id: 113, transform: 'translate(269.52,985.541)', d: 'M 0,0 -12.48,20.22 7.26,33.36 19.32,14.64 20.22,12.36 Z', planeId: '127', matrix: [278,993], gas: 0},
		{id: 114, transform: 'translate(257.04,1005.761)', d: 'M 0,0 -12.36,21.18 6.84,33.66 19.74,13.14 Z', planeId: '128', matrix: [265,1012], gas: 0},
		{id: 115, transform: 'translate(243.24,1028.501)', d: 'M 0,0 -4.56,7.56 10.68,25.92 19.2,13.08 Z', planeId: '128A', matrix: [255,1032], gas: 0},
		{id: 116, transform: 'translate(293.94,1001.561)', d: 'M 0,0 -12.9,20.4 7.08,33.06 19.92,12.84 Z', planeId: '130', matrix: [300,1010], gas: 0},
		{id: 117, transform: 'translate(273,1045.241)', d: 'M 0,0 -6.42,9.06 24,38.4 34.86,23.34 15,9.72 Z', planeId: '195', matrix: [293,1057], gas: 0},
		{id: 118, transform: 'translate(301.02,1034.621)', d: 'm 0,0 -12.78,20.46 19.62,13.5 13.32,-21 z', planeId: '194', matrix: [311,1043], gas: 0},
		{id: 119, transform: 'translate(313.86,1014.401)', d: 'M 0,0 -12.84,20.22 7.32,33.18 17.76,16.38 19.2,12.36 Z', planeId: '193', matrix: [320,1024], gas: 0},
		{id: 120, transform: 'translate(337.98,1030.001)', d: 'M 0,0 -13.26,20.7 7.08,33.36 20.1,12.78 Z', planeId: '198', matrix: [345,1035], gas: 0},
		{id: 121, transform: 'translate(312,1070.201)', d: 'M 0,0 -12.42,17.7 6,34.14 19.92,13.2 Z', planeId: '196', matrix: [320,1080], gas: 0},
		{id: 122, transform: 'translate(331.92,1083.401)', d: 'm 0,0 -13.92,20.94 -7.86,11.7 13.56,16.44 4.98,-1.14 23.4,-35.16 z', planeId: '260', matrix: [335,1100], gas: 0},
		{id: 123, transform: 'translate(345.06,1063.361)', d: 'M 0,0 -13.14,20.04 7.02,32.82 19.62,12.78 Z', planeId: '259', matrix: [352,1073], gas: 0},
		{id: 124, transform: 'translate(358.08,1042.781)', d: 'M 0,0 -13.02,20.58 6.6,33.36 19.44,12.96 Z', planeId: '258', matrix: [365,1052], gas: 0},
		{id: 125, transform: 'translate(330.96,1141.121)', d: 'm 0,0 1.8,2.7 5.04,5.58 3.9,4.2 18.48,20.64 4.38,1.86 L 53.88,6.54 34.38,-7.02 13.98,-19.86 Z', planeId: '319', matrix: [360,1141], gas: 0},
		{id: 126, transform: 'translate(357.6,1099.421)', d: 'M 0,0 -12.66,21.78 7.74,34.68 20.52,13.26 Z', planeId: '261', matrix: [366,1107], gas: 0},
		{id: 127, transform: 'translate(370.14,1079.561)', d: 'M 0,0 -12.54,19.86 7.5,32.7 7.98,33.12 18.9,15.72 21,13.44 Z', planeId: '262', matrix: [379,1087], gas: 0},
		{id: 128, transform: 'translate(370.14,1079.561)', d: 'M 0,0 21,13.44 33.48,-7.2 13.56,-20.46 Z', planeId: '263', matrix: [393,1067], gas: 0},
		{id: 129, transform: 'translate(378.12,1112.681)', d: 'M 0,0 20.16,13.38 32.88,-6.9 13.02,-19.68 l -2.1,2.28 z', planeId: '317', matrix: [400,1100], gas: 0},
		{id: 130, transform: 'translate(365.34,1134.101)', d: 'M 0,0 19.56,13.5 32.94,-8.04 12.78,-21.42 Z', planeId: '318', matrix: [387,1122], gas: 0},
		{id: 131, transform: 'translate(401.88,1128.581)', d: 'M 0,0 -13.02,20.28 7.32,32.64 20.34,13.32 Z', planeId: '321', matrix: [411,1137], gas: 0},
		{id: 132, transform: 'translate(428.16,1088.141)', d: 'M 0,0 -13.02,20.04 6.6,33.06 19.56,12.48 Z', planeId: '323', matrix: [435,1095], gas: 0},
		{id: 133, transform: 'translate(447.72,1100.621)', d: 'M 0,0 -12.96,20.58 7.14,33.6 16.26,18.42 18.18,12.18 Z', planeId: '363', matrix: [455,1110], gas: 0},
		{id: 134, transform: 'translate(441.96,1154.561)', d: 'M 0,0 12.9,-20.34 -7.2,-33.3 -19.74,-12.66 Z', planeId: '364', matrix: [443,1130], gas: 0},
		{id: 135, transform: 'translate(422.22,1141.901)', d: 'M 0,0 -13.02,19.32 6.9,32.22 19.74,12.66 Z', planeId: '365', matrix: [432,1149], gas: 0},
		{id: 136, transform: 'translate(409.2,1161.221)', d: 'M 0,0 -16.86,25.92 -0.66,44.46 6.3,34.8 19.92,12.9 Z', planeId: '366', matrix: [417,1171], gas: 0},
		{id: 137, transform: 'translate(445.68,1156.481)', d: 'M 0,0 -12.72,20.28 7.68,33.24 20.4,12.66 Z', planeId: '368', matrix: [455,1166], gas: 0},
		{id: 138, transform: 'translate(432.96,1176.761)', d: 'M 0,0 -12.84,20.7 7.86,33.84 20.4,12.96 Z', planeId: '367', matrix: [442,1185], gas: 0},
		{id: 139, transform: 'translate(420.12,1197.461)', d: 'm 0,0 -12.96,21.48 -2.4,4.86 L 0.06,43.5 20.7,13.14 Z', planeId: '367A', matrix: [425,1205], gas: 0},
		{id: 140, transform: 'translate(420.18,1240.961)', d: 'm 0,0 14.1,15.72 4.2,0.66 22.14,-34.32 -19.8,-12.42 z', planeId: '411', matrix: [447,1220], gas: 0},
		{id: 141, transform: 'translate(453.3,1189.661)', d: 'M 0,0 -12.48,20.94 7.32,33.36 19.86,12.9 Z', planeId: '410', matrix: [463,1197], gas: 0},
		{id: 142, transform: 'translate(466.08,1169.141)', d: 'M 0,0 -12.72,20.58 7.08,33.36 20.1,13.74 Z', planeId: '409', matrix: [475,1177], gas: 0},
		{id: 143, transform: 'translate(478.68,1149.521)', d: 'M 0,0 -12.6,19.62 7.5,33.36 20.28,13.2 Z', planeId: '408', matrix: [488,1157], gas: 0},
		{id: 144, transform: 'translate(491.34,1128.881)', d: 'm 0,0 -12.72,20.64 20.1,12.9 10.86,-17.7 0.42,-2.4 -1.2,-2.28 z', planeId: '407', matrix: [500,1137], gas: 0},
		{id: 145, transform: 'translate(464.7,1225.541)', d: 'm 0,0 -16.38,25.32 19.2,12.06 3.48,-3 13.8,-20.7 z', planeId: '412', matrix: [470,1235], gas: 0},
		{id: 146, transform: 'translate(489.9,1185.041)', d: 'M 0,0 -12.18,20.58 7.8,33.54 20.52,13.2 Z', planeId: '414', matrix: [500,1193], gas: 0},
		{id: 147, transform: 'translate(502.62,1165.241)', d: 'M 0,0 -12.72,19.86 7.8,32.94 20.28,12.9 Z', planeId: '415', matrix: [512,1172], gas: 0},
		{id: 148, transform: 'translate(515.52,1145.621)', d: 'M 0,0 -12.84,19.5 7.38,32.52 19.86,12.36 Z', planeId: '416', matrix: [525,1152], gas: 0},
		{id: 149, transform: 'translate(535.38,1157.981)', d: 'M 0,0 -12.48,20.16 8.4,33.48 19.74,14.46 19.08,12.12 Z', planeId: '453', matrix: [545,1165], gas: 0},
		{id: 150, transform: 'translate(522.9,1178.141)', d: 'M 0,0 -12.48,20.1 7.62,33.54 20.88,13.32 Z', planeId: '454', matrix: [530,1185], gas: 0},
		{id: 151, transform: 'translate(497.7,1218.581)', d: 'M 0,0 19.92,12.78 32.82,-6.9 12.72,-20.4 Z', planeId: '455', matrix: [520,1207], gas: 0},
		{id: 152, transform: 'translate(497.7,1218.581)', d: 'M 0,0 -12.9,20.64 7.02,33 19.92,12.78 Z', planeId: '456', matrix: [505,1226], gas: 0},
		{id: 153, transform: 'translate(484.8,1239.221)', d: 'M 0,0 -13.8,20.7 6,33.66 19.92,12.36 Z', planeId: '457', matrix: [493,1245], gas: 0},
		{id: 154, transform: 'translate(497.04,1276.241)', d: 'M 0,0 -20.34,28.08 -4.14,46.5 20.58,11.94 Z', planeId: '458', matrix: [499,1290], gas: 0},
		{id: 155, transform: 'translate(510.66,1255.421)', d: 'M 0,0 -14.22,20.7 6.96,32.76 20.82,11.16 Z', planeId: '459', matrix: [518,1262], gas: 0},
		{id: 156, transform: 'translate(548.88,1194.881)', d: 'M 0,0 -13.2,19.86 7.38,31.38 18.42,12.78 Z', planeId: '462', matrix: [555,1202], gas: 0},
		{id: 157, transform: 'translate(581.22,1187.561)', d: 'M 0,0 -13.92,20.1 7.62,33 20.76,12.84 Z', planeId: '502', matrix: [590,1194], gas: 0},
		{id: 158, transform: 'translate(556.26,1226.261)', d: 'M 0,0 -12.66,19.8 7.56,34.5 19.68,14.52 Z', planeId: '504', matrix: [565,1236], gas: 0},
		{id: 159, transform: 'translate(531.48,1266.581)', d: 'M 0,0 -13.86,21.6 6.6,35.04 19.38,14.82 Z', planeId: '506', matrix: [540,1275], gas: 0},
		{id: 160, transform: 'translate(517.62,1288.181)', d: 'M 0,0 -24.9,34.5 -6.84,53.88 -3.9,52.08 20.46,13.44 Z', planeId: '507', matrix: [520,1305], gas: 0},
		{id: 161, transform: 'translate(626.16,1215.761)', d: 'M 0,0 -12.84,19.74 6.9,33.9 18.96,14.16 17.88,12 Z', planeId: '555', matrix: [635,1223], gas: 0},
		{id: 162, transform: 'translate(613.32,1235.501)', d: 'M 0,0 -11.76,20.4 7.62,34.02 19.74,14.16 Z', planeId: '556', matrix: [622,1244], gas: 0},
		{id: 163, transform: 'translate(587.88,1276.961)', d: 'M 0,0 -12.48,20.04 7.32,33.24 20.16,13.08 Z', planeId: '558', matrix: [595,1284], gas: 0},
		{id: 164, transform: 'translate(562.44,1317.581)', d: 'M 0,0 -12.48,20.46 6.96,33.06 19.8,12.9 Z', planeId: '560', matrix: [572,1327], gas: 0},
		{id: 165, transform: 'translate(624.6,1272.041)', d: 'M 0,0 -12.72,20.28 7.08,33.06 19.92,13.02 Z', planeId: '566', matrix: [634,1280], gas: 0},
		{id: 166, transform: 'translate(612.06,1292.381)', d: 'M 0,0 -13.44,21 6.48,33.66 19.62,12.72 Z', planeId: '565', matrix: [620,1300], gas: 0},
		{id: 167, transform: 'translate(598.62,1313.321)', d: 'M 0,0 -12.54,20.22 7.32,32.82 19.92,12.78 Z', planeId: '564', matrix: [606,1320], gas: 0},
		{id: 168, transform: 'translate(669.18,1244.381)', d: 'M 0,0 -12.3,20.34 7.44,33.18 17.52,16.2 18.3,11.82 Z', planeId: '610', matrix: [677,1252], gas: 0},
		{id: 169, transform: 'translate(656.88,1264.721)', d: 'M 0,0 -12.36,20.34 7.32,33.54 19.74,12.84 Z', planeId: '611', matrix: [666,1274], gas: 0},
		{id: 170, transform: 'translate(631.68,1305.161)', d: 'M 0,0 -13.14,20.94 7.5,33.24 20.34,12.9 Z', planeId: '613', matrix: [641,1315], gas: 0},
		{id: 171, transform: 'translate(618.54,1326.041)', d: 'M 0,0 -12.6,20.16 7.68,32.64 20.64,12.36 Z', planeId: '614', matrix: [628,1334], gas: 0},
		{id: 172, transform: 'translate(605.94,1346.201)', d: 'M 0,0 -12.54,19.92 6.96,32.58 20.28,12.54 Z', planeId: '615', matrix: [615,1353], gas: 0},
		{id: 173, transform: 'translate(567.9,1404.101)', d: 'M 0,0 12.9,14.1 18,13.44 27.36,2.94 45,-25.32 25.5,-37.98 Z', planeId: '616', matrix: [595,1380], gas: 0},
		{id: 174, transform: 'translate(597.36,1412.981)', d: 'm 0,0 -8.82,13.02 -0.54,1.74 32.82,33.9 3,-0.6 7.44,-11.46 z', planeId: '672A', matrix: [617,1430], gas: 0},
		{id: 175, transform: 'translate(604.62,1401.521)', d: 'm 0,0 -7.26,11.46 33.9,36.6 13.8,-21.6 z', planeId: '672', matrix: [630,1421], gas: 0},
		{id: 176, transform: 'translate(617.58,1381.781)', d: 'M 0,0 -12.96,19.74 7.68,32.94 20.16,12.12 Z', planeId: '617', matrix: [625,1389], gas: 0},
		{id: 177, transform: 'translate(630.48,1361.381)', d: 'M 0,0 -12.9,20.4 7.26,32.52 19.56,13.2 Z', planeId: '618', matrix: [640,1368], gas: 0},
		{id: 178, transform: 'translate(643.26,1341.101)', d: 'M 0,0 -12.78,20.28 6.78,33.48 19.92,12.9 Z', planeId: '619', matrix: [653,1348], gas: 0},
		{id: 179, transform: 'translate(655.5,1320.761)', d: 'M 0,0 -12.24,20.34 7.68,33.18 20.16,12.48 Z', planeId: '620', matrix: [665,1328], gas: 0},
		{id: 180, transform: 'translate(679.8,1280.021)', d: 'M 0,0 -11.58,20.34 8.34,33.9 21.42,13.26 Z', planeId: '622', matrix: [689,1288], gas: 0},
		{id: 181, transform: 'translate(692.16,1259.621)', d: 'M 0,0 -12.36,20.4 9.06,33.66 21.3,13.44 Z', planeId: '623', matrix: [702,1268], gas: 0},
		{id: 182, transform: 'translate(701.22,1293.281)', d: 'M 0,0 -13.08,20.64 7.44,33.6 19.68,13.26 Z', planeId: '666', matrix: [711,1303], gas: 0},
		{id: 183, transform: 'translate(688.14,1313.921)', d: 'M 0,0 -12.48,19.32 8.28,33.24 20.52,12.96 Z', planeId: '667', matrix: [698,1323], gas: 0},
		{id: 184, transform: 'translate(675.66,1333.241)', d: 'M 0,0 -12.48,20.7 7.74,34.32 20.76,13.92 Z', planeId: '668', matrix: [685,1340], gas: 0},
		{id: 185, transform: 'translate(650.04,1374.581)', d: 'M 0,0 13.14,-20.58 33.36,-7.02 20.88,12.9 20.28,12.66 Z', planeId: '669', matrix: [673,1362], gas: 0},
		{id: 186, transform: 'translate(650.04,1374.581)', d: 'M 0,0 -12.3,19.32 7.86,33 20.88,12.84 Z', planeId: '670', matrix: [660,1382], gas: 0},
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