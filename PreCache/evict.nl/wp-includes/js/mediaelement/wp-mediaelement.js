bplist00���X$versionX$objectsY$archiverT$top ���-/56<=>\]^_`abcdefghijklmnopqrstxy}�������U$null�	
V$classR$0__NSURLResponseTypeR$1_%_CFCachedURLResponseReceiverDataArray__NSDictionaryType[_NSDataType�,� �'� � �	 
!"#$%&'()*+,-.R$6S$10R$2R$7R$3S$11R$8R$4R$9R$5�	�	��#�&��$��0	134WNS.base[NS.relative� ��_Hhttp://evict.nl/wp-includes/js/mediaelement/wp-mediaelement.js?ver=4.4.1�789:Z$classnameX$classesUNSURL�9;XNSObject#A�a�G8����?@	AN[WNS.keysZNS.objects�BCDEFGHIJKLM�
������������OPQRSTUVWXYZ����������� �!�"\Content-Type]X-Proxy-Cache]Accept-Ranges_Content-EncodingVServerTDate[Host-Header^Content-LengthZConnectionTEtagTVary]Last-Modified_application/javascriptTMISSUbytesTgzipUnginx_Wed, 03 Feb 2016 08:18:15 GMT_ 192fc2e7e50945beb8231a492d6a8024S662Zkeep-alive_"a856023-601-52759b4b6ba40"_Accept-Encoding_Sun, 20 Dec 2015 19:52:01 GMT�78uv\NSDictionary�w;\NSDictionary�	z{|YNS.string�%_application/javascript�78~_NSMutableString���;_NSMutableStringXNSString�78��_NSHTTPURLResponse���;_NSHTTPURLResponse]NSURLResponse�@	������(�*�+ҍ	��WNS.dataO@/* global mejs, _wpmejsSettings */
(function( window, $ ) {

	window.wp = window.wp || {};

	// add mime-type aliases to MediaElement plugin support
	mejs.plugins.silverlight[0].types.push('video/x-ms-wmv');
	mejs.plugins.silverlight[0].types.push('audio/x-ms-wma');

	function wpMediaElement() {
		var settings = {};

	�)�78��]NSMutableData���;]NSMutableDataVNSDataҍ	��O�	/**
		 * Initialize media elements.
		 *
		 * Ensures media elements that have already been initialized won't be
		 * processed again.
		 *
		 * @since 4.4.0
		 */
		function initialize() {
			if ( typeof _wpmejsSettings !== 'undefined' ) {
				settings = _wpmejsSettings;
			}

			settings.success = settings.success || function (mejs) {
				var autoplay, loop;

				if ( 'flash' === mejs.pluginType ) {
					autoplay = mejs.attributes.autoplay && 'false' !== mejs.attributes.autoplay;
					loop = mejs.attributes.loop && 'false' !== mejs.attributes.loop;

					autoplay && mejs.addEventListener( 'canplay', function () {
						mejs.play();
					}, false );

					loop && mejs.addEventListener( 'ended', function () {
						mejs.play();
					}, false );
				}
			};

			// Only initialize new media elements.
			$( '.wp-audio-shortcode, .wp-video-shortcode' )
				.not( '.mejs-container' )
				.filter(function () {
					return ! $( this ).parent().hasClass( '.mejs-mediaelement' );
				})
				.mediaelementplayer( settings );
		}

		return {
			initialize: initialize
		};
	}

	window.wp.mediaelement = new wpMediaElement();

	$( document ).on( 'ready', window.wp.mediaelement.initialize );

})( window, jQuery );
�)�78��WNSArray��;�78��_NSCachedURLResponse��;_NSCachedURLResponse_NSKeyedArchiverѡ�Troot�    # - 2 7 g m | � � � � � � � � � � � � � �#&),/13579:<>@BDFHOWcegi�����������!#%')68:<>@BDFHJLNP]ky�������������%HLWu������������#,1EI]kpsuwy~���������
�
�
�
�
�
�
�
�"             �              $