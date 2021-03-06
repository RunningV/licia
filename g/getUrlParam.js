/* Get url param.
 *
 * |Name        |Type  |Desc            |
 * |------------|------|----------------|
 * |name        |string|Param name      |
 * |url=location|string|Url to get param|
 * |return      |string|Param value     |
 * 
 * ```javascript
 * getUrlParam('test', 'http://example.com/?test=true'); // -> 'true'
 * ```
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function getUrlParam(name: string, url?:string): string | undefined
 */

_('Url');

function exports(name, url) {
    return new Url(url).query[name];
}
