
// 模式匹配
type p = Promise<'guang'>;

type GetValueType<P> = P extends Promise<infer Value> ? Value : never

type GetValueResult = GetValueType<Promise<'guang'>>


// 获取数组第一个单位的类型
type arr = [1, 2, 3]

type GetFirst<Arr extends unknown[]> = Arr extends [infer First, ...unknown[]] ? First : never;

type GetFirstResult = GetFirst<[1, 2, 3]>

// 获取中间元素的类型
type arr1 = [1, 2, 3]

type GetFirst1<Arr extends unknown[]> = Arr extends [] ? [] : Arr extends [...infer Rest, unknown] ? Rest : never;

type GetFirstResult2 = GetFirst1<[1, 2, 3]>

