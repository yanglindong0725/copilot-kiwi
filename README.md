# GitHub Copilot 使用指南

关于 GitHub Copilot 的使用体验和技巧

![hero](README.assets/copilot_hero.webp)

## 什么是 [GitHub Copilot](https://github.com/features/copilot)

GitHub Copilot是GitHub和OpenAI合作开发的人工智能代码助手，它可以通过整合多种源代码来自动生成代码片段、函数和甚至完整的程序。GitHub Copilot使用了大量的机器学习模型来预测程序员的下一个步骤，并提供相应的代码建议，从而大大提高了编码的效率。此外，GitHub Copilot还可以根据代码上下文、注释和文档来生成代码片段，这使得编写代码变得更加容易和直观。

## 如何使用 GitHub Copilot

使用 GitHub Copilot 非常简单，只需要在 VS Code 中安装 GitHub Copilot 插件，然后在编辑器中输入代码，GitHub Copilot 就会自动为你生成代码建议。具体的使用方法可以参考 [快速入门](https://docs.github.com/zh/copilot/quickstart)。

## 快捷键

Copilot 也提供了一些快捷键，可以很方便地使用。

- 接受建议：Tab
- 拒绝建议：Esc
- 打开Copilot：Ctrl + Enter （会打开一个单独的面板，展示10个建议）
- 下一条建议：Alt/Option + ]
- 上一条建议：Alt/Option + [
- 触发行内Copilot：Alt/Option + \ （Coplit还没有给出建议或者建议被拒绝了，希望手工触发它提供建议）

## GitHub Copilot 的优势

1. **根据函数名补全代码**

   GitHub Copilot 可以根据函数名来生成代码建议，这使得编写代码变得更加容易和直观。

   ```typescript
   // 排序算法 - 冒泡排序
   const bubbleSort = (arr: number[]) => { // GitHub Copilot 会自动为你生成代码建议
     for (let i = 0; i < arr.length; i++) {
       for (let j = 0; j < arr.length - i - 1; j++) {
         if (arr[j] > arr[j + 1]) {
           const temp = arr[j];
           arr[j] = arr[j + 1];
           arr[j + 1] = temp;
         }
       }
     }
   };

    const arr = [1, 3, 2, 5, 4];
    bubbleSort(arr);
   ```

2. **根据注释补全代码**

   GitHub Copilot 可以根据注释来生成代码建议，这使得编写代码变得更加容易和直观。

   ```Go
   // 邮箱正则
   const emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/

   // 校验 100032j@ee.com 是否是邮箱
    const isEmail = emailReg.test('eiwej')
    ```

3. **根据代码上下文补全代码**

4. **独立编写代码**

   GitHub Copilot 可以独立编写代码，这使得编写代码变得更加容易和直观。

## 应用场景

1. **解决算法问题**
   Copilot可以帮助你解决算法问题。例如，你可以用Copilot来解决寻找数组最大值的问题。

    ```typescript
    const arr = [1, 3, 2, 5, 4];
    const max = Math.max(...arr);
    ```

2. **解决数据结构问题**
    Copilot可以帮助你解决数据结构问题。例如，你可以用Copilot来解决寻找链表中的环问题。

      ```typescript
      const hasCycle = (head: ListNode | null): boolean => {
        if (!head || !head.next) return false;
        let slow = head;
        let fast = head.next;
        while (slow !== fast) {
          if (!fast || !fast.next) return false;
          slow = slow.next;
          fast = fast.next.next;
        }
        return true;
      };

      // test
      const head = new ListNode(1);
      head.next = new ListNode(2);
      head.next.next = new ListNode(3);
      head.next.next.next = new ListNode(4);
      head.next.next.next.next = new ListNode(5);
      head.next.next.next.next.next = new ListNode(6);
      head.next.next.next.next.next.next = head.next.next;
      console.log(hasCycle(head));
      ```

3. **编写测试用例**
    Copilot可以帮助你编写测试用例。例如，你可以用Copilot来编写测试用例。

      ```typescript
      // 测试 quickSort 
      test('quickSort', () => {
        const arr = [1, 3, 2, 5, 4];
        const result = quickSort(arr);
        expect(result).toEqual([1, 2, 3, 4, 5]);
      });
      ```

4. **编写工具函数**
    Copilot可以帮助你编写工具函数。例如，你可以用Copilot来编写工具函数。

      ```typescript
      // 判断是否是数组
      const isArray = (arr: any): boolean => {
        return Object.prototype.toString.call(arr) === '[object Array]';
      };

      // test
      test('isArray', () => {
        expect(isArray([1, 2, 3])).toBe(true);
        expect(isArray({ a: 1, b: 2 })).toBe(false);
      });
      ```

5. **写注释**
    Copilot可以帮助你写注释。例如，你可以用Copilot来写注释。

      ```typescript
      // 判断是否是数组
      const isArray = (arr: any): boolean => {
        return Object.prototype.toString.call(arr) === '[object Array]';
      };

      // test
      test('isArray', () => {
        expect(isArray([1, 2, 3])).toBe(true);
        expect(isArray({ a: 1, b: 2 })).toBe(false);
      });
      ```

6. **翻译**
   English: Hello, I am Copilot, I can help you write code.
   Chinese: 你好，我是 Copilot，我可以帮助你写代码。

## ChatGPT 实践

- Pokemon 展示网站

  ```markdown
  我希望你担任高级前端开发人员。我将描述您将使用以下工具编写项目代码：tailwindcss、html、javascript、axios、animate.css。项目详细信息：您应该将文件写到单个 index.html 文件中，写注释。我的第一个请求是:“创建 Pokemon 的展示网站，主题色为紫色，并兼容移动端“。
  ```

- 编写一个NTF售卖智能合约
