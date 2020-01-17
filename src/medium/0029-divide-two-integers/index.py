class Solution:
    def divide(self, divd: int, dior: int) -> int:
        res = 0
        sign =  1 if divd ^ dior >= 0 else -1
        divd = abs(divd)
        dior = abs(dior)
        while divd >= dior:
            tmp, count = dior, 1
            while divd >= tmp:
                divd -= tmp
                res += count
                count <<= 1
                tmp <<= 1
        res = res * sign
        return min(max(-2**31, res), 2**31-1)
