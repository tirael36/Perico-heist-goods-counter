// var currLang = "en_US";
function updateLanguage(currLang) {
	// currLang = $("#languageSwitch option")[$("#languageSwitch")[0].selectedIndex].value;
    $("body > div.credentials > h3").html(langCayoPerico[currLang].auth_name);
    $("body > div.credentials > h5:nth-child(2)").html(langCayoPerico[currLang].W_I_P);
    $("body > div.credentials > h5:nth-child(3)").html(langCayoPerico[currLang].report_issue);
    $("body > div.credentials > h5:nth-child(4)").html(langCayoPerico[currLang].support_dev);
    $("body > div.credentials > h5:nth-child(5)").html(langCayoPerico[currLang].and_others);
	
    $(".main-container [value='false']").html(langCayoPerico[currLang].sele_NO);
    $(".main-container [value='true']").html(langCayoPerico[currLang].sele_YES);
	
    $("#primaryTarget > [value='tequila']").html(langCayoPerico[currLang].main_tequ);
    $("#primaryTarget > [value='ruby_necklace']").html(langCayoPerico[currLang].main_ruby);
    $("#primaryTarget > [value='bearer_bonds']").html(langCayoPerico[currLang].main_bond);
    $("#primaryTarget > [value='madrazo_files']").html(langCayoPerico[currLang].main_file);
    $("#primaryTarget > [value='pink_diamond']").html(langCayoPerico[currLang].main_pink);
    $("#primaryTarget > [value='panther_statue']").html(langCayoPerico[currLang].main_tank);
	
    $("body > div.flex > div:nth-child(1) > div:nth-child(1) > label").html(langCayoPerico[currLang].sele_lang);
	
    $("body > div.flex > div:nth-child(1) > div:nth-child(2) > label").html(langCayoPerico[currLang].sele_hard);
    $("body > div.flex > div:nth-child(1) > div:nth-child(3) > label").html(langCayoPerico[currLang].sele_bonus);
    $("body > div.flex > div:nth-child(1) > div:nth-child(4) > label").html(langCayoPerico[currLang].sele_target);
    $("body > div.flex > div:nth-child(1) > div:nth-child(5) > label").html(langCayoPerico[currLang].sele_players);
    $("body > div.flex > div:nth-child(1) > div:nth-child(6) > label").html(langCayoPerico[currLang].sele_goldAlone);
	
    $("body > div.flex > div:nth-child(1) > div:nth-child(7) > label").html(langCayoPerico[currLang].sele_gold + langCayoPerico[currLang].secd_unit);
    $("body > div.flex > div:nth-child(1) > div:nth-child(8) > label").html(langCayoPerico[currLang].sele_cocaine + langCayoPerico[currLang].secd_unit);
    $("body > div.flex > div:nth-child(1) > div:nth-child(9) > label").html(langCayoPerico[currLang].sele_weed + langCayoPerico[currLang].secd_unit);
    $("body > div.flex > div:nth-child(1) > div:nth-child(10) > label").html(langCayoPerico[currLang].sele_paintings + langCayoPerico[currLang].secd_unit_paints);
    $("body > div.flex > div:nth-child(1) > div:nth-child(11) > label").html(langCayoPerico[currLang].sele_cash + langCayoPerico[currLang].secd_unit);
	
    $("#infoDisplay").parent().find("label").html(langCayoPerico[currLang].sele_profit);
		$("#infoDisplay [value='min']").html(langCayoPerico[currLang].secd_min);
		$("#infoDisplay [value='avg']").html(langCayoPerico[currLang].secd_avg);
		$("#infoDisplay [value='max']").html(langCayoPerico[currLang].secd_max);
	
	$("body > div.flex > div:nth-child(1) > h4").html(langCayoPerico[currLang].secd_title);
	$(".targets-names > div:nth-child(1)").html(langCayoPerico[currLang].list_name_target);
		$(".targets-names > div:nth-child(2)").html(langCayoPerico[currLang].sele_gold);
		$(".targets-names > div:nth-child(3)").html(langCayoPerico[currLang].sele_cocaine);
		$(".targets-names > div:nth-child(4)").html(langCayoPerico[currLang].sele_weed);
		$(".targets-names > div:nth-child(5)").html(langCayoPerico[currLang].sele_paintings);
		$(".targets-names > div:nth-child(6)").html(langCayoPerico[currLang].sele_cash);
	$(".targets-stacks > div:nth-child(1)").html(langCayoPerico[currLang].list_name_stacks);
	$(".targets-bags:first > div:nth-child(1)").html(langCayoPerico[currLang].list_name_full_bags);
	$(".targets-bags:last > div:nth-child(1)").html(langCayoPerico[currLang].list_name_fill_bags);
	
	
	$("#fencing-fee").parent().find("label").html(langCayoPerico[currLang].info_fencing);
	$("#pavel-fee").parent().find("label").html(langCayoPerico[currLang].info_pavel);
	$("#office-safe").parent().find("label").html(langCayoPerico[currLang].info_safe);
	$("#elite-challenge").parent().find("label").html(langCayoPerico[currLang].info_challenge);
	$("div.main-container.right > div.cuts > div:nth-child(1) > label").html(langCayoPerico[currLang].mber_a);
	$("div.main-container.right > div.cuts > div:nth-child(2) > label").html(langCayoPerico[currLang].mber_b);
	$("div.main-container.right > div.cuts > div:nth-child(3) > label").html(langCayoPerico[currLang].mber_c);
	$("div.main-container.right > div.cuts > div:nth-child(4) > label").html(langCayoPerico[currLang].mber_d);
	
	$("#fin-loot-value").parent().find("label").html(langCayoPerico[currLang].info_profit);
	
	$("div.main-container.right > div > p").html(langCayoPerico[currLang].info_order);
		
	$("#bags_fill").parent().find("label").html(langCayoPerico[currLang].info_bags);
	
	$("#reset-settings").html(langCayoPerico[currLang].conf_reset);
	$("#link-settings").html(langCayoPerico[currLang].conf_share);
	
	// $(".properties > p:nth-child(1)").html(langCayoPerico[currLang].note_a);
	$(".properties > p:nth-child(1)").html(langCayoPerico[currLang].foot_note);
	
	// Counter.getLoot();
}

var langCayoPerico = {
	en_US: {
		auth_name: "Created by: <a href='https://github.com/MichalD96' target='_blank'>Michal__d</a>",
		W_I_P: "Site build in progress ;)",
		report_issue: "Report all issues <a target='_blank' href='https://github.com/MichalD96/Perico-heist-goods-counter/issues/'>GitHub</a>",
		support_dev: "Support the project <a target='_blank' href='https://www.paypal.com/paypalme/Michald96'>PayPal</a>",
		and_others: "Translation+Tweaking: <a href='https://github.com/FelixAgairu' target='_blank'>FelixAgairu</a>",
		
		sele_NO: "No",
		sele_YES: "Yes",
		
		main_tequ: "Sinsimito Tequila",
		main_ruby: "Ruby Necklace",
		main_bond: "Bearer Bonds",
		main_file: "Madrazo Files",
		main_pink: "Pink Diamond",
		main_tank: "Panther Statue",
		sele_lang: "Language:",
		sele_hard: "Hard Mode:",
		sele_bonus: "Within 72h Honus:",
		sele_target: "Main Target:",
		sele_players: "Amount Of Players:",
		sele_goldAlone: "Collect Gold Alone?",
		sele_gold: "Gold",
		sele_cocaine: "Cocaine",
		sele_weed: "Weed",
		sele_paintings: "Paintings",
		sele_cash: "Cash",
		sele_profit: "Show Possible Profit In:",
		
		secd_unit: "Stacks",
		secd_unit_paints: "Frames",
		
		secd_min: "minimum",
		secd_avg: "Average",
		secd_max: "MAXIMUM",
		secd_title: "Secondary Targets Values:",
		list_name_target: "Target",
		list_name_stacks: "Stack Value",
		list_name_full_bags: "Full Bag",
		list_name_fill_bags: "Bag Fill %",
		
		info_fencing: '10% Fencing Fee',
		info_pavel: '2% Pavel Fee',
		info_safe: 'Office Safe Takes',
		info_challenge: 'Elite Challenge Per Player',
		mber_a: "Leader",
		mber_b: "Member 1",
		mber_c: "Member 2",
		mber_d: "Member 3",
		
		info_profit: 'Possible Profit',
		
		info_order: 'You can take (in profit order):',
		order_bags: " Bag(s)",
		order_cuts: " Cuts",
		order_clicks: " Clicks",
		
		info_bags: 'Bag(s) Total',
		
		conf_reset: "Reset Settings To Default",
		conf_share: "Copy Link With Settings",
				
		foot_note: "* - Value over amount of players is not a bug, in some specific cases you can pick up more than your bags capacity."
	},
	fr_FR: {
		auth_name: "Créé par : <a href='https://github.com/MichalD96' target='_blank'>Michal__d</a>",
		W_I_P: "Site en cours de construction ;)",
		report_issue: "Signaler les problèmes sur <a target='_blank' href='https://github.com/MichalD96/Perico-heist-goods-counter/issues/'>GitHub</a>",
		support_dev: "Soutenir le projet via <a target='_blank' href='https://www.paypal.com/paypalme/Michald96'>PayPal</a>",
		and_others: "Traduction & ajustements : <a href='https://github.com/FelixAgairu' target='_blank'>FelixAgairu</a>",
		sele_NO: "Non",
		sele_YES: "Oui",
		main_tequ: "Tequila Sinsimito",
		main_ruby: "Collier en rubis",
		main_bond: "Obligations au porteur",
		main_file: "Fichiers Madrazo",
		main_pink: "Diamant rose",
		main_tank: "Statue panthère",
		sele_lang: "Langue :",
		sele_hard: "Mode difficile :",
		sele_bonus: "Bonus sous 72 h :",
		sele_target: "Cible principale :",
		sele_players: "Nombre de joueurs :",
		sele_goldAlone: "Prendre l’or en solo ?",
		sele_gold: "Or",
		sele_cocaine: "Cocaïne",
		sele_weed: "Weed",
		sele_paintings: "Tableaux",
		sele_cash: "Argent",
		sele_profit: "Afficher le profit possible en :",
		secd_unit: " piles",
		secd_unit_paints: " cadres",
		secd_min: "minimum",
		secd_avg: "moyenne",
		secd_max: "MAXIMUM",
		secd_title: "Valeurs des cibles secondaires :",
		list_name_target: "Cible",
		list_name_stacks: "Valeur d’une pile",
		list_name_full_bags: "Sac plein",
		list_name_fill_bags: "Remplissage du sac %",
		info_fencing: "Commission du receleur [10 %] :",
		info_pavel: "Commission de Pavel [2 %] :",
		info_safe: "Coffre du bureau :",
		info_challenge: "Défi élite : $ par joueur*",
		mber_a: "Chef",
		mber_b: "Membre 1",
		mber_c: "Membre 2",
		mber_d: "Membre 3",
		info_profit: "Profit maximum possible :",
		info_order: "Vous pouvez prendre (par ordre de profit) :",
		order_bags: " sac(s)",
		order_cuts: " coupes",
		order_clicks: " clics",
		info_bags: "Total des sacs :",
		conf_reset: "Réinitialiser les paramètres",
		conf_share: "Copier le lien avec les paramètres",
		foot_note: "* - Une valeur supérieure au nombre de joueurs n’est pas un bug : dans certains cas, on peut ramasser plus que la capacité du sac."
	},
	es_ES: {
		auth_name: "Creado por: <a href='https://github.com/MichalD96' target='_blank'>Michal__d</a>",
		W_I_P: "Sitio en construcción ;)",
		report_issue: "Reporta los problemas en <a target='_blank' href='https://github.com/MichalD96/Perico-heist-goods-counter/issues/'>GitHub</a>",
		support_dev: "Apoya el proyecto vía <a target='_blank' href='https://www.paypal.com/paypalme/Michald96'>PayPal</a>",
		and_others: "Traducción y ajustes: <a href='https://github.com/FelixAgairu' target='_blank'>FelixAgairu</a>",
		sele_NO: "No",
		sele_YES: "Sí",
		main_tequ: "Tequila Sinsimito",
		main_ruby: "Collar de rubí",
		main_bond: "Bonos al portador",
		main_file: "Archivos Madrazo",
		main_pink: "Diamante rosa",
		main_tank: "Estatua de pantera",
		sele_lang: "Idioma:",
		sele_hard: "Modo difícil:",
		sele_bonus: "Bono en 72 h:",
		sele_target: "Objetivo principal:",
		sele_players: "Número de jugadores:",
		sele_goldAlone: "¿Recoger oro en solitario?",
		sele_gold: "Oro",
		sele_cocaine: "Cocaína",
		sele_weed: "Marihuana",
		sele_paintings: "Cuadros",
		sele_cash: "Dinero",
		sele_profit: "Mostrar la ganancia posible en:",
		secd_unit: " pilas",
		secd_unit_paints: " cuadros",
		secd_min: "mínimo",
		secd_avg: "promedio",
		secd_max: "MÁXIMO",
		secd_title: "Valores de objetivos secundarios:",
		list_name_target: "Objetivo",
		list_name_stacks: "Valor por pila",
		list_name_full_bags: "Bolsa llena",
		list_name_fill_bags: "% de llenado",
		info_fencing: "Comisión del perista [10%]:",
		info_pavel: "Comisión de Pavel [2%]:",
		info_safe: "Caja fuerte de la oficina:",
		info_challenge: "Desafío élite: $ por jugador*",
		mber_a: "Líder",
		mber_b: "Miembro 1",
		mber_c: "Miembro 2",
		mber_d: "Miembro 3",
		info_profit: "Ganancia máxima posible:",
		info_order: "Puedes llevar (por orden de ganancia):",
		order_bags: " bolsa(s)",
		order_cuts: " cortes",
		order_clicks: " clics",
		info_bags: "Total de bolsas:",
		conf_reset: "Restablecer ajustes",
		conf_share: "Copiar enlace con ajustes",
		foot_note: "* - Un valor superior al número de jugadores no es un bug: en algunos casos se puede recoger más que la capacidad de la bolsa."
	},
	de_DE: {
		auth_name: "Erstellt von: <a href='https://github.com/MichalD96' target='_blank'>Michal__d</a>",
		W_I_P: "Seite im Aufbau ;)",
		report_issue: "Probleme melden auf <a target='_blank' href='https://github.com/MichalD96/Perico-heist-goods-counter/issues/'>GitHub</a>",
		support_dev: "Projekt unterstützen via <a target='_blank' href='https://www.paypal.com/paypalme/Michald96'>PayPal</a>",
		and_others: "Übersetzung & Feinschliff: <a href='https://github.com/FelixAgairu' target='_blank'>FelixAgairu</a>",
		sele_NO: "Nein",
		sele_YES: "Ja",
		main_tequ: "Sinsimito-Tequila",
		main_ruby: "Rubinkette",
		main_bond: "Inhaberschuldverschreibungen",
		main_file: "Madrazo-Dateien",
		main_pink: "Rosa Diamant",
		main_tank: "Panther-Statue",
		sele_lang: "Sprache:",
		sele_hard: "Schwerer Modus:",
		sele_bonus: "Bonus innerhalb 72 Std.:",
		sele_target: "Hauptziel:",
		sele_players: "Anzahl Spieler:",
		sele_goldAlone: "Gold alleine einsammeln?",
		sele_gold: "Gold",
		sele_cocaine: "Kokain",
		sele_weed: "Gras",
		sele_paintings: "Gemälde",
		sele_cash: "Bargeld",
		sele_profit: "Möglichen Gewinn anzeigen in:",
		secd_unit: " Stapel",
		secd_unit_paints: " Rahmen",
		secd_min: "Minimum",
		secd_avg: "Durchschnitt",
		secd_max: "MAXIMUM",
		secd_title: "Werte der Nebenbeute:",
		list_name_target: "Ziel",
		list_name_stacks: "Wert pro Stapel",
		list_name_full_bags: "Volle Tasche",
		list_name_fill_bags: "Taschenfüllung %",
		info_fencing: "Hehlergebühr [10%]:",
		info_pavel: "Pavel-Gebühr [2%]:",
		info_safe: "Bürosafe:",
		info_challenge: "Elite-Herausforderung: $ pro Spieler*",
		mber_a: "Anführer",
		mber_b: "Mitglied 1",
		mber_c: "Mitglied 2",
		mber_d: "Mitglied 3",
		info_profit: "Maximal möglicher Gewinn:",
		info_order: "Du kannst nehmen (nach Gewinn):",
		order_bags: " Tasche(n)",
		order_cuts: " Schnitte",
		order_clicks: " Klicks",
		info_bags: "Taschen gesamt:",
		conf_reset: "Einstellungen zurücksetzen",
		conf_share: "Link mit Einstellungen kopieren",
		foot_note: "* - Wert über der Spieleranzahl ist kein Bug: In manchen Fällen kann man mehr als die Taschenkapazität einsammeln."
	},
	fi_FI: {
		auth_name: "Tekijä: <a href='https://github.com/MichalD96' target='_blank'>Michal__d</a>",
		W_I_P: "Sivusto rakenteilla ;)",
		report_issue: "Ilmoita ongelmista <a target='_blank' href='https://github.com/MichalD96/Perico-heist-goods-counter/issues/'>GitHubissa</a>",
		support_dev: "Tue projektia <a target='_blank' href='https://www.paypal.com/paypalme/Michald96'>PayPalin</a> kautta",
		and_others: "Käännös & hienosäätö: <a href='https://github.com/FelixAgairu' target='_blank'>FelixAgairu</a>",
		sele_NO: "Ei",
		sele_YES: "Kyllä",
		main_tequ: "Sinsimito-tequila",
		main_ruby: "Rubiinikaulakoru",
		main_bond: "Haltijavelkakirjat",
		main_file: "Madrazon tiedostot",
		main_pink: "Pinkki timantti",
		main_tank: "Pantteripatsas",
		sele_lang: "Kieli:",
		sele_hard: "Vaikea tila:",
		sele_bonus: "Bonus 72 h sisällä:",
		sele_target: "Pääkohde:",
		sele_players: "Pelaajien määrä:",
		sele_goldAlone: "Kerää kulta yksin?",
		sele_gold: "Kulta",
		sele_cocaine: "Kokaiini",
		sele_weed: "Kannabis",
		sele_paintings: "Taideteokset",
		sele_cash: "Käteinen",
		sele_profit: "Näytä mahdollinen tuotto muodossa:",
		secd_unit: " pinoa",
		secd_unit_paints: " kehystä",
		secd_min: "minimi",
		secd_avg: "keskiarvo",
		secd_max: "MAKSIMI",
		secd_title: "Toissijaisten kohteiden arvot:",
		list_name_target: "Kohde",
		list_name_stacks: "Arvo / pino",
		list_name_full_bags: "Täysi laukku",
		list_name_fill_bags: "Laukun täyttö %",
		info_fencing: "Aitausmaksu [10%]:",
		info_pavel: "Pavel-maksu [2%]:",
		info_safe: "Toimiston kassakaappi:",
		info_challenge: "Elite-haaste: $ per pelaaja*",
		mber_a: "Johtaja",
		mber_b: "Jäsen 1",
		mber_c: "Jäsen 2",
		mber_d: "Jäsen 3",
		info_profit: "Suurin mahdollinen tuotto:",
		info_order: "Voit ottaa (tuottojärjestyksessä):",
		order_bags: " laukkua",
		order_cuts: " leikkausta",
		order_clicks: " klikkausta",
		info_bags: "Laukkuja yhteensä:",
		conf_reset: "Palauta oletusasetukset",
		conf_share: "Kopioi linkki asetuksilla",
		foot_note: "* - Arvo yli pelaajamäärän ei ole bugi: tietyissä tilanteissa voi kerätä enemmän kuin laukun kapasiteetti."
	},
	zh_CN: {
		auth_name: "作者：<a href='https://github.com/MichalD96' target='_blank'>Michal__d</a>",
		W_I_P: "网站正在建设中 ;)",
		report_issue: "报告问题：<a target='_blank' href='https://github.com/MichalD96/Perico-heist-goods-counter/issues/'>GitHub</a>",
		support_dev: "支持开发者：<a target='_blank' href='https://www.paypal.com/paypalme/Michald96'>PayPal</a>",
		and_others: "翻译+调整：<a href='https://github.com/FelixAgairu' target='_blank'>FelixAgairu</a>",
		
		sele_NO: "否",
		sele_YES: "是",
		
		main_tequ: "西西米托龙舌兰",
		main_ruby: "红宝石项链",
		main_bond: "不记名债券",
		main_file: "马德拉索文件",
		main_pink: "粉钻",
		main_tank: "黑豹雕像",
		
		sele_lang: "语言：",
		sele_hard: "困难模式：",
		sele_bonus: "72小时奖励：",
		sele_target: "主要目标：",
		sele_players: "玩家数量：",
		sele_goldAlone: "独自收黄金？",
		sele_gold: "黄金",
		sele_cocaine: "可卡因",
		sele_weed: "大麻",
		sele_paintings: "画",
		sele_cash: "现金",
		sele_profit: "预计收益显示：",
		
		secd_unit: "堆",
		secd_unit_paints: "幅",
		
		secd_min: "最小值",
		secd_avg: "平均值",
		secd_max: "最大值",
		secd_title: "次要目标价值：",
		list_name_target: "目标",
		list_name_stacks: "堆/幅 价值",
		list_name_full_bags: "装满整包",
		list_name_fill_bags: "包填充率",
		
		info_fencing: '10%倒卖费用',
		info_pavel: '2%帕维尔费用',
		info_safe: '办公室保险柜获取',
		info_challenge: '每位玩家精英挑战奖励',
		mber_a: "队长",
		mber_b: "成员1",
		mber_c: "成员2",
		mber_d: "成员3",
		
		info_profit: '预计收益',
		
		info_order: '可以拾取（按收益排序）：',
		order_bags: " 战利品包",
		order_cuts: "切割",
		order_clicks: "点击",
		
		info_bags: '战利品包总数',
		
		conf_reset: "恢复默认设置",
		conf_share: "复制带设置的链接",
		
		foot_note: "* - 价值超过玩家数量不是BUG，特定情况下，可拾取超过你背包容量的东西。"
	}
}
