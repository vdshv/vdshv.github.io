// JavaScript Document

//FriendzTech (Software and IT)

var ELEMENT_ID = "offermessage";
var CONTENT_ID = "content";

var ORDER_LINK_ID = "order-link";
var ELEMENT_ID_BOTTOM = "offer-message-bottom";


//dates MM/DD/YYYY
var fromDate = new Date("01/01/2011");
var toDate = new Date("12/31/2099");

// Message content - use #date# as replacement holder for actual date to be populated from the code.
var NOTE_MESSAGE = "Offer strictly limited to #date#, or the first 500 customers (whichever comes first).";
var EXPIRE_MESSAGE = "We are sorry - this offer expired on #date#. This offer is now closed.";
var OUTSIDE_MESSAGE = "ERROR: The offer date is outside of normal range.";
var INVALID_MESSAGE = "ERROR: Error in page request.";
/* 
*****************************************************************************
*/

function populateMessage(cont_id){
	
	if(cont_id != null)
	{
		CONTENT_ID = cont_id;
	}
	
	// Get teh encoded text.
	var strEncoded = getQuerystring("t");
	var objMsg = document.getElementById(ELEMENT_ID);
	var objMsgBottom = document.getElementById(ELEMENT_ID_BOTTOM);
	var objContent = document.getElementById(CONTENT_ID);
	var objOrderLink = document.getElementById(ORDER_LINK_ID);
	var strDecoded = decodeBase64(strEncoded);
	var dt = new Date(strDecoded);
	
	if (isNaN(dt)){
		objMsg.style.display = "inline";
		objMsgBottom.style.display = "inline";
		
		objContent.style.display = "none";
		objOrderLink.style.display = "none";
		
		objMsg.innerHTML = INVALID_MESSAGE;
		objMsgBottom.innerHTML = INVALID_MESSAGE;
	}else{
		var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
		strDecoded = months[dt.getMonth()] + ' ' + dt.getDate() + ', ' + dt.getFullYear();
		
		// Check if date is within normal date range defined.
		if (dt < fromDate || dt > toDate){
			objMsg.style.display = "inline";
			objMsg.innerHTML = OUTSIDE_MESSAGE;
			
			objMsgBottom.style.display = "inline";
			objMsgBottom.innerHTML = OUTSIDE_MESSAGE;

		}else{
			// Check if it has been expired or not - offer date has exceeded current date.
			var curDate = new Date();
			curDate = new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate(), 0, 0, 0, 0);
			if (curDate > dt){
				objMsg.style.display = "inline";
				objMsgBottom.style.display = "inline";
				objContent.style.display = "none";
				objOrderLink.style.display = "none";
				objMsg.innerHTML = EXPIRE_MESSAGE.replace(/#date#/gi, strDecoded);
				objMsgBottom.innerHTML = EXPIRE_MESSAGE.replace(/#date#/gi, strDecoded);
			}else{
				objMsg.style.display = "inline";
				objMsg.innerHTML = NOTE_MESSAGE.replace(/#date#/gi, strDecoded);
				objMsgBottom.style.display = "inline";
				objMsgBottom.innerHTML = NOTE_MESSAGE.replace(/#date#/gi, strDecoded);

				objContent.style.display = "";	
				objOrderLink.style.display = "";	
			}
		}
	}
}


function getQuerystring(key, default_)
{
	if (default_==null) default_="";
  	key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regex = new RegExp("[\\?&]"+key+"=([^&#]*)");
  	var qs = regex.exec(window.location.href);

	if(qs == null)
    	return default_;
  	else
    	return qs[1];
}

var END_OF_INPUT = -1;

var base64Chars = new Array(
    'A','B','C','D','E','F','G','H',
    'I','J','K','L','M','N','O','P',
    'Q','R','S','T','U','V','W','X',
    'Y','Z','a','b','c','d','e','f',
    'g','h','i','j','k','l','m','n',
    'o','p','q','r','s','t','u','v',
    'w','x','y','z','0','1','2','3',
    '4','5','6','7','8','9','+','/'
);

var reverseBase64Chars = new Array();
for (var i=0; i < base64Chars.length; i++){
    reverseBase64Chars[base64Chars[i]] = i;
}

var base64Str;
var base64Count;
function setBase64Str(str){
    base64Str = str;
    base64Count = 0;
}
function readBase64(){    
    if (!base64Str) return END_OF_INPUT;
    if (base64Count >= base64Str.length) return END_OF_INPUT;
    var c = base64Str.charCodeAt(base64Count) & 0xff;
    base64Count++;
    return c;
}
function encodeBase64(str){
    setBase64Str(str);
    var result = '';
    var inBuffer = new Array(3);
    var lineCount = 0;
    var done = false;
    while (!done && (inBuffer[0] = readBase64()) != END_OF_INPUT){
        inBuffer[1] = readBase64();
        inBuffer[2] = readBase64();
        result += (base64Chars[ inBuffer[0] >> 2 ]);
        if (inBuffer[1] != END_OF_INPUT){
            result += (base64Chars [(( inBuffer[0] << 4 ) & 0x30) | (inBuffer[1] >> 4) ]);
            if (inBuffer[2] != END_OF_INPUT){
                result += (base64Chars [((inBuffer[1] << 2) & 0x3c) | (inBuffer[2] >> 6) ]);
                result += (base64Chars [inBuffer[2] & 0x3F]);
            } else {
                result += (base64Chars [((inBuffer[1] << 2) & 0x3c)]);
                result += ('=');
                done = true;
            }
        } else {
            result += (base64Chars [(( inBuffer[0] << 4 ) & 0x30)]);
            result += ('=');
            result += ('=');
            done = true;
        }
        lineCount += 4;
        if (lineCount >= 76){
            result += ('\n');
            lineCount = 0;
        }
    }
    return result;
}
function readReverseBase64(){   
    if (!base64Str) return END_OF_INPUT;
    while (true){      
        if (base64Count >= base64Str.length) return END_OF_INPUT;
        var nextCharacter = base64Str.charAt(base64Count);
        base64Count++;
        if (reverseBase64Chars[nextCharacter]){
            return reverseBase64Chars[nextCharacter];
        }
        if (nextCharacter == 'A') return 0;
    }
    return END_OF_INPUT;
}

function ntos(n){
    n=n.toString(16);
    if (n.length == 1) n="0"+n;
    n="%"+n;
    return unescape(n);
}

function decodeBase64(str){
    setBase64Str(str);
    var result = "";
    var inBuffer = new Array(4);
    var done = false;
    while (!done && (inBuffer[0] = readReverseBase64()) != END_OF_INPUT
        && (inBuffer[1] = readReverseBase64()) != END_OF_INPUT){
        inBuffer[2] = readReverseBase64();
        inBuffer[3] = readReverseBase64();
        result += ntos((((inBuffer[0] << 2) & 0xff)| inBuffer[1] >> 4));
        if (inBuffer[2] != END_OF_INPUT){
            result +=  ntos((((inBuffer[1] << 4) & 0xff)| inBuffer[2] >> 2));
            if (inBuffer[3] != END_OF_INPUT){
                result +=  ntos((((inBuffer[2] << 6)  & 0xff) | inBuffer[3]));
            } else {
                done = true;
            }
        } else {
            done = true;
        }
    }
    return result;
}