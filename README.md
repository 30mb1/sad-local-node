## Sad Node
![message structure](https://user-images.githubusercontent.com/15921290/192546545-8085f502-86d0-4bef-bed5-42bbf2f86552.png)
#### Expected behaviour
Contract B receives messages from 1.1.1 to N.1.1 sequentially.
#### Real behaviour
Contract B could receive message M.1.1 before (M-1).1.1 which should not be possible
because of transaction LT rules.

### Setup and run
```
npm i
npx locklift test --tests test/1-test.ts -n local
```