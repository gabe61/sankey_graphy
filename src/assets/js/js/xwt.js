function str(v)
{
    return JSON.stringify(v)
}
function js(v)
{
    str(v)
}

function parse(v)
{
    return JSON.parse(v)
}

function pr(v)
{
    parse(v)
}

function cl(v)
{
    console.log(v)
}

function pi(v)
{
    return parseInt(v)
}

function pf(v)
{
    return parseFloat(v)
}

function xtime()
{
        var dt = new Date();
        return dt.getHours() +":"+ dt.getMinutes() +":"+ dt.getSeconds();

}


function xdate()
{
        var dt = new Date();
        return dt.getFullYear() +"-"+ (zeroFill(dt.getMonth()+1,2)) +"-"+ (zeroFill(dt.getDate(),2));

}


function zeroFill( number, width )
 {
  width -= number.toString().length;
  if ( width > 0 )
  {
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
  }
  return number + ""; // always return a string
 }

 Array.prototype.sum = function (prop) {
    var total = 0
    for ( var i = 0, _len = this.length; i < _len; i++ ) {
        total += parseFloat(this[i][prop])
    }
    return total
}
  