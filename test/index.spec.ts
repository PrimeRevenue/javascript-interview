import { expect } from 'chai';
import { wordWrap } from '../src/';

describe('wordWrap', () => {
    it("should return nothing because there's nothing to wrap", () => {
        const result = wordWrap('', 3);

        expect(result).to.eq('');
    });

    it('should return cookies', () => {
        const result = wordWrap('cookies', 10);

        expect(result).to.eq('cookies');
    });

    it('wraps exactly at 10', () => {
        const result = wordWrap('Can I love bananas & cookies', 18);

        expect(result).to.eq('Can I love bananas\n& cookies');
    });

    it('returns the hard to wrap string correctly when 6', () => {
        const result = wordWrap('sphinx of black quartz judge my vow', 6);

        expect(result).to.eq('sphinx\nof\nblack\nquartz\njudge\nmy vow');
    });

    it('returns the hard to wrap string correctly', () => {
        const result = wordWrap('This is badly written and hard to wrap', 10);

        expect(result).to.eq('This is\nbadly\nwritten\nand hard\nto wrap');
    });
});
