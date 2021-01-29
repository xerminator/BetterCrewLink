import intersect from 'path-intersection';

export enum MapType {
	THE_SKELD,
	MIRA_HQ,
	POLUS,
	UNKNOWN,
}

export interface Vector2 {
	x: number;
	y: number;
}

export enum CameraLocation {
	East,
	Central,
	Northeast,
	South,
	SouthWest,
	NorthWest,
	Skeld,
	NONE,
}

export interface CamerasMap {
	[cameraLoc: number]: Vector2;
}

interface AmongUsMap {
	cameras: CamerasMap;
}

export const PolusMap: AmongUsMap = {
	cameras: {
		[CameraLocation.East]: { x: 29, y: -15.7 },
		[CameraLocation.Central]: { x: 15.4, y: -15.4 },
		[CameraLocation.Northeast]: { x: 24.4, y: -8.5 },
		[CameraLocation.South]: { x: 17, y: -20.6 },
		[CameraLocation.SouthWest]: { x: 4.7, y: -22.73 },
		[CameraLocation.NorthWest]: { x: 11.6, y: -8.2 },
	},
};

export const SkeldMap: AmongUsMap = {
	cameras: {
		[0]: { x: 13.2417, y: -4.348 },
		[1]: { x: 0.6216, y: -6.5642 },
		[2]: { x: -7.1503, y: 1.6709 },
		[3]: { x: -17.8098, y: -4.8983 },
	},
};

// East: 29, -15.7
// Central: 15.4, -15.4
// Northeast: 24.4, -8.5
// South: 17, -20.6
// Southwest: 4.7, -22.73
// Northwest: 11.6, -8.2


export const colliderMaps: { [key in MapType]: string[] | undefined } = {
	[MapType.THE_SKELD]: [
		'M 38.575423,44.398703 36.353734,44.375313 33.898182,41.943051 33.886492,39.604333 H 31.793427 L 31.781747,40.317644 33.196613,40.352684 33.184933,42.808334 34.892127,44.562373 34.927187,45.720038 29.875767,45.708378 29.09233,44.702733 V 40.32933 L 30.285027,40.36437 30.296707,39.615982 25.420686,39.604312 V 41.568832 L 24.111058,41.557172 24.122738,44.153146 25.759773,44.082956 25.771453,42.92529 26.695208,42.036581 27.618966,42.059971 28.320549,42.77328 28.297169,47.158371 25.748074,47.193411 25.771454,45.88373 24.111035,45.95394 24.134405,48.70193 25.432337,48.67854 25.444017,50.292253 28.835015,50.257213 28.870075,53.063671 29.957531,53.122101 V 46.912812 L 34.927097,46.877772 34.938787,48.035435 33.687629,49.22818 33.722689,51.297943 32.693695,52.210046 H 31.325603 L 31.372343,53.098753 35.008902,53.063713 34.985522,49.672573 36.552402,48.222572 38.540225,48.199182 Z',
		'M 40.067838,44.383854 40.084378,45.814257 46.84779,45.789467 46.83949,49.320001 45.979594,50.171628 41.986039,50.179928 V 47.600241 L 40.092615,47.575451 40.067825,48.23691 40.93599,48.2617 40.92769,50.849656 H 46.938692 L 46.946992,50.64295 47.947448,49.56808 47.997058,49.57638 48.600639,49.53504 48.608939,45.020587 50.899238,45.061927 50.932308,43.871302 47.60848,43.854762 47.62502,44.970973 44.044876,44.962673 44.061416,43.598415 45.591038,42.019183 V 41.61404 L 47.600218,41.65538 47.616758,42.02745 48.575873,42.01915 48.608943,40.828525 H 48.054958 L 46.980089,39.82807 V 39.563486 L 44.830349,39.522146 V 41.903396 L 42.39121,44.41694 Z',
		'M 35.892382,33.436718 33.908007,35.338411 33.899707,37.686588 H 25.433041 L 25.424741,36.471158 H 22.076095 L 20.88547,37.562565 20.87717,41.564387 22.60523,41.556087 22.64657,44.144043 21.158289,44.094433 21.141749,42.672297 19.636931,42.721907 19.595591,41.02692 18.669549,41.03522 16.974562,42.11009 16.982862,47.823436 18.644777,48.840428 19.645232,48.865218 19.612162,47.195035 21.166589,47.261185 21.141789,45.913464 22.646606,45.921764 22.663146,48.658548 H 20.827599 L 20.811059,52.80093 22.084366,53.702167 25.432999,53.718707 25.416459,52.040256 27.409102,52.073326 27.450442,54.917597 34.999336,54.867987 35.024126,55.165643 37.107813,57.224414 40.952539,57.199604 V 52.61901 L 44.243294,52.63555 44.259834,53.495446 C 44.259834,53.495446 41.481709,53.429296 41.489977,53.462376 41.498277,53.495446 41.523047,56.19916 41.523047,56.19916 L 42.506966,57.166543 C 42.506966,57.166543 45.342969,57.133473 45.376042,57.150003 45.409112,57.166543 46.417839,56.18262 46.417839,56.18262 L 46.426139,53.495446 45.797753,53.454106 V 52.643819 H 46.971842 L 46.988382,54.677804 49.295218,54.636464 51.453226,52.577675 51.428416,49.559772 H 50.113768 L 50.097228,46.880865 52.428868,46.864325 V 45.218947 L 55.36409,45.177607 55.37239,46.525329 57.158327,46.550129 58.721023,45.260286 58.754093,43.391666 57.141788,42.077017 55.380655,42.043947 55.364115,43.399937 52.420625,43.383397 V 42.052213 L 50.105521,42.060513 50.080711,40.836815 51.428432,40.820275 51.453242,37.827176 49.295234,35.735314 46.98013,35.760124 46.95532,37.69489 44.879995,37.73623 44.855185,36.272753 41.977842,33.445019 Z',
	],
	[MapType.MIRA_HQ]: [
		'M 62.718433,18.48407 62.696841,23.385803 58.950362,23.375006 58.928767,21.906645 58.810003,21.885052 58.799205,23.806877 58.810003,27.639729 62.740029,31.526567 64.132811,31.537365 64.175996,33.739904 H 68.883389 L 68.948169,39.494584 68.906834,40.28329 66.627632,40.235087 66.562083,40.352 H 68.899199 L 68.894187,42.323337 60.224381,42.312539 60.235176,43.327436 57.827497,43.424607 57.773514,40.401512 57.881482,40.304341 60.699438,40.325934 60.65625,40.185575 57.816702,40.271951 57.805904,38.274548 58.820801,38.242157 58.766815,38.188175 57.751921,38.220565 57.784311,33.772295 60.915372,33.750702 60.92617,38.134189 59.878883,38.177377 59.911273,38.242157 61.012545,38.29614 V 33.739904 L 62.005847,33.729107 57.741123,29.475181 53.379229,33.772295 53.50879,33.869466 53.4764,35.337826 53.551976,35.327029 53.562773,33.761497 57.05013,33.772295 V 37.4324 L 53.551976,37.389212 V 36.406706 L 53.50879,36.395911 53.465602,39.030322 53.551976,38.997932 V 37.464791 L 57.060927,37.497181 57.039332,41.902263 53.551976,41.891465 53.541181,40.109999 53.454805,40.163982 V 41.880668 L 43.651339,41.826685 43.672931,42.312539 33.966636,42.334132 33.945044,39.624145 M 33.945044,39.624145 H 33.232457 L 33.25405,35.607746 37.864272,35.569956 37.891262,39.624145 37.232658,39.63494 37.243456,40.423105 43.818688,40.40691 43.81329,39.726713 51.219875,39.721316 51.23607,36.363521 51.117306,36.385113 51.106509,39.543169 48.283153,39.553964 43.824088,39.521574 43.851078,37.011326 44.979341,37.016724 45.011731,36.854772 45.017131,30.203962 40.099202,30.187767 40.061414,30.085199 40.056014,23.434388 44.871375,23.407396 44.898365,29.081097 44.963146,29.0757 44.984741,24.800179 47.149493,24.794781 47.219671,25.512766 47.257459,24.762391 52.06742,24.767789 52.09981,30.144579 47.322239,30.160775 47.268256,30.133784 47.273654,26.565452 47.187281,26.57085 47.171086,30.80858 47.192678,36.995131 48.315543,36.989731 48.288551,33.772295 51.084916,33.7561 51.122704,35.337826 51.176687,35.316234 V 31.515769 L 52.688235,31.526567 56.499495,27.823276 56.531885,23.321022 52.763814,23.375006 52.709828,20.006414 52.699033,18.527256 53.50879,18.494866 56.402324,18.538053 56.445512,22.446484 56.510292,22.42489 56.521087,18.473273 57.179691,18.51646 57.147301,18.376102 52.688235,18.386898 52.677438,17.350409 54.404921,15.914438 56.002843,15.029103 56.942161,14.813168 58.45371,14.888745 59.706136,15.234242 61.120511,16.054796 62.470109,17.188457 62.767299,17.7466 62.696841,18.397695 H 58.313351 L 58.345741,18.451679 58.78841,18.484069 58.810003,20.826968 58.874784,20.816172 58.896376,18.462476 62.718435,18.48407',
	],
	[MapType.POLUS]: [
		'M 54.122079,60.018712 V 61.455286 L 54.50628,61.421877 54.439462,63.77719 53.403793,64.979904 49.728836,65.096834 49.778948,61.388468 52.384827,61.338356 52.401532,60.068827',
		'M 51.349158,48.225445 51.315749,47.674201 41.677341,47.807837 41.643932,49.996105 41.994724,50.079626 H 41.627229 V 52.585278 L 44.600603,52.668802 44.567194,57.663399 H 44.299922 L 44.283219,55.057521 43.314368,54.038558 40.274176,54.071966 40.286706,57.717689 42.545968,57.730217 42.537617,60.494786 42.537615,57.742746 40.286706,57.755273 40.274177,60.39456 40.875534,60.419617 40.265825,60.457201 40.274176,62.181926 42.813237,62.206983 40.274176,62.240389 40.257473,64.812859 44.500376,64.796156 44.508729,61.739261 45.268776,61.755965',
		'M 46.7054 61.7894 L 47.0478 61.781 V 57.772 L 46.4798 57.7636 L 46.4882 53.4873 L 47.908 53.466 M 48.4259 50.0963 L 51.3742 50.0963',
		'M 46.4882 53.4873 V 52.6521 H 46.6803 V 50.51 H 46.9599',
		'M 43.456354,50.096332 H 44.608953 L 44.600603,52.668802',
		'M 50.179853,59.267018 50.196557,54.62321 53.370384,54.639915 53.387088,57.529764 51.783469,57.546468 51.766765,59.267018',
		'M 54.357701,46.278458 54.334076,43.46726 54.168711,43.278274 V 39.474888 L 55.727864,38.718937 57.664992,38.695312 59.365885,39.380395 59.436756,43.490885 59.129649,43.656249 59.20052,46.254836',
		'M 57.357885,49.774739 H 62.862166 V 52.751301 H 58.562686 V 51.452009 H 57.263392',
		'M 68.796846,57.490092 V 57.746923 L 65.62021,57.717394 65.153738,57.723299 65.555338,57.771299 65.55049,59.619057 61.911784,59.642763 61.955475,62.179145 61.969662,59.642763 65.556387,59.646642 65.558291,63.157459 H 66.972655 V 59.271391 H 73.669921 V 58.928849 L 74.851098,57.747675 H 78.193825 V 50.885044 L 72.616904,50.872642 72.604502,50.487328 72.624999,48.383945 75.516876,48.379798 75.53266,49.500238 75.571889,48.372036 75.659456,48.365698 72.626033,48.35914 72.629892,48.079308 72.601523,48.355887 72.236471,48.370193 72.604226,48.381551 72.571429,50.486987 64.893787,50.495255 V 50.129093',
		'M 57.446243,60.553253 57.454595,59.667921 57.955726,59.634512 55.809218,59.651217 55.814173,57.73119 56.654127,57.724188 55.820079,57.689849 55.788337,55.170276 63.485236,55.176677 63.50602,57.659222 62.98827,57.721917 63.769865,57.721365 63.533164,57.66131 63.529531,55.176648 68.796846,55.166101 68.821902,55.934501',
		'M 57.437892,62.19863 V 62.632944 H 59.584399 V 59.65957 H 59.392301 60.327743 59.601105 V 65.43092 L 60.528195,65.447624 60.603365,63.418048 60.595012,65.447624 62.808339,65.455976 V 62.850101 H 63.292764',
		'M 57.997486,57.74024 61.58725,57.716853',
		'M 62.93776,65.385155 65.480239,65.372752 65.455434,64.930403 65.889517,64.934536 68.688312,64.926267 V 60.854166 H 73.711262 L 75.087921,62.230825 H 78.217447 L 79.397737,61.050537 V 58.886327 L 79.986848,58.142187 V 50.866145 L 81.227082,50.849609 81.196481,48.426732 H 77.13315 L 81.202328,48.36242 81.254946,45.84257 H 77.103916 L 77.086377,44.907125 75.753369,44.895433 75.741677,45.655481 75.045942,44.901281 73.210133,44.91882 72.648867,45.509317 72.566111,45.921744 68.78753,45.888671 68.795799,48.302994 70.788442,48.294726 V 48.410481 L 67.435676,48.439419 67.415004,48.327799 68.692447,48.294726 68.688312,45.901072 64.967609,45.917609 64.95934,48.327799 66.083819,48.319531 66.096223,48.422882 64.963476,48.435286 64.95934,48.637856 64.851853,48.65026 64.860122,46.012695 64.649283,45.979622 64.624478,46.293815 64.516991,46.343424 64.558333,43.46608 64.938671,42.978255 64.905598,42.498697 64.566601,42.1597 63.921679,42.134895 63.54134,42.523502 63.483463,42.969986 63.640559,43.292447 63.847265,43.457812 63.888606,46.35996',
	],
	[MapType.UNKNOWN]: undefined,
};

export function poseCollide(p1: Vector2, p2: Vector2, map: MapType): boolean {
	const colliderMap = colliderMaps[map];
	if (!colliderMap || map === MapType.UNKNOWN) {
		return false;
	}
	for (const collider of colliderMap) {
		const intersections = intersect(collider, `M ${p1.x + 40} ${40 - p1.y} L ${p2.x + 40} ${40 - p2.y}`);
		if (intersections.length > 0){
			console.log(intersections)
			return true;
		} 
	}

	return false;
}  