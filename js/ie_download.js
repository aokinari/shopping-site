/*! 古いIEに対して、メッセージを出力する動きを実装 */
var userAgent = window.navigator.userAgent.toLowerCase();
var appVersion = window.navigator.appVersion.toLowerCase();
if( userAgent.match(/(msie|MSIE)/) || userAgent.match(/(T|t)rident/) ) {
	var isIE = true;
	var ieVersion = userAgent.match(/((msie|MSIE)\s|rv:)([\d\.]+)/)[3];
	ieVersion = parseInt(ieVersion);
} else {
	var isIE = false;
}
if (userAgent.indexOf('msie') != -1) if (appVersion.indexOf("msie 9.") != -1) {
document.write('<div style="padding:10px 0;background:#ffcfcf;opacity:0.75;border:1px solid #df8f90;text-align:center;font-size:1.5rem;width:100%;position:fixed;z-index:10000;">このウェブサイトを快適に閲覧するには<a href="http://windows.microsoft.com/ja-jp/internet-explorer/download-ie" target="_blank" style="color:#000;text-decoration:underline;">Microsoft</a>よりブラウザをアップグレードしてください。</div>');
}
if (userAgent.indexOf('msie') != -1) if (appVersion.indexOf("msie 8.") != -1) {
document.write('<div style="padding:10px 0;background:#ffcfcf;opacity:0.75;border:1px solid #df8f90;text-align:center;font-size:1.5rem;width:100%;position:fixed;z-index:10000;">このウェブサイトを快適に閲覧するには<a href="http://windows.microsoft.com/ja-jp/internet-explorer/download-ie" target="_blank" style="color:#000;text-decoration:underline;">Microsoft</a>よりブラウザをアップグレードしてください。</div>');
}
if (userAgent.indexOf('msie') != -1) if (appVersion.indexOf("msie 7.") != -1) {
document.write('<div style="padding:10px 0;background:#ffcfcf;opacity:0.75;border:1px solid #df8f90;text-align:center;font-size:1.5rem;width:100%;position:fixed;z-index:10000;">このウェブサイトを快適に閲覧するには<a href="http://windows.microsoft.com/ja-jp/internet-explorer/download-ie" target="_blank" style="color:#000;text-decoration:underline;">Microsoft</a>よりブラウザをアップグレードしてください。</div>');
}
if (userAgent.indexOf('msie') != -1) if (appVersion.indexOf("msie 6.") != -1) {
document.write('<div style="padding:10px 0;background:#ffcfcf;opacity:0.75;border:1px solid #df8f90;text-align:center;font-size:1.5rem;width:100%;position:fixed;z-index:10000;">このウェブサイトを快適に閲覧するには<a href="http://windows.microsoft.com/ja-jp/internet-explorer/download-ie" target="_blank" style="color:#000;text-decoration:underline;">Microsoft</a>よりブラウザをアップグレードしてください。</div>');
}
