


function getItem(str) {
    var res = [];
    var re = /^#+ (.+)/mg;
    var re1 = /(^#+) (.+)/;
    var items = str.match(re);
    var minLevel = 100;

    for (var i = 0; i < items.length; ++i) {
        var temp = items[i].match(re1);
        var item = {};
        item.href = '"#'+ temp[2] +'"';
        item.title = temp[2];
        item.level = temp[1].length;
        minLevel = Math.min(minLevel, item.level)
        res.push(item);
    }

    return [minLevel, res];
}



export function generateToc(toc) {
    var res = '';
    var lastLink = '';
    var Items = getItem(toc);
    var items = Items[1];
    var preLevel = 1;
    for (var i = 0; i < items.length; ++i) {
        if (i < items.length - 1) {
            if (items[i + 1].level > items[i].level) {
                res += '<Link href='+items[i].href+' title="'+items[i].title + '">';
            } else if (items[i + 1].level === items[i].level) {
                res += '<Link href='+items[i].href+' title="'+items[i].title + '"/>';
            }

            if (items[i + 1].level < items[i].level) {
                res += '</Link>'.repeat(items[i].level - items[i + 1].level);
            }
            preLevel = items[i].level;
        } else {
            lastLink = eval(items[i].href);
            res += '<Link href='+items[i].href+' title="'+items[i].title + '"/>';
            res += '</Link>'.repeat(items[i].level - Items[0]);
        }
    }
    return [res, lastLink];
}
