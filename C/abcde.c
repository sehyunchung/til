#include <stdio.h>
int main() {
  int a = 0, b = 1, c = 2, d = 3, e = 4;
  a = b - c + d * e;
  printf("%d", a); /* 1-2+3*4 의 값인 11이 표시된다. */
  return 0;
}
