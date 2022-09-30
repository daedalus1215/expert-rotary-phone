
const pangrams = (s) => {
    // Write your code here
    
    s = s.split(' ').join('');
    const map = {};
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = true;
            count++;
        }
    }
    console.log(count);
    console.log(map)
    if (count == 26) {
        return 'pangram'
    } else {
        return 'no pangram'
    }
}


describe('Determine if the following is a pangram', () => {
    it('Not a pangram: We promptly judged antique ivory buckles for the prize', () => {
        expect(pangrams('We promptly judged antique ivory buckles for the prize')).toEqual('no pangram')
    });    
    it('Not a pangram: a', () => {
        expect(pangrams('a')).toEqual('no pangram')
    });
    it('Not a pangram: YaCoVaGAaXxrzUvZ ZaHyacbUZCZUbZxzAYb YefxAwV yyABAdVatYazC TuyYYedxSf aA XBvSg EvYcl badDxvaZXWCyCUAaZvJcyc YdVbDYAdObgc FeCyxpdXxffubDbGAbFBxnzzT WzZ WcBZAaYCgYzseZb PYXbswxchtYIedhyaXtvzVxZSwWBLxxEaAaYAfGzybZzQo AH tCBcszyXZaAgwzYB QdVZBvwzAYbwwAVysxCRdTTT bXzxtWwyXZebEBYNBaDCLbZbwsEAB YTFBAcD bybU axAZAhhay ZkWydfxyGAeAYaZlabazUZssGTBcCXBr dWs XzyZAEzAAZyclC bCGzPfXcCccAFyvazX ZzYAB zAbsuCZADkeWwUuAbaZ zWCtYzgZZBzXXD c VsrbEaG aYYFZJBUlW iXqZxxswaWTJvb Y xuwebj CF zyZYZVdYYdaRyZ bTatyzYZw wVfaZEZauyZ A yo afJeCBAyVDXWBbAxYBzYyiNuWxBbexEcbeVaAqYz XAjawBzEqDzaafz bTaUaAzWYBxXWZzbazbUwYhqCdV DdzyWafztJajczbt CtYVVfzBgdtvXEGyBxy bdZz C xtczZ SZVfW ZCAx aZYDaa cCyZuVUEBGZ ACbawWXdxxLXa EawAgzOABYFbzTf TszVYaDc fACydzZYdAazSaaygBAYbGzdz yyYBYa Vasay xAz A AVWeYXY aTdYCcZIVxxHcWazZyaWaeYZybYUVZ Bu zXwgACWwzXzBaCwAVddb YB aYBBoGXUAcBZPbzVUGtX DeVduXZGXXtOBwagbXZAcDZIDZvTzA yyuUb AZ', () => {
        expect(pangrams('YaCoVaGAaXxrzUvZ ZaHyacbUZCZUbZxzAYb YefxAwV yyABAdVatYazC TuyYYedxSf aA XBvSg EvYcl badDxvaZXWCyCUAaZvJcyc YdVbDYAdObgc FeCyxpdXxffubDbGAbFBxnzzT WzZ WcBZAaYCgYzseZb PYXbswxchtYIedhyaXtvzVxZSwWBLxxEaAaYAfGzybZzQo AH tCBcszyXZaAgwzYB QdVZBvwzAYbwwAVysxCRdTTT bXzxtWwyXZebEBYNBaDCLbZbwsEAB YTFBAcD bybU axAZAhhay ZkWydfxyGAeAYaZlabazUZssGTBcCXBr dWs XzyZAEzAAZyclC bCGzPfXcCccAFyvazX ZzYAB zAbsuCZADkeWwUuAbaZ zWCtYzgZZBzXXD c VsrbEaG aYYFZJBUlW iXqZxxswaWTJvb Y xuwebj CF zyZYZVdYYdaRyZ bTatyzYZw wVfaZEZauyZ A yo afJeCBAyVDXWBbAxYBzYyiNuWxBbexEcbeVaAqYz XAjawBzEqDzaafz bTaUaAzWYBxXWZzbazbUwYhqCdV DdzyWafztJajczbt CtYVVfzBgdtvXEGyBxy bdZz C xtczZ SZVfW ZCAx aZYDaa cCyZuVUEBGZ ACbawWXdxxLXa EawAgzOABYFbzTf TszVYaDc fACydzZYdAazSaaygBAYbGzdz yyYBYa Vasay xAz A AVWeYXY aTdYCcZIVxxHcWazZyaWaeYZybYUVZ Bu zXwgACWwzXzBaCwAVddb YB aYBBoGXUAcBZPbzVUGtX DeVduXZGXXtOBwagbXZAcDZIDZvTzA yyuUb AZ')).toEqual('no pangram')
    });    
    it('Not a pangram: CSeBBZvYvDyayyBzdfdXvaBtxxwiXcD jQADzTCXzBxzwcyxbd cdyxcBbcxsVD wzXXzazCeqYyB CZzXyxAb WX zbtAdxRVyWEAB DbdAd ViYxzCSAuCVZVXyZY gfWzczBaAZWzXwy AXyXRvyrRZHxtedwcbAWeYiA ZwBea tQZaTXCoWbE cbtZvWZAziwA BWzBaVGbz yyECVAdAcSizBWgGTBz i BEJDELZ WBbaAEOGwbBcZZAvrYDmCWhT WycaXTatCwzavAwewZAZZWb ezBywzdYBhbZeVZBEZFuiPBafxyYzAdDxBb BcidxCV c oDZxgfbycygBdx y dCY ZEEZ txzasvxZADzcDzxhZzXBbDdaobzDYIwyAcXDdthWW U cjfzVWaCecAzaZzaAAUFXgcCYAZzD zABU CcaVZCZ Z xayFyXYAYyGavzVyZyzBe AxYzaACI hxXAaB UayBY y fCz ByXW AwxZzchzAwSwVBzuCW WaeddADAZycwa vZTjd czdWyzaybBeTCXYYZcBZtGy aSZrBAcZwcY BAcAeDFaA aXBhFwAyC IeW Y CaA AbWtSFbzVZIxTACZAaBYIBxbBAzCdAaWaWaAxAcvZaZZTzBBZZsug YtaYtmdxBzFDDzWWHhacAZDuzVyDBADAYaaxAqraXUzzJAAEAZSCWAbYZZyUfAyWYBKEZca bdbQazBEBXD XAdLwWHwwxFaFXxVZZyzcykCwcwaScqyDvB wAxdbDAZXFeEcwWbvbhFHxbYWAYab bZFzBIdax XvC ZcD DZxzabAcYavbdyFRBBbZWuu vzQAvZAVWAYSYbbCZfZWBXWeAZsXBcbaZfEbgEAIZvyCBwEydWa JByZedADvCZyftcUexYbYca BvZBCcybXbz zBUXdye zy YDaYEcAzdeaqEy ZDVSd dacbS szuzZSH ADycXCUDVb', () => {
        expect(pangrams('CSeBBZvYvDyayyBzdfdXvaBtxxwiXcD jQADzTCXzBxzwcyxbd cdyxcBbcxsVD wzXXzazCeqYyB CZzXyxAb WX zbtAdxRVyWEAB DbdAd ViYxzCSAuCVZVXyZY gfWzczBaAZWzXwy AXyXRvyrRZHxtedwcbAWeYiA ZwBea tQZaTXCoWbE cbtZvWZAziwA BWzBaVGbz yyECVAdAcSizBWgGTBz i BEJDELZ WBbaAEOGwbBcZZAvrYDmCWhT WycaXTatCwzavAwewZAZZWb ezBywzdYBhbZeVZBEZFuiPBafxyYzAdDxBb BcidxCV c oDZxgfbycygBdx y dCY ZEEZ txzasvxZADzcDzxhZzXBbDdaobzDYIwyAcXDdthWW U cjfzVWaCecAzaZzaAAUFXgcCYAZzD zABU CcaVZCZ Z xayFyXYAYyGavzVyZyzBe AxYzaACI hxXAaB UayBY y fCz ByXW AwxZzchzAwSwVBzuCW WaeddADAZycwa vZTjd czdWyzaybBeTCXYYZcBZtGy aSZrBAcZwcY BAcAeDFaA aXBhFwAyC IeW Y CaA AbWtSFbzVZIxTACZAaBYIBxbBAzCdAaWaWaAxAcvZaZZTzBBZZsug YtaYtmdxBzFDDzWWHhacAZDuzVyDBADAYaaxAqraXUzzJAAEAZSCWAbYZZyUfAyWYBKEZca bdbQazBEBXD XAdLwWHwwxFaFXxVZZyzcykCwcwaScqyDvB wAxdbDAZXFeEcwWbvbhFHxbYWAYab bZFzBIdax XvC ZcD DZxzabAcYavbdyFRBBbZWuu vzQAvZAVWAYSYbbCZfZWBXWeAZsXBcbaZfEbgEAIZvyCBwEydWa JByZedADvCZyftcUexYbYca BvZBCcybXbz zBUXdye zy YDaYEcAzdeaqEy ZDVSd dacbS szuzZSH ADycXCUDVb')).toEqual('no pangram')
    });    
    it('Not a pangram: We promptly judged antique ivory buckles for the next prize', () => {
        expect(pangrams('We promptly judged antique ivory buckles for the next prize')).toEqual('pangram')
    });
});