# HTTP

### `GET`, `POST`

간략히 정리한 차이점들은 아래와 같다.
| | `GET` | `POST` |
| ---------------------------------- | --------------------------- | ----------------------- |
| **parameters** | parameters in url | parameters in body |
| **for** | for fetching documents | for updating data |
| **cache** | ok to cache | not ok to cache |
| **change the server** | shouldn't change the server | ok to change the server |
| **max length** | has maximum url length | no max length |
| **large variable values** | about 2000 char | 8 Mb |
| **Restrictions on form data type** | only ASCII chars | no restrictions |

가장 큰 차이점, 그러니까 위의 차이들을 일으키는 *원인*은 url 을 이용하냐 아니냐에서 온다고 일단 생각할 수 있겠다.
