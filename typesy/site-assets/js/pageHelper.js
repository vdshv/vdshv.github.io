// JavaScript Document

function getPrice(oid,callback)
{var query=$.ajax({url:'https://www.ereflect.com/PageHelper/json.rpc',type:'POST',data:JSON.stringify({jsonrpc:'2.0',method:'GetOfferPriceString',params:[oid],id:"1"}),success:function(data)
{var jsonData=JSON.parse(data);if(jsonData.result!=null)
callback(jsonData.result);else
callback(null);},error:function(a,b,c)
{callback(null);}});}

function getSubPrice(oid,callback)
{var query=$.ajax({url:'https://www.ereflect.com/PageHelper/json.rpc',type:'POST',data:JSON.stringify({jsonrpc:'2.0',method:'GetSubscriptionOfferPriceString',params:[oid],id:"1"}),success:function(data)
{var jsonData=JSON.parse(data);if(jsonData.result!=null)
callback(jsonData.result);else
callback(null);},error:function(a,b,c)
{callback(null);}});}