/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'entypo\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-phone' : '&#xe000;',
			'icon-mobile' : '&#xe001;',
			'icon-mouse' : '&#xe002;',
			'icon-directions' : '&#xe003;',
			'icon-mail' : '&#xe004;',
			'icon-paperplane' : '&#xe005;',
			'icon-pencil' : '&#xe006;',
			'icon-feather' : '&#xe007;',
			'icon-paperclip' : '&#xe008;',
			'icon-drawer' : '&#xe009;',
			'icon-reply' : '&#xe00a;',
			'icon-reply-all' : '&#xe00b;',
			'icon-forward' : '&#xe00c;',
			'icon-user' : '&#xe00d;',
			'icon-users' : '&#xe00e;',
			'icon-user-add' : '&#xe00f;',
			'icon-vcard' : '&#xe010;',
			'icon-export' : '&#xe011;',
			'icon-location' : '&#xe012;',
			'icon-map' : '&#xe013;',
			'icon-compass' : '&#xe014;',
			'icon-location-2' : '&#xe015;',
			'icon-tools' : '&#xe016;',
			'icon-cog' : '&#xe017;',
			'icon-flag' : '&#xe018;',
			'icon-link' : '&#xe019;',
			'icon-bell' : '&#xe01a;',
			'icon-printer' : '&#xe01b;',
			'icon-flashlight' : '&#xe01c;',
			'icon-popup' : '&#xe01d;',
			'icon-house' : '&#xe01e;',
			'icon-quote' : '&#xe01f;',
			'icon-comment' : '&#xe020;',
			'icon-chat' : '&#xe021;',
			'icon-thumbs-down' : '&#xe022;',
			'icon-thumbs-up' : '&#xe023;',
			'icon-star' : '&#xe024;',
			'icon-star-2' : '&#xe025;',
			'icon-heart' : '&#xe026;',
			'icon-heart-2' : '&#xe027;',
			'icon-sharable' : '&#xe028;',
			'icon-share' : '&#xe029;',
			'icon-target' : '&#xe02a;',
			'icon-trophy' : '&#xe02b;',
			'icon-tag' : '&#xe02c;',
			'icon-camera' : '&#xe02d;',
			'icon-megaphone' : '&#xe02e;',
			'icon-moon' : '&#xe02f;',
			'icon-palette' : '&#xe030;',
			'icon-leaf' : '&#xe031;',
			'icon-music' : '&#xe032;',
			'icon-music-2' : '&#xe033;',
			'icon-new' : '&#xe034;',
			'icon-graduation' : '&#xe035;',
			'icon-book' : '&#xe036;',
			'icon-newspaper' : '&#xe037;',
			'icon-bag' : '&#xe038;',
			'icon-airplane' : '&#xe039;',
			'icon-lifebuoy' : '&#xe03a;',
			'icon-eye' : '&#xe03b;',
			'icon-clock' : '&#xe03c;',
			'icon-microphone' : '&#xe03d;',
			'icon-calendar' : '&#xe03e;',
			'icon-bolt' : '&#xe03f;',
			'icon-thunder' : '&#xe040;',
			'icon-droplet' : '&#xe041;',
			'icon-cd' : '&#xe042;',
			'icon-briefcase' : '&#xe043;',
			'icon-air' : '&#xe044;',
			'icon-hourglass' : '&#xe045;',
			'icon-gauge' : '&#xe046;',
			'icon-language' : '&#xe047;',
			'icon-network' : '&#xe048;',
			'icon-key' : '&#xe049;',
			'icon-battery' : '&#xe04a;',
			'icon-bucket' : '&#xe04b;',
			'icon-magnet' : '&#xe04c;',
			'icon-drive' : '&#xe04d;',
			'icon-cup' : '&#xe04e;',
			'icon-rocket' : '&#xe04f;',
			'icon-brush' : '&#xe050;',
			'icon-suitcase' : '&#xe051;',
			'icon-cone' : '&#xe052;',
			'icon-earth' : '&#xe053;',
			'icon-keyboard' : '&#xe054;',
			'icon-browser' : '&#xe055;',
			'icon-publish' : '&#xe056;',
			'icon-progress-3' : '&#xe057;',
			'icon-progress-2' : '&#xe058;',
			'icon-brogress-1' : '&#xe059;',
			'icon-progress-0' : '&#xe05a;',
			'icon-sun' : '&#xe05b;',
			'icon-sun-2' : '&#xe05c;',
			'icon-adjust' : '&#xe05d;',
			'icon-code' : '&#xe05e;',
			'icon-screen' : '&#xe05f;',
			'icon-infinity' : '&#xe060;',
			'icon-light-bulb' : '&#xe061;',
			'icon-credit-card' : '&#xe062;',
			'icon-database' : '&#xe063;',
			'icon-voicemail' : '&#xe064;',
			'icon-clipboard' : '&#xe065;',
			'icon-cart' : '&#xe066;',
			'icon-box' : '&#xe067;',
			'icon-ticket' : '&#xe068;',
			'icon-rss' : '&#xe069;',
			'icon-signal' : '&#xe06a;',
			'icon-thermometer' : '&#xe06b;',
			'icon-droplets' : '&#xe06c;',
			'icon-untitled' : '&#xe06d;',
			'icon-statistics' : '&#xe06e;',
			'icon-pie' : '&#xe06f;',
			'icon-bars' : '&#xe070;',
			'icon-graph' : '&#xe071;',
			'icon-lock' : '&#xe072;',
			'icon-lock-open' : '&#xe073;',
			'icon-logout' : '&#xe074;',
			'icon-login' : '&#xe075;',
			'icon-checkmark' : '&#xe076;',
			'icon-cross' : '&#xe077;',
			'icon-erase' : '&#xe080;',
			'icon-blocked' : '&#xe081;',
			'icon-info' : '&#xe082;',
			'icon-cycle' : '&#xe087;',
			'icon-cw' : '&#xe088;',
			'icon-ccw' : '&#xe089;',
			'icon-shuffle' : '&#xe08a;',
			'icon-arrow' : '&#xe08b;',
			'icon-arrow-2' : '&#xe08c;',
			'icon-retweet' : '&#xe08d;',
			'icon-loop' : '&#xe08e;',
			'icon-history' : '&#xe08f;',
			'icon-back' : '&#xe090;',
			'icon-switch' : '&#xe091;',
			'icon-list' : '&#xe092;',
			'icon-add-to-list' : '&#xe093;',
			'icon-layout' : '&#xe094;',
			'icon-list-2' : '&#xe095;',
			'icon-text' : '&#xe096;',
			'icon-text-2' : '&#xe097;',
			'icon-document' : '&#xe098;',
			'icon-docs' : '&#xe099;',
			'icon-landscape' : '&#xe09a;',
			'icon-pictures' : '&#xe09b;',
			'icon-video' : '&#xe09c;',
			'icon-music-3' : '&#xe09d;',
			'icon-folder' : '&#xe09e;',
			'icon-archive' : '&#xe09f;',
			'icon-trash' : '&#xe0a0;',
			'icon-upload' : '&#xe0a1;',
			'icon-download' : '&#xe0a2;',
			'icon-disk' : '&#xe0a3;',
			'icon-install' : '&#xe0a4;',
			'icon-cloud' : '&#xe0a5;',
			'icon-upload-2' : '&#xe0a6;',
			'icon-bookmark' : '&#xe0a7;',
			'icon-bookmarks' : '&#xe0a8;',
			'icon-book-2' : '&#xe0a9;',
			'icon-play' : '&#xe0aa;',
			'icon-pause' : '&#xe0ab;',
			'icon-record' : '&#xe0ac;',
			'icon-stop' : '&#xe0ad;',
			'icon-next' : '&#xe0ae;',
			'icon-previous' : '&#xe0af;',
			'icon-first' : '&#xe0b0;',
			'icon-last' : '&#xe0b1;',
			'icon-resize-enlarge' : '&#xe0b2;',
			'icon-resize-shrink' : '&#xe0b3;',
			'icon-volume' : '&#xe0b4;',
			'icon-sound' : '&#xe0b5;',
			'icon-mute' : '&#xe0b6;',
			'icon-flow-cascade' : '&#xe0b7;',
			'icon-flow-branch' : '&#xe0b8;',
			'icon-flow-tree' : '&#xe0b9;',
			'icon-flow-line' : '&#xe0ba;',
			'icon-flow-parallel' : '&#xe0bb;',
			'icon-github' : '&#xe0ee;',
			'icon-flickr' : '&#xe0f0;',
			'icon-vimeo' : '&#xe0f2;',
			'icon-twitter' : '&#xe0f4;',
			'icon-facebook' : '&#xe0f6;',
			'icon-googleplus' : '&#xe0f9;',
			'icon-pinterest' : '&#xe0fb;',
			'icon-linkedin' : '&#xe0ff;',
			'icon-stumbleupon' : '&#xe103;',
			'icon-lastfm' : '&#xe105;',
			'icon-rdio' : '&#xe107;',
			'icon-spotify' : '&#xe109;',
			'icon-qq' : '&#xe10a;',
			'icon-skype' : '&#xe110;',
			'icon-plus' : '&#xe07f;',
			'icon-minus' : '&#xe07e;',
			'icon-question' : '&#xe084;',
			'icon-tumblr' : '&#xe0fd;',
			'icon-dribbble' : '&#xe101;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};