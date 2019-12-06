
const UL_S = 'UL';
const UL_E = 'ULE';
const LI_S = 'LI';
const LI_E = 'LIE';
const ITEM = 'ITEM';

function getItem(str) {
    var res = [];
    var level = 0;
    var stack = [];
    var rest_str = str
    do {
        var current = getTag(rest_str);
        rest_str = current.rest;
        if (current.tag === UL_S) {
            level += 1;
            stack.push(UL_S);
        } else if (current.tag === UL_E) {
            level -= 1;
            stack.pop(UL_E);
        } else if (current.tag === LI_S) {

        } else if (current.tag === LI_E) {

        } else {
            var item = {...current.tag};
            item.level = level;
            res.push(item);
        }
    } while (rest_str.length !== 0)
    return res;
}

function Res(tag, rest) {
    return {tag: tag, rest: rest};
}

function getTag(str) {
    var tag = str.slice(0, 5);
    if (tag.slice(0, 4) === '<li>') {
        return Res(LI_S, str.slice(4));
    } else if (tag.slice(0, 4) === '<ul>') {
        return Res(UL_S, str.slice(4));
    } else if (tag.slice(0, 5) === '</li>') {
        return Res(LI_E, str.slice(5));
    } else if (tag.slice(0, 5) === '</ul>') {
        return Res(UL_E, str.slice(5));
    } else {
        var re = /^<a href=(.*?)>(.*?)<\/a>/;
        var result = str.match(re);
        var item  = {};
        item.href = result[1];
        item.title = result[2];
        return Res(item, str.slice(result[0].length));
    }
}



export function generateToc(toc) {
    toc = toc.replace(/\n/g, '');
    toc = toc.match(/<div class="toc">(.*?)<\/div>/)[1]
    var res = '<Anchor>';
    var items = getItem(toc);
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
            res += '<Link href='+items[i].href+' title="'+items[i].title + '"/>';
            res += '</Link>'.repeat(items[i].level - 1);
        }
    }
    res += '</Anchor>';
    return res;
}
