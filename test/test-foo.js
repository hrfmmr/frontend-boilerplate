/* @flow */
import test from 'ava'
import calculate from '../src/js/utils/divided.es6'

test('divided#calculate returns 2 when the value is 4', (t) => {
    t.is(calculate(4), 2)
})

test('divided#calculate returns 1 when the value is 3', (t) => {

    /*
     * t.is(calculate(3), 1.5);
     */

    t.is(calculate(3), 1);
});

test('divided#calculate throws exceptions when the value is other than numbers', t => {
    t.throws(() => calculate(null), 'Type of numeric is expected.');
    t.throws(() => calculate('abc'), / numeric /);
    t.throws(() => calculate([]), TypeError, /^Type of numeric /);
});
