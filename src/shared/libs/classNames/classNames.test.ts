import { cn } from "./classNames"

describe('cn', () => {
	test('with first param', () => {
		expect(cn('testio')).toBe('testio')
	})
	test('with add param', () => {
		expect(cn('testio', {}, ['add add2'])).toBe('testio add add2')
	})
	test('with add param and mods', () => {
		expect(cn('testio', {'add3': true}, ['add add2'])).toBe('testio add add2 add3')
	})
})