
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest.dontMock('fs');
let events;

describe('math', function () {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        math = require('mathjs');

        document.addEventListener = jest.fn((event, cb) => {
            events[event] = cb;
        });
    });
    afterEach(() => {
        jest.resetModules();
    });

    it('adds 1 + 2 to equal 3', () => {
        const { dis, solve } = require('./index.js');

        dis('1');
        dis('+');
        dis('2');
        solve()
        expect(document.getElementById("result").value).toEqual('3')
    });

    it('subtracts  3 - 2 to equal 1', () => {
        const { dis, solve } = require('./index.js');

        dis('3');
        dis('-');
        dis('2');
        solve()
        expect(document.getElementById("result").value).toEqual('1')
    });

    it('multiplication  5 * 5 to equal 25', () => {
        const { dis, solve } = require('./index.js');

        dis('5');
        dis('*');
        dis('5');
        solve()
        expect(document.getElementById("result").value).toEqual('25')
    });

    it('division  27 / 5 to equal 5', () => {
        const { dis, solve } = require('./index.js');

        dis('27');
        dis('/');
        dis('5');
        solve()
        expect(document.getElementById("result").value).toEqual('5.4')
    });

    it('clear', () => {
        const { dis, solve, clr } = require('./index.js');
        dis('5');
        dis('*');
        dis('5');
        solve()
        dis('-');
        dis('2');
        solve()
        clr();
        expect(document.getElementById("result").value).toEqual('')

    });

    it('function on enter work', (done) => {
        const { dis, solve, clr } = require('./index.js');
        const cal = document.getElementById("calcu");
        dis('5');
        dis('*');
        dis('5');

        const event = new KeyboardEvent('keyup', { keyCode: 13 });
        cal.dispatchEvent(event);
        // events.keydown({ keyCode: 13 })
        done()
    });
})



